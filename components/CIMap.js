import React from "react";

import Map, { Popup, Source, Layer, ScaleControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import lineLength from '@turf/length';
import styles from "./CIMap.module.scss";
import ControlPanel from './CIMapControlPanel';
import { deepMerge } from 'src/utilities';

import boundaries from '/public/static/gis/islington-ward-boundaries.geojson'
import protectedSegments from '/public/static/gis/protected-segments.geojson'
import majorRoads from '/public/static/gis/major-roads.geojson'
import ltns from '/public/static/gis/islington-ltns-post-2020.geojson'
import hubs from '/public/static/gis/logistics-hubs.geojson'
import WarehouseIcon from '@mui/icons-material/Warehouse';

export default function CIMap() {
    const layers = {
        boundaries: {
            layer: boundaries,
            style: {
                'id': 'boundaries',
                'type': 'fill',
                'paint': {
                    'fill-color': "#111",
                    'fill-opacity': 0.1
                }
            }
        },
        ltns: {
            layer: ltns,
            interactive: true,
            style: {
                'id': 'ltns',
                'type': 'fill',
                'paint': {
                    'fill-color': "#248747",
                    'fill-opacity': 0.2
                }
            } 
        },
        majorRoads: {
            layer: majorRoads,
            interactive: false,
            style: {
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
        },
        protectedSegments: {
            layer: protectedSegments,
            interactive: false,
            style: {
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
            }
        },
        protectedSegmentsHover: {
            layer: protectedSegments,
            interactive: true,
            style: {
                'id': 'protectedSegmentsHover',
                'type': 'line',
                'paint': {
                    'line-width': 10,
                    'line-opacity': 0
                }
            }
        },
        hubs: {
            layer: hubs,
            interactive: true,
            style: {
                'id': 'hubs',
                'type': 'symbol',
                'layout': {
                    'icon-image': 'warehouse'
                }
            }
        } 
    }

    const [layersVisibility, setLayersVisibility] = React.useReducer((state, updates) => ({ ...state, ...updates }),
        {});
    const [hoverInfo, setHoverInfo] = React.useState(null);
    const [hoveredFeature, setHoveredFeature] = React.useState(null);

    const onHover = React.useCallback(event => {
        if (event.features.length > 0) {
            setHoveredFeature(event.features[0])
            setHoverInfo({
                longitude: event.lngLat.lng,
                latitude: event.lngLat.lat
            })
        } else {
            setHoveredFeature(null)
        }
    }, []);

    const mapLayers = [];
    var interactiveLayerIds = [];

    for (const [layerID, { layer, interactive, style }] of Object.entries(layers)) {
        var layerStyle = deepMerge(style, { layout: { visibility: layersVisibility[layerID] } })

        mapLayers.push(
            <Source key={layerID} type="geojson" data={layer}>
                <Layer key={layerID}
                    {...layerStyle}
                />
            </Source>
        )
        if (interactive) {
            interactiveLayerIds.push(layerID)
        }
    }

    return (
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
            interactiveLayerIds={interactiveLayerIds}
        >
            {mapLayers}
            {hoveredFeature && preparePopover(hoverInfo, hoveredFeature, styles)}

            <ScaleControl />
            <ControlPanel layers={layers} onChange={setLayersVisibility} />
        </Map>
    )
}

function preparePopover(hoverInfo, feature, styles) {
    let infoPairs = {}
    let headline = ""
    let props = feature.properties

    switch (feature.layer.id) {
        case "protectedSegmentsHover":
            headline = "Cycle Track"
            const meters = (lineLength(feature) * 1000) || 0;
            let length = meters;

            if (props.bidi) {
                length = meters * 2;
            }

            infoPairs = {
                "Road": props.road,
                "Authority": (props.tfl == 1) ? "TfL" : "Council",
                "Bidirectional": (props.bidi == 1) ? "Yes" : "No",
                "Lane meters": length.toFixed() + "m",
                "Open as of": prettyDate(props.completed)
            }
            break;
        case "ltns":
            headline = "Healthy Neighbourhood"
            infoPairs = {
                "Name": props.Name,
                "Area": props.area.toFixed() + "ha",
                "Open as of": prettyDate(props.begin)
            }
            break;
        case "hubs":
            headline = "Cycle Logistics Hub"
            infoPairs = {
                "Name": props.name,
                "Open as of": prettyDate(props.begin)
            }
            break;
        default: return
    }

    let infoDivs = []
    for (let [k, v] of Object.entries(infoPairs)) {
        infoDivs.push(
            <div className={styles.key} key={k}>{k}</div>,
            <div className={styles.value} key={k + '-value'}>{v}</div>
        )
    }

    return (
        <Popup
            longitude={hoverInfo.longitude}
            latitude={hoverInfo.latitude}
            closeButton={false}
        >
            <h3 className={styles.headline}>{headline}</h3>
            <div className={styles.container}>
                {infoDivs}
            </div>
            {props.notes && <div className={styles.notes}>{props.notes}</div>}
        </Popup>

    )
}

function prettyDate(isoDate) {
    if (isoDate) {
        const date = new Date(isoDate)
        return new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' }).format(date)
    }

    return '';
}
