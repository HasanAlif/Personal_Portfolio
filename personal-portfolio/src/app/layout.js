import { Outfit } from "next/font/google"
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"]});

export const metadata = {
  title: "Alif",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}