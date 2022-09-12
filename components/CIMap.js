import React from "react";

import Map, {Popup, Source, Layer} from 'react-map-gl';

import boundaries from '../public/static/gis/islington-ward-boundaries.json'
import protectedSegments from '../public/static/gis/protected-segments.json'

export default function CIMap({props}) {
    const boundaryStyle = {
        'id': 'boundaryLayer',
        'type': 'fill',
        'paint': {
            'fill-color': "#EBAA60",
            'fill-opacity': 0.3
        }
    }
    const protectedSegmentStyle = {
        'id': 'protectedSegmentLayer',
        'type': 'line',
        'paint': {
            'line-width': 2,

            // Show single-sided segments as dashed
            'line-dasharray': ["case", ["==", ["get", "bidi"], 0],
                ["literal", [1,1]],
                ["literal", [1]]
            ],

            // Show TfL segments as blue
            'line-color': ["case", ["==", ["get", "tfl"], 0],
                "#13941A",
                "#763D0F"
            ]
        }
    }

    const [hoverInfo, setHoverInfo] = React.useState(null);

    const onHover = React.useCallback(event => {
        const segment = event.features && event.features[0];
        setHoverInfo({
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat,
          roadName: segment && segment.properties.road
        });
    }, []);
    const selectedSegment = (hoverInfo && hoverInfo.roadName) || '';

    return (
        <Map
          initialViewState={{
            longitude: -0.114835,
            latitude: 51.545553,
            zoom: 11.5
          }}
          style={{width: "100%", height: 400}}
          mapStyle="mapbox://styles/nkocharh/cjt18tus00ly51fmu051jdav4"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          onMouseMove={onHover}
          interactiveLayerIds={['protectedSegmentLayer']}
        >
          <Source type="geojson" data={boundaries}>
            <Layer {...boundaryStyle} />
          </Source>
          <Source type="geojson" data={protectedSegments}>
            <Layer {...protectedSegmentStyle} />
          </Source>

          {selectedSegment && (
              <Popup
                longitude={hoverInfo.longitude}
                latitude={hoverInfo.latitude}
                offset={[0, -10]}
                closeButton={false}
              >
                {selectedSegment}
              </Popup>
            )}
        </Map>
        )
}