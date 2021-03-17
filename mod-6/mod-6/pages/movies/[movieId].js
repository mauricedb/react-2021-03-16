import { useRouter } from 'next/router';

export async function getServerSideProps(props) {
  console.log(props.query);
  const url = `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/${props.query.movieId}`;

  const rsp = await fetch(url);
  const movie = await rsp.json();

  return {
    props: {
      movie,
    },
  };
}

export default function MovieDetails({ movie }) {
  return <pre>{JSON.stringify(movie, null, 2)}</pre>;
}
