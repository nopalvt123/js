function calculator() {
    let no1 = parseFloat(prompt("masukkan angka pertama:"));
    let operator = prompt("pilih operator (+,-,*,/):");
    let no2 = parseFloat(prompt("masukkan angka kedua:"));

    let result;

    if (operator == "+"){
        result = no1 + no2;
    } else if (operator == "-") {
        result = no1 - no2;
    } else if (operator == "*") {
        result = no1 * no2;
    } else if (operator == "/") {
        if (no2 === 0) {
            alert ("error: tidak bisa membagi dengan 0!");
            return;
        }
        result = no1 / no2;
    } else {
        alert("operator tidak valid!");
        return;
    }

    alert("hasil: " + result);
}

// memanggil fungsi kalkulator
calculator();