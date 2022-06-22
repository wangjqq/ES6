// 1.引入fs模块
const fs = require('fs')

// 2.调用方法读取文件
// fs.readFile('./Promise基本语法.html', (err, data) => {
//   // 如果失败,则抛出错误
//   if (err) throw err
//   // 如果没有出错,则输出内容
//   console.log(data.toString());
// })

// 3.使用Promise封装
const p = new Promise((resolve, reject) => {
  fs.readFile('./Promise基本语法.html', (err, data) => {
    if (err) reject(err)
    else resolve(data)
  })
})

p.then((value) => {
  console.log(value.toString());
}, (reason) => {
  console.log('读取失败');
})