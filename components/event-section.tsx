import EventCard from "./event-card";

interface Event {
  id: number;
  imageSrc: string;
  alt: string;
  dateLabel: string;
  title: string;
  endsIn: string;
}

interface EventSectionProps {
  events: Event[];
}

export default function EventSection({ events }: EventSectionProps) {
  return (
    <section className="flex flex-col w-full h-full p-5">
      <div className="flex flex-col w-full h-full">
        <h1 className="text-[18px] font-bold mt-10">Próximo(s) evento(s)</h1>

        <div className="flex flex-col w-full h-full mt-5 gap-2">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
