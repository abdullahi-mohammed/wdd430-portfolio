import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div id="header-title" className="text-2xl font-bold tracking-tight">
          <Link href="/" className="hover:text-blue-100 transition-colors">
            Abdullahi Mohammed
          </Link>
        </div>
        <nav aria-label="Main Navigation">
          <ul className="flex gap-6 font-medium">
            <li>
              <Link href="/" className="hover:underline hover:text-blue-100 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-blue-100 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

