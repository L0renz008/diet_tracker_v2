import { LightDarkSwitch } from "./components/LightDarkSwitch";
import { SignInButton } from "./components/SignInButton";
import { User } from "./components/User";
import { auth } from "./src/lib/auth";

//TODO Enlever le doublon avec le layout (titre et boutons)
export default async function Home() {
  const session = await auth();

  if (session) {
    return <User />;
  }
  return (
    <div className="flex justify-between ">
      <h1 className="text-2xl font-bold">Diet Tracker</h1>

      <div className="flex gap-4">
        <SignInButton />
        <LightDarkSwitch />
      </div>
    </div>
  );
}
