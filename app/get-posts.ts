import postsData from "./posts.json";
import redis from "./redis";
import commaNumber from "comma-number";

export type Post = {
  id: string;
  date: string;
  title: string;
};

export const getPosts = async () => {
  const posts = postsData.posts.map((post): Post => {
    return {
      ...post,
    };
  });
  return posts;
};
