import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House Of Simo",
  description: "Here you get the best art experince of your life time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>PROTECTED LAYOUT</h1>
      {children}
    </div>
  );
}
