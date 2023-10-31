"use client";
import { useState, useEffect } from "react";
import { userAuth } from "./context/AuthContext";
import { redirect } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { user } = userAuth();

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 270));
      setLoading(false);
    };
    checkAuthentication();
    if (user) {
      redirect("/userProfile");
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mainpage">
        this is the home page for users and non users
      </div>
    </main>
  );
}
