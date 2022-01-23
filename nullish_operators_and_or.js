// Operadores
// devuelven un valor de comparacion
// referencia https://www.youtube.com/watch?v=anoXxubzh6w

// ||=
// Si el valor es falsy (undefined, null, 0, '', NaN o false), devuelve un valor (es mas estricto).

// ??=
// Si el valor es null o undefined, devuelve un valor.

const handleUrl = (history = null, url = null) => {
     const checkHistory = history || false;
     const checkUrl = url || false
     checkHistory && checkUrl ? { history, url } : false;
};

const history = ''
const url= ''
// handleUrl(history, url)
  const {history,url} = handleUrl(history, url)