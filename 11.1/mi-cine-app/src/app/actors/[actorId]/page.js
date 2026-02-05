import { getActorById, getFilmographyByActorId } from '@/lib/cinema';
import Link from 'next/link';

export default async function ActorProfile({ params }) {
  const { actorId } = await params;

  const actor = getActorById(actorId);
  const films = getFilmographyByActorId(actorId);

  if (!actor) return <p>Actor no encontrado. Id: {actorId}</p>;

  return (
    <main style={{ padding: '20px' }}>
      <Link href="/actors">← Volver a actores</Link>
      <h1>{actor.name}</h1>
      <p>Nacido en: {actor.birthYear}</p>
      <p>{actor.bio}</p>

      <h2>Filmografía</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 120px)', gap: '20px' }}>
        {films.map(m => (
          <Link key={m.id} href={`/movies/${m.id}`}>
            <img src={m.poster} alt={m.title} width="100" />
            <p style={{ fontSize: '0.8rem' }}>{m.title}<br/>({m.character})</p>
          </Link>
        ))}
      </div>
    </main>
  );
}