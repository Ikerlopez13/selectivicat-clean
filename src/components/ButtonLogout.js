"use client";

import { signOut } from "next-auth/react";

const ButtonLogout = () => {
  return (
    <button 
      onClick={() => signOut()} 
      className="btn btn-ghost hover:bg-red-500 hover:text-white"
    >
      Tancar sessió
    </button>
  );
};

export default ButtonLogout;
