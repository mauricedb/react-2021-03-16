import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        The NavBar &nbsp;
        <Link href="/">Home</Link>&nbsp;
        <Link href="/movies">Movies</Link>&nbsp;
      </nav>

      <Component {...pageProps} />
      <footer>The footer</footer>
    </>
  );
}

export default MyApp;
