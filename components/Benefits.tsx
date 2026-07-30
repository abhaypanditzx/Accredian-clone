import { Container } from './Container';

export function Benefits() {
  return (
    <section id="benefits" className="bg-slate-50 py-20">
      <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold">Why teams choose this structure</h2>
          <p className="mt-4 text-slate-600">The folder layout keeps marketing pages, reusable UI, and API logic neatly separated for faster iteration.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ul className="space-y-3 text-slate-600">
            <li>• Clear route for lead capture</li>
            <li>• Shared UI primitives for consistent design</li>
            <li>• Simple API helper for your frontend</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
