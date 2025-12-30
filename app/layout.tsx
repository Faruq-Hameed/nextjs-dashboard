import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*by applying the font in the body, it applied it throughout the application 
      and added optional antialiased class which smooths out the font*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
