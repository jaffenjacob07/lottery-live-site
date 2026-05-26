import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-black text-navy-900 mb-2">404</h1>
      <p className="text-navy-600 mb-6">Result page not found.</p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-accent-red"
      >
        Back to Home
      </Link>
    </div>
  );
}
