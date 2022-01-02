import fetch from "node-fetch";

const fetchPosts = async (userId: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    return await response.json();
  } catch (e) {
    handleError(e, "Error while fetching Posts!");
  }
};

const handleError = (e, message) => {
  // Log error in some kind of Error Logging Service, here we just do console log
  console.log(e);
  // Send a generic Error message back to the user
  throw Error(message);
};

const cleanupPosts = (posts) => {
  // Do some cleanup; remove UserID from post since it's not really needed
  return posts.map((post) => {
    delete post["userId"];
    return post;
  });
};

const main = async () => {
  const posts = await fetchPosts(1);
  console.log(cleanupPosts(posts));
};

main()