"use client";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

const headingFont = localFont({
  src: "../../public/fonts/UNI North.otf",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const EventsPage = () => {
  const { userId } = useAuth();
  const { user } = useUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 align-middle">
      <h1
        className={cn(
          "text-blue-300 text-6xl text-center",
          headingFont.className
        )}
      >
        Events Page
      </h1>
      <div></div>
    </main>
  );
};

export default EventsPage;
