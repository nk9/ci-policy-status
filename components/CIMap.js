import Map, {Source, Layer} from 'react-map-gl';

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
        >
          <Source type="geojson" data={boundaries}>
            <Layer {...boundaryStyle} />
          </Source>
          <Source type="geojson" data={protectedSegments}>
            <Layer {...protectedSegmentStyle} />
          </Source>
        </Map>
        )
}