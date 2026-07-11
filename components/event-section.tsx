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

      {/* <div className="flex flex-col w-full h-auto">
        <div className="flex flex-col gap-0">
          <h1 className="text-md font-bold">Próximos eventos</h1>
          <p className="text-sm text-zinc-500">
            Veja os eventos que estão por vir
          </p>
        </div>

        <div className="flex flex-col w-full h-full mt-5 gap-2">
          {[1,2].map((event) => (
            <div key={event} className="w-full bg-white rounded-xl p-5 border border-zinc-100">
              <h2 className="text-lg font-bold">Próximo Evento</h2>
              <p className="text-sm text-zinc-500">
                Descrição do próximo evento
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
