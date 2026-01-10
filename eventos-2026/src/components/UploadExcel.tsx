import { useState } from "react";
import * as XLSX from "xlsx";

type ExcelRow = Record<string, any>;

export default function UploadExcel() {
  const [file, setFile] = useState<File | null>(null);
  const [rows, setRows] = useState<ExcelRow[]>([]);
  const [columns, setColumns] = useState<string[]>([]);

  const [mapping, setMapping] = useState({
    name: "",
    theme: "",
    type: "",
    date: ""
  });

  // 1️⃣ Upload do arquivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  // 2️⃣ Leitura do Excel
  const handleUpload = () => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (evt) => {
      const data = evt.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData: ExcelRow[] = XLSX.utils.sheet_to_json(sheet);

      if (jsonData.length === 0) return;

      setRows(jsonData);
      setColumns(Object.keys(jsonData[0]));
    };

    reader.readAsBinaryString(file);
  };

  // 3️⃣ Gerar dados já mapeados
  const handleGenerate = () => {
    const { name, theme, type, date } = mapping;

    if (!name || !theme || !type || !date) {
      alert("Mapeie todas as colunas antes de continuar");
      return;
    }

    const formatted = rows.map((row) => ({
      name: row[name],
      theme: row[theme],
      type: row[type],
      date: row[date]
    }));

    console.log("DADOS PRONTOS PARA GRÁFICO:", formatted);
    // 👉 aqui você envia para o componente de gráfico
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload de Excel</h2>

      <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
      <br /><br />

      <button onClick={handleUpload}>Enviar arquivo</button>

      {columns.length > 0 && (
        <>
          <h3>Mapeamento de colunas</h3>

          {[
            { key: "name", label: "Nome do evento" },
            { key: "theme", label: "Tema" },
            { key: "type", label: "Tipo" },
            { key: "date", label: "Data" }
          ].map(({ key, label }) => (
            <div key={key} style={{ marginBottom: 10 }}>
              <label>{label}: </label>
              <select
                value={(mapping as any)[key]}
                onChange={(e) =>
                  setMapping({ ...mapping, [key]: e.target.value })
                }
              >
                <option value="">Selecione</option>
                {columns.map((col) => (
                  <option key={col} value={col}>
                    {col}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button onClick={handleGenerate}>Gerar gráfico</button>
        </>
      )}
    </div>
  );
}