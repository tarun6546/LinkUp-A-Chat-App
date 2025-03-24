import React from "react";
import { IoIosSearch } from "react-icons/io";

function Search() {
  return (
    <div className="px-6 py-4">
      <form action="">
        <div className="flex" space-x-3>
          <label className="input input-bordered flex items-center gap-2 w-[80%]">
            <IoIosSearch />
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button>
            <IoIosSearch className="text-4xl p-2 hover:bg-gray-400 rounded full duration-200" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
