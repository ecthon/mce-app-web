import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
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

        <div className="flex flex-col w-full h-12 mt-10">
          <div className="flex w-full h-52 border rounded-xl p-2">
            <p className="flex text-md font-semibold">Espetinho de carne</p>
            <div className="flex w-full h-8 mt-auto gap-2 items-center justify-end">
              <Button>+</Button>
              <input type="number" className="w-16 h-8 border rounded-md text-center" value={0} readOnly />
              <Button>-</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
