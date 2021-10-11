import React from "react";

function Button({ name }) {
  return (
    <button className="w-full px-4 py-2 mt-2 text-white bg-blue-600 border border-blue-200 rounded-md text-md hover:text-white hover:bg-blue-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
      {name}
    </button>
  );
}

export default Button;
