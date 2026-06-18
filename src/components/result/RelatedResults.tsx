import Link from "next/link";

interface RelatedResult {
  slug: string;
  name: string;
  drawNumber: string;
  date: string;
  firstPrize: string;
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
      Latest Kerala Lottery Results
      </h2>

      <div className="rounded-2xl border border-navy-100 bg-white p-5 card-shadow">
        <div className="space-y-3">
          {results.map((item) => (
            <Link
              key={item.slug}
              href={`/results/${item.slug}`}
              className="
                block
                rounded-xl
                border
                border-navy-100
                p-4
                hover:border-accent-red
                hover:shadow-sm
                transition
              "
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">

                  <h3 className="font-semibold text-navy-900">
                    {item.name} {item.drawNumber}
                  </h3>

                  <p className="text-sm text-navy-500 mt-1">
                    {new Date(item.date).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>

                  <div className="mt-2">
  <p className="text-[11px] uppercase tracking-wide text-navy-500">
    First Prize
  </p>

  <p className="font-bold text-accent-red text-lg">
    🏆 {item.firstPrize}
  </p>
</div>

                </div>

                <span className="text-lg text-navy-400">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/results"
          className="
            mt-4
            flex
            items-center
            justify-center
            rounded-xl
            bg-navy-50
            py-3
            text-sm
            font-semibold
            text-navy-900
            hover:bg-navy-100
            transition
          "
        >
          View All Results →
        </Link>
      </div>
    </section>
  );
}