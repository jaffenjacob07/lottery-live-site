export function TopicTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-6 border-t border-navy-100">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1.5 rounded-full bg-navy-100 text-xs font-medium text-navy-700 hover:bg-accent-red hover:text-white transition-colors cursor-pointer"
        >
          #{tag.replace(/\s+/g, "")}
        </span>
      ))}
    </div>
  );
}
