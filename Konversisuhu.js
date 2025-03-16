// Fungsi untuk mengonversi Fahrenheit ke Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Meminta input dari user
const fahrenheitInput = prompt("Masukkan suhu dalam Fahrenheit:");

// Mengonversi input ke angka
const fahrenheit = parseFloat(fahrenheitInput);

// Mengecek apakah input valid atau invalis
if (!isNaN(fahrenheit)) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    alert(`${fahrenheit} °F = ${celsius.toFixed(2)} °C`);
} else {
    alert("Masukkan angka yang valid!");
} 
