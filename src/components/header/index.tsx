"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const navLinks = [
    { href: "/", label: "_hello" },
    { href: "/about", label: "_about-me" },
    { href: "/projects", label: "_projects" },
    // { href: "/contact", label: "_contact-me" },
  ];
  return (
    <header className="flex flex-row justify-between border-b border-(--color-theme-stroke) w-full">
      <div className="flex header-name flex-row">
        <div className="w-[326px] px-12 py-8 border-r border-(--color-theme-stroke)">
          <p className="text-md text-(--color-theme-foreground)">h-timw</p>
        </div>
        <div className="flex flex-row">
          {navLinks?.map((navItem, index) => (
            <Link
              href={navItem.href}
              key={`${navItem.href}_${index}`}
              className={clsx(
                "px-16 py-8 border-r border-r-(--color-theme-stroke)",
                {
                  "text-(--color-heading-foreground) border-b-2 border-b-(--color-primary-background)":
                    pathName === navItem.href,
                  "text-(--color-theme-foreground)": pathName !== navItem.href,
                }
              )}
            >
              <p>{navItem.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="/contact"
        key="contact"
        className={clsx("px-16 py-8 border-l border-l-(--color-theme-stroke)", {
          "text-(--color-heading-foreground) border-b-2 border-b-(--color-primary-background)":
            pathName === "/contact",
          "text-(--color-theme-foreground)": pathName !== "/contact",
        })}
      >
        <p>_contact-me</p>
      </Link>
    </header>
  );
}
