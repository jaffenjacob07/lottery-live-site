/** Use `initial={false}` during SSR/first paint to avoid hydration mismatches. */
export function clientInitial<T extends object>(
  mounted: boolean,
  initial: T,
): false | T {
  return mounted ? initial : false;
}
