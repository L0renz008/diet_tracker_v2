import { useRouter, useSearchParams } from "next/navigation";
import { GoogleSignInButton } from "../components/GoogleSignInButton";

export default async function Login() {
  // const session = await auth();
  const searchParams = useSearchParams();
  const router = useRouter();
  console.log(searchParams.get("next"));
  await router.back();

  return <GoogleSignInButton />;
}
