"use client";

import { useEventsContext } from "@/app/context/eventsContext";

export default function Filtros() {
  const { colunas, setColunaSelecionada } = useEventsContext();

  return (
    <select onChange={e => setColunaSelecionada(e.target.value)}>
      <option value="">Selecionar coluna</option>
      {colunas.map((col: string) => (
        <option key={col} value={col}>
          {col}
        </option>
      ))}
    </select>
  );
}
