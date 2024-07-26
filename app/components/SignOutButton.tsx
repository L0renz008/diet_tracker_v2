"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <Button variant={"destructive"} onClick={() => signOut()}>
      Logout
    </Button>
  );
};
