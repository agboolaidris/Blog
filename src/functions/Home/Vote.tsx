import React from "react";
import { useRouter } from "next/router";
import Arrow from "../../components/shared/Arrow";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "../../States/Context/Auth";
import { vote } from "../../States/Api/post";

interface VoteProps {
  voteScore: any | undefined;
  slug: string;
  Uservote: number;
  identifier: string;
  commentIdentifier?: string;
  revalidate?: Function;
}

const Vote: React.FC<VoteProps> = ({
  voteScore,
  slug,
  Uservote,
  identifier,
  commentIdentifier,
  revalidate,
}) => {
  const routers = useRouter();
  const { isAuthenticated } = useAuthState();

  const handleVote = (value: number) => {
    //if user not authenticated redirect to login page
    if (!isAuthenticated) return routers.push("/signin");

    //check if the value is equal to the previous value
    if (value === Uservote) value = 0;
    vote({ slug, identifier, value, commentIdentifier }, revalidate);
  };

  return (
    <>
      <Arrow
        icon={faArrowUp}
        style={
          Uservote === 1
            ? "hover:red-red-600 text-red-600"
            : "hover:text-red-600 text-gray-600"
        }
        handleClick={() => handleVote(1)}
      />
      <span>{voteScore}</span>
      <Arrow
        icon={faArrowDown}
        style={
          Uservote === -1
            ? "hover:text-blue-600 text-blue-600"
            : "hover:text-blue-600 text-gray-600"
        }
        handleClick={() => handleVote(-1)}
      />
    </>
  );
};

export default Vote;
