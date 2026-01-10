import "./globals.css";

export const metadata = {
  title: "Eventos 2026",
  description: "Dashboard de eventos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
