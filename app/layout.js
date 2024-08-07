import { Inter } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/UI/Header/HeaderSection";
import Footer from "@/components/UI/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WH Tribute",
  description: "A Blog website of Technology and Coding related content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderSection />
        {children}
        <Footer />
        </body>
    </html>
  );
}
