import { signIn, auth } from "@/auth";
import { useSession } from "next-auth/react";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("keycloak");
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  );
}
