import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { EditUser02Icon } from "@hugeicons/core-free-icons";

import EventSection from "../components/event-section";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    imageSrc: "/churrasquinho.png",
    alt: "Event Image",
    dateLabel: "22/07/2026",
    title: "Churrasco no espeto",
    endsIn: "04:35:15",
  },
  {
    id: 2,
    imageSrc: "/default-img.png",
    alt: "Event Image",
    dateLabel: "22/07/2026",
    title: "Festival de pizzas",
    endsIn: "04:35:15",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen">
      <header className="flex items-center px-4 py-6 gap-4">
          <figure className="flex h-14 w-14 overflow-hidden rounded-full bg-zinc-100">
            <Image src="/default-img.png" alt="avatar" width={96} height={96} loading="eager" className="object-cover w-full h-full" />
          </figure>
          <h1 className="text-lg font-bold">Olá, João!</h1>
      </header>
      <EventSection events={events} />
    </main>
  );
}
