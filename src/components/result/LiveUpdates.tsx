import { Radio } from "lucide-react";

interface LiveUpdate {
  time: string;
  message: string;
}

interface Props {
  updates: LiveUpdate[];
}

export default function LiveUpdates({ updates }: Props) {
  if (!updates?.length) return null;

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 card-shadow">
      <div className="flex items-center gap-2 mb-6">
        <Radio className="h-5 w-5 text-red-500" />
        <h2 className="text-xl font-bold text-navy-900">
          Live Updates
        </h2>
      </div>

      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="flex gap-4 border-b border-navy-100 pb-3">
            <div className="w-20 shrink-0 text-sm font-bold text-red-600">
              {update.time}
            </div>

            <div className="flex-1 text-navy-800">
              {update.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}