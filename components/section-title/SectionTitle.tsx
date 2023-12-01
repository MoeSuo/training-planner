import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({subsets: ['latin'], weight:['600']})


export default function SectionTitle ({children}:{children: React.ReactNode}){
    return(
        <>
        <h1
        className={cn(
          "text-slate-500 sm:text-3xl md:text-5xl font-semibold tracking-tight pb-4",
          poppins.className,
          
        )}
      >
       {children}
      </h1>
        </>
    )
}