cActiveView().setView('pengenalan');
const pengenalan = (() => {

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
