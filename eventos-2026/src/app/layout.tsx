import "@/app/css/page.css";

import { EventsProvider } from "@/app/context/eventsContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <EventsProvider>
          {children}
        </EventsProvider>
      </body>
    </html>
  );
}