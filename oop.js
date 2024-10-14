// soal 1
// function person(firstname, lastname, age){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;

//     this.sayhello = function (name) {
//         console.log(`hello ${name}, my name is ${this.firstname} ${this.lastname} i'm years old ${age}`);
//     }
// }

// const ridwan = new person("ridwan","basandid","43");
// ridwan.sayhello("leni");

// const ricky = new person("ricky","risman","67");
// ricky.sayhello("everyone");

// soal 2
function persegipanjang(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;

    this.luas = function() {
        console.log( this.panjang * this.lebar);
    }

    this.keliling = function() {
        console.log(2 * (this.panjang + this.lebar));
    }
}

let persegipanjang1 = new persegipanjang(50, 20);
persegipanjang1.luas();
persegipanjang1.keliling();