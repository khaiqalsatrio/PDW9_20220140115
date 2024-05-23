document.getElementById('DataMhas').addEventListener('submit', function (event) {
  event.preventDefault();

  // Check if all fields are filled
  const name = document.getElementById('name').value.trim();
  const nim = document.getElementById('nim').value.trim();
  const kelas = document.getElementById('kelas').value.trim();
  const angkatan = document.getElementById('angkatan').value.trim();
  const agreement = document.getElementById('agreement').checked;

  if (name && nim && kelas && angkatan && agreement) {
    Swal.fire({
      title: 'Konfirmasi Data!',
      html: `Nama: ${name}<br>NIM: ${nim}<br>Kelas: ${kelas}<br>Angkatan: ${angkatan}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Lanjut',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Data Disimpan!', 'Data mahasiswa telah disimpan.', 'success').then(() => {
          document.getElementById('DataMhas').reset();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Dibatalkan', 'Data mahasiswa tidak disimpan.', 'error').then(() => {
          document.getElementById('DataMhas').reset();
        });
      }
    });
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Harap isi semua data dan setujui syarat dan ketentuan dengan benar.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
});
