import Image from 'next/image';

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  return await res.json();
}

const Movie = async ({ params }) => {
  const movieId = params.id;

  const {
    backdrop_path,
    poster_path,
    name,
    title,
    overview,
    release_date,
    first_air_date,
    vote_count,
  } = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center md:gap-3">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            backdrop_path || poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: '100%',
            height: '100%',
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        ></Image>

        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{title || name}</h2>

          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {overview}
          </p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released: </span>
            {release_date || first_air_date}
          </p>

          <p className="mb-3">
            <span className="font-semibold mr-1">Rating: </span>
            {vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
