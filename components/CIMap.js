import Map, {Source, Layer} from 'react-map-gl';

import mapData from '../public/static/gis/islington-ward-boundaries.json'

export default function CIMap({props}) {
    const layerStyle = {
        'id': 'data',
        'type': 'line',
        'paint': {
            'line-color': "#f00"
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
          <Source type="geojson" data={mapData}>
            <Layer {...layerStyle} />
          </Source>
        </Map>
        )
}