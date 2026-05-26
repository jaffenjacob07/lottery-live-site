import { User } from "lucide-react";

interface AuthorSectionProps {
  name: string;
  role: string;
}

export function AuthorSection({ name, role }: AuthorSectionProps) {
  return (
    <div className="flex items-center gap-3 py-4 border-y border-navy-100">
      <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center">
        <User className="h-6 w-6 text-navy-600" />
      </div>
      <div>
        <p className="font-semibold text-navy-900">{name}</p>
        <p className="text-sm text-navy-500">{role}</p>
      </div>
    </div>
  );
}
