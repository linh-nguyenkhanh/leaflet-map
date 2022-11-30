import { useEffect, useState } from "react";
import axios from "axios";

export const useMap = () => {
  const [position, setPosition] = useState({ lat: 60.192059, lng: 24.945831 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coordinates }) => {
        setPosition({ lat: coordinates.latitude, lng: coordinates.longitude });
      },
      (blocked) => {
        if (blocked) {
          const fetchLocation = async () => {
            try {
              const { data } = await axios.get(
                setPosition({
                  lat: coordinates.latitude,
                  lng: coordinates.longitude,
                })
              );
            } catch (error) {
              console.log(error);
            }
          };
          fetchLocation();
        }
      }
    );
  }, []);

  return {
    position,
  };
};
