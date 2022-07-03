// Code your solutions in this file
const names = ["Guadalupe", "Olliex", "Aki"];
const birthday = "birthday";
const newArray =[];

function writeCards(names, birthday) {
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
        
    }
    return newArray;
}
console.log(newArray);

const number = "";
function countDown(number){
     let i = 10;
    while (i >= 0) {
        console.log(i);
        i--
    } 
    return number;
}
countDown(number);
