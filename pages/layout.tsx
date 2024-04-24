import { Inter } from "next/font/google";
import "../app/globals.css";
import Menu from "@/app/components/Shared/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <main className="flex w-full flex-col items-center justify-center bg-black px-5 relative">
        <Menu></Menu>
        {children}
      </main>
    </div>
  );
}
