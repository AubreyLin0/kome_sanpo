import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-10 p-24">
      <h1 className="text-4xl font-bold text-center">Welcome to こめさんぽ</h1>
      <Link href="/list">list</Link>
    </main>
  );
}
