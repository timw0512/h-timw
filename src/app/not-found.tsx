import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-(--color-theme-background) text-(--color-heading-foreground)">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-md bg-(--color-theme-background) text-(--color-heading-foreground)"
      >
        Go back home
      </Link>
    </div>
  );
}
