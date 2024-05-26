// metodo file sisteam

const fs = require("fs")
// accede al valor del archivo
const file = fs.readFileSync("./data/Hello.txt", "utf-8")
console.log(file)

fs.writeFileSync('./data/Bay.txt',"este es un arhivo nuevo")