 // Luas Segitiga
 document.getElementById('luas-segitiga-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const panjangAlas = parseFloat(document.getElementById('panjang-alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    if (!isNaN(panjangAlas) && !isNaN(tinggi)) {
        const luas = 0.5 * panjangAlas * tinggi;
        document.getElementById('result-luas').innerText = `Hasil Perhitungan: ${luas}`;
        document.getElementById('steps-luas').innerText = `Perhitungan:\n=>. Luas = 0.5 × Panjang Alas × Tinggi\n=>. Luas = 0.5 × ${panjangAlas} × ${tinggi}\n=>. Luas = ${luas}`;
    } else {
        document.getElementById('result-luas').innerText = 'Hasil Perhitungan: Masukkan data yang valid.';
        document.getElementById('steps-luas').innerText = '';
    }
});

// Keliling Segitiga
document.getElementById('keliling-segitiga-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const sisiA = parseFloat(document.getElementById('sisi-a').value);
    const sisiB = parseFloat(document.getElementById('sisi-b').value);
    const sisiC = parseFloat(document.getElementById('sisi-c').value);
    if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC)) {
        const keliling = sisiA + sisiB + sisiC;
        document.getElementById('result-keliling').innerText = `Hasil Perhitungan: ${keliling}`;
        document.getElementById('steps-keliling').innerText = `Perhitungan:\n=>.Keliling = Sisi A + Sisi B + Sisi C\n=>. Keliling = ${sisiA} + ${sisiB} + ${sisiC}\n=>. Keliling = ${keliling}`;
    } else {
        document.getElementById('result-keliling').innerText = 'Hasil Perhitungan: Masukkan data yang valid.';
        document.getElementById('steps-keliling').innerText = '';
    }
});

// reset luas segitiga
document.getElementById('reset-luas').addEventListener('click', function() {
    document.getElementById('luas-segitiga-form').reset();
    document.getElementById('result-luas').innerText = 'Hasil Perhitungan:';
    document.getElementById('steps-luas').innerText = '';
});

// reset keliling segitiga
document.getElementById('reset-keliling').addEventListener('click', function() {
    document.getElementById('keliling-segitiga-form').reset();
    document.getElementById('result-keliling').innerText = 'Hasil Perhitungan:';
    document.getElementById('steps-keliling').innerText = '';
});