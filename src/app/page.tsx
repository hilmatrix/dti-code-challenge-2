// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-2">Welcome to Hilmatrix</h1>
      <p className="text-gray-600 mb-6">This site is still under construction. Contact me at hilmatrix.dummy@gmail.com, or Discord : hilmatrix</p>

      <h2 className="text-2xl font-semibold mb-4">Games</h2>
      <ul className="space-y-2">
        <li>
          <Link
            href="/cardventure"
            className="text-blue-600 hover:underline text-lg"
          >
            Hilmatrix Cardventure
          </Link>
        </li>
      </ul>
    </main>
  );
}
