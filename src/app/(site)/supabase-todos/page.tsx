import { createServerSupabaseClient } from "@/lib/supabase";

type Todo = { id: string; name: string };

export default async function Page() {
  const supabase = await createServerSupabaseClient();

  const { data: todos } = await supabase.from("todos").select("id, name");

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Supabase Todos (demo)</h1>
      <ul className="space-y-2">
        {(todos as Todo[] | null)?.map((todo) => (
          <li key={todo.id} className="rounded border border-navy-200 px-3 py-2">
            {todo.name}
          </li>
        ))}
      </ul>
      {!(todos as Todo[] | null)?.length && (
        <p className="text-sm text-navy-500">No todos found in Supabase.</p>
      )}
    </div>
  );
}

