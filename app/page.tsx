import { Button } from "@/components/ui/button";
import Profile from "../components/profile";
import HomePage from "@/components/HomePage";
import SideNav from "@/components/SideNav";
export default function Home() {
  return (
    <main className="flex justify-center pt-3">
      <Profile/>
      <HomePage/>
      <SideNav/>
    </main>
  );
}
