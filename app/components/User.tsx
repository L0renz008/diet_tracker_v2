import { Session } from "next-auth";
import Image from "next/image";
import { auth } from "../src/lib/auth";
import { SignOutButton } from "./SignOutButton";

export type UserProps = {
  sessionUser: NonNullable<Session["user"]>;
};

export const User = async () => {
  const session = await auth();

  if (!session?.user) {
    return <p>Connectez vous pour voir vos informations.</p>;
  }
  return (
    <div className="block">
      <div>
        <Image
          className="w-24 rounded-full"
          src={session.user.image ?? ""}
          alt="User Avatar"
          width={24}
          height={24}
        />
      </div>

      <h3 className="mt-4 text-lg font-bold  sm:text-xl">{session.user.name}</h3>

      <p className="mt-2 max-w-sm text-gray-400">{session.user.email}</p>
      <SignOutButton />
    </div>
  );
};
