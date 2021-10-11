import React, { useEffect, useState } from "react";
import { useSWRInfinite } from "swr";

import Card from "../../components/shared/Card";
import { Post } from "../../helper/types";

function Feed() {
  const [observePost, setobservePost] = useState("");

  const {
    data,
    error,
    mutate,
    size: page,
    setSize: setPage,
    isValidating,
    revalidate,
  } = useSWRInfinite((index) => `/post?page=${index}`);

  const posts: Post[] = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;

  useEffect(() => {
    if (!posts || posts.length < 1) return;
    const id = posts[posts.length - 1].identifier;
    if (id !== observePost) {
      setobservePost(id);
      observeElement(document.getElementById(id));
    }
  }, [posts]);

  const observeElement = (element: HTMLElement) => {
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          observer.unobserve(element);
          setPage(page + 1);
        }
      },
      { threshold: 1 }
    );
    observer.observe(element);
  };

  return (
    <>
      {posts?.map((post: Post, index) => (
        <Card post={post} key={index} revalidate={revalidate} />
      ))}
      {isLoadingInitialData && posts.length > 0 && (
        <span className="text-center ">Loading.......</span>
      )}
    </>
  );
}

export default Feed;
