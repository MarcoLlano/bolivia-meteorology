const API_URL =
  "http://localhost:3000/api/weather";


export async function getAllWeather() {

  const response =
    await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      "No se pudo obtener la información meteorológica"
    );
  }

  return await response.json();
}


export async function getDepartmentWeather(
  departmentId
) {

  const response =
    await fetch(
      `${API_URL}/${departmentId}`
    );

  if (!response.ok) {

    if (response.status === 404) {
      throw new Error(
        "Departamento no encontrado"
      );
    }

    throw new Error(
      "No se pudo obtener el pronóstico"
    );
  }

  return await response.json();
}