import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

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
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [farms, setFarms] = useState([]);

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

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_API}/farm/findAllFarms`
        )
        console.log(response.data)
        const farmData = response.data;

        const geocodingPromises = farmData.map(async (farm) => {
          try {
            const geocodingResponse = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(farm.address)}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`
            );

            const location = geocodingResponse.data.results[0].geometry.location;

            return {
              ...farm,
              latitude: location.lat,
              longitude: location.lng,
            };
          } catch (error) {
            console.error("Geocoding API 오류:", error);
            return farm;
          }
        });

        // 병렬로 가져온 위치 정보를 합치기
        const farmsWithLatLng = await Promise.all(geocodingPromises);
        setFarms(farmsWithLatLng);
      } catch (error) {
        console.error("Error fetching farm data:", error);
      }
    };

    fetchFarms();
    const intervalId = setInterval(fetchFarms, 30000); // 60초마다 데이터 요청

    return () => {
      clearInterval(intervalId);
    };
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
      {farms.map((farm) => (
        <MarkerF
          key={farm.id}
          onLoad={onLoad}
          position={{ lat: farm.latitude, lng: farm.longitude }}
          onClick={() => {
            console.log("1", farms)
            setSelectedMarker(farm);
          }}
        />
      ))}

      {selectedMarker && (
        <InfoWindowF
          position={{ lat: selectedMarker.latitude, lng: selectedMarker.longitude }}
          options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
          onCloseClick={() => {
            console.log("2", selectedMarker)
            setSelectedMarker(null);
          }}
        >
          <div>
            <h2>{selectedMarker.name}</h2>
            <hr style={{ opacity: "0.2" }} />
            <h4>재배 종: {selectedMarker.species}</h4>
            <h4>주소: {selectedMarker.address}</h4>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap >
  ) : (
    <></>
  );
}

export default React.memo(Maps);
