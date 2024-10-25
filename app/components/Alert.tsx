import React from "react";

const Alert = () => {
  return (
    <div
      className="bg-teal-100 border border-teal-400 text-teal-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Looking For Work!</strong>{" "}
      <span className="block sm:inline">
        Due to a reduction in force at my previous company, I'm actively
        searching for a new opportunity. Please check out{" "}
        <a
          className="font-bold underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/rjelte/"
        >
          LinkedIN
        </a>{" "}
        for my latest resume!
      </span>
    </div>
  );
};

export default Alert;
