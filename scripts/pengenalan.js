cActiveView().setView('pengenalan');
const pengenalan = (() => {
  const template = `<!--     <img id="logo" src="image/sekolahkoding.png" alt="gambar sekolah koding"> ini yang dimockup dibagian atas, logo sekolah koding biar keren ! -->
  <div id="slides"> <!-- ini bukan container slider ya.. seperti yang di mockup, tapi cuma buat biar gampang ntar stylingnya -->
      <ul> <!-- nah ini baru container slidenya, yang panjang, bakalan overflow  -->
          <li class="slide"> <!-- ini bungkusan slidenya ntar, anggaplah ini slide 1 yang tadi udah digambar di mock up -->
                  <p class="judul">Halo, sekolahkoding ! <br> <!-- ini konten alias isi dari slide yang bakalan geser-geser ntar -->
                  </p>
          </li>
      </ul>
  </div>`;

  var arrayFullText = [
    "saya",
    "berterima",
    "kasih",
    "kepada",
    "sekolahkoding",
    "atas",
    "ilmunya"
  ];

  function resetSlides() {
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
  return {
    initialize: function () {
      for (var i = 0; i < arrayFullText.length; i++) {
        document.querySelector("#slides ul").append(`<li class="slide">
                  <p class="full-text">${arrayFullText[i]}</p>
              </li>`);
      }
      var speed = 1500;
      var slides = $(".slide");
      var container = $("#slides ul");
      var item_width = container.width();
      slides.width(item_width);
      container.parent().width(item_width);
      container.width(slides.length * item_width);
      setInterval(rotate, speed);
    }
  }

})();
