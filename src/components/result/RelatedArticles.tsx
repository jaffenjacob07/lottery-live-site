import type { RelatedArticle } from "@/types/lottery";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export function RelatedArticles({ articles }: { articles: RelatedArticle[] }) {
  return (
    <section>
      <h3 className="font-bold text-navy-900 mb-4">Related Articles</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href="#"
            className="group rounded-xl border border-navy-100 p-4 hover:border-accent-red/40 hover:shadow-md transition-all"
          >
            <span className="text-xs font-semibold text-accent-red uppercase">
              {article.category}
            </span>
            <h4 className="font-semibold text-navy-900 mt-1 group-hover:text-accent-red transition-colors line-clamp-2">
              {article.title}
            </h4>
            <p className="text-xs text-navy-500 mt-2">{formatDate(article.date)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
