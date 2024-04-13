"use client";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const LoginWithGoogle = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="text-black py-2 px-4 rounded flex items-center gap-2"
    >
      <FaGoogle />
      <span>Entre com a Google</span>
    </button>
  );
};

export default LoginWithGoogle;
