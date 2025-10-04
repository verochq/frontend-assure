import { useMemo, useState } from "react";

export default function WordCounter() {
  const [content, setContent] = useState("");

  const cachedValue = useMemo(() => {
    const words = content.split(/\s+/).filter((word) => word !== "");

    const wordperminute = words.length > 0 ? words.length / 200 : 0;

    const averagewordlenght =
      words.reduce((acc, word) => acc + word.length, 0) / words.length || 0;

    return {
      words,
      wordperminute,
      averagewordlenght,
    };
  }, [content]);

  return (
    <>
      <textarea
        style={{ width: 300, height: 100 }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <p> Cantidad de palabras: {cachedValue.words.length}</p>
      <p>
        {" "}
        Promedio de longitud de palabras:{" "}
        {cachedValue.averagewordlenght.toFixed(2)}
      </p>
      <p>
        {" "}
        Tiempo de lectura estimado: {cachedValue.wordperminute.toFixed(2)}{" "}
        minutos{" "}
      </p>
    </>
  );
}
