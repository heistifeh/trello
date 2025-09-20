"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { ArrowRight, Trello } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { isSignedIn, user } = useUser();

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isDashboardPage = pathname === "/dashboard";
  const isBoardPage = pathname?.startsWith("/board/");

  if (isDashboardPage) {
    return (
      <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trello className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              Trello Clone
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <UserButton />
          </div>
        </div>
      </header>
    );
  }

  if (isBoardPage) {
  }
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trello className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            Trello Clone
          </span>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <div>
            {isSignedIn && user ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                  <span className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                    Welcome,{" "}
                    {user.firstName ?? user.emailAddresses[0].emailAddress}!
                  </span>
                  <Link href="/dashboard">
                    <Button
                      size={"sm"}
                      className="text-xs sm:text-sm cursor-pointer"
                    >
                      {" "}
                      Go to Dashboard <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <SignInButton>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs sm:text-sm cursor-pointer"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="text-xs sm:text-sm cursor-pointer">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
