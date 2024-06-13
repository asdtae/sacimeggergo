//Objectos en JS

//crear objecto

//const objecto = new Object(); //Ya no se usa evitar este uso

const objecto = {}; //Objecto vacio

const player = {
    name : "Luke" ,
    life: 99,
    power: 10;
    'Otra propiedad':'propriedad rara'
}

//Accedar a las propiedades del objecto

//Notacion por puno (preferida)
console.log(player.name); //muestra Luke
console.log(player.life); //muestra la vida

//Notacion por crochetas

console.log(player["name"]); 
console.log(player["power"]); 
console.log(player["Otra propiedad"]); 