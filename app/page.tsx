import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon, Clock01Icon } from '@hugeicons/core-free-icons'

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen">
      <div className="flex flex-col w-full h-full p-5">
        <h1 className="text-[18px] font-bold mt-10">Próximo(s) evento(s)</h1>

        <div className="flex flex-col w-full h-full mt-5 gap-2">
        {/* CARD */}
          {[1, 2].map((item) => (
            <div key={item} className="flex w-full p-2 border border-zinc-200 rounded-xl">
              <div className="flex w-24 h-full items-center rounded-lg justify-center bg-zinc-100">Img</div>
              <div className="flex flex-col w-full h-full ml-5">
                <div className="flex w-full h-full items-center justify-between">
                  <div className="flex flex-col w-full h-full gap-1 justify-center">
                    <div className="flex flex-col w-full h-full">
                      <span className="text-[14px]">Almoço • 22/07/2026</span>
                      <p className="text-[18px] font-bold">Churrasquinho</p>
                    </div>
                    <div className="flex w-full h-full items-center gap-1">
                      <span className="text-[14px]">Encerra em</span>
                      <div className="flex items-center gap-1.5 bg-black py-0.5 px-2 rounded-full">
                        <HugeiconsIcon icon={Clock01Icon} size={16} className="text-white" strokeWidth={2} />
                        <p className="text-[12px] font-bold text-white tabular-nums pr-0.5">04:35:15</p>
                      </div>

                    </div>
                  </div>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="currentColor" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          ))}
          {/* END CARD */}
        </div>
      </div>
    </main>
  );
}
