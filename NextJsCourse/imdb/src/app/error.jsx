'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button
        className="hover:text-amber-600 bg-amber-600 dark:text-white hover:bg-transparent border rounded-sm font-semibold border-amber-600 border-solid p-2 mt-4"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
