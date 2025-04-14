import React from 'react';
import Search from './Search';  

export default function Left() {
  return (
    <div className="w-[30%] border border-white bg-black text-white">
      <h1 className="font-bold text-2xl px-11align-top">Chats</h1>
      <Search /> {/* Self-closing tag */}
      <hr />
      <hr />
    </div>
  );
}

?h