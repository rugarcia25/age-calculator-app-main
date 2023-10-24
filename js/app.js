/*
  - View the optimal layout for the interface depending on their device's screen size
  - See hover and focus states for all interactive elements on the page
  - **Bonus**: See the age numbers animate to their final number when the form is submitted
*/

const getData = () => {
  // Obtiene la fecha de nacimiento del usuario como números (por ejemplo, año, mes y día).
  const añoNacimiento = document.getElementById("year").value; // Año de nacimiento
  const mesNacimiento = document.getElementById("month").value; // Mes de nacimiento
  const diaNacimiento = document.getElementById("day").value; // Día de nacimiento

  // Obtiene la fecha actual.
  const fechaActual = new Date();

  // Crea un objeto Date para la fecha de nacimiento.
  const fechaNacimiento = new Date(
    añoNacimiento,
    mesNacimiento - 1,
    diaNacimiento
  ); // Meses en JavaScript se cuentan desde 0 (enero) hasta 11 (diciembre).

  // Calcula la diferencia en milisegundos entre la fecha de nacimiento y la fecha actual.
  const diferenciaEnMilisegundos = fechaActual - fechaNacimiento;

  // Compruebo la fecha

  if (diferenciaEnMilisegundos < 0) {
    const future = document.getElementById("future");
    future.textContent = "¡No puedes venir del futuro!";
    dayNumber.textContent = "- - "; // Asigno valor vacío
    monthNumber.textContent = "- - "; // Asigno valor vacío
    yearNumber.textContent = "- - "; // Asigno valor vacío
  } else {
    future.textContent = ""; // Asigno valor vacío
    // Calcula el número de milisegundos en un año, mes y día.
    const milisegundosEnUnDia = 1000 * 60 * 60 * 24;
    const milisegundosEnUnMes = milisegundosEnUnDia * 30.44; // Promedio de días en un mes.
    const milisegundosEnUnAño = milisegundosEnUnDia * 365.25; // Promedio de días en un año teniendo en cuenta años bisiestos.

    // Calcula los años, meses y días de la diferencia.
    const años = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnAño);
    const meses = Math.floor(
      (diferenciaEnMilisegundos % milisegundosEnUnAño) / milisegundosEnUnMes
    );
    const días = Math.floor(
      (diferenciaEnMilisegundos % milisegundosEnUnMes) / milisegundosEnUnDia
    );

    // Comprobaciones

    if (diaNacimiento >= 1 && diaNacimiento <= 31) {
      const dayNumber = document.getElementById("dayNumber");
      dayNumber.textContent = días + " ";
    }

    if (mesNacimiento >= 1 && mesNacimiento <= 12) {
      const monthNumber = document.getElementById("monthNumber");
      monthNumber.textContent = meses + " ";
    }

    if (añoNacimiento) {
      const yearNumber = document.getElementById("yearNumber");
      yearNumber.textContent = años + " ";
    }
  }
};
