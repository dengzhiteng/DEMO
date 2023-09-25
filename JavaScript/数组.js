// 数组扁平化
// {
// const arr = [[1, 2, 3], [4, 5, 6]]
// console.log(arr.flat());
// }

{
  const names = [
    {
      name: 'a',
      list: [1, 2, 3]
    },
    {
      name: 'b',
      list: [4, 5, 6]
    },
  ]

  const res = names.flatMap(item => item.list)
  console.log(res);
}
