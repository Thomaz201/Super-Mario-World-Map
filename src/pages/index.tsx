import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

import { Container, MapContainer } from '../styles/home';

interface MarkerProps {
  title: string;
  position: google.maps.LatLngLiteral;
  iconUrl: string;
}

const Home: React.FC = () => {
  const googleMapRef = useRef(null);

  const markers = [
    {
      title: 'Power Up',
      position: {
        lat: 35.3502597,
        lng: 138.7751451
      },
      iconUrl: "/star.png"
    },
    {
      title: 'Get coins',
      position: {
        lat: 35.37925882903843,
        lng: 138.63998734997526
      },
      iconUrl: "/block.png"
    },
    {
      title: 'Mushroom',
      position: {
        lat: 35.29589992380957,
        lng: 138.7304558361683
      },
      iconUrl: "/mushroom.png"
    },
    {
      title: 'Casa do Yoshi',
      position: {
        lat: 35.3116891415638,
        lng: 138.67568425265986
      },
      iconUrl: "/yoshi.png"
    },
    {
      title: 'Flower',
      position: {
        lat: 35.368593688648936,
        lng: 138.72500592736145
      },
      iconUrl: "/flower.png"
    },
    {
      title: '1 up',
      position: {
        lat: 35.41346663778592,
        lng: 138.73917569025917
      },
      iconUrl: "/1up.png"
    },
    {
      title: 'Feather',
      position: {
        lat: 35.39058899623781,
        lng: 138.81438443179312
      },
      iconUrl: "/feather.png"
    },
  ]

  let map: google.maps.Map;
  const center: google.maps.LatLngLiteral = { lat: 35.3502597, lng: 138.7751451 }
  
  const mapOptions = { 
    center,
    zoom: 12,
    mapId: process.env.NEXT_PUBLIC_MAP_ID,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  } as google.maps.MapOptions
  
  const createMarker = (markers: MarkerProps[], map: google.maps.Map) => {
    markers.map((item) => {
      const marker = new google.maps.Marker({
        position: item.position,
        map,
        title: item.title,
        icon: {
          url: item.iconUrl,
          scaledSize: new google.maps.Size(50, 50)
        },
        animation: google.maps.Animation.DROP
      });
  
      const infoWindow = new google.maps.InfoWindow({
        content: item.title
      });
  
      marker.addListener("click", () => {
        infoWindow.open(map, marker)
      })
    });
  }

  useEffect(() => {
    map = new google.maps.Map(googleMapRef.current, mapOptions);

    createMarker(markers, map);
  }, []);

  return (
    <>
      <Head>
        <title>Super Mario World Google Map</title>
        <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&map_ids=${process.env.NEXT_PUBLIC_MAP_ID}`}></script>
      </Head>
      <Container>
        <h1>Let's go to Super Mario World!!</h1>

        <MapContainer ref={googleMapRef}>
          

        </MapContainer>
        

      </Container>
    </>
  )
}

export default Home;