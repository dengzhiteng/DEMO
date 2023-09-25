var a = 1

{
  a = 100
  function a() {
    a = 120
    function a() {}
  }
  a = 10
  function a() {}
  a = 1
  a = 2
  console.log('内部a:', a)
}

console.log('外部a:', a)