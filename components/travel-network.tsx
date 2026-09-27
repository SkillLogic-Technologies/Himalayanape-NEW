"use client";

import { WorldMap } from "@/components/ui/map";
import Reveal from "@/components/ui/reveal";

export default function TravelNetwork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-medium text-accent-green">
          Pan-India Network
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
          Every Trip, Connected
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
          From Indore to India&apos;s most sought-after hills, beaches and
          backwaters — Himalayanape plans the route, you enjoy the journey.
        </p>
      </Reveal>

      <WorldMap
        lineColor="#B6FF3C"
        countries={["IND"]}
        region={{ lat: { min: 4, max: 39 }, lng: { min: 66, max: 99 } }}
        aspectClassName="aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/3] lg:aspect-[3/2]"
        dots={[
          {
            start: { lat: 22.7196, lng: 75.8577, label: "Indore", labelDir: "s" },
            end: { lat: 34.0837, lng: 74.7973, label: "Kashmir", labelDir: "n" },
          },
          {
            start: { lat: 22.7196, lng: 75.8577, label: "Indore", labelDir: "s" },
            end: { lat: 32.2432, lng: 77.1892, label: "Manali", labelDir: "n" },
          },
          {
            start: { lat: 22.7196, lng: 75.8577, label: "Indore", labelDir: "s" },
            end: { lat: 15.2993, lng: 74.1240, label: "Goa", labelDir: "s" },
          },
          {
            start: { lat: 22.7196, lng: 75.8577, label: "Indore", labelDir: "s" },
            end: { lat: 9.9312, lng: 76.2673, label: "Kerala", labelDir: "s" },
          },
          {
            start: { lat: 22.7196, lng: 75.8577, label: "Indore", labelDir: "s" },
            end: { lat: 11.7401, lng: 92.6586, label: "Andaman", labelDir: "e" },
          },
        ]}
      />
    </section>
  );
}
