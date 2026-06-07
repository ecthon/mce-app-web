import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon, Clock01Icon } from '@hugeicons/core-free-icons'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen">
      <div className="flex flex-col w-full h-full p-5">
        <h1 className="text-[18px] font-bold mt-10">Próximo(s) evento(s)</h1>

        <div className="flex flex-col w-full h-full mt-5 gap-2">
        {/* CARD */}
          {[1, 2].map((item) => (
            <div key={item} className="flex w-full p-2 bg-zinc-50 border border-zinc-100 rounded-xl gap-3 cursor-pointer">
              <div className="flex w-24 h-full items-center justify-center">
                <Image src="/espetinho.png" alt="Event Image" width={96} height={96} className="flex rounded-lg w-full h-full object-cover" />
              </div>
              <div className="flex w-full h-full items-center justify-between">
                  <div className="flex flex-col w-full h-full gap-1 justify-center">
                    <div className="flex flex-col w-full h-full">
                      <span className="text-[14px] text-zinc-500">Almoço • 22/07/2026</span>
                      <p className="text-[18px] font-bold">Festival de pizzas</p>
                    </div>
                    <div className="flex w-full h-full items-center gap-1">
                      <span className="text-[14px] text-zinc-500">Encerra em</span>
                      <div className="flex items-center gap-1.5 bg-rose-100 py-0.5 px-2 rounded-full">
                        <HugeiconsIcon icon={Clock01Icon} size={16} className="text-rose-500" strokeWidth={2} />
                        <p className="text-[12px] font-bold text-rose-500 tabular-nums pr-0.5">04:35:15</p>
                      </div>
                    </div>
                  </div>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} className='text-zinc-500' strokeWidth={2} />
              </div>
            </div>
          ))}
          {/* END CARD */}
        </div>
      </div>
    </main>
  );
}
