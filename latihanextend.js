// soal 1
// class book {
//     constructor (title, author, year) {
//         this.author = author;
//         this.title = title;
//         this.year = year;
//     }
//     bookdetails() {
//         return `title book ${this.title} was written by ${this.author} in ${this.year} `;
//     }
// }

// class ebook extends book {
//     constructor(title, author, year, price){
//         super (title, author, year);
//         this.price = price;
//     }
//     bookdetails() {
//         return `title book ${this.title} was written by ${this.author} in ${this.year} and price ${this.price} `;
//     }
// }

// let buku = new book('ridwan basandid', 'ricky risman', 2000);
// let buku2 = new ebook('ridwan basandid', 'ricky risman', 2000, 200000000);

// console.log(buku.bookdetails());
// console.log(buku2.bookdetails());

// soal 2

// class emloyee{
//     constructor(nama,gaji){
//         this.nama = nama;
//         this.gaji = gaji;
//     }
//     hitunglahGajiTahunan(){
//         return`${this.nama} ${this.gaji}*12`;
//     }
// }
// class manager extends emloyee{
//     constructor(nama,gaji,departemen){
//         super(nama, gaji);
//         this.departemen = departemen;
//     }
//     hitungGajiTahunan(){
//         return`nama karyawan: ${this.nama}, gaji tbulanan:${this.gaji} nama manager: ${this.nama} departemen: ${this.departemen} bonus: 10% total gaji: ${this.gaji * 12 + (this.gaji / 10)}`;

//     }
// }
// let riki = new manager('riki','60000','bumn');
// console.log(riki.hitungGajiTahunan())
// let ridwan = new manager('ridwan',40000,'kominfo');
// console.log(ridwan.hitungGajiTahunan())

// soal 3
// class Product {
//     constructor(idProduct, nama, price, qty) {
//         this.idProduct = idProduct;
//         this.nama = nama;
//         this.price = price;
//         this.qty = qty;
//     }

//     menghitungTotalHarga() {
//         return `Nama: ${this.nama}, ID Produk: ${this.idProduct}, Harga Total: ${this.price * this.qty}`;
//     }
// }

// class ElectronicProduk extends Product {
//     constructor(idProduct, nama, price, qty, masaGaransi) {
//         super(idProduct, nama, price, qty);
//         this.masaGaransi = masaGaransi;
//     }

//     perhitunganHargaTotal() {
//         return `Nama: ${this.nama}, ID Produk: ${this.idProduct}, Harga Total: ${this.price * this.qty}, Masa Garansi: ${this.masaGaransi}`;
//     }
// }

// let nopal = new ElectronicProduk('001', 'Samsung', 2000000, 2, '2021');
// console.log(nopal.perhitunganHargaTotal());

// let kevin = new ElectronicProduk('002', 'iPhone', 6000000, 1, '2023');
// console.log(kevin.perhitunganHargaTotal());

// soal 4
// class bankaccount {
//     constructor(nama,rekening,saldo){
//         this.nama = nama;
//         this.rekening = rekening;
//         this.saldo = saldo;
//     }
//     setorSaldo(uang){
//         return this.saldo = uang + this.saldo;
//     }
//     tarikSaldo(uang){
//         return this.saldo = this.saldo - uang;
//     }
//     mentransferSaldo(uang){
//         return this.saldo = this.saldo - uang
//     }
// }

// let rekening1  = new bankaccount("nopal" , 123456 , 100000);
// console.log(rekening1.setorSaldo(40000));
// console.log(rekening1.tarikSaldo(40000));
// console.log(rekening1.mentransferSaldo(40000));