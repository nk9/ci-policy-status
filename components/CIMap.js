import React from "react";

import Map, { Popup, Source, Layer, ScaleControl, useControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import lineLength from '@turf/length';
import polygonArea from '@turf/area';
import styles from "/styles/CIMap.module.scss";
import ControlPanel from './CIMapControlPanel';

import boundaries from '/public/static/gis/islington-ward-boundaries.geojson'
import protectedSegments from '/public/static/gis/protected-segments.geojson'
import majorRoads from '/public/static/gis/major-roads.geojson'

export default function CIMap({ props }) {
    const layerIDs = ['boundaries', 'majorRoads', 'protectedSegments']

    const data = {
        'boundaries': boundaries,
        'protectedSegments': protectedSegments,
        'majorRoads': majorRoads
    }

    const layerStyles = {
        'boundaries': {
            'id': 'boundaries',
            'type': 'fill',
            'paint': {
                'fill-color': "#EBAA60",
                'fill-opacity': 0.3
            }
        },
        'protectedSegments': {
            'id': 'protectedSegments',
            'type': 'line',
            'paint': {
                'line-width': 4,

                // Show single-sided segments as dashed
                'line-dasharray': ["case", ["==", ["get", "bidi"], 0],
                    ["literal", [1, 1]],
                    ["literal", [1]]
                ],

                // Show TfL segments as a different color
                'line-color': ["case", ["==", ["get", "tfl"], 0],
                    "#13941A",
                    "#411AFF"
                ]
            }
        },
        'majorRoads': {
            'id': 'majorRoads',
            'type': 'line',
            'paint': {
                'line-width': 2,
                'line-color': ["case", ["in", "Primary Road", ["string", ["get", "CLASSIFICA"]]],
                    "#000",
                    "#B0B0B0"
                ]
            }
        }
    }

    const initialState = {};
    layerIDs.forEach((layerID) => initialState[layerID] = true);

    const [layersVisibility, setLayersVisibility] = React.useReducer((state, updates) => ({ ...state, ...updates }),
        {});
    const [hoverInfo, setHoverInfo] = React.useState(null);

    const onHover = React.useCallback(event => {
        const segment = event.features && event.features[0];
        const meters = (segment && lineLength(segment) * 1000) || 0;
        var length = meters;

        if (segment && segment.properties.bidi) {
            length = meters * 2;
        }

        setHoverInfo({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat,
            roadName: segment && segment.properties.road,
            isTfL: segment && segment.properties.tfl == 1,
            isBiDi: segment && segment.properties.bidi == 1,
            length: length,
            completed: segment && segment.properties.completed,
            notes: segment && segment.properties.notes
        });
    }, []);
    const selectedSegment = (hoverInfo && hoverInfo.roadName) || '';

    const layers = [];

    for (const layerID of layerIDs) {
        layers.push(
            <Source key={layerID} type="geojson" data={data[layerID]}>
                <Layer key={layerID}
                    {...layerStyles[layerID]}
                    layout={{ visibility: layersVisibility[layerID] }} />
            </Source>
        )
    }

    return (
        <>
            <Map
                initialViewState={{
                    longitude: -0.114835,
                    latitude: 51.545553,
                    zoom: 11.5
                }}
                style={{ width: "100%", height: 400 }}
                mapStyle="mapbox://styles/nkocharh/cjt18tus00ly51fmu051jdav4"
                styleDiffing
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                onMouseMove={onHover}
                interactiveLayerIds={['protectedSegments']}
            >
                {layers}

                {selectedSegment && (
                    <Popup
                        longitude={hoverInfo.longitude}
                        latitude={hoverInfo.latitude}
                        closeButton={false}
                    >
                        <div className={styles.container}>
                            <div className={styles.key}>Road</div>
                            <div className={styles.value}>{selectedSegment}</div>
                            <div className={styles.key}>Owner</div>
                            <div className={styles.value}>{hoverInfo.isTfL ? "TfL" : "Council"}</div>
                            <div className={styles.key}>Bidirectional</div>
                            <div className={styles.value}>{hoverInfo.isBiDi ? "Yes" : "No"}</div>
                            <div className={styles.key}>Lane meters</div>
                            <div className={styles.value}>{hoverInfo.length.toFixed()}m</div>
                            <div className={styles.key}>Open as of</div>
                            <div className={styles.value}>{prettyDate(hoverInfo.completed)}</div>
                        </div>
                        <div className={styles.notes}>{hoverInfo.notes}</div>
                    </Popup>
                )}
                <ScaleControl />
                <ControlPanel onChange={setLayersVisibility} />
            </Map>
        </>
    )
}

function prettyDate(isoDate) {
    if (isoDate) {
        const date = new Date(isoDate)
        return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(date)
    }

    return '';
}
