'use client'

// import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Form from "@/components/form/Form";
import SectionTitle from "@/components/section-title/SectionTitle";


// const headingFont = localFont({
//   src: "../../public/fonts/UNI North.otf",
// });

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


const SessionPage = () => {
  return (
    <main className={cn("relative min-h-screen p-8",
    textFont.className)}>
      <div className="p-10">
        <SectionTitle>Create Your Event</SectionTitle>
      {/* <h1
        className={cn(
          "text-slate-500 text-6xl font-semibold tracking-tight",
          textFont.className,
          
        )}
      >
        Create Your Event
      </h1> */}
<Form />

      </div>
    </main>
  );
};

export default SessionPage;
