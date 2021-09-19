const valor = () => null

try {
     const num = valor()
     if (num == null) throw new Error('no quiero nulos')
} catch (error) {
     console.log(error);
}

console.warn('Se continua el script');
