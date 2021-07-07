const {
    frutas,
    dinero
} = require("./frutas");
var cowsay = require("cowsay");
frutas.forEach((fruta) => {
    console.count(fruta);
});
console.log(cowsay.say({
    text: "Hola clase de informatica",
    e: "O",
    T: "U "
}));
console.log("mi dinero actual: ", dinero);