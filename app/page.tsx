import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>hi prathmesh</h2>
      <Button>subscribe</Button>
      <UserButton />
    </div>
  );
}
