import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "auto",
    "min-height": "500px",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

const lokasiToko = { lat: -6.351702352020433, lng: 106.88412244032743 };

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyB1Asr5fv3JxHTn3JnJhW75htF4hSVpndE",
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(lokasiToko);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={lokasiToko} zoom={18} onUnmount={onUnmount}>
            {/* Child components, such as markers, info windows, etc. */}
            <Marker position={lokasiToko} />
            <></>
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(Map);
