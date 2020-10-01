// enum for convertion
const TIME_TYPES = {
    SECOND: 1,
    MINUTE: 2,
    HOUR: 3,
 };

 // make the enum static, so nothing can be added anymore
 Object.freeze(TIME_TYPES);



 // Configuration
TIME_MIN_C = 5
TIME_MIN_TYPE =  TIME_TYPES.SECOND
TIME_MAX_C = 7 
TIME_MAX_TYPE =  TIME_TYPES.SECOND

_VOLUME = 0.5


 function random(min, max) {
    return min + Math.random() * (max - min);
  } 


function get_rand_time(time_min, time_type_min, time_max, time_type_max) {
    return Math.round(random(convert_date_to_miliseconds(time_min, time_type_min), convert_date_to_miliseconds(time_max,time_type_max)));
}

function doDootDoot() {
    console.debug("try playing video now.")
    var video = document.getElementsByClassName("video")[0];
    console.debug(video)
    if (! (video.paused || video.ended) ) {
        console.debug("Video is still playing. Do nothing.")
        return 
    }
    video.loop = false;
    video.muted = false;
    video.preload = true;
    video.volume = _VOLUME;
    video.load();
    video.play();
}


function convert_date_to_miliseconds(time_value,type_of_param_one = TIME_TYPES.HOUR) {
    let number = time_value;

    switch(type_of_param_one) {
        case 1:
            // seconds
            number = number * 1000;
            break;
        case 2:
            // minutes
            number = number * 1000 * 60;
            break;
        case 3:
            // hours
            number = number * 1000 * 60 * 60;
            break;
        default:
          console.debug("cant convert timestamp " + time_value + "given with " + type_of_param_one)
      }
    return number;
}


// setting the time interval 
(function loop() {
    var rand = get_rand_time(TIME_MIN_C, TIME_MIN_TYPE, TIME_MAX_C, TIME_MAX_TYPE);
    console.debug("Parameters were 5 seconds; 10 seconds")
    console.debug("random number is: " + rand + " in seconds: " + Math.round(rand  / 1000))
    console.debug("try setting the intervall for the doot")
    setTimeout(function() {
            doDootDoot();
            loop();  
    }, rand);
}());
