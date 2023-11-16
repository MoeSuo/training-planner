import Link from "next/link"

import { Logo } from "@/components/logo"

export const Navbar = () =>{
    return (
        <div className="w-full px-8 flex justify-between h-auto p-4 items-center">
            <div>
                <Logo />
            </div>
            <div className="flex gap-16 ">
                <Link className="hover:text-opacity-75 p-2 rounded-lg  hover:bg-orange-200" href={"/"}>
                Home
                </Link>
                <Link className="hover:text-opacity-75 p-2 rounded-lg  hover:bg-orange-200" href={"/sessions"}>
                Sessions
                </Link>
                <Link className="hover:text-opacity-75 p-2 rounded-lg  hover:bg-orange-200" href={"/Events"}>
                Events
                </Link>
            </div>
        </div>
    )
}