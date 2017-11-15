
$(function () {
    var imgs = $('.list li');
    var nums = $('.count li');
    var box = $('.carousel');

    function show(index) {
        nums.each(function (i, v) {
            i == index ? $(this).addClass('current') : $(this).removeClass('current');
        })

        imgs.each(function (i, v) {
            i == index ? $(this).addClass('current') : $(this).removeClass('current');
        })
    }

    var index = 0;
    nums.each(function (i, v) {
        v.i = i;
        v.onmouseover = function () {
            show(this.i);
        }
        v.onmouseout = function () {
            index = this.i;
        }
    });

    var timer = null;
    function autoPlay() {
        timer = setInterval(function () {
            show(index++);
            if (index >= nums.length) index = 0;
        }, 1000);
    }

    autoPlay();

    box.on('mouseover', function () {
        clearInterval(timer);
    }).on('mouseout', function () {
        autoPlay();
    });

});




    var zooming = new Zooming({
        customSize: {
            width: 800,
            height: 440
        }
    });
    zooming.listen('.img-zoomable');



