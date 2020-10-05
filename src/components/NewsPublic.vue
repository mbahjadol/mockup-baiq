<template>
    <v-container 
        fluid 
        fill-height
        grid-list-xs
        pb-10 pl-1 pr-1 pt-0
    >
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex xs12 md12 lg12 xl12 pl-1>
                <v-divider></v-divider>
                <p class="subtitle-2 mb-0 pb-0 grey--text">Informasi Terbaru</p>
            </v-flex>
            <v-flex 
                v-for="(pic, index) in randomPics" :key="pic.id" 
                xs6 md3 xl3 
                pb-0 pt-0 pl-1 pr-1
            >
                <v-card 
                    @click="$router.push({name: 'details', params:{ id:pic.id, pic:randomPics[index] }})"
                >
                    <v-img
                    height="60"
                    :src="pic.url"
                    aspect-ratio="2"
                    lazy-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADSCAMAAABThmYtAAAAXVB"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular indeterminate color="blue"></v-progress-circular>
                            </v-row>
                        </template>                
                    </v-img>
                    <div class="pa-1">
                        <p class="subtitle-2-custom text-center mb-0">{{ pic.headline }}</p>
                    </div>
                    <v-card-text class="pt-0 pl-1 pr-1 pb-1">
                        <p class="subtitle-3-custom text-justify pb-0 mb-0">
                            {{pic.excerpt}} [lanjut baca]
                        </p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
	name: 'news-public',
    data(){
        return{
            randomPics:[
                {
                    'id': 0,
                    'url': 'https://picsum.photos/120/60?random=0',
                    'headline': 'Di Jakarta, Satu Motor Hilang Tiap Tiga Jam',
                    'info': 'from Liputan6.com , 04 Feb 2016, 07:07 WIB',
                    'excerpt': 'Populasi sepeda motor di Indonesia dalam kurun waktu 10 tahun terakhir mengalami peningkatan yang signifikan...',
                    'content': `Liputan6.com, Jakarta - Populasi sepeda motor di Indonesia dalam kurun waktu 10 tahun terakhir mengalami peningkatan yang signifikan. 
                    Bermacam-macam model sepeda motor dengan ragam kapasitas mesin serta kemudahan dalam mendapatkannya menjadi faktor utama tumbuhnya alat transportasi yang menjadi andalan masyarakat tersebut. 
                    Seiring dengan populasi yang bertambah, tingkat kecelakaan dan tindak kriminalitas seperti pencurian kendaraan bermotor turut menunjukkan grafik peningkatan. Tentu ini menjadi keprihatinan bersama. 
                    Berdasarkan data Polda Metro Jaya, selama 2015 terjadi 21 kasus kecelakaan setiap harinya, sementara tindak pencurian bisa mencapai 14 kasus dalam sehari.
                    "Di Jakarta setiap tiga jam satu motor hilang. Umumnya pencurian pakai kunci letter T atau begal yang beraksi pakai parang," ujar Edo Rusyanto aktivis Jaringan Aksi Keselamatan Jalan (Jarak Aman) saat dijumpai di Jakarta, Rabu (3/2/2016).
                    Maraknya tindak pencurian, mendorong sejumlah pihak berinovasi dalam menciptakan alat pengaman tambahan untuk kendaraan. Alat berupa GPS tracker jadi salah satunya. 
                    Tidak hanya berfungsi untuk melacak keberadaan motor, alat ini juga bisa untuk menghidupkan atau mematikan mesin dari jarak jauh menggunakan aplikasi pada smartphone.
                    "Kalau pakai alat ini sudah gak takut lagi, kalau ada begal mending saya kasih saja. Paling berapa ratus meter motornya mati sendiri. Jadi lebih aman," katanya.
                    Ia menyebut GPS Tracker yang digunakan merupakan buatan perusahaan telekomunikasi dalam negeri. Alat ini baru akan diperkenalkan ke publik pada 13 Februari 2016 di Jakarta.`
                },
                {
                    'id': 1,
                    'url': 'https://picsum.photos/120/60?random=1',
                    'headline': 'Dalam Semalam, Penghuni Rumah Indekos Kehilangan Tiga Sepeda Motor',
                    'info': 'from metro.sindonews.com , Minggu, 14 Juli 2019 - 22:17 WIB',
                    'excerpt': 'Rumah indekos yang ada di Jalan Pemuda, Kranji, Bekasi disatroni maling pada Sabtu, 13 Juli 2019...',
                    'content': ` Rumah indekos yang ada di Jalan Pemuda, Kranji, Bekasi disatroni maling pada Sabtu, 13 Juli 2019. Dalam peristiwa itu, pelaku menggondol tiga unit sepeda motor milik penghuni rumah indekos tersebut.
                    Kabid Humas Polda Metro Jaya, Kombes Argo Yuwono mengatakan, polisi menerima laporan adanya kasus pencurian di sebuah rumah indekos di kawasan Kranji. Adapun ketiga korban melapor telah kehilangan motornya di pelataran rumah indekosnya.
                    "Korban sadar motornya hilang saat hendak menggunakannya. Diduga pelaku membobol kunci motor dengan letter T," ujarnya pada wartawan, Minggu (14/7/2019).
                    Menurutnya, ketiga korban, yakni Lioni N kehilangan motor Hondanya yang bernopol B 4115 KBN, lalu Deri Y kehilangan motor Honda Beat bernopol B 4141 KHH, dan Okky D kehilangan motor Honda Vario yang bernopol B 4185 KJB. 
                    Polisi pun tengah mencari tahu siapa pelaku pencurian motor tersebut. "Kasusnya ditangani Polsek Metro Bekasi Kota guna mengungkap pelaku pencurian itu," katanya.`
                },
                {
                    'id': 2,
                    'url': 'https://picsum.photos/120/60?random=2',
                    'headline': 'Kasus Kehilangan Motor Kreditan yang Tak Diganti Leasing',
                    'info': 'from viva.co.id , Kamis, 25 Agustus 2016 | 17:54 WIB',
                    'excerpt': 'Tingkat pencurian kendaraan bermotor di Indonesia, terus melonjak naik. Hal inilah yang...',
                    'content': `Tingkat pencurian kendaraan bermotor di Indonesia, terus melonjak naik. Hal inilah yang menyebabkan banyak pengendara motor semakin menyadari pentingnya asuransi bagi kendaraan sehari-hari mereka.
                    Dengan pertimbangan akan mendapatkan ganti rugi saat motor hilang atau kecelakaan parah, maka banyak pengendara memilih asuransi motor jenis TLO (Total Lost Only).
                    Tetapi, anggapan bahwa asuransi TLO dapat memberikan jaminan ganti rugi saat motor hilang, atau rusak, perlu diluruskan kembali. Ada beberapa hal yang memang tidak ditanggung oleh asuransi, apabila motor Anda mengalami masalah. Apa saja itu?
                    Menurut Corporate Communication PT Federal International Finance (FIF), Arif Reza Fahlepi, tidak semua masalah yang dihadapi oleh konsumennya dapat diterima dan ditanggung oleh asuransi. Salah satu yang tidak di-cover oleh asuransi, yaitu apabila pengendara kehilangan motor, karena dihipnotis.
                    "Kalau melihat situasi, terus kami mengedepankan kecurigaan, konspirasinya lebih tinggi. Bisa saja, pengguna menipu dicuri motornya karena dihipnotis, padahal tidak," kata Reza, saat berbincang dengan VIVA.co.id di Depok, Jawa Barat, Kamis 25 Agustus 2016.
                    Selain itu, menurut Reza, penolakan asuransi bisa saja terjadi apabila pengguna motor mengalami penipuan sehingga motornya hilang.
                    "Motor hilang karena parkir di salah satu tempat, juga kami bisa saja kasih penolakan. Kami tentunya harus mengecek lokasinya, betul atau tidak motornya hilang di parkiran. Tapi, kalau kontak dan STNK masih ada di konsumen, sudah valid motor dicuri di parkiran," tutur dia.
                    Reza menambahkan, menggadai motor secara tidak resmi juga tidak akan ditanggung oleh asuransi apabila sepeda motor hilang. "Itu tanggung jawab dari konsumen. Kami tidak cover, karena kan tidak resmi. Kecuali ke Pegadaian, walaupun Pegadaian tidak akan menerima motor tanpa adanya BPKB yang lengkap," ujar dia.
                    Lebih lanjut, menurutnya, kasus penggelapan lainnya yang bisa terjadi biasanya dilakukan karena dipinjamkan oleh pemilik kepada orang lain, atau pihak kedua. Kasus itu juga tidak akan mendapatkan asuransi dari perusahaan pembiayaan.
                    “Maka itu, pemegang polis harusnya sadar dan membaca aturan yang ada dalam surat perjanjian. Supaya, saat terjadi hal tidak diinginkan seperti tadi tidak komplain. Kalau memang hilang, coba saja laporkan ke finance, semuanya bisa dibicarakan kalau memang buktinya kuat,” kata dia. (asp)`
                },
                {
                    'id': 3,
                    'url': 'https://picsum.photos/120/60?random=3',
                    'headline': '[Luar Negeri] Pencuri Kehilangan Mobil Saat Sedang Beraksi',
                    'info': 'from TEMPO.CO , Rabu, 28 Agustus 2019 08:00 WIB',
                    'excerpt': 'Seorang pencuri kehilangan mobil ketika ia sedang beraksi merampok toko di seberang jalan... ',
                    'content': `Seorang pencuri kehilangan mobil ketika ia sedang beraksi merampok toko di seberang jalan. Departemen Kepolisian Kennewick Washington menceritakan kasus ini di laman Facebook.
                    Dilaporkan Tri-City Herald, 26 Agustus 2019, polisi Kennewick mendapat laporan pencurian sebuah pickup pada Ahad pagi.
                    Video CCTV menunjukkan bahwa William A. Kelley, 42 tahun, memarkir truknya di area 500 blok East Bruneau Street sementara ia diduga melintasi jalan untuk mencuri barang-barang dari toko terdekat.
                    Ketika Kelley pergi, seorang pria yang mengendarai sepeda melewati pickup memperhatikan kunci di kursi depan.
                    Dia langsung melemparkan sepedanya di belakang dan pergi ketika Kelley berlari ke arah mobilnya.
                    Kelley langsung dimasukkan ke penjara Benton County karena dicurigai melakukan pencurian tingkat dua. Sementara pickup Chevy 1992 merahnya belum ditemukan hingga laporan ini diturunkan.
                    Unggahan Facebook Kepolisian Kennewick memancing komentar netizen. Salah satu pengguna Facebook mengatakan ironi, yang lain menyebut karma,
                    "Apakah tidak ada kehormatan di antara pencuri ?? Huh, dunia tempat tinggal kita," canda seorang netizen.
                    "Itu karma tercepat yang pernah kulihat," kata yang lain.
                    Pengguna Facebook lain menulis "Ironi!" pada kolom komentar.
                    Dikutip dari CBS17, Departemen Kepolisian Kennewick mengatakan pencurian mobil si pencuri terjadi sekitar pukul 6:00 pagi hari Minggu ketika polisi Kennewick menanggapi laporan pencurian kendaraan.`
                },
                {
                    'id': 4,
                    'url': 'https://picsum.photos/120/60?random=4',
                    'headline': 'Hal yang Harus Dilakukan Ketika Kehilangan Mobil',
                    'info': 'from www.carmudi.co.id , juni 21, 2017',
                    'excerpt': 'Suatu hal yang cukup lumrah ketika Anda kehilangan kendaraan maka akan langsung panik...',
                    'content': `Suatu hal yang cukup lumrah ketika Anda kehilangan kendaraan maka akan langsung panik. Maraknya pencurian mobil dan juga keteledoran yang kerap dilakukan ketika memarkir mobil, kerap kali menjadi penyebab mobil bisa hilang atau dicuri. Musibah seperti kehilangan mobil bisa terjadi pada siapa saja, tapi begitu mengetahui Anda menjadi korban pencurian mobil, maka langkah paling awal yang harus dilakukan adalah tak panik sama sekali. Bagi Anda yang membeli kendaraan secara kredit, tak usah merasa kuatir ketika kehilangan mobil. Hal ini karena ketika mengajukan kredit mobil melalui lembaga pembiayaan (leasing), maka mobil Anda sudah diasuransikan. Berikut ini merupakan langkah-langkah yang harus dilakukan ketika Anda menjadi korban pencurian mobil.\n

                    Buat Laporan ke Pihak Kepolisian
                    Langkah berikutnya yang harus dilakukan adalah mengajukan laporan kehilangan pada pihak kepolisian. Hal ini sangat penting untuk dilakukan, karena pihak yang berwenang untuk mengeluarkan pernyataan pencurian adalah pihak kepolisian. Sampaikan secara jelas kepada pihak kepolisian mulai dari warna mobil, mereknya, jenis, nomer plat mobil, hingga detil-detil yang ada di dalam mobil. Misalnya mobil yang hilang bermerek Toyota Yaris 2010 berwarna hitam.\n

                    Segera Hubungi Pihak Lembaga Pembiayaan atau Asuransi
                    Ketika mobil Anda kecurian, langkah yang harus dilakukan adalah segera menghubungi pihak lembaga pembiayaan untuk mengajukan klaim asuransi.
                    Namun, jika Anda mengajukan sendiri asuransi mobil, maka segera hubungi pihak asuransi. Baik asuransi komprehensif atau pun Total Loss Only, Anda bisa mengajukan klaim penggantian mobil. Pemberitahuan pada pihak asuransi harus segera dilakukan maksimal 3×24 jam.\n
                    
                    Siapkan Dokumen-dokumen Penting
                    Untuk bisa memproses laporan kehilangan ke pihak asuransi, dibutuhkan dokumen-dokumen penunjang yang diperlukan.
                    Laporan kerugian yang diajukan sudah diisi secara lengkap dan ditandatangani oleh tertanggung. Setelah itu, berikan juga fotokopi STNK, fotokopi SIM, fotokopi KTP, surat kehilangan dari kepolisian, dan pernyataan siap untuk di survey oleh pihak asuransi.
                    Selain itu, jika Anda membeli mobil secara kredit, lengkapi juga dengan surat bukti pembayaran cicilan.
                    
                    Buat Surat Pengantar untuk Blokir STNK
                    Selama jangka waktu penyelidikan kehilangan, yang dilakukan oleh pihak kepolisian dan pihak asuransi, maka klaim untuk kehilangan total bisa segera diproses. Oleh karena itu, segera minta pada pihak asuransi untuk membantu membuatkan surat pemblokiran STNK dari kepolisian daerah (Polda). Pemblokiran STNK berguna agar Anda tak menjadi tertuduh apabila mobil disalahgunakan oleh pencuri. Selain itu, pemblokiran juga berguna agar tak terkena pajak progresif ketika membeli mobil lain.
                    
                    Tunggu Hasil Penyelidikan untuk Mendapatkan Penggantian
                    Jika semua kelengkapan dokumen pendukung sudah dipenuhi, maka pembayaran atau penggantian klaim dapat segera dilakukan. Apabila proses klaim dijalani sesuai aturan, maka mulai dari penyerahan kelengkapan dokumen sampai dengan penggantian klaim dibutuhkan waktu sekitar 14 hari.`
                }
            ]
        }
    }
}
</script>
<style scoped>
.subtitle-2-custom{
    font-size: 0.675rem !important;
    font-weight: 500;
    letter-spacing: 0.0071428571em !important;
    line-height: 1rem !important;
  }
.subtitle-3-custom{
    font-size: 0.575rem !important;
    font-weight: 500;
    letter-spacing: 0.0071428571em !important;
    line-height: 0.7rem !important;
    vertical-align: bottom;
  }
</style>