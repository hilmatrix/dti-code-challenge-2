// src/app/cardventure/page.tsx
import Link from "next/link";

export default function CardventurePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-2">Hilmatrix Cardventure</h1>
      <p className="text-gray-600 mb-6">This page is under construction.</p>

      <div className="space-x-4">
        <Link
          href="/cardventure/privacy"
          className="text-blue-600 hover:underline"
        >
          View Privacy Policy →
        </Link>

        <br></br>
        <br></br>

        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>\
      </div>
    </main>
  );
}
