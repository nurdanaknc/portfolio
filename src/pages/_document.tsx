import Navbar from "@/components/navbar";
import { Html, Head, Main, NextScript } from "next/document";



export default function Document() {
  return (
    <Html lang="en" className=" ">
      <meta name="Nurdan Akıncı Frontend Developer" content="Portfolio website " />
      <title>Nurdan Akıncı</title>
      <Head />
      <body className="  sm:container  mx-4  sm:mx-auto ">
       
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
