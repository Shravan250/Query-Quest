import { supabase } from '@/app/lib/supabase';

console.log(supabase);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center">
      <div className="p-6 bg-primary text-white text-xl font-semibold rounded shadow-neon">
        Neon test box
      </div>
    </div>
  );
}
