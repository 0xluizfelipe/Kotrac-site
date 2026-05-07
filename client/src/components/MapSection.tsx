import { MapView } from './Map';
import { useRef } from 'react';

export default function MapSection() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Coordenadas da Kotrac em Bonsucesso, RJ
    const kotracLocation = { lat: -22.8876, lng: -43.2793 };

    // Adicionar marcador customizado
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: kotracLocation,
      title: 'Kotrac - Soluções Hidráulicas Mobil',
    });

    // Adicionar info window
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 12px; font-family: Arial, sans-serif;">
          <h3 style="margin: 0 0 8px 0; color: #333; font-weight: bold;">Kotrac</h3>
          <p style="margin: 0 0 4px 0; color: #666; font-size: 13px;">
            Avenida Teixeira de Castro, 660
          </p>
          <p style="margin: 0 0 4px 0; color: #666; font-size: 13px;">
            Bonsucesso, Rio de Janeiro - RJ
          </p>
          <p style="margin: 0; color: #FF6B00; font-weight: bold; font-size: 13px;">
            (21) 2573-6833
          </p>
        </div>
      `,
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    // Abrir info window por padrão
    infoWindow.open(map, marker);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
            Nossa Localizacao
          </h3>
          <p className="text-gray-600">Visite-nos em Bonsucesso, Rio de Janeiro</p>
        </div>
        <div className="rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <MapView
            initialCenter={{ lat: -22.8876, lng: -43.2793 }}
            initialZoom={15}
            onMapReady={handleMapReady}
            className="w-full h-96 md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
