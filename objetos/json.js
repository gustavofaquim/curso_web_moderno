

const obj = {a: 1, b:2, c:3, soma() {
    return a + b + c
}}
console.log(JSON.stringify(obj)) //Convertando para JSON

//console.log(JSON.parse("{a:1, b:2, c:3}"))

//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))
console.log(JSON.parse('{"a":1, "b":2, "c":3}')) //COnverterndo para OBJ
console.log(JSON.parse('{"a":1, "b":"string", "c":3, "d": {"z": "a", "w": "b"}, "e": [] }')) 
