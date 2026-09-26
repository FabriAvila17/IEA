// La página es visual; no requiere conexión con el sistema original.
// Si se abre con ?f=...&c=..., esos parámetros pueden leerse aquí
// sin consultar ni modificar el sitio real.

const params = new URLSearchParams(window.location.search);

const folio = params.get("f");
const curp = params.get("c");

// Para la tarea se mantienen datos ficticios. Si quieres que el folio
// mostrado cambie al parámetro de la URL, descomenta estas líneas:
//
// document.querySelectorAll(".value")[1].textContent = curp || "CURP000000HASMXXX0";
// document.querySelectorAll(".value")[3].textContent = folio || "CE000000000000";
