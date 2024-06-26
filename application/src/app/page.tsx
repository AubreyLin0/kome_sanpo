import { getUser } from "@/lib/data";

export default async function Home() {
  // const users = await getUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Welcome to こめさんぽ</h1>
      {/* <ul className="flex flex-wrap gap-8">
        {users.map((user) => (
          <li key={user.id} className="flex flex-col items-center">
            <p className="font-bold">{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
