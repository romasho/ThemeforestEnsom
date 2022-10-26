import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import { MAP_BOX_TOKEN, pointJackson } from '@/constants/mapbox';
import { theme } from '@/theme';

import { Map } from './styled';

import 'mapbox-gl/dist/mapbox-gl.css';

export function MapboxMap() {
  const [map, setMap] = useState<mapboxgl.Map>();

  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === 'undefined' || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: MAP_BOX_TOKEN,
      style: 'mapbox://styles/mapbox/light-v10',
      center: pointJackson,
      zoom: 13,
    });

    setMap(mapboxMap);

    new mapboxgl.Marker({ color: theme.colors.primary }).setLngLat(pointJackson).addTo(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <Map ref={mapNode} />;
}
