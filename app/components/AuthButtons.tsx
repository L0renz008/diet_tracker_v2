"use client";
//TODO Supprimer le composant car inutile avec les nouveaux

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";

// import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <Button
      variant={"outline"}
      onClick={() => signIn("google", { redirectTo: "http://localhost:3000/dashboard" })}
    >
      Login
    </Button>
  );
};
export const LogoutButton = () => {
  return (
    <Button variant={"destructive"} onClick={() => signOut()}>
      Logout
    </Button>
  );
};
