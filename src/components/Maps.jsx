import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "91vh",
};

const center = {
  lat: 36.769652,
  lng: 126.932406
};

const myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    if (map.current) {
      map.current.fitBounds(bounds);
    }

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ disableDefaultUI: true, styles: myStyles }}
    >
      <MarkerF
        onLoad={onLoad}
        position={{ lat: 36.769652, lng: 126.932406 }}
      />
    </GoogleMap >
  ) : (
    <></>
  );
}

export default React.memo(Maps);
