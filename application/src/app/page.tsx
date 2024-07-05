import Link from "next/link";
import { getUser } from "@/src/features/common/lib/data";

export default async function Home() {
  const users = await getUser();
  return (
    <main className="flex flex-col items-center justify-between gap-10 p-24">
      <h1 className="text-4xl font-bold text-center">Welcome to こめさんぽ</h1>
      <ul className="flex flex-wrap gap-8">
        {users.map((user) => (
          <li key={user.id} className="flex flex-col items-center">
            <p className="font-bold">{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
      <Link href="/list">list</Link>
    </main>
  );
}
