import { Add01Icon, ArrowLeft02Icon, Remove01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function EventDetailsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen text-zinc-900">
      <div className="flex w-full h-80 bg-zinc-100 px-5">
        <header className=" flex items-center w-full h-12 mt-6">
          <Link href="/events" className="flex w-12 h-12 bg-black/15 rounded-full items-center justify-center">
            <HugeiconsIcon icon={ArrowLeft02Icon} className=" size-6 text-white" strokeWidth={2} />
          </Link>
        </header>
      </div>
      <div className="flex flex-col w-full h-full -mt-5 p-5 rounded-tl-2xl rounded-tr-2xl bg-white">
        <div className="flex flex-col w-full h-full gap-3">
          <h1 className="text-xl font-bold">Churrasquinho no espeto</h1>
          <p className="text-sm text-zinc-500">Event description goes here. This is a placeholder for the event details.</p>
        </div>

        <form className="flex flex-col w-full h-auto mt-10 rounded-lg gap-2 items-center justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex justify-between w-full items-center border border-zinc-100 rounded-lg px-3 py-3">
              <div className="flex flex-col">
                <p className="text-md font-semibold">Espetinho de carne simples</p>
                <p className="text-xs text-green-300 font-bold">R$ 20,00</p>
              </div>
              <div className="flex items-center bg-zinc-100 py-1 px-1 rounded-lg">
                <Button variant="ghost" size="sm">
                  <HugeiconsIcon icon={Remove01Icon} className="size-4 text-zinc-400" strokeWidth={2} />
                </Button>
                <input type="number" className="w-6 h-6 text-center" defaultValue={0} min={0} max={5} />
                <Button variant="ghost" size="sm">
                  <HugeiconsIcon icon={Add01Icon} className="size-4 text-zinc-400" strokeWidth={2} />
                </Button>
              </div>
            </div>
          ))}
          <Button className="w-full h-11 bg-indigo-600 mt-5" size="lg">
            Fazer reserva
          </Button>
        </form>

      </div>
    </main>
  );
}
