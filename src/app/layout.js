import "./globals.css";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Website",
  description: "Landing page project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="pb-[200px]">
          {children}
        </main>
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
