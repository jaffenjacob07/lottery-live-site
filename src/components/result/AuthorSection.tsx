interface AuthorSectionProps {
  name: string;
  updatedAt?: string;
}

export function AuthorSection({
  name,
  updatedAt,
}: AuthorSectionProps) {
  return (
    <div className="text-sm text-navy-600">
      <span className="font-semibold text-navy-900">
        By {name}
      </span>

      {updatedAt && (
        <>
          {" "}
          • Updated: {updatedAt}
        </>
      )}
    </div>
  );
}