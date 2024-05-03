export default async function blogData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=10"
  );
  const joke = await res.json();
  //   console.log(joke);

  return joke;
}
