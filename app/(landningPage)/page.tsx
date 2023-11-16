import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 align-middle">
      <h1>Landing Page</h1>
      <Button className="my-8 text-2xl p-8" size={"lg"}>
        <Link href={"/sign-in"}>
        Create New Session
        </Link>
      </Button>
      {/* <div
        className="text-2xl md:text-6xl absolute bottom-0 opacity-100
            bg-gradient-to-r from-fuchsia-600 to-pink-400
             text-white text-center rounded-md p-8 m-8" 
      >
        MASTER YOUR GAME
      </div> */}
    </main>
  );
};

export default LandingPage;
