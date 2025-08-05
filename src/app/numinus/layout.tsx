import Footer from "../../components/footer/index";
import Header from "../../components/header/index";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header>
        </Header>
        <div className="flex-1">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
