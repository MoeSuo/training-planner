import localFont from "next/font/local";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/UNI North.otf",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SessionPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 align-middle">
      <h1
        className={cn(
          "text-blue-300 text-6xl text-center",
          headingFont.className
        )}
      >
        Session Page
      </h1>

    </main>
  );
};

export default SessionPage;
