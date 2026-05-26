"use client";

export function SubscribeForm() {
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        className="px-4 py-2.5 rounded-lg text-navy-900 text-sm"
      />
      <button
        type="submit"
        className="py-2.5 rounded-lg bg-accent-red font-semibold text-sm hover:bg-accent-red-dark transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
