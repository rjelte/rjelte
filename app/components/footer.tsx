function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      {/* <button className="border-solid border-1 border-slate-200 bg-slate-900">
        slate-900
      </button>
      <button className="border-solid border-1 border-slate-200 bg-teal-800">
        teal-800
      </button>
      <button className="border-solid border-1 border-slate-200 bg-teal-500">
        teal-500
      </button>
      <button className="border-solid border-1 border-slate-200 bg-orange-700">
        orange-700
      </button>
      <button className="border-solid border-1 border-slate-200 bg-indigo-700">
        indigo-600
      </button>
      <button className="border-solid border-1 border-slate-200 bg-slate-200 text-gray-700">
        slate-200
      </button>
      <button className="border-solid border-1 border-slate-200 bg-white text-gray-700">
        white
      </button> */}
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rjelte/rjelte"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
