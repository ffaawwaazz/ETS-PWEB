document.getElementById('daftarBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSffqNYvs8njiF8f_L66fi-TXcBKOX92CzRcHJIEC1F6DzeO9g/viewform?usp=dialog', '_blank');
});

document.getElementById('guidebookBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://drive.google.com/drive/folders/12oApG5aiVXmfH13qI4YyrJxuwtjsJ2Dv', '_blank');
});

document.getElementById('divisionBtn').addEventListener('click', function(e) {
  e.preventDefault();
  fetch('divisi.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('divisionContent').innerHTML = data;
      document.getElementById('divisionContent').style.display = 'block';
    })
    .catch(error => console.error('Gagal memuat halaman divisi:', error));
});
