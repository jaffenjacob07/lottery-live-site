import Link from "next/link";

interface RelatedResult {
  slug: string;
  title: string;
}

interface Props {
  results: RelatedResult[];
}

export default function RelatedResults({
  results,
}: Props) {
  if (!results?.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-navy-900">
        Related Lottery Results
      </h2>

      <div className="rounded-2xl border border-navy-100 bg-white p-5 card-shadow">
        <div className="space-y-3">
          {results.map((item) => (
            <Link
              key={item.slug}
              href={`/results/${item.slug}`}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-navy-100
                px-4
                py-3
                hover:border-accent-red
                hover:text-accent-red
                transition
              "
            >
              <span>{item.title}</span>

              <span>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}