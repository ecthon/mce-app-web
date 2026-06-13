import { Add01Icon, ArrowLeft02Icon, CoinsDollarIcon, Remove01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const event = {
  id: "1",
  title: "Churrasquinho no espeto",
  description: "Event description goes here. This is a placeholder for the event details.",
  items: [
    {
      id: "1",
      name: "Espetinho de carne simples",
      price: 20.00,
    },
    {
      id: "2",
      name: "Espetinho de frango",
      price: 18.00,
    },
    {
      id: "3",
      name: "Espetinho de linguiça",
      price: 22.00,
    },
  ]
};

export default function EventDetailsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen text-zinc-900">
      <div className="flex w-full h-72 bg-zinc-100 px-4">
        <header className=" flex items-center w-full h-12 mt-5">
          <Link href="/events" className="flex w-12 h-12 bg-black/15 rounded-full items-center justify-center">
            <HugeiconsIcon icon={ArrowLeft02Icon} className=" size-6 text-white" strokeWidth={2} />
          </Link>
        </header>
      </div>
      <div className="flex flex-col w-full h-full -mt-5 p-4 rounded-tl-2xl rounded-tr-2xl bg-white">
        <div className="flex flex-col w-full h-full bg-zinc-50 rounded-lg p-4 border border-zinc-100 gap-2">
          <h1 className="text-lg font-extrabold">{event.title}</h1>
          <p className="text-sm font-medium text-zinc-500">{event.description}</p>
        </div>

        <form className="flex flex-col w-full h-auto mt-6 rounded-lg gap-3 items-center justify-center">
          {event.items.map((item, index) => (
            <div key={index} className="flex justify-between w-full items-center border-b border-zinc-100 rounded-lg px-4 py-4">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">{item.name}</p>
                <div className="flex items-center gap-1">
                  <HugeiconsIcon icon={CoinsDollarIcon} className="size-4 text-yellow-500 bg-yellow-50 p-1 rounded-full box-content" strokeWidth={2} />
                  <p className="text-xs font-semibold text-zinc-500">
                    R$ {item.price.toFixed(2).replace('.', ',')}</p>
                </div>
              </div>
              <div className="flex items-center bg-zinc-50 py-1 px-1 rounded-lg">
                <Button variant="ghost" size="sm">
                  <HugeiconsIcon icon={Remove01Icon} className="size-4 text-indigo-400" strokeWidth={2} />
                </Button>
                <input type="number" className="w-6 h-6 text-center font-semibold text-sm" defaultValue={0} min={0} max={5} />
                <Button variant="ghost" size="sm">
                  <HugeiconsIcon icon={Add01Icon} className="size-4 text-indigo-400" strokeWidth={2} />
                </Button>
              </div>
            </div>
          ))}
          <Button className="w-full h-10 bg-indigo-600 mt-6 font-semibold" size="lg">
            Fazer reserva
          </Button>
        </form>

      </div>
    </main>
  );
}
