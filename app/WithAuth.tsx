"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface WithAuthProps {
  children: ReactNode;
}

export function WithAuth({ children }: WithAuthProps): JSX.Element | null {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    // Handle the loading state
    if (status === "loading") return;
    // Redirect if not authenticated
    if (!session) {
      console.log("Redirecting to login page...");
      console.log("searchParams", searchParams.get("next"));
      console.log("pathname", `/login?next=${pathname}`);
      router.push(`/login?next=${pathname}`);
    }
  }, [status, session, router]);

  return session ? <>{children}</> : null;
}
