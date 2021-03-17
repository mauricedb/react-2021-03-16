export function rating(joke) {
  const rating = Math.round(5 - joke.length / 25);

  if (!rating) {
    throw new Error('Unable to determine a rating');
  }
  return rating;
}
