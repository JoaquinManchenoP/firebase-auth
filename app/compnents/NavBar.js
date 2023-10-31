import React, { useState, useEffect } from "react";
import Link from "next/link";
import { userAuth } from "../context/AuthContext";
import { redirect } from "next/navigation";

export default function NavBar() {
  const { user, googleSignIn, logOut } = userAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 275));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full bg-red-900 flex justify-between p-4 ">
      <div className="routes space-x-3">
        <Link href={"/"}>Home</Link>
        {!user ? <div></div> : <Link href="/userProfile">profile</Link>}
      </div>
      {loading ? null : !user ? (
        <div className="login space-x-3 ">
          <button onClick={handleSignIn} className="cursor-pointer">
            Login
          </button>
          <button onClick={handleSignIn} className="cursor-pointer">
            Sign Up
          </button>
        </div>
      ) : (
        <div className="login space-x-3 ">
          <span>Hello {user.displayName}</span>
          <button onClick={handleSignOut} className="cursor-pointer">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
