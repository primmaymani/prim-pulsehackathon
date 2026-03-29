import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PulseCircle",
  description: "A warm, supportive home cardiac rehab companion demo built for hackathon deployment."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
