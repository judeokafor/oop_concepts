import fetch from "node-fetch";

/**
 * Suppose in a particular API, we wish to fetch posts, clean up some data,
 * and then send back a response.
 */

/**
 * Where this fails:
 *  1. The function handles too many things — fetching data, error handling, and even cleaning up of posts.
    2. It is difficult to re-use — again the tight-coupling is an issue.
 */

const getPosts = async (userId: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    const posts = await response.json();
    // Do some cleanup; remove UserID from post since it's not really needed
    const cleanedPosts = posts.map((post) => {
      delete post["userId"];
      return post;
    });
    return cleanedPosts;
  } catch (e) {
    // Log error in some kind of Error Logging Service, here we just do console log
    console.log(e);
    // Send a meaningful but non-technical error message back to the end-user
    throw Error("Error while fetching Posts!");
  }
};

const main = async () => {
  const result = await getPosts(1);
  console.log(result);
};

main();