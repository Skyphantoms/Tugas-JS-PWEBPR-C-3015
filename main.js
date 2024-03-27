const content = document.getElementById("content")
const box = document.getElementById("box");
const content_title = document.getElementById("content-title");
const image = document.getElementById("image");
const profesi_text = document.getElementById("profesi-text");
const button = document.getElementById("button");
const button_true = document.getElementById("true");
const button_false = document.getElementById("false");

button_true.addEventListener('click', ()=> {
    content_title.innerHTML = "Anda Berbohong!";
    profesi_text.innerHTML = "Anda adalah seorang Teknisi";
    box.style.backgroundColor = "#E12E2E";
    image.src = "Assets/image 3.png";
    button.style.display = 'none';
  });


button_false.addEventListener('click', ()=> {
    content_title.innerHTML = "Anda Benar";
    profesi_text.innerHTML = "Anda adalah seorang Mahasiswa";
    box.style.backgroundColor = "#6FD240";
    image.src = "Assets/image 2.png";
    button.style.display = 'none';
  });