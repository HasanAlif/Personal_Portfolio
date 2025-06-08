import { Outfit } from "next/font/google"
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"]});

export const metadata = {
  title: "Alif",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className= {outfit.className}>{children}</body>
    </html>
  );
}
