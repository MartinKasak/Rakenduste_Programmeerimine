console.log("Hello World!");

export const simpleArraySum = xs =>{
    const sum = 0;
    xs.forEach(item => {
        console.log(item);
        sum += item;
    });
    return sum;
  }

//const simpleArraySum2 = cs => xs.reduce (acc, x) => acc + x, 0);