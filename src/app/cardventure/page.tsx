// src/app/cardventure/page.tsx
import Link from "next/link";

export default function CardventurePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Cardventure</h1>
      <p className="text-lg mb-6 text-gray-600">This page is under construction.</p>
      <Link
        href="/cardventure/privacy"
        className="text-blue-600 hover:underline text-sm"
      >
        Read our Privacy Policy
      </Link>
    </main>
  );
}
