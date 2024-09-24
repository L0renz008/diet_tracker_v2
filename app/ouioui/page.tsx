"use client";

import { SessionProvider } from "next-auth/react";
import { WithAuth } from "../WithAuth"; // Ensure WithAuth is correctly imported

export default function ProtectedPageWrapper() {
  return (
    <SessionProvider>
      <WithAuth>
        <div>THIS IS A PROTECTED PAGE</div>
      </WithAuth>
      <p>Je suis là</p>
    </SessionProvider>
  );
}
