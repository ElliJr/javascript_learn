
const dados = '{"id": 1, "nome": "elli", "idade": 17,  "girlfriend": true}';
const obj = JSON.parse(dados)

function teste(){
    while(obj.girlfriend == true){
        const h1 = document.getElementById("h1").innerHTML = obj.girlfriend;
    }
}
teste();


// const jsonString = JSON.stringify(obj);
// console.log(jsonString)