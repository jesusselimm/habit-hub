import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HabitHub - Habit tracking that works like a Coach",
  description: "A modern, intelligent platform that helps you build sustainable habits and stay motivated on your journey to success.",
  icons: {
    icon: '/image/HabitHub-Logo.svg',
    shortcut: '/image/HabitHub-Logo.svg',
    apple: '/image/HabitHub-Logo.svg',
  },
  openGraph: {
    title: "HabitHub - Habit tracking that works like a Coach",
    description: "A modern, intelligent platform that helps you build sustainable habits and stay motivated on your journey to success.",
    url: 'https://habithub.com',
    siteName: 'HabitHub',
    images: [
      {
        url: '/image/HabitHub-Logo.svg',
        width: 180,
        height: 180,
        alt: 'HabitHub Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HabitHub - Habit tracking that works like a Coach",
    description: "A modern, intelligent platform that helps you build sustainable habits and stay motivated on your journey to success.",
    images: ['/image/HabitHub-Logo.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-poppins`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
