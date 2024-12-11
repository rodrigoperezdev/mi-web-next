import React from "react";
import { render, screen } from "@testing-library/react";
import { PruebaComponente } from "./PruebaComponente";

describe("PruebaComponente", () => {
  it("renderiza el nombre y los resultados correctamente", () => {
    // Mock de datos
    const mockName = "Mi lista de resultados";
    const mockResults = [
      { id: 1, title: "Resultado 1" },
      { id: 2, title: "Resultado 2" },
    ];

    // Renderizamos el componente
    render(<PruebaComponente name={mockName} results={mockResults} />);

    // Verificamos que el título se renderice
    expect(screen.getByText(mockName)).toBeInTheDocument();

    // Verificamos que los elementos de la lista se rendericen
    mockResults.forEach((result) => {
      expect(screen.getByText(result.title)).toBeInTheDocument();
    });
  });

  it("muestra una lista vacía si no hay resultados", () => {
    // Mock de datos
    const mockName = "Sin resultados";
    const mockResults: any[] = [];

    // Renderizamos el componente
    render(<PruebaComponente name={mockName} results={mockResults} />);

    // Verificamos que el título se renderice
    expect(screen.getByText(mockName)).toBeInTheDocument();

    // Verificamos que no hay elementos en la lista
    expect(screen.queryByRole("listitem")).toBeNull();
  });
});
