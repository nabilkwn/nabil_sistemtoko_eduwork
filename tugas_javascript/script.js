// Fungsi Penjumlahan
function tambah() {
  var a = parseFloat(prompt("Masukkan angka pertama:"));
  var b = parseFloat(prompt("Masukkan angka kedua:"));
  var hasil = a + b;
  alert("Hasil penjumlahan: " + hasil);
}

// Fungsi Pengurangan
function kurang() {
  var a = parseFloat(prompt("Masukkan angka pertama:"));
  var b = parseFloat(prompt("Masukkan angka kedua:"));
  var hasil = a - b;
  alert("Hasil pengurangan: " + hasil);
}

// Fungsi Perkalian
function kali() {
  var a = parseFloat(prompt("Masukkan angka pertama:"));
  var b = parseFloat(prompt("Masukkan angka kedua:"));
  var hasil = a * b;
  alert("Hasil perkalian: " + hasil);
}

// Fungsi Pembagian
function bagi() {
  var a = parseFloat(prompt("Masukkan angka pertama:"));
  var b = parseFloat(prompt("Masukkan angka kedua:"));
  if (b !== 0) {
    var hasil = a / b;
    alert("Hasil pembagian: " + hasil);
  } else {
    alert("Tidak dapat dibagi oleh nol.");
  }
}
