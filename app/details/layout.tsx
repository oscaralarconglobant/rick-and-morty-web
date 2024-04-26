import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageContainer } from "@/styles";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick And Morty",
  description: "Oscar Alarcón Rodríguez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageContainer>
      <Navbar />
      <>{children}</>
    </PageContainer>
  );
}
