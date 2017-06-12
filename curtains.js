$(document).ready(function(){
 

    var bgImgs = ['url("img/scenic.jpg")', 'url("img/stadium.jpg")', 'url("img/background5.jpg")'];
    var random = bgImgs[Math.floor(Math.random() * bgImgs.length)];
    random += " 50% 0 no-repeat fixed"
    $('.painting-1').css({"background": random,
        "position": "relative",
        "margin": "0 auto",
        "width": "100%",
        "height": "100%",
        "max-width": "1920px",
        "background-size": "100% 100%",
        "justify-content": "center",
        "align-items": "center",
        "filter": "grayscale(100%)"} 
        );


$('.fa').on('click', function(){
console.log('hello');
        $('.s1').removeClass('click');
        $('.s2').removeClass('click');
        $('.s3').removeClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
        });

$('.home').on('click', function(){
console.log('hello');
        $('.s1').removeClass('click');
        $('.s2').removeClass('click');
        $('.s3').removeClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
        });
 

$('.ho').on('click', function(){
console.log('hello');
        $('.s1').addClass('click');
        $('.s2').removeClass('click');
        $('.s3').removeClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
               
        });


$('.about').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').removeClass('click');
        $('.s3').removeClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
        });
 
        $('.ab').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').removeClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
        $('dd[data-percentage]').each(function(){
                var $barObj = $(this);
                $barObj.addClass('grow');
        });
               
        });

 
        $('.skills').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').removeClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
        $('dd[data-percentage]').each(function(){
                var $barObj = $(this);
                $barObj.addClass('grow');
        });
               
        });
 
        $('.sk').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').addClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
               
        });

        $('.projects').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').addClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
               
});
        $('.pr').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').addClass('click');
        $('.s4').addClass('click');
        $('.s5').removeClass('click');
               
        });

        $('.resume').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').addClass('click');
        $('.s4').addClass('click');
        $('.s5').removeClass('click');
               
});

        $('.re').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').addClass('click');
        $('.s4').addClass('click');
        $('.s5').addClass('click');
        });


                $('.contact').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').addClass('click');
        $('.s4').addClass('click');
        $('.s5').addClass('click');
        });
               
        var $flag = true;
               
});
 
(function() {
  var app;

  $(document).ready(function() {
    return app.init();
  });

  app = {
    text: "Hello, welcome to my website",
    index: 0,
    chars: 0,
    speed: 100,
    container: ".text .content",
    init: function() {
      this.chars = this.text.length;
      return this.write();
    },
    write: function() {
      $(this.container).append(this.text[this.index]);
      if (this.index < this.chars) {
        this.index++;
        return window.setTimeout(function() {
          return app.write();
        }, this.speed);
      }
    }
  };

}).call(this);

//'a[href*="#"]:not([href="#"])'