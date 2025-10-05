'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'What is QueryQuest?',
    a: 'QueryQuest is a LeetCode-style platform for practicing SQL. Solve curated problems against realistic mock schemas and get immediate feedback.',
  },
  {
    q: 'How do I run queries?',
    a: 'Head to the Playground to write SQL. The platform executes queries against seeded databases and returns results and error messages in real-time.',
  },
  {
    q: 'Is QueryQuest free?',
    a: 'The core experience is free. We may offer premium features (advanced analytics, private workspaces) in the future.',
  },
  {
    q: 'How can I contribute?',
    a: 'We welcome contributions. Open issues or PRs on our GitHub repo, or reach out via email to propose new problems or schemas.',
  },
];

export default function FAQBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="border rounded-md overflow-hidden">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <span
                    className={`transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`px-4 pb-4 overflow-hidden transition-all duration-700 ease-in-out ${
                    open ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-slate-600">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
