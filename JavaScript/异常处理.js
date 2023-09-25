// {
//   const sum = (x, y) => {
//     if (!x || !y) {
//       throw new Error("请输入参数")
//     }
//     return x+y
//   }
//   sum(1)
// }



{
  const sum = (x, y) => {
    try {
      if (!x || !y) {
        throw new Error("请输入参数")
      }
      return x + y
    } catch (e) {
      console.log('e', e);
      console.log("catch");
    } finally {
      console.log("finally");
    }
  }
  sum(1)
}



