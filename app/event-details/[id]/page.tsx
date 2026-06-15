'use client';
import { useState } from "react";
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
      price: 20.0,
    },
    {
      id: "2",
      name: "Espetinho de frango",
      price: 18.0,
    },
    {
      id: "3",
      name: "Espetinho de linguiça",
      price: 22.0,
    },
  ],
};

export default function EventDetailsPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(event.items.map((item) => [item.id, 0]))
  );

  const incrementQuantity = (itemId: string) => {
    setQuantities((prev) => {
      const currentQuantity = prev[itemId] ?? 0;
      if (currentQuantity >= 5) {
        return prev;
      }
      return {
        ...prev,
        [itemId]: currentQuantity + 1,
      };
    });
  };

  const decrementQuantity = (itemId: string) => {
    setQuantities((prev) => {
      const currentQuantity = prev[itemId] ?? 0;
      if (currentQuantity <= 0) {
        return prev;
      }
      return {
        ...prev,
        [itemId]: currentQuantity - 1,
      };
    });
  };

  const handleQuantityChange = (itemId: string, value: number) => {
    const normalized = Math.max(0, Math.min(5, Number.isNaN(value) ? 0 : value));
    setQuantities((prev) => ({
      ...prev,
      [itemId]: normalized,
    }));
  };

  const currency = (v: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

  const subtotal = event.items.reduce(
    (acc, item) => acc + item.price * (quantities[item.id] ?? 0),
    0
  );

  const delivery = 0; // grátis no exemplo
  const serviceFee = subtotal > 0 ? Math.max(0.99, +(subtotal * 0.02).toFixed(2)) : 0;
  const coupon = subtotal > 0 ? 10 : 0;
  const total = Math.max(0, subtotal + delivery + serviceFee - coupon);
  const selectedItems = event.items.filter((item) => (quantities[item.id] ?? 0) > 0);

  return (
    <main className="flex flex-col w-full min-h-screen text-zinc-900 bg-zinc-50">
      <div className="h-56 bg-gradient-to-b from-white to-zinc-100">
        <header className=" absolute left-4 top-6">
          <Link href="/" className="flex w-10 h-10 bg-white/70 backdrop-blur rounded-full items-center justify-center shadow-sm">
            <HugeiconsIcon icon={ArrowLeft02Icon} className="w-5 h-5 text-zinc-900" strokeWidth={2} />
          </Link>
        </header>
      </div>

      <div className="mt-6 p-4 rounded-t-2xl bg-white min-h-screen">
        <div className="w-full bg-white shadow-sm rounded-xl p-5 border border-zinc-100">
          <h1 className="text-2xl font-extrabold text-zinc-900">{event.title}</h1>
          <p className="mt-1 text-sm font-medium text-zinc-500">{event.description}</p>
        </div>

        <form className="flex flex-col w-full h-auto mt-6 rounded-lg gap-3">
          {event.items.map((item) => (
            <div key={item.id} className="flex justify-between w-full items-center border-b border-zinc-100 px-4 py-4">
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-zinc-900">{item.name}</p>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CoinsDollarIcon} className="w-5 h-5 text-yellow-600 bg-yellow-50 p-1 rounded-full" strokeWidth={2} />
                  <p className="text-sm font-medium text-zinc-600">{currency(item.price)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 py-1 px-2 bg-zinc-50 rounded-lg">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  type="button"
                  className="w-8 h-8 flex items-center justify-center rounded-md text-rose-500"
                >
                  <HugeiconsIcon icon={Remove01Icon} className="w-4 h-4" strokeWidth={2} />
                </button>
                <input
                  aria-label={`Quantidade ${item.name}`}
                  value={quantities[item.id] ?? 0}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  className="w-10 text-center text-sm font-semibold bg-transparent outline-none"
                />
                <button
                  onClick={() => incrementQuantity(item.id)}
                  type="button"
                  className="w-8 h-8 flex items-center justify-center rounded-md text-rose-500"
                >
                  <HugeiconsIcon icon={Add01Icon} className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 w-full rounded-lg bg-white p-4 border border-zinc-100 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900">Resumo do pedido</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-zinc-600">
              {selectedItems.length > 0 ? (
                selectedItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-zinc-500">{item.name}</span>
                    <span className="font-medium text-zinc-900">{quantities[item.id]}x</span>
                  </div>
                ))
              ) : (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Subtotal</span>
                  <span className="font-medium text-zinc-900">{currency(subtotal)}</span>
                </div>
              )}
            </div>

            <div className="mt-4 border-t pt-3 flex justify-between items-center">
              <span className="text-lg font-extrabold">Total</span>
              <span className="text-xl font-extrabold text-zinc-900">{currency(subtotal)}</span>
            </div>
          </div>

        </form>
      </div>

      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-zinc-100 p-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-zinc-500">Total a ser pago</div>
            <div className="text-lg font-extrabold text-zinc-900">{currency(total)} / {Object.values(quantities).reduce((a, b) => a + b, 0)} item</div>
          </div>
          <div className="w-44">
            <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold h-12 rounded-lg">Continuar</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
