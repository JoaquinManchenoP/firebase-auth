"use client";
import React, { useEffect, useState } from "react";
import { userAuth } from "../context/AuthContext";
import { redirect } from "next/navigation";

export default function page() {
  const [loading, setLoading] = useState(true);
  const { user } = userAuth();

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 270));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <div>Loading...</div>
      ) : !user ? (
        <div> You must be logged in to access this page - Potected Route</div>
      ) : (
        <div>Welcome {user.displayName} to your profile page</div>
      )}
    </div>
  );
}
