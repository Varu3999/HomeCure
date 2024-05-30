import { Outfit } from "next/font/google";
import "./globals.css";
import Headers from "./_components/Headers";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Headers />
        {children}
      </body>
    </html>
  );
}