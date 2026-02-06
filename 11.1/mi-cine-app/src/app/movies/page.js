import { getAllMovies } from '@/lib/cinema';
import Link from 'next/link';

export default function MoviesPage() {
  const movies = getAllMovies();
  return (
    <main style={{ padding: '20px' }}>
      <h1>Explorar Películas</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {movies.map(m => (
          <div key={m.id} style={{ width: '150px' }}>
            <Link href={`/movies/${m.id}`}>
              <img src={m.poster} alt={m.title} style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ fontSize: '1rem' }}>{m.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}