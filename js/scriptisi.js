function isi(page)
{
    var Div=document.getElementById('halaman');
            var d1=document.getElementById('page1');
            var d2=document.getElementById('bahanajar');
            var d3=document.getElementById('petakonsep');
            var d4=document.getElementById('materi');
            var d5=document.getElementById('evaluasi');
            var html='';

            if(page==1){
                html+='<div class="imagebg2"><img src="img/image2.png" alt=""></div>';
            }
            else if(page==2){
                html+='<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">';
                html+='<div class="carousel-inner">';
                html+='<div class="carousel-item active">';
                html+='<h2 class="bottom">KOMPETENSI DASAR</h2>';
                html+='<ul>';
                html+='<li>Mendeskripsikan keselamatan dan kesehatan Kerja ( K3 )</li>';
                html+='<li>Menerapkan Prosedur K3</li>';
                html+='</ul>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="bottom">INDIKATOR </h2>';
                html+='<ul>';
                html+='<li>Siswa mampu menjelaskan pengertian K3</li>';
                html+='<li>Siswa mampu menjelaskan tujuan dari K3</li>';
                html+='<li>Siswa mampu menyebutkan alat pelindung diri</li>';
                html+='<li>Siswa mampu menyebutkan Askpek Penerapan K3</li>';
                html+='<li>Siswa mampu mengidentifikasi Bahaya Dalam K3</li>';
                html+='</ul>';
                html+='</div>';

                html+='</div>';
                html+='<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">';
                html+='<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
                html+='<span class="visually-hidden">Previous</span>';
                html+='</button>';
                html+='<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">';
                html+='<span class="carousel-control-next-icon" aria-hidden="true"></span>';
                html+='<span class="visually-hidden">Next</span>';
                html+='</button>';
            }
            else if(page==3){
                html+='<div class="imagebg2"><img src="img/image1.jpg" alt=""></div>';
            }
            else if(page==4){
                html+='<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">';
                html+='<div class="carousel-inner">';
                html+='<div class="carousel-item active">';
                html+='<div class="gambar"><img src="img/logo-k3-keselamatan-dan-kesehatan-kerja-600x576-removebg-preview.png" alt=""></div>'
                html+='<h1>KESELAMATAN DAN KESEHATAN<br/>KERJA (K3)</h1>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="bottom">Tujuan K3</h2>';
                html+='<ul>';
                html+='<li>Melindungi para pekerja dan orang lain di tempat kerja</li>';
                html+='<li>Menjamin agar setiap sumber produksi dapat dipakai secara aman dan efisien</li>';
                html+='<li>Menjamin proses produksi berjalan lancar</li>';
                html+='</ul>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h3>Pengertian<br/>KESELAMATAN DAN KESEHATAN KERJA</h3>';
                html+='<h4>Philosophy</h4>';
                html+='<p>Upaya untuk menjamin keutuhan dan kesempurnaan tenaga kerja dan manusia pada umumnya, hasil karya dan budayanya menuju masyarakat yang adil dan sejahtera.</p>';
                html+='<h4>Keilmuan</h4>';
                html+='<p>Suatu ilmu pengetahuan dan penerapannya dalam upaya mencegah kecelakaan, kebakaran, peledakan, pencemaran, penyakit, dll.</p>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<div class="imagebg1"><img src="img/image.png" alt=""></div>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2>Identifikasi Bahaya</h2>';
                html+='<ul>';
                html+='<li>Sebelum memulai suatu pekerjaan, harus dilakukan Identifikasi Bahaya guna mengetahui potensi bahaya dalam setiap pekerjaan.</li>';
                html+='<li>Identifikasi Bahaya dilakukan bersama pengawas pekerjaan dan Safety Departement.</li>';
                html+='<li>Semua hasil identifikasi Bahaya harus didokumentasikan dengan baik dan dijadikan sebagai pedoman dalam melakukan setiap kegiatan.</li>';
                html+='</ul>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="bottom">Penentuan Faktor Resiko</h2>';
                html+='<div class="flex">';
                html+='<ul>';
                html+='<li>Sifat Pekerjaan</li>';
                html+='<li>Lokasi Kerja</li>';
                html+='<li>Potensi bahaya di tempat kerja</li>';
                html+='</ul>';
                html+='<ul>';
                html+='<li>Potensi/kualifikasi kontraktor</li>';
                html+='<li>Lamanya pekerjaan </li>';
                html+='<li>Pengalaman dan keahlian kontraktor</li>';
                html+='</ul>';
                html+='</div>';
                html+='</div>';
                html+='<div class="carousel-item">';
                html+='<h2 class="bottom">ANALYSIS KECELAKAAN</h2>';
                html+='<p class="pkecil">ANALISA KECELAKAAN, bertujuan menemukan faktor penyebab utamanya dan menentukan tindakan pencegahan terjadinya peristiwa yang sama.</p>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2>Akibat Kecelakaan</h2>';
                html+='<div class="flex1">';
                html+='<div class="cont1">';
                html+='<h4>Korban manusia</h4>';
                html+='<ul>';
                html+='<li>Sifat Pekerjaan</li>';
                html+='<li>Lokasi Kerja</li>';
                html+='<li>Potensi bahaya di tempat kerja</li>';
                html+='</ul>';
                html+='</div>';
                html+='<div class="cont1">';
                html+='<h4>Kerugian Material</h4>';
                html+='<ul>';
                html+='<li>Potensi/kualifikasi kontraktor</li>';
                html+='<li>Lamanya pekerjaan </li>';
                html+='<li>Pengalaman dan keahlian kontraktor</li>';
                html+='</ul>';
                html+='</div>';
                html+='</div>';
                html+='<div class="cont">';
                html+='<h4 class="zero">Kerugian waktu kerja</h4>';
                html+='<p class="zero">jam kerja orang</p>';
                html+='</div>';
                html+='</div>';
                
                html+='<div class="carousel-item">';
                html+='<h2 class="top">Sumber Kecelakaan</h2>';
                html+='<div class="flex">';
                html+='<ul class="top1">';
                html+='<li>Mesin produksi</li>';
                html+='<li>Penggerak mula dan pompa</li>';
                html+='<li>Lift</li>';
                html+='<li>Pesawat angkat</li>';
                html+='<li>Converyor</li>';
                html+='<li>Pesawat angkut</li>';
                html+='<li>Alat transmisi mekanik (rantai, pulley, dll)</li>';
                html+='<li>Perkakas kerja tangan</li>';
                html+='<li>Pesawat uap dan bejana tekan</li>';
                html+='</ul>';
                html+='<ul class="top1">';
                html+='<li>Peralatan listrik</li>';
                html+='<li>Bahan kimia</li>';
                html+='<li>Debu berbahaya</li>';
                html+='<li>Radiasi dan bahan radioaktif</li>';
                html+='<li>Faktor lingkungan</li>';
                html+='<li>Bahan mudah terbakar dan benda panas</li>';
                html+='<li>Binatang</li>';
                html+='<li>Permukaan lantai kerja</li>';
                html+='<li>Lain-lain.</li>';
                html+='</ul>';
                html+='</div>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="top">Type Kecelakaan</h2>';
                html+='<div class="flex">';
                html+='<ul class="top2">';
                html+='<li>Terbentur</li>';
                html+='<li>Terpukul</li>';
                html+='<li>Tertangkap pada, dalam atau diantara benda</li>';
                html+='<li>Jatuh dari ketinggian yang sama</li>';
                html+='<li>Jatuh dari ketinggian yang berbeda</li>';
                html+='<li>Tergelincir</li>';
                html+='<li>Terpapar</li>';
                html+='<li>Penghisapan, penyerapan</li>';
                html+='<li>Tersentuh aliran listrik</li>';
                html+='<li>Lain-lain</li>';
                html+='</ul>';
                html+='</div>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="top">Kondisi Berbahaya</h2>';
                html+='<div class="flex">';
                html+='<ul class="top2">';
                html+='<li>Pengamanan yang tidak sempurna</li>';
                html+='<li>Peralatan/bahan yang tidak seharusnya</li>';
                html+='<li>Kecacatan, ketidak sempurnaan</li>';
                html+='<li>Prosedur yang tidak aman</li>';
                html+='<li>Penerangan tidak sempurna</li>';
                html+='<li>Iklim kerja yang tidak aman</li>';
                html+='<li>Tekanan udara yang tidak aman</li>';
                html+='<li>Getaran yang berbahaya</li>';
                html+='<li>Pakaian, kelengkapan yang tidak aman</li>';
                html+='<li>Kejadian berbahaya lainnya</li>';
                html+='</ul>';
                html+='</div>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="top">Tindakan Berbahaya</h2>';
                html+='<div class="flex">';
                html+='<ul class="top2">';
                html+='<li>Melakukan pekerjaan tanpa wewenang</li>';
                html+='<li>Bekerja dengan kecepatan berbahaya</li>';
                html+='<li>Membuat alat pengaman tidak berfungsi</li>';
                html+='<li>Memakai peralatan yang tidak aman, tanpa peralatan</li>';
                html+='<li>Melakukan Proses  dengan tidak aman</li>';
                html+='<li>Posisi atau sikap tubuh tidak aman</li>';
                html+='<li>Bekerja pada objek yang berputar atau berbahaya</li>';
                html+='<li>Mengalihkan perhatian, mengganggu, sembrono / berkelakar, mengagetkan dan lain-lain.</li>';
                html+='<li>Melalaikan penggunaan alat pelindung diri yang ditentukan.</li>';
                html+='</ul>';
                html+='</div>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="top">Pencegahan Kecelakaan Kerja</h2>';
                html+='<div class="flex2">';
                html+='<ul class="top1">';
                html+='<li>Peraturan</li>';
                html+='<li>Standardisasi</li>';
                html+='<li>Pengawasan</li>';
                html+='<li>Penelitan Teknik</li>';
                html+='<li>Penelitian Medis</li>';
                html+='<li>Penelitian Psikologis</li>';
                html+='</ul>';
                html+='<ul class="top1">';
                html+='<li>Penelitian Statistik</li>';
                html+='<li>Pendidikan</li>';
                html+='<li>Pelatihan</li>';
                html+='<li>Persuasi</li>';
                html+='<li>Asuransi</li>';
                html+='<li>Penerangan 1 s/d 11</li>';
                html+='</ul>';
                html+='</div>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="bottom">Faktor Manusia</h2>';
                html+='<ul>';
                html+='<li>Sangat dominan di lingkungan konstruksi.</li>';
                html+='<li>Pekerja Heterogen, Tingkat skill dan edukasi berbeda, Pengetahuan tentang keselamatan rendah</li>';
                html+='<li>Perlu penanganan khusus</li>';
                html+='</ul>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="bottom">Faktor Teknis</h2>';
                html+='<ul>';
                html+='<li>Berkaitan dengan kegiatan kerja Proyek seperti penggunaan peralatan dan alat berat, penggalian, pembangunan, pengangkutan dsb</li>';
                html+='<li>Disebabkan kondisi teknis dan metoda kerja yang tidak memenuhi standar keselamatan (substandards condition)</li>';
                html+='</ul>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="bottom">Pencegahan Faktor Manusia</h2>';
                html+='<ul>';
                html+='<li>Pemilihan Tenaga Kerja</li>';
                html+='<li>Pelatihan sebelum mulai kerja</li>';
                html+='<li>Pembinaan dan pengawasan selama kegiatan berlangsung</li>';
                html+='</ul>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="bottom">Pencegahan Faktor Teknis</h2>';
                html+='<ul>';
                html+='<li>Perencanaan Kerja yang baik.</li>';
                html+='<li>Pemeliharaan dan perawatan peralatan</li>';
                html+='<li>Pengawasan dan pengujian peralatan kerja</li>';
                html+='<li>Penggunaan metoda dan teknik konstruksi yang aman</li>';
                html+='<li>Penerapan Sistim Manajemen Mutu</li>';
                html+='</ul>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="bottom">PRINSIP DASAR UU NO.1 TAHUN 1970</h2>';
                html+='<ul>';
                html+='<li>Sentralisasi kebijakan dan desentralisasi pelaksanaan melalui pengangkatan ahli K3</li>';
                html+='<li>Manajemen partisipatif, keikutsertaan pekerja sebagai anggota P2K2 dan ikut merumuskan kebijakan K3 yang berkaitan dengan kepentingan pekerja</li>';
                html+='<li>Pemberdayaan pekerja dan pengusaha</li>';
                html+='</ul>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="bottom">PRINSIP DASAR UU NO.1 TAHUN 1970</h2>';
                html+='<p class="center">MENCEGAH & PENGURANGI KECELAKAAN</p>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<h2 class="top">SYARAT-SYARAT K3</h2>';
                html+='<div class="flex3">';
                html+='<ul class="top2">';
                html+='<li>Mencegah dan mengurangi kecelakaan</li>';
                html+='<li>Mencegah, mengurangi dan memadamkan kebakaran</li>';
                html+='<li>Mencegah dan mengurangi bahaya peledakan</li>';
                html+='<li>Memberi kesempatan atau jalan menyelamatkan diri pada waktu kebakaran atau kejadian-kejadian lain yang berbahaya.</li>';
                html+='<li>Memberi pertolongan pada keelakaan</li>';
                html+='<li>Memberi APD diri pada para pekerja</li>';
                html+='<li>Mencegah dan mengendalikan timbulnya penyakit akibat kerja.</li>';
                html+='<li>dan seterusnya………….</li>';
                html+='</ul>';
                html+='</div>';
                html+='</div>';

                html+='<div class="carousel-item">';
                html+='<div class="imagebg"><img src="img/thank-you-removebg-preview.png" alt=""></div>';
                html+='</div>';

                html+='</div>';
                html+='<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">';
                html+='<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
                html+='<span class="visually-hidden">Previous</span>';
                html+='</button>';
                html+='<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">';
                html+='<span class="carousel-control-next-icon" aria-hidden="true"></span>';
                html+='<span class="visually-hidden">Next</span>';
                html+='</button>';
                html+='</div>';
            }
            else{
                html+='<div class="cont3">';
                html+='<h2 class="top">Pertanyaan</h2>';
                html+='<div class="flex3">';
                html+='<ul class="top2">';
                html+='<li>Apa itu Keselamatan dan Kesehatan Kerja (K3)?</li>';
                html+='<li>Apa di Indonesia, ada Undang-Undang yang mengatur mengenai K3?</li>';
                html+='<li>Bagaimana jika terjadi pelanggaran terhadap UU Keselamatan dan Kesehatan Kerja misalnya pengusaha tidak menyediakan alat keselamatan kerja atau perusahaan tidak memeriksakan kesehatan dan kemampuan fisik pekerja?</li>';
                html+='<li>Bagaimana Perjanjian Kerja Bersama mengatur mengenai K3?</li>';
                html+='<li>Apa saja kendala-kendala yang biasa dihadapi dalam pelaksanaan Perjanjian Kerja Bersama dalam hal penerapan K3?</li>';
                html+='<li>Mengapa diperlukan adanya pendidikan keselamatan dan kesehatan kerja?</li>';
                html+='</ul>';
                html+='</div>';
                html+='</div>';
            }

            Div.innerHTML=html;
}