import { withScriptjs,withGoogleMap,GoogleMap, Marker} from "react-google-maps"
import React from 'react';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={4.5}
    defaultCenter={{ lat: 38.9207681, lng: -97.0318204 }}
  >
  
    {props.isMarkerShown && <Marker position={{ lat: 40.7028278, lng: -73.9915753 }} icon={{url:'/assets/logos/twoBulls.png',scaledSize: { width: 32, height: 32}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 42.3559701, lng: -71.056144 }} icon={{url:'/assets/logos/draftKings.png',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 43.0556443, lng: -77.4719377 }}icon={{url:'/assets/logos/martinoFlyn.png',scaledSize: { width: 50, height: 50}}} />}
    {props.isMarkerShown && <Marker position={{ lat: 43.0383383, lng: -77.4518095 }}icon={{url:'/assets/logos/ds-logo.png',scaledSize: { width: 50, height: 50}}} />}
    {//First 4
    }
    {props.isMarkerShown && <Marker position={{ lat: 42.3532471, lng: -71.0472133 }} icon={{url:'/assets/logos/fitbit.png',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 41.9061414, lng: -87.6511022 }} icon={{url:'/assets/logos/jackbox.jpg',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 37.5345177, lng: -122.3334716 }} icon={{url:'/assets/logos/gopro.png',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 37.259585, lng: -121.9648837 }} icon={{url:'/assets/logos/netflix.jpg',scaledSize: { width: 50, height: 50}}}/>}
    {//First 8
    }
    {props.isMarkerShown && <Marker position={{ lat: 37.7884209, lng: -122.4036995 }} icon={{url:'/assets/logos/hulu.png',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 45.5485602, lng: -122.6691137 }} icon={{url:'/assets/logos/instrument.png',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 43.0462951, lng: -77.4709721 }} icon={{url:'/assets/logos/itx.png',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 43.1600489, lng: -77.6179375 }} icon={{url:'/assets/logos/partners.png',scaledSize: { width: 50, height: 50}}}/>}
    {//First 12
    }
    {props.isMarkerShown && <Marker position={{ lat: 43.162052, lng: -77.6120677 }} icon={{url:'/assets/logos/phu.png',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 42.3510941, lng: -71.0747838 }} icon={{url:'/assets/logos/gupta.png',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 47.6057233, lng: -122.3353234 }} icon={{url:'/assets/logos/dis.jpg',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 43.1606059, lng: -77.6200153 }} icon={{url:'/assets/logos/am.png',scaledSize: { width: 50, height: 50}}}/>}
    {//First 16
    }
    {props.isMarkerShown && <Marker position={{ lat: 42.893163, lng: -77.2748897 }} icon={{url:'/assets/logos/labarge.jpg',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 43.0625256, lng: -77.6424088 }} icon={{url:'/assets/logos/ypc.jpg',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 42.807101, lng: -78.6401817 }} icon={{url:'/assets/logos/clevermethod.png',scaledSize: { width: 50, height: 50}}}/>}
    {props.isMarkerShown && <Marker position={{ lat: 43.1569685, lng: -77.6109599 }} icon={{url:'/assets/logos/cgi.jpg',scaledSize: { width: 50, height: 50}}}/>}
    {//All 20
    }
   
 
   
  </GoogleMap>
))

export default MyMapComponent;