import Caterpillar from "./caterpillar/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <Caterpillar /> */}
      <Link href="caterpillar">Caterpillar</Link>
      <Link href="three-cats">Three cats</Link>
    </main>
  );
}
