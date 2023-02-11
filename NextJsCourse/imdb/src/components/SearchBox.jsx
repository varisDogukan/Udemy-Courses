'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = evn => {
    evn.preventDefault();

    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex items-center gap-4">
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
        value={search}
        onChange={evn => setSearch(evn.target.value)}
      />
      <button
        type="submit"
        disabled={!search}
        className="text-amber-500 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
