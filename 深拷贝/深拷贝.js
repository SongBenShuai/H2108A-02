function getDataType(arg) {
    // 检测变量的数据类型
    let dataType = Object.prototype.toString.call(arg); // [object String]

    let mapType = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    }

    return mapType[dataType]
}

var array = ["vue", 1, undefined, true, null, function test() { }, { age: 1 }, ["html", "css"]]

function copy(array) {
    var obj;
    var str = getDataType(array)
    if (str === 'array') {
        obj = []
        for (let i = 0; i < array.length; i++) {
            obj.push(copy(array[i]))
        }
    } else if (str === 'object') {
        obj = {}
        for (let i in array) {
            obj[i] = copy(array[i])
        }
    } else {
        return array
    }
    return obj
}
var data = copy(array)
data[6].age = 100
data[7][0] = "git"
console.log("old",array)
console.log("new", data)