import "./globals.css";

export const metadata = {
  title: "VICTIS",
  description: "VICTIS is a college-started software solutions company from Kerala, India, building reliable software for real-world needs.",
  openGraph: { title: "VICTIS", description: "Victory Rules the Realm.", },
};
export const viewport = { themeColor: "#040203" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
