var dataKhodam = [
  'Lele Terbang',
  'kodok Berjalan',
  'Kulkas Panas',
  'Rawa Rontek',
  'Pocong Terbang',
  'Boboiboy Api',
  'upin gondrong',
  'kosong',
  'Macan pemarah',
  'Buaya sunda',
  'Beruang sunda',
  'Harimau birahi',
  'Tuyul Kesandung',
  'Kuntilanak Selfie',
  ' Pocong Joget',
];

var inputNama = document.getElementById('inputNama');

function lanjutkan() {
  var valid = true;
  var pushNama = inputNama.value;

  if (pushNama === '') {
    valid = false;
    alert('Nama Lengkap Tidak Boleh Kosong!!');
  }

  if (valid) {
    document.getElementById('tampilanKhodam').style.display = 'block';

    document.getElementById('tampilanAwal').style.display = 'none';

    document.getElementById('namaUser').innerHTML = pushNama;

    var khodam = document.getElementById('khodam');
    khodam.innerHTML = dataKhodam[Math.floor(Math.random() * dataKhodam.length)];
  }
}

function kembali() {
  document.getElementById('tampilanKhodam').style.display = 'none';
  document.getElementById('tampilanAwal').style.display = 'block';
  inputNama.reset();
}
