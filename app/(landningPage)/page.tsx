import localFont from "next/font/local";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/UNI North.otf",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <p
        className={cn(
          "text-slate-500 text-xl text-center md:max-w-[30%]",
          textFont.className
        )}
      >
        Minimal Page with only a button to sign-in page
      </p>
      <Button className="my-32 text-2xl p-8" size={"lg"}>
        <Link href={"/sign-in"}>Create New Session</Link>
      </Button>
    </main>
  );
};

export default LandingPage;
