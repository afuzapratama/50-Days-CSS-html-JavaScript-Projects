// Mendapatkan elemen-elemen HTML yang diperlukan dari DOM
const progress = document.getElementById("progress"); // Mendapatkan elemen progres
const prev = document.getElementById("prev"); // Tombol sebelumnya
const next = document.getElementById("next"); // Tombol selanjutnya
const circles = document.querySelectorAll(".circle"); // Mengambil semua elemen dengan kelas "circle"

let currentActive = 1; // Menginisialisasi langkah aktif saat ini sebagai langkah pertama (1)

// Menambahkan event listener untuk tombol "Selanjutnya"
next.addEventListener("click", () => {
  currentActive++; // Menambahkan 1 ke langkah aktif saat ini
  if (currentActive > circles.length) {
    currentActive = circles.length; // Jika melebihi jumlah lingkaran, tetapkan ke jumlah maksimum
  }
  update(); // Memanggil fungsi 'update' untuk memperbarui tampilan
});

// Menambahkan event listener untuk tombol "Sebelumnya"
prev.addEventListener("click", () => {
  currentActive--; // Mengurangkan 1 dari langkah aktif saat ini
  if (currentActive < 1) {
    currentActive = 1; // Jika kurang dari 1, tetapkan ke langkah pertama
  }
  update(); // Memanggil fungsi 'update' untuk memperbarui tampilan
});

// Fungsi untuk memperbarui tampilan berdasarkan langkah aktif saat ini
function update() {
  circles.forEach((circle, idex) => {
    if (idex < currentActive) {
      circle.classList.add("active"); // Tambahkan kelas "active" pada lingkaran yang lebih kecil indeksnya daripada langkah aktif saat ini
    } else {
      circle.classList.remove("active"); // Hapus kelas "active" dari lingkaran yang memiliki indeks lebih besar daripada langkah aktif saat ini
    }
  });

  const actives = document.querySelectorAll(".active"); // Mengambil semua elemen dengan kelas "active"

  // Mengatur lebar elemen progres berdasarkan jumlah lingkaran yang memiliki kelas "active"
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // Mengatur status disabled pada tombol "Sebelumnya" dan "Selanjutnya" sesuai dengan langkah aktif saat ini
  if (currentActive === 1) {
    prev.disabled = true; // Tombol "Sebelumnya" dinonaktifkan jika di langkah pertama
  } else if (currentActive === circles.length) {
    next.disabled = true; // Tombol "Selanjutnya" dinonaktifkan jika di langkah terakhir
  } else {
    prev.disabled = false; // Mengaktifkan kembali tombol "Sebelumnya" untuk langkah selain pertama dan terakhir
    next.disabled = false; // Mengaktifkan kembali tombol "Selanjutnya" untuk langkah selain pertama dan terakhir
  }
}
