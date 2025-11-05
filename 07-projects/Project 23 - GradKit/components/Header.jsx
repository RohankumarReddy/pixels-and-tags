import React from "react";
import { BookOpen } from "lucide-react";
import { Brain } from "lucide-react";

import { checkUser } from "@/lib/checkUser";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = async() => {
  await checkUser()
  return (
    <header className="top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 fixed">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={"/"}>
          <Image
  src="/logo1.png"
  alt="logo"
  width={500} // intrinsic width
  height={300} // intrinsic height
  className="h-20 w-auto md:h-32 lg:h-42 object-contain"
/>

        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant={"outline"}>
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-2"
                  >
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
  <Link href="/learning-feed" className="flex items-center gap-2">
    <Brain className="h-4 w-4" />
    Learning Feed
  </Link>
</DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>

            <UserButton 
            appearance={{
              elements:{
                avatarBox:'w-10 h-10',
                userButtonPopoverCard:'shadow-xl',
                userPreviewMainIdentifier:'font-semibold'
              },
            }} />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
