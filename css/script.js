document.getElementById('hitung-luas').addEventListener('click', function() {
    const sisi = document.getElementById('sisi').value;
    const luas = sisi * sisi;
    document.getElementById('luas-result').innerText = luas;
   });
   
   document.getElementById('hitung-keliling').addEventListener('click', function() {
    const sisi = document.getElementById('sisi').value;
    const keliling = 4 * sisi;
    document.getElementById('keliling-result').innerText = keliling;
   });
   
   document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('sisi').value = '';
    document.getElementById('luas-result').innerText = '-';
    document.getElementById('keliling-result').innerText = '-';
   });