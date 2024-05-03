export default async function getJoke() {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await res.json();
  console.log(joke);
  return joke;
}
