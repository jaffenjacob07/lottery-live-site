import { User } from "lucide-react";

interface AuthorSectionProps {
  name: string;
  role: string;
}

export function AuthorSection({
  name,
  role,
}: AuthorSectionProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center">
        <User className="h-5 w-5 text-navy-600" />
      </div>

      <div>
        <p className="text-sm font-semibold text-navy-900">
          By {name}
        </p>

        <p className="text-xs text-navy-500">
          {role}
        </p>
      </div>
    </div>
  );
}