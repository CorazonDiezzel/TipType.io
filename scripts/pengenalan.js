cActiveView().setView('pengenalan');
const pengenalan = (() =>{
    var arrayFullText = [
        "saya",
        "berterima",
        "kasih",
        "kepada",
        "sekolahkoding",
        "atas",
        "ilmunya"
      ]; //tempat buat naruh full text di setiap slide
      
      // menyisipkan slide2 yang telah dibuat dalam array diatas
      for (var i = 0; i < arrayFullText.length; i++) {
          document.querySelector("#slides ul").append(`<li class="slide">
              <p class="full-text">${arrayFullText[i]}</p>
          </li>`);
      }
      
      //rotation speed and timer
      var speed = 1500; // berapa lama slide akan ditampilkan dalam milisekon
      var slides = $(".slide");
      var container = $("#slides ul");
      var item_width = container.width();
      slides.width(item_width); // menentukan lebar kontainer agar mulus animasinya
      container.parent().width(item_width);
      container.width(slides.length * item_width); // menentukan lebar slide kontainer agar semua slidenya bisa masuk
      setInterval(rotate, speed); // setiap 1,5 detik maka slide akan digeser
      
      function resetSlides() {
        //reset posisi left property container ke nol lagi
        container.css({
          left: 0
        });
      }
      
      function rotate() {
        container.stop().animate(
          {
            left: item_width * -1 // geser kontainer ke kiri sebesar lebar slide
          },
          500,
          function () {
            // waktu animasi 500 ms
            container.find("li:last").after(container.find("li:first")); //pindahkan slide pertama ("li:first") setelah slide terakhir("li:last")
            resetSlides(); //reset posisi container
          }
        );
      }
})();
  