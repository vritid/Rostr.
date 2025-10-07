import type { Route } from "./+types/home";
import SignInPage from "~/sign-in-page/SignInPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rostr." },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <SignInPage />;
}
