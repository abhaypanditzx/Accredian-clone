import { Container } from './Container';

const items = [
  { title: 'Fast setup', description: 'Launch a polished page in a single afternoon.' },
  { title: 'Built-in forms', description: 'Collect leads with an API-ready route out of the box.' },
  { title: 'Flexible layout', description: 'Drop in sections and content without fighting the structure.' },
];

export function Features() {
  return (
    <section id="features" className="py-20">
      <Container>
        <h2 className="text-3xl font-semibold">Features</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
