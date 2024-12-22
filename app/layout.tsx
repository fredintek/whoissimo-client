import type { Metadata } from "next";
import "./globals.css";
import LocalFont from "next/font/local";
import ReduxProvider from "@/redux/ReduxProvider";

const Helvetica = LocalFont({
  src: [
    {
      path: "./../public/fonts/HelveticaNeue.ttf",
      weight: "400",
    },
  ],
  variable: "--font-helvetica",
});

const SwashBreakTrial = LocalFont({
  src: [
    {
      path: "./../public/fonts/swash-break-trial.regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-swash-break-trial",
});

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
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${Helvetica.variable} ${SwashBreakTrial.variable} font-helvetica antialiased min-h-[100vh] flex flex-col`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
