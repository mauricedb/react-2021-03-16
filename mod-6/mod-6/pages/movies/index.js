import Link from 'next/link';
import Image from 'next/image';

const url =
  'https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies';

export async function getServerSideProps() {
  const rsp = await fetch(url);
  const movies = await rsp.json();

  console.log('getServerSideProps');

  return {
    props: {
      movies: movies.map((m) => ({
        id: m.id,
        title: m.title,
        image: m.backdrop_path,
      })),
      foo: 'bar',
    },
  };
}

export default function Movies({ movies, foo }) {
  return (
    <div>
      <h1>Movies</h1>

      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            <Link href={`/movies/${m.id}`}>
              <>
                <h2>{m.title}</h2>
                <Image
                  height={100}
                  width={200}
                  src={`https://image.tmdb.org/t/p/original${m.image}`}
                ></Image>
              </>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
