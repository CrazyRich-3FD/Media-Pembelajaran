var gambarNya=['img/peakpx3.jpg','img/peakpx5.jpg','img/peakpx2.jpg'];
var tunjukGambar=0; //mulai dari gambar pertama
setInterval(function(){
  tunjukGambar+=1; //ganti gambarnya
 if(tunjukGambar==3){ //berapa jumlah gambar
   tunjukGambar=0; //kembali lagi ke gambar pertama
 }
 document.body.style.backgroundImage = 'url('+gambarNya[tunjukGambar]+')';
 document.body.style.backgroundRepeat = "no-repeat";
 document.body.style.backgroundSize = "cover";
 document.gambarNya.style.opacity ="0.5";
},4000); //kecepatan ganti gambar