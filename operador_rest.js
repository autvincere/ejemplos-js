const sum = (...rest) => () => rest.reduce((prev, current) => prev + current)

// function sum(...theArgs) {
//      return theArgs.reduce((previous, current) => {
//        return previous + current;
//      });
//    }
   console.log(sum(1, 2, 3, 4));