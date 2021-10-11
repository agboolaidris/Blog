import React from "react";
import classNames from "classnames";
function CreateSubForm({
  state,
  error,
  handleChange,
  handleSubmit,
}: {
  state: { name: string; title: string; description: string };
  error: any;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="text-gray-500">Name</label>
        <p className="text-xs text-gray-400">
          Community names including capitalization cannot be changed.
        </p>
        <input
          className={classNames(
            "w-full h-12 px-1 mt-2 text-sm bg-transparent border  rounded outline-none focus:ring-2 focus:ring-gray-400 ",
            { "border-red-500": error?.name, "border-gray-400": !error?.name }
          )}
          placeholder="sub name"
          onChange={handleChange}
          value={state.name}
          name="name"
        />
        {error?.name && (
          <span className="text-xs text-red-500">{error.name}</span>
        )}
      </div>
      <div className="mt-3">
        <label className="text-gray-500">Title</label>
        <p className="text-xs text-gray-400">
          Community title including capitalization cannot be changed.
        </p>
        <input
          className={classNames(
            "w-full h-12 px-1 mt-2 text-sm bg-transparent border  rounded outline-none focus:ring-2 focus:ring-gray-400 ",
            { "border-red-500": error?.title, "border-gray-400": !error?.title }
          )}
          placeholder="sub title"
          onChange={handleChange}
          value={state.title}
          name="title"
        />
        {error?.title && (
          <span className="text-xs text-red-500">{error.title}</span>
        )}
      </div>
      <div className="mt-3">
        <label className="text-gray-500">Description</label>
        <p className="text-xs text-gray-400">
          This is how new member understand your community.
        </p>
        <textarea
          rows={4}
          className="w-full h-12 px-1 pt-2 mt-2 text-sm bg-transparent border border-gray-400 rounded outline-none focus:ring-2 focus:ring-gray-400 "
          placeholder="description"
          onChange={handleChange}
          value={state.description}
          name="description"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button className="px-3 py-1 my-1 text-white bg-blue-500 rounded hover:bg-blue-700">
          Create Community
        </button>
      </div>
    </form>
  );
}

export default CreateSubForm;
