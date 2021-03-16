export function rating(joke) {
  return Math.round(5 - joke.joke.length / 25);
}
