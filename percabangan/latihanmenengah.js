// soal no 1
// let x = Number (prompt("masukkan bilangan (x):"));
// let y = Number (prompt("masukkan bilangan (y):"));

// if(x > y){
//     alert("bilangan terbesar adalah $(x)");
// } else if (x < y){
//     alert("bilangan terbesar adalah $(y)");
// } else{
//     alert("kedua bilangan sama besar");
// }

// nomor 2 //

// let a = prompt("Masukkan nilai koefisien a:");
// let b = prompt("Masukkan nilai koefisien b:");
// let c = prompt("Masukkan nilai koefisien c:");

// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);

// let D = (b * b) - (4 * a * c);

// if (D > 0) {
//   alert("Akar persamaan adalah real dan berbeda (D > 0)");
// } else if (D === 0) {
//   alert("Akar persamaan adalah real dan sama (D = 0)");
// } else {
//   alert("Akar persamaan adalah imaginer (D < 0)");
// }

// nomor 3 //

// let nilaiUTS = prompt("Masukkan nilai UTS:");
// let nilaiUAS = prompt("Masukkan nilai UAS:");
// let nilaiTugas = prompt("Masukkan nilai Tugas:");

// nilaiUTS = parseFloat(nilaiUTS);
// nilaiUAS = parseFloat(nilaiUAS);
// nilaiTugas = parseFloat(nilaiTugas);

// let NA = (nilaiUTS * 0.35) + (nilaiUAS * 0.45) + (nilaiTugas * 0.20);

// let indeksAkhir;

// if (NA >= 80 && NA <= 100) {
//   indeksAkhir = "A";
// } else if (NA >= 70 && NA < 80) {
//   indeksAkhir = "B";
// } else if (NA >= 50 && NA < 70) {
//   indeksAkhir = "C";
// } else if (NA >= 40 && NA < 50) {
//   indeksAkhir = "D";
// } else {
//   indeksAkhir = "E";
// }
// alert("Nilai Akhir (NA): " + NA.toFixed(2));
// alert("Indeks Akhir: " + indeksAkhir);

// soal 4

// let x = prompt("bilangan x");
// let y = prompt("bilangan y");
// let z = prompt("bilangan z");

// if (x > y && x > z){
//     alert("bilangan X lebih besar")
// }else if (y > x && y > z){
//     alert("Bilangan Y lebih besar")
// }else if (z > x && z > y){
//     alert("Bilangan Z lebih Besar")
// }else{
//     alert("Bilangan X,Y dan Z sama besarnya!")
// }  

// soal no 5
let x = Number(prompt("masukan angka"));
let y = Number(prompt("masukan angka"));

if(x < 0 && y < 0){
    return 'kuadran III';
}else if(x > 0 && y > 0){
    return 'kuadran I';

}else if (x < 0 && y > 0){
    return 'kuadran II';
}else if(x > 0 && y < 0){
    return 'kuadran IV';
}else{
    return 'salah';
}




