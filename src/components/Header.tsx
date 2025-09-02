import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import ModeToggle from "./ModeToggle";
import { getUser } from "@/auth/server";
import LogOutButton from "./LogOutButton";
import { SidebarTrigger } from "./ui/sidebar";

async function Header() {
  const user = await getUser();

  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <SidebarTrigger className="absolute top-1 left-1" />
      
      <Link className="flex items-center gap-2" href="/">
        <Image
          src="/logo01.png"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
        />

        {/* <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
          AI <span>Notes</span>
        </h1> */}
        <h1 className="text-2xl font-semibold pb-1 leading-6">
          Noto
        </h1>
      </Link>

      <div className="flex gap-4">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            <Button asChild className="hidden sm:block">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}

        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
