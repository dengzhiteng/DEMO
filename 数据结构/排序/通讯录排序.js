// https://github.com/theajack/cnchar
// 利用cnChar 库 获取笔画,进而进行排序

// <script src="https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js"></script>
// 原始数据
let data = [
  {
    "name": "唐某人"
  },
  {
    "name": "张子强"
  },
  {
    "name": "李某人"
  },
  {
    "name": "王某人"
  },
  {
    "name": "一某人"
  },
];

// 外面定义的数组，存操作后的数据
var result = [];

// 数据处理，绑定笔画
for (var i = data.length - 1; i >= 0; i--) {
  // 定义一个对象
  var obj = {};
  // 存储笔画
  obj.stroke = data[i].name.substring(0, 1).stroke();
  // 存储数据
  obj.data = data[i];
  // 存入result数组里面去
  result.push(obj);
}

// 排序 使用 result.stroke 也就是笔画排序
result.sort(function (a, b) {
  return a.stroke - b.stroke;
});

console.log(result);
