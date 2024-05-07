import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

let links = [
  { path: "/1-steps", label: "Lesson 1 - Multistep wizard" },
  { path: "/2-email", label: "Lesson 2 - Email client" },
  { path: "/3-header-part-1", label: "Lesson 3 - Fixed header: Part 1" },
  { path: "/4-header-part-2", label: "Lesson 4 - Fixed header: Part 2" },
  { path: "/5-carousel-part-1", label: "Lesson 5 - Carousel: Part 1" },
  { path: "/6-carousel-part-2", label: "Lesson 6 - Carousel: Part 2" },
  { path: "/7-resizable-panel", label: "Lesson 7 - Resizable panel" },
  { path: "/8-calendar", label: "Lesson 8 - Calendar" },
];

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="p-8">
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className="text-blue-600 underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
