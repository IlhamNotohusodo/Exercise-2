// Fungsi untuk menghapus kemunculan pertama dari search string dalam sebuah string
function removeFirstOccurrence(mainStr, searchStr) {
    return mainStr.replace(searchStr, '');
}

// Meminta input dari User
const mainString = prompt("Masukkan string utama:");
const searchString = prompt("Masukkan string yang ingin dihapus:");

const resultString = removeFirstOccurrence(mainString, searchString);
alert(`Hasil: ${resultString}`);