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
    <div className={`flex w-full p-2 bg-zinc-50 border border-zinc-100 rounded-xl gap-3 cursor-pointer ${className ?? ""}`}>
      <div className="flex w-24 h-full items-center justify-center">
        <Image src={imageSrc} alt={alt} width={96} height={96} className="flex rounded-lg w-full h-full object-cover" />
      </div>
      <div className="flex w-full h-full items-center justify-between">
        <div className="flex flex-col w-full h-full gap-1 justify-center">
          <div className="flex flex-col w-full h-full">
            <span className="text-[14px] text-zinc-500">{dateLabel}</span>
            <p className="text-[16px] font-bold">{title}</p>
          </div>
          <div className="flex w-full h-full items-center gap-1">
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
  );
}
