import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Clock01Icon } from "@hugeicons/core-free-icons";

interface EventCardProps {
  imageSrc: string;
  alt: string;
  dateLabel: string;
  title: string;
  endsIn: string;
  className?: string;
}

export default function EventCard({
  imageSrc,
  alt,
  dateLabel,
  title,
  endsIn,
  className,
}: EventCardProps) {
  return (
    <article className={className ?? ""}>
      <div
        className="flex w-full p-2 bg-zinc-50 border border-zinc-100 rounded-xl gap-3 text-left cursor-pointer transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
      >
        <figure className="flex h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
          <Image src={imageSrc} alt={alt} width={96} height={96} loading="eager" className="object-cover w-full h-full" />
        </figure>

        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-1 flex-col gap-2">
            <div>
              <span className="text-[14px] text-zinc-500">{dateLabel}</span>
              <p className="text-[16px] font-bold">{title}</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[14px] text-zinc-500">Encerra em</span>
              <div className="flex items-center gap-1.5 bg-rose-100 py-0.5 px-2 rounded-full">
                <HugeiconsIcon icon={Clock01Icon} size={16} className="text-rose-500" strokeWidth={2} />
                <p className="text-[12px] font-bold text-rose-500 tabular-nums pr-0.5">{endsIn}</p>
              </div>
            </div>
          </div>
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="text-zinc-500" strokeWidth={2} />
        </div>
      </div>
    </article>
  );
}
