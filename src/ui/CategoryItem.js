import React from "react";

function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col group text-center p-4 items-center gap-y-2 transition hover:bg-purple-50"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded border border-gray-200"
      ></img>
      <span className="text-sm font-semibold whitespace-nowrap text-gray-700 group-hover:text-brand-color tracking-tight">
        {title}
      </span>
    </a>
  );
}

export default Category;
