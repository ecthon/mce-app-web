import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function EventDetailsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-zinc-500 text-zinc-900">
      <div className="flex w-full h-80 bg-zinc-100 px-5">
        <header className=" flex items-center w-full h-12 mt-6">
          <Link href="/events" className="flex w-12 h-12 bg-black/15 rounded-full items-center justify-center">
            <HugeiconsIcon icon={ArrowLeft02Icon} className=" size-6 text-white" strokeWidth={2} />
          </Link>
        </header>
      </div>
    </main>
  );
}
