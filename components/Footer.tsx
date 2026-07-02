import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:pl-32 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with intent.
        </p>
        <p className="font-mono text-xs text-muted">{profile.role} · {profile.institute}</p>
      </div>
    </footer>
  );
}
