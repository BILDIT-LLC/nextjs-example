"use client";

import * as React from "react";
import Link from "next/link";
import cn from "classnames";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", name: "Home" },
  { href: "/json", name: "JSON" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">BILDIT CMS Example</span>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button>
              <Link href="/login">Log in</Link>
            </button>
            <button>
              <Link href="/signup">Sign up</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <div>
            <div>
              <button className="h-9 w-9">
                <span className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </div>
            <div>
              <nav className="flex flex-col space-y-4 pt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4">
                  <button>
                    <Link href="/login">
                      Log in
                    </Link>
                  </button>
                  <button>
                    <Link href="/signup">
                      Sign up
                    </Link>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
