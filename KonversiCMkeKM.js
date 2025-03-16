// Fungsi untuk mengonversi Centimeter ke Kilometer
function centimeterToKilometer(centimeter) {
    return centimeter / 100000;
}

// Meminta input dari user
const centimeterInput = prompt("Masukkan panjang dalam centimeter:");
const centimeter = parseFloat(centimeterInput);

// Mengecek apakah input valid atau invalid
if (!isNaN(centimeter)) {
    const kilometer = centimeterToKilometer(centimeter);
    alert(`${centimeter} cm = ${kilometer} km`);
} else {
    alert("Masukkan angka yang valid!");
} 
