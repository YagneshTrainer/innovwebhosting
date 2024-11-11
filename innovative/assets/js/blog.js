$(document).ready(function() {
    $('.yt-vector').waypoint(function() {
       $('.yt-vector').
       addClass( "animate__animated animate__fadeInRight")
    }, {offset: "80%"})

    $('.content').waypoint(function() {
        $('.content').
        addClass( "animate__animated animate__fadeInLeft")
     }, {offset: "80%"})

     $('.survey-vector').waypoint(function() {
        $('.survey-vector').
        addClass( "animate__animated animate__fadeInLeft")
     }, {offset: "60%"})
     $('.survey-content').waypoint(function() {
        $('.survey-content').
        addClass( "animate__animated animate__fadeInRight")
     }, {offset: "60%"})


})  