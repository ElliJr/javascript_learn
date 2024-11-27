const dados = '{"id": 1, "nome": "elli", "idade": 17,  "girlfriend": true}';
const obj = JSON.parse(dados)
console.log(obj.girlfriend);

// const jsonString = JSON.stringify(obj);
// console.log(jsonString)