import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/beautician_components/Navbar/Navbar";
import Footer from "@/beautician_components/Footer/Footer";
// import { getBusinessDetails } from "@/Components/apicall";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const colorScheme = {
    primary: "#CDA29B",  //pink
    background: "#fdfafa", //lighwhite
    secondary: "#59453c", //brown
    ternary: "#F7F1F1", //lightgreyback
    primary_text: "#F3E9E7",//light white text
    secondary_text: "#908684",//light brown text
  };
  // const businessData = await getBusinessDetails("domainname");
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          " --color-background": colorScheme.background,
          "--color-primary": colorScheme.primary,
          "--color-secondary": colorScheme.secondary,
          "--color-ternary": colorScheme.ternary,
          "--color-text-primary": colorScheme.primary_text,
          "--color-text-secondary": colorScheme.secondary_text,
        }}
      >
       <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
