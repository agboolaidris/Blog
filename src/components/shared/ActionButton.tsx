import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ActionBution({
  href,
  icon,
  name,
  style,
}: {
  href: string;
  icon: any;
  name: string;
  style?: string;
}) {
  return (
    <Link href={`${href}`}>
      <div
        className={`flex items-center  rounded cursor-pointer hover:bg-gray-300 ${style}`}
      >
        <FontAwesomeIcon icon={icon} />
        <span className="ml-1">{name}</span>
      </div>
    </Link>
  );
}

export default ActionBution;
