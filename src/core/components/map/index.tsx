"use client";
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './map.module.css';
import { ENV } from '@/src/core/config/env';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

export default function MapComponent({ latitude, longitude, zoom = 14 }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    mapboxgl.accessToken = ENV.MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: zoom,
      attributionControl: false,
    });

    map.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-right');

    const markerEl = document.createElement('div');
    markerEl.innerHTML = `
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;">
        <path d="M12 0C7.58 0 4 3.58 4 8C4 13.54 12 24 12 24C12 24 20 13.54 20 8C20 3.58 16.42 0 12 0ZM12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11Z" fill="#EA4335"/>
      </svg>
    `;

    new mapboxgl.Marker({ element: markerEl, anchor: 'bottom' })
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [latitude, longitude, zoom]);

  return (
    <div ref={mapContainer} className={styles.map__container} />
  );
}