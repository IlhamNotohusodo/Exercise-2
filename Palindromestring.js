// Fungsi untuk memeriksa apakah string adalah palindrome
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Meminta input dari pengguna
const mainString = prompt("Masukkan string utama:");
const searchString = prompt("Masukkan string yang ingin dihapus:");

const resultString = removeFirstOccurrence(mainString, searchString);
alert(`Hasil: ${resultString}`);

// Memeriksa apakah string adalah palindrome
const palindromeInput = prompt("Masukkan string untuk diperiksa apakah palindrome:");
if (isPalindrome(palindromeInput)) {
    alert(`${palindromeInput} adalah palindrome.`);
} else {
    alert(`${palindromeInput} bukan palindrome.`);
}