// soal 1
let N = prompt("Masukkan nilai N (>=1): ");
N = parseInt(N);

if (N >= 1) {
  for (let i = 1; i <= N; i++) {
    alert(i);
  }
} else {
  alert("Nilai N harus lebih besar atau sama dengan 1.");
}

// soal 2
// let batasawal = parseInt(prompt("masukkan batas awal (batasawal > 0):"));
// let batasakhir = parseInt(prompt("masukkan batas akhir (batasakhir= batasawal > 0):"));

// if (batasawal > 0 && batasakhir >= batasawal) {
//     for (let i = batasawal; i <= batasakhir; i++) {
//         console.log(i);
//     }
// } else {
//     console.log("pastikan batasawal > 0 dan batasakhir >= batasawal.");
// }

// // soal 3
// // Input batas awal dan batas akhir
// let batasAwal = parseInt(prompt("Masukkan batas awal:"));
// let batasAkhir = parseInt(prompt("Masukkan batas akhir:"));

// // Menggunakan do while loop
// do {
//     if (batasAwal % 2 !== 0) {
//         console.log(batasAwal);
//     }
//     batasAwal++;
// } while (batasAwal <= batasAkhir);

// soal 4

// let batasAwal = parseInt(prompt("Masukkan batas awal: "));
// let batasAkhir = parseInt(prompt("Masukkan batas akhir: "));

// for (let i = batasAwal; i <= batasAkhir; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// soal 1 menengah

let batasAwal = parseInt(prompt("Masukkan batas awal: "));
let batasAkhir = parseInt(prompt("Masukkan batas akhir: "));

let jumlahGanjil = 0;
let i = batasAwal;

while (i <= batasAkhir) {
    if (i % 2 !== 0) {
        jumlahGanjil++;
    }
    i++;
}

console.log("Jumlah bilangan ganjil: " + jumlahGanjil);

// soal 2 menengah


