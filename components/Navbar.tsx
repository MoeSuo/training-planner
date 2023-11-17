import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { UserButton, auth, currentUser } from "@clerk/nextjs";

export const Navbar = async () => {
  const user = await currentUser();
  const { userId } = auth();
  return (
    <div className="fixed top-0 w-full border-b shadow-sm bg-white flex justify-between h-14 px-4 items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex gap-16 ">
          <Link
            className="hover:text-opacity-75 p-2 rounded-lg  hover:bg-orange-200"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:text-opacity-75 p-2 rounded-lg  hover:bg-orange-200"
            href={"/sessions"}
          >
            Sessions
          </Link>
          <Link
            className="hover:text-opacity-75 p-2 rounded-lg  hover:bg-orange-200"
            href={"/events"}
          >
            Events
          </Link>
        </div>
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <div>
            <Button variant={"ghost"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
