function Getsong()
{
    var song =
    [{song1:'https://open.spotify.com/track/6ROdEkgF2s60OulI8lpXWB?si=26d6dac0f5244149'},{song1:'https://open.spotify.com/track/4hXHlAc9ZOJY5pGbdfuWsa?si=281ec22f74554b5c'},{song1:'https://open.spotify.com/track/16R1Fq1nFxm9DJyzBzKjQk?si=203de77fa070460b'},{song1:'https://open.spotify.com/track/1NfNC8BKQSbWyhwZgLvrfY?si=cd339cae15a24102'},{song1:'https://www.youtube.com/watch?v=6BYIKEH0RCQ&ab_channel=RITVIZ'},{song1:'https://www.youtube.com/watch?v=25s_TeRqyHg&ab_channel=RITVIZ'}];
    var rando = song[Math.floor(Math.random() *song.length)];
       document.getElementById("song1").src=rando.song1;

       document.getElementById("song1").height="100%";
       document.getElementById("song1").width="100%";

       var colors = ["#3b609b", "#9b3b3b", "#3b9b81", "#7da5a4"];

       $(".button").click(function(){
        var rand = Math.floor(Math.random() * colors.length);
        $("body").css("background-color",colors[rand]);
       })

}