import { supabase } from '@/app/lib/supabase';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-background text-text flex flex-col">
      <div>
        <h1 className="text-4xl font-extrabold">
          Master SQL. One query at a time.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Welcome to the QueryQuest prototype. Use the nav to explore pages.
        </p>
      </div>
    </div>
  );
}
