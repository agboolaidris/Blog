import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import Banner from "../../functions/Sub/Banner";
import Feed from "../../functions/Sub/feed";

function Sub() {
  const router = useRouter();
  const query = router.query.sub;
  const { data: sub, revalidate } = useSWR(query ? `/sub/${query}` : null);

  return (
    <div>
      <Head>
        <title>{sub && sub.title}</title>
      </Head>
      <div>
        {
          <>
            {sub && (
              <>
                <Banner sub={sub} revalidate={revalidate} />
                <Feed sub={sub} revalidate={revalidate} />
              </>
            )}
          </>
        }
      </div>
    </div>
  );
}

export default Sub;
