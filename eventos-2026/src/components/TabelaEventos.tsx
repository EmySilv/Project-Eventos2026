export default function TabelaEventos({ eventos }: any) {
  return (
    <div className="card">
      <h2>Eventos</h2>
      <table width="100%" border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Evento</th>
            <th>Categoria</th>
            <th>Status</th>
            <th>Data</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((e:any) => (
            <tr key={e.id}>
              <td>{e.nomeEvento}</td>
              <td>{e.categoria}</td>
              <td>{e.status}</td>
              <td>{e.data}</td>
              <td>{e.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
