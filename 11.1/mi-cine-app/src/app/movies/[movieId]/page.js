import { getMovieById, getCastByMovieId } from '@/lib/cinema';
import Link from 'next/link';

export default async function MovieDetail({ params }) {
  const { movieId } = await params;
  
  const movie = getMovieById(movieId);
  const cast = getCastByMovieId(movieId);

  if (!movie) return <p>Película no encontrada. Id: {movieId}</p>;

  return (
    <main style={{ padding: '20px' }}>
      <Link href="/movies">← Volver a películas</Link>
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
        <img src={movie.poster} alt={movie.title} width="250" />
        <div>
          <h1>{movie.title} ({movie.year})</h1>
          <p><strong>Director:</strong> {movie.director}</p>
          <p>{movie.synopsis}</p>
        </div>
      </div>

      <h2>Reparto</h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        {cast.map(actor => (
          <Link key={actor.id} href={`/actors/${actor.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
            <div style={{ textAlign: 'center' }}>
              <img src={actor.photo} alt={actor.name} width="80" style={{ borderRadius: '50%' }} />
              <p><strong>{actor.name}</strong><br/>as {actor.character}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}