// Higher Order Functions

// A higher order function is a function that does at least one
// the following
// ** Takes one or more functions as an agument (parameter)
// ** Returns a function as the result

// forEach()
import { posts } from "./posts.js";

posts.forEach((post) => {
    console.log(post);
});
console.clear();

const filteredPosts = posts.filter((post) => {
    return post.userId === 5;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
});
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPostsValue);
