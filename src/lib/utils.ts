/** Parse YYYY-MM-DD as UTC midnight so server and client agree. */
function parseDateInput(date: string): Date {
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return new Date(`${date}T00:00:00.000Z`);
  }
  return new Date(date);
}

export function formatDate(dateString: string) {
  const date = new Date(dateString + "T00:00:00Z");

  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(date)
    .replace(",", "");
}

export function formatUpdatedTime(iso: string): string {
  const d = new Date(iso);

  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
}

export function cn(...classes: (string | false | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
