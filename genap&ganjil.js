// Fungsi untuk memeriksa apakah bilangan ganjil
function isOdd(n) {
    return n % 2 !== 0;
}

// Meminta input dari user
const numberInput = prompt("Masukkan bilangan bulat:");
const number = parseInt(numberInput);

if (!isNaN(number)) {
    if (isOdd(number)) {
        alert(`${number} adalah bilangan ganjil.`);
    } else {
        alert(`${number} adalah bilangan genap.`);
    }
} else {
    alert("Masukkan angka yang valid!");
} 