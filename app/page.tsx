import { Button } from "@/components/ui/button";
import Profile from "../components/profile";
import HomePage from "@/components/HomePage";
import SideNav from "@/components/SideNav";
export default function Home() {
  return (
    <main className="container flex justify-center pt-3">
      <SideNav/>
      <HomePage/>
      <Profile/>
    </main>
  );
}
