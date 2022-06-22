// 引入fs模块
const fs = require("fs")

// fs.readFile('./Promise-then方法.html', (err, data1) => {
//   fs.readFile('./Promise基本语法.html', (err, data2) => {
//     fs.readFile('./Promise封装AJAX.html', (err, data3) => {
//       let result = data1 + data2 + data3
//       console.log(result);
//     })
//   })
// })

// 使用promise实现
const p = new Promise((resolve, reject) => {
  fs.readFile('./Promise-then方法.html', (err, data) => {
    resolve(data)
  })
})

// value是第一个文件的内容
p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile("./Promise基本语法.html", (err, data) => {
      resolve([value, data]) //成功的话会返回value和data
    })
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile("./Promise实践-读取多个文件.js", (err, data) => {
      // 压入
      value.push(data)
      resolve(value)
    })
  }).then(value => {
    console.log(value.join('\r\n'));
  })
})