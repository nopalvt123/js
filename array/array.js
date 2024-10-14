// nomor 1 menghitung nilai rata rata

function hitungRataRata(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

let jumlah = parseInt(prompt("Masukkan jumlah nilai yang ingin dihitung:"));
let nilai = [];

for (let i = 0; i < jumlah; i++) {
    let inputNilai = parseFloat(prompt("Masukkan nilai ke-" + (i + 1) + ":"));
    nilai.push(inputNilai);
}

let rataRata = hitungRataRata(nilai);

alert("Nilai rata-rata: " + rataRata);

// nomor 2 mengurutkan angka sebuah function

let sortArray = () => {
    let numbers = prompt("masukan angka dengan koma: ");
    let arr = numbers.split(",").map(Number);
    let sortedNumbers = arr.sort((a, b) => a - b);
    alert("Angka yang diurutkan:"+ sortedNumbers );
}

sortArray();

// nomor 3 mencari angka terbesar sebuah function

let findMaxNumber = () => {
    let numbers = prompt("masukan nilai dengan koma: ");
    let arr = numbers.split(",").map(Number);
    let maxNumber = Math.max(...arr);
    alert("Angka terbesar:"+ maxNumber );
}

findMaxNumber();

// nomor 4 deret fibonacci

let printFibonacci = () => {
    let n = parseInt(prompt("masukan panjang deret fibonicce: "));
    let fib = new Array(n);
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    alert("Deret Fibonacci:"+ fib);
}

printFibonacci();