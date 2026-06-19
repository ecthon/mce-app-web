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
    <section className="flex flex-col w-full h-full p-5 space-y-6">
      <div className="flex flex-col w-full h-auto">
        <div className="flex flex-col gap-0">
          <h1 className="text-md font-bold">Meus eventos</h1>
          <p className="text-sm text-zinc-500">
            Veja e edite seus eventos
          </p>
        </div>

        <div className="flex flex-col w-full h-full mt-5 gap-2">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full h-auto">
        <h1 className="text-md font-bold">Próximos eventos</h1>

        <div className="flex flex-col w-full h-full mt-5 gap-2">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
