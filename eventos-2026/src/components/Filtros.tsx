export default function Filtros({ setFiltro }: any) {
  return (
    <div className="card">
      <select onChange={e => setFiltro(e.target.value)}>
        <option value="">Todos</option>
        <option value="Ativo">Ativo</option>
        <option value="Finalizado">Finalizado</option>
        <option value="Cancelado">Cancelado</option>
      </select>
    </div>
  );
}
