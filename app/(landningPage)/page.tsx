import localFont from "next/font/local";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/UNI North.otf",
});


const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 align-middle">
      <h1
        className={cn(
          "text-blue-300 text-6xl text-center",
          headingFont.className
        )}
      >
        Landing Page
      </h1>
      <Button className="my-32 text-2xl p-8" size={"lg"}>
        <Link href={"/events"}>Create New Session</Link>
      </Button>
    </main>
  );
};

export default LandingPage;
