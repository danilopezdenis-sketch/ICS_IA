import { MOVIES, ACTORS, ROLES } from './data';


export const getAllMovies = () => MOVIES;
export const getMovieById = (id) => MOVIES.find(m => m.id === id);
export const getAllActors = () => ACTORS;
export const getActorById = (id) => ACTORS.find(a => a.id === id);

export const getCastByMovieId = (movieId) => {
  return ROLES
    .filter(r => r.movieId === movieId)
    .map(r => ({
      ...ACTORS.find(a => a.id === r.actorId),
      character: r.character
    }));
};

export const getFilmographyByActorId = (actorId) => {
  return ROLES
    .filter(r => r.actorId === actorId)
    .map(r => ({
      ...MOVIES.find(m => m.id === r.movieId),
      character: r.character
    }));
};