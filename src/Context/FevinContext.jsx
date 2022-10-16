import * as React from "react";
import { createContext, useState, useEffect } from "react";

export const FevinContext = createContext();

export function FevinContextProvider(props) {
  const [resultados, setResultados] = useState({ cargando: true, data: null });
  const [resultadosCartas, setResultadosCartas] = useState({
    cargando: true,
    data: null,
  });

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";

    const llamarApi = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setResultados({ cargando: false, data: json.results });
        setResultadosCartas({ cargando: false, data: json.results });
      } catch (error) {
        console.log("error", error);
      }
    };

    llamarApi();
  }, []);

  const filtrarResultados = (filtro) => {
    console.log("filtro", filtro);
    let resultadosFiltrado = resultadosCartas.data.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(filtro.toLowerCase())
      )
        return elemento;
    });
    console.log("resultadoFiltrado", resultadosFiltrado);
    setResultados({ cargando: false, data: resultadosFiltrado });
    console.log(resultadosCartas.data);
  };

  return (
    <FevinContext.Provider
      value={{
        resultados,
        filtrarResultados,
      }}
    >
      {props.children}
    </FevinContext.Provider>
  );
}
