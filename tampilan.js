const forms = ['formPemesanan','formPeminjaman','formPembayaran'];

forms.forEach(id => {
  const form = document.getElementById(id);
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert(`Data dari ${id} berhasil diproses!`);
    form.reset();
  });
});

// aktifkan menu sidebar sesuai scroll
const menuLinks = document.querySelectorAll('.sidebar ul li a');
menuLinks.forEach(link=>{
  link.addEventListener('click',()=>{
    menuLinks.forEach(l=>l.classList.remove('active'));
    link.classList.add('active');
  });
});
