import { ModeToggle } from "./mode-toggle";
export default function Footer() {
  return (
    <footer className="flex sticky top-full items-center justify-between border-t px-5">
      <div className="flex text-sm text-muted-foreground p-4">
        &copy; kuboki
      </div>
      <span className="flex-1"></span>

      <ModeToggle />
    </footer>
  );
}
