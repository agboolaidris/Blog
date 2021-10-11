import axios from "axios";
import { NextRouter } from "next/router";
import { Post } from "../../helper/types";

export const vote = async (info: any, revalidate?: Function) => {
  try {
    await axios.post("/vote", info);
    if (revalidate) revalidate();
  } catch (error) {}
};

export const createPost = async (state: any, router: NextRouter) => {
  try {
    const { data: post }: { data: Post } = await axios.post("/post", state);
    router.push(`/r/${post.subName}/${post.identifier}/${post.slug}`);
  } catch (error) {}
};

export const bannerUpload = async (
  form: any,
  name: string,
  revalidate: any
) => {
  try {
    await axios.post(`/sub/${name}/image`, form);

    revalidate();
  } catch (error) {}
};

export const comment = async (
  body: string,
  identify: string,
  slug: string,
  revalidate?: Function
) => {
  try {
    await axios.post(`/post/${identify}/${slug}/comment`, {
      body,
    });
    if (revalidate) revalidate();
  } catch (error) {}
};
