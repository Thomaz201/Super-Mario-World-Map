import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

import { Container, MapContainer } from '../styles/home';

const Home: React.FC = () => {
  const googleMapRef = useRef(null);

  let map: google.maps.Map;
  const center: google.maps.LatLngLiteral = { lat: -16.274047881773498, lng: -48.966474303846915 }
  
  // -16.274047881773498, -48.966474303846915
  // -19.86460543294877, -43.99641936955564 BH

  const mapOptions = { 
    center,
    zoom: 6,
    mapId: process.env.NEXT_PUBLIC_MAP_ID,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  } as google.maps.MapOptions

  useEffect(() => {
    map = new google.maps.Map(googleMapRef.current, mapOptions);

    const marker = new google.maps.Marker({
      position: center,
      map,
      title: 'Casa do Yoshi',
      icon: {
        url: "/star.png",
        scaledSize: new google.maps.Size(50, 50)
      },
      animation: google.maps.Animation.DROP
    });

    const infoWindow = new google.maps.InfoWindow({
      content: 'Home'
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker)
    })
  }, [])

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