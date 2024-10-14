let hasil;
function tambah(a, b) {
    hasil = a + b;
    alert(`${a} + ${b} = ${hasil}`);
}
function kurang(a, b) {
    hasil = a - b;
    alert(`${a} - ${b} = ${hasil}`);
} 
function kali(a, b) {
    hasil = a * b;
    alert(`${a} * ${b} = ${hasil}`);
}
function bagi(a, b) {
    hasil = a / b;
    alert(`${a} / ${b} = ${hasil}`);
}


let operator = (prompt("masukkan operator (+,-,*,/)"));
let bilangan1 = Number(prompt("masukan bilanngan pertama"));
let bilangan2 = Number(prompt("masukan bilanngan kedua"));

if (operator == '+'){
    tambah(bilangan1,bilangan2);
}else if (operator == '-'){
    kurang(bilangan1,bilangan2);
}else if (operator == '*'){
    kali(bilangan1,bilangan2);
}else if (operator == '/'){
    bagi(bilangan1,bilangan2);
}else{
    alert('tidak di temukan');
}