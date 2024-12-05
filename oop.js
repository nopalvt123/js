// // soal 1
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

// // soal 2
// function persegipanjang(panjang, lebar) {
//     this.panjang = panjang;
//     this.lebar = lebar;

//     this.luas = function() {
//         console.log( this.panjang * this.lebar);
//     }

//     this.keliling = function() {
//         console.log(2 * (this.panjang + this.lebar));
//     }
// }

// let persegipanjang = new persegipanjang(50, 20);
// persegipanjang1.luas();
// persegipanjang1.keliling();

// // soal 3
// class person {
//     constructor(firstname, lastname, age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     showdetails(name) {
//         console.log(`hello ${name}, my name is ${this.firstname} ${this.lastname}, im years old ${this.age}`);
//     }
// }
// const dadang = new person("aan","aun","55");
// dadang.showdetails("aan");
// console.info(dadang);

// // soal 4

// class persegipanjang{
//     constructor(panjang, lebar) {
//         this.panjang = panjang;
//         this.lebar = lebar;
//     }
//     luas() {
//         console.log(this.panjang * this.lebar);
//     };
//     keliling(){
//         console.log(2*(this.panjang + this.lebar));
//     };
// }
// const persegipanjang1 = new persegipanjang(10, 10);
// persegipanjang1.luas();
// persegipanjang1.keliling();

// // soal 5
// class RekeningBank {
//     constructor(nomorRekening, saldo) {
//         this.nomorRekening = nomorRekening;
//         this.saldo = saldo;
//     }

//     // Method untuk menyetor uang ke rekening
//     setorUang(jumlah) {
//         if (jumlah > 0) {
//             this.saldo += jumlah;
//             console.log(`Setor uang sebesar Rp${jumlah}. Saldo saat ini: Rp${this.saldo}.`);
//         } else {
//             console.log("Jumlah setor harus lebih dari 0.");
//         }
//     }

//     // Method untuk menarik uang dari rekening
//     tarikUang(jumlah) {
//         if (jumlah > 0 && jumlah <= this.saldo) {
//             this.saldo -= jumlah;
//             console.log(`Tarik uang sebesar Rp${jumlah}. Saldo saat ini: Rp${this.saldo}.`);
//         } else if (jumlah > this.saldo) {
//             console.log("Saldo tidak mencukupi untuk penarikan.");
//         } else {
//             console.log("Jumlah tarik harus lebih dari 0.");
//         }
//     }

//     tampilkanSaldo() {
//         console.log(`Saldo saat ini di rekening ${this.nomorRekening}: Rp${this.saldo}.`);
//     }
// }
// let rekening1 = new RekeningBank('1234567890', 0);
// let rekening2 = new RekeningBank('0987654321', 0);
// let rekening3 = new RekeningBank('1122334455', 0);


// rekening1.setorUang(70000);
// rekening1.tarikUang(15000);
// rekening1.tampilkanSaldo();

// rekening2.setorUang(40000);
// rekening2.tarikUang(25000);
// rekening2.tampilkanSaldo();

// rekening3.setorUang(100000);
// rekening3.tarikUang(80000);
// rekening3.tampilkanSaldo();

// soal 6
//  class bank {
//     constructor (namabank, kantorcabang){
//         this.namabank = namabank;
//         this.kantorcabang = kantorcabang;
//     }

//     menambahkankantorbank(kantor){
//         this.kantorcabang.push(kantor);
//     }

//     hapus(kantor){
//         this.kantorcabang.splice(kantor,1);
//     }

//     menampilkankantorcabang() {
//         console.log(this.kantorcabang);
//     }
//  }

//  const bank1 = new bank("bank1",["kantor1","kantor2","kantor3"]);
//  bank1.menambahkankantorbank("kantor4");
//  bank1.hapus(1);
//  bank1.menampilkankantorcabang();
