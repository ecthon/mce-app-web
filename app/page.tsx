import EventSection from "./components/event-section";

const events = [
  {
    id: 1,
    imageSrc: "/default-img.png",
    alt: "Event Image",
    dateLabel: "Almoço • 22/07/2026",
    title: "Festival de pizzas",
    endsIn: "04:35:15",
  },
  {
    id: 2,
    imageSrc: "/default-img.png",
    alt: "Event Image",
    dateLabel: "Almoço • 22/07/2026",
    title: "Festival de pizzas",
    endsIn: "04:35:15",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen">
      <EventSection events={events} />
    </main>
  );
}
