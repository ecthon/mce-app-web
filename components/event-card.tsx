import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Calendar05Icon, Clock01Icon } from "@hugeicons/core-free-icons";

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
        className="flex w-full p-2 border border-zinc-100 rounded-xl gap-3 cursor-pointer"
      >
        <figure className="flex h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
          <Image src={imageSrc} alt={alt} width={96} height={96} loading="eager" className="object-cover w-full h-full" />
        </figure>

        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-md font-bold">{title}</p>
              <div className="flex items-center gap-1">
                <HugeiconsIcon icon={Calendar05Icon} size={16} className="text-zinc-500" strokeWidth={2} />
                <span className="text-xs font-semibold text-zinc-500">
                  {dateLabel}
                </span>
              </div>
            </div>
            {/* <div className="flex items-center gap-1">
              <span className="text-[14px] text-zinc-500">Encerra em</span>
              <div className="flex items-center gap-1.5 bg-rose-100 py-0.5 px-2 rounded-full">
                <HugeiconsIcon icon={Clock01Icon} size={16} className="text-rose-500" strokeWidth={2} />
                <p className="text-[12px] font-bold text-rose-500 tabular-nums pr-0.5">{endsIn}</p>
              </div>
            </div> */}
          </div>
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="text-zinc-500" strokeWidth={2} />
        </div>
      </div>
    </article>
  );
}
