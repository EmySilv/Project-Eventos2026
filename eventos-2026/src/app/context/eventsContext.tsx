"use client";

import { createContext, useContext } from "react";
import { useEvents } from "@/app/hooks/useEvents";

const EventsContext = createContext<any>(null);

export function EventsProvider({ children }: { children: React.ReactNode }) {
  const events = useEvents();
  return (
    <EventsContext.Provider value={events}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEventsContext() {
  return useContext(EventsContext);
}
