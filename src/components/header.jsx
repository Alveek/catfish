import { House } from "lucide-react";
import Link from "next/link";

export default function Header({ title }) {
  return (
    <div className="flex justify-between mb-4 px-5 py-4 bg-gradient-to-r from-teal-200 to-cyan-200">
      <Link className="text-teal-600" href={"/"}>
        <House strokeWidth={2} />
      </Link>
      <div className="font-semibold text-teal-600">{title}</div>
    </div>
  );
}
