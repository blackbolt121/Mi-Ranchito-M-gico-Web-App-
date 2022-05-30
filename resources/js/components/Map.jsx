import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
export  default function Map(props){
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyDPdJWT-hjNPQtmVbW2dOQGfXB3UWhIC9A"})
    if (isLoaded) {
        return <GoogleMap
            zoom={15}
            center={{lat: props.latitud, lng: props.longitud}}
            mapContainerClassName={"ranchito__map"}
        ><Marker position={{lat: props.latitud, lng: props.longitud}}/></GoogleMap>
    }else{
        return <div style={{fontSize: "3rem"}}>Loading...</div>
    }
}
