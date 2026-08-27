"use client";

import { useEffect, useId, useRef } from "react";
import type { CruscottoRete } from "@/lib/cruscotti-rete";
import "leaflet/dist/leaflet.css";

export function ComuniMap({ items }: { items: CruscottoRete[] }) {
  const id = useId().replace(/:/g, "");
  const mapId = `comuni-map-${id}`;
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || items.length === 0) return;

    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    void (async () => {
      const L = await import("leaflet");
      if (cancelled || !rootRef.current) return;

      const bounds = L.latLngBounds(items.map((c) => [c.lat, c.lng]));
      map = L.map(rootRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      }).fitBounds(bounds.pad(0.45));

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      for (const c of items) {
        const online = c.status === "online";
        const marker = L.circleMarker([c.lat, c.lng], {
          radius: 9,
          color: online ? "#0066cc" : "#cc7a00",
          weight: 2,
          fillColor: online ? "#0066cc" : "#cc7a00",
          fillOpacity: 0.85,
        });
        marker.bindPopup(
          `<p class="m-0 font-bold">${c.nome}</p>
           <p class="mb-1 mt-0.5 text-xs">${c.regione} · ${c.provincia}${c.origin ? " · originale" : ""}</p>
           <a href="${c.url}" target="_blank" rel="noopener noreferrer">${c.url.replace(/^https:\/\//, "").replace(/\/$/, "")}</a>`,
        );
        marker.bindTooltip(c.nome);
        marker.addTo(map);
      }
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [items, mapId]);

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--pa-border)] bg-white">
      <div
        ref={rootRef}
        id={mapId}
        className="h-[min(28rem,70vh)] w-full"
        role="region"
        aria-label="Mappa dei cruscotti comunali in Italia"
      />
      <p className="m-0 border-t border-[var(--pa-border)] px-3 py-2 text-xs text-[var(--pa-muted)]">
        Tiles OpenStreetMap · blu = pubblico, arancio = in sviluppo. Clicca un
        pin per l’indirizzo.
      </p>
    </div>
  );
}
