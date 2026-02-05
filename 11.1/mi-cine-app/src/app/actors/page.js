import { getAllActors } from '@/lib/cinema';
import Link from 'next/link';

export default function ActorsPage() {
  const actors = getAllActors();
  return (
    <main style={{ padding: '20px' }}>
      <h1> Nuestros Actores</h1>
      <ul>
        {actors.map(a => (
          <li key={a.id} style={{ marginBottom: '10px' }}>
            <Link href={`/actors/${a.id}`}>
              <img src={a.photo} width="40" style={{ borderRadius: '50%', marginRight: '10px', verticalAlign: 'middle' }} />
              {a.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}