export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen">
      <div className="flex flex-col w-full h-full p-5">
        <h1 className="text-[18px] font-bold mt-10">Próximo(s) evento(s)</h1>
      {/* CARD */}
        <div className="flex w-full mt-5 p-2 border rounded-lg">
          <div className="flex w-24 h-full items-center rounded-md justify-center bg-zinc-100">Img</div>
          <div className="flex flex-col w-full h-full ml-5">
            <div className="flex w-full h-full items-center justify-between">
              <div className="flex flex-col w-full h-full justify-center">
                <span>Almoço • 22/07/2026</span>
                <p className="text-[18px] font-bold">Churrasquinho</p>
                <span>Encerra em 04:35:15</span>
              </div>
              <button className="flex items-center justify-center w-8 h-8 bg-zinc-200 rounded-full">
                <span className="text-[14px]">✕</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* END CARD */}
    </main>
  );
}
