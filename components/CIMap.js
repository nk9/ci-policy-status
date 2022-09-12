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
            'line-color': "#00f",
            'line-width': 2
        }
    }
    return (
        <Map
          initialViewState={{
            longitude: -0.114835,
            latitude: 51.545553,
            zoom: 11.5
          }}
          style={{width: 600, height: 400}}
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