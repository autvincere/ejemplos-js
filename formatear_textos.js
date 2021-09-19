const removeAccents = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

// console.log(removeAccents('CÁRÉ CÚLÓ'));

/**
 * Función para normalizar string,
 * quitar acentos, eliminar espacios en blanco y pasar a minusculas
 * @param {string} str
 * @returns {string}
 */
export const lowerCaseRemoveAccentsDeleteSpaces = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^-A-Za-z0-9]+/g, "")
    .toLowerCase();

/**
 * Función para pasar a formato capital strings dentro de un array
 * @param {array} data
 * @returns {array}
 */
const capitalizeArrayFormat = (data) => {
  const lowerCaseStr = data.map((item) => item.toLowerCase());
  return lowerCaseStr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
};
//console.log(capitalizeArrayFormat(['cacc', 'PEO']));

/**
 * String con espacios (ej:frases textos) a formato capital
 * @param {str}
 * @returns {str}
 */
const capitalizeStrFormat = (str) => {
  const convertInArray = str.split(" ");
  const lowerCaseArray = convertInArray.map((item) => item.toLowerCase());
  const capitalizeArray = lowerCaseArray.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const string = capitalizeArray.toString();
  const deleteComma = string.replace(/,/gi, " ");
  return deleteComma;
};

//str.charAt(0).toUpperCase() + str.substr(1)

console.log(capitalizeStrFormat("PRÉSTAMO HIPOTECARIO FINES GENERALES"));

// data.map((item) =>  item.toLowerCase().map(word => word.charAt(0).toUpperCase() + word.slice(1))})
