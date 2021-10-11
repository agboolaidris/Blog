import React, { useState, useEffect, useRef, ChangeEvent } from "react";

import BannerComp from "../../components/Sub/Banner";
import { Sub, User } from "../../helper/types";
import { bannerUpload } from "../../States/Api/post";
import { useAuthState } from "../../States/Context/Auth";

function Banner({ sub, revalidate }: { sub: Sub; revalidate: any }) {
  const refInput = useRef<HTMLInputElement>();

  const [isSubOwrner, setisSubOwrner] = useState(false);

  const { user: subOwner }: { user: User } = useAuthState();

  const openInput = (type: string) => {
    if (!isSubOwrner) return;
    refInput.current.name = type;
    refInput.current.click();
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const form = new FormData();
    form.append("image", e.target.files[0]);
    form.append("type", refInput.current.name);
    bannerUpload(form, sub.name, revalidate);
  };
  useEffect(() => {
    if (!sub || !subOwner) return;
    setisSubOwrner(sub.username === subOwner.username);
  }, [sub, subOwner]);

  return (
    <>
      {sub && (
        <BannerComp
          sub={sub}
          isSubOwner={isSubOwrner}
          refInput={refInput}
          openInput={openInput}
          handleUpload={handleUpload}
        />
      )}
    </>
  );
}

export default Banner;
