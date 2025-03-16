#  Tugas ke 2 JavaScript

Proyek ini berisi beberapa fungsi utilitas sederhana dalam JavaScript untuk melakukan operasi dasar dan manipulasi string.

## Fungsi

### 1. Konversi Centimeter ke Kilometer
Mengonversi panjang dari centimeter ke kilometer.
```javascript
function centimeterToKilometer(centimeter) {
    return centimeter / 100000;
}
```
**Contoh:**
- Input: `10000`
- Output: `0.1 km`

### 2. Periksa Apakah Bilangan Ganjil
Memeriksa apakah sebuah bilangan bulat adalah ganjil.
```javascript
function isOdd(n) {
    return n % 2 !== 0;
}
```
**Contoh:**
- Input: `5`
- Output: `true`

### 3. Hapus Kemunculan Pertama dari Substring
Menghapus kemunculan pertama dari substring yang ditentukan dalam string utama.
```javascript
function removeFirstOccurrence(mainStr, searchStr) {
    return mainStr.replace(searchStr, '');
}
```
**Contoh:**
- Input: String Utama: `"hello world"`, String Pencarian: `"ell"`
- Output: `"ho world"`

### 4. Periksa Apakah String adalah Palindrome
Menentukan apakah sebuah string adalah palindrome, mengabaikan huruf besar/kecil dan karakter non-alfanumerik.
```javascript
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
```
5.  / Meminta input dari pengguna untuk suhu Fahrenheit
const fahrenheitInput = prompt("Masukkan suhu dalam Fahrenheit:");
const fahrenheit = parseFloat(fahrenheitInput);
if (!isNaN(fahrenheit)) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    alert(`${fahrenheit} °F = ${celsius.toFixed(2)} °C`);
} else {
    alert("Masukkan angka yang valid untuk suhu!");
}



