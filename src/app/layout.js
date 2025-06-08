import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer";
import { Toaster } from 'react-hot-toast';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RegisterBlock",
  description: "A real estate investment platform on blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div style={{
          maxWidth:"1440px",
          width:"100%"
        }}>
          <Navbar />
          <Toaster position="top-right" reverseOrder={false} />
          
          {children}
          <Footer />
          </div>
      </body>

    </html>
  );
}
