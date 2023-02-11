import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({
  id,
  backdrop_path,
  poster_path,
  overview,
  title,
  name,
  release_date,
  first_air_date,
  vote_count,
}) => {
  return (
    <div className="w-full overflow-hidden cursor-pointer sm:p-3  sm:hover:shadow-slate-400 sm:shadow-md border rounded-lg sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${id}`} className="w-full flex flex-col items-center">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            backdrop_path || poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>

        <div className="p-2">
          <p className="line-clamp-2 text-md">{overview}</p>
          <h2 className="line-clamp-1 text-lg font-bold my-3">
            {title || name}
          </h2>
          <div className="flex items-center gap-1">
            {release_date || first_air_date}
            <FiThumbsUp className="h-5 ml-auto" /> {vote_count}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
