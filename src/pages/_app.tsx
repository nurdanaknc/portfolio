import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({
  weight: ['100','200','300','400', '500','600' ,'700'], // İstediğin font weight'leri buraya ekleyebilirsin
  subsets: ['latin'], // Desteklediğin diller
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${robotoMono.className} py-16`}>
      <Navbar />
      <Component {...pageProps}  />
    </main>
);
}
