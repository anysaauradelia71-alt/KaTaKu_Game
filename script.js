// DATABASE 200 SOAL KUIS (100 KECEBONG [SD 1-3] & 100 KATAK [SD 4-6])
const quizData = {
    kecebong: [
        { q: "Apa warna bendera negara Indonesia?", a: "Merah Putih", b: "Putih Merah", c: "Merah Kuning", correct: "A" },
        { q: "Hewan apa yang dikenal suka memakan wortel?", a: "Kucing", b: "Kelinci", c: "Tikus", correct: "B" },
        { q: "Berapakah hasil dari penjumlahan 15 + 7?", a: "21", b: "23", c: "22", correct: "C" },
        { q: "Alat musik yang dimainkan dengan cara ditiup adalah?", a: "Suling", b: "Gitar", c: "Drum", correct: "A" },
        { q: "Setelah hari Selasa adalah hari...?", a: "Kamis", b: "Rabu", c: "Senin", correct: "B" },
        { q: "Warna yang dihasilkan dari campuran kuning dan biru adalah?", a: "Ungu", b: "Cokelat", c: "Hijau", correct: "C" },
        { q: "Burung Garuda adalah ... negara Indonesia.", a: "Lambang", b: "Bendera", c: "Lagu", correct: "A" },
        { q: "Buah apa yang kulitnya berduri tajam?", a: "Semangka", b: "Durian", c: "Apel", correct: "B" },
        { q: "Kita mencium aroma makanan menggunakan...?", a: "Mata", b: "Telinga", c: "Hidung", correct: "C" },
        { q: "Hewan apa yang bisa hidup di air dan di darat?", a: "Katak", b: "Ikan", c: "Burung", correct: "A" },
        { q: "Berapakah jumlah kaki pada hewan laba-laba?", a: "6 Kaki", b: "8 Kaki", c: "4 Kaki", correct: "B" },
        { q: "Sila pertama Pancasila dilambangkan dengan gambar?", a: "Rantai", b: "Pohon Beringin", c: "Bintang", correct: "C" },
        { q: "Tempat untuk memberhentikan kereta api disebut?", a: "Stasiun", b: "Bandara", c: "Terminal", correct: "A" },
        { q: "Huruf konsonan pada kata 'KATAK' adalah?", a: "A dan A", b: "K dan T", c: "K, T, dan K", correct: "C" },
        { q: "Benda di langit yang bersinar terang pada siang hari adalah?", a: "Matahari", b: "Bulan", c: "Bintang", correct: "A" },
        { q: "Hewan apa yang menghasilkan madu?", a: "Semut", b: "Lebah", c: "Lalat", correct: "B" },
        { q: "Berapakah hasil dari 20 dikurangi 8?", a: "11", b: "10", c: "12", correct: "C" },
        { q: "Monumen Nasional (Monas) terletak di kota?", a: "Jakarta", b: "Bandung", c: "Surabaya", correct: "A" },
        { q: "Alat yang digunakan untuk menghapus tulisan pensil adalah?", a: "Penggaris", b: "Penghapus", c: "Rautan", correct: "B" },
        { q: "Pakaian adat kebaya berasal dari pulau?", a: "Sumatra", b: "Kalimantan", c: "Jawa", correct: "C" },
        { q: "Susu sapi umumnya kaya akan kandungan...?", a: "Kalsium", b: "Zat Besi", c: "Vitamin C", correct: "A" },
        { q: "Berapa jumlah rakaat pada salat Subuh?", a: "3 Rakaat", b: "2 Rakaat", c: "4 Rakaat", correct: "B" },
        { q: "Kendaraan umum yang berjalan di atas rel besi adalah?", a: "Bus", b: "Pesawat", c: "Kereta Api", correct: "C" },
        { q: "Siapakah presiden pertama Republik Indonesia?", a: "Ir. Soekarno", b: "Moh. Hatta", c: "Jokowi", correct: "A" },
        { q: "Lagu kebangsaan Indonesia berjudul?", a: "Hari Merdeka", b: "Indonesia Raya", c: "Garuda Pancasila", correct: "B" },
        { q: "Mana yang termasuk benda padat?", a: "Batu", b: "Air", c: "Asap", correct: "A" },
        { q: "Es batu jika diletakkan di tempat terbuka akan...?", a: "Membeku", b: "Mencair", c: "Menguap", correct: "B" },
        { q: "Ada berapa warna pada lampu lalu lintas?", a: "2 Warna", b: "4 Warna", c: "3 Warna", correct: "C" },
        { q: "Hewan Lele dan Gabus bernapas di air menggunakan?", a: "Insang", b: "Paru-paru", c: "Kulit", correct: "A" },
        { q: "Berapakah hasil dari 5 dikali 4?", a: "15", b: "20", c: "25", correct: "B" },
        { q: "Lawan kata dari 'BERSIH' adalah?", a: "Indah", b: "Rapi", c: "Kotor", correct: "C" },
        { q: "Siapakah pencipta lagu 'Indonesia Raya'?", a: "W.R. Soepratman", b: "Ibu Sud", c: "L. Manik", correct: "A" },
        { q: "Benda apa yang digunakan sebagai alas kaki saat sekolah?", a: "Sandal", b: "Sepatu", c: "Topi", correct: "B" },
        { q: "Sebelum makan kita harus membaca...?", a: "Buku", b: "Puisi", c: "Doa", correct: "C" },
        { q: "Alat komunikasi genggam yang bisa dibawa kemana-mana adalah?", a: "Handphone", b: "Televisi", c: "Radio", correct: "A" },
        { q: "Hewan apa yang memiliki leher sangat panjang?", a: "Gajah", b: "Jerapah", c: "Kuda", correct: "B" },
        { q: "Ibu kota Provinsi Jawa Tengah adalah?", a: "Solo", b: "Bandung", c: "Semarang", correct: "C" },
        { q: "Berapakah jumlah jari pada kedua tangan kita?", a: "10 Jari", b: "5 Jari", c: "20 Jari", correct: "A" },
        { q: "Tempat untuk menuntut ilmu bersama guru dinamakan?", a: "Pasar", b: "Sekolah", c: "Stasiun", correct: "B" },
        { q: "Gigi palsu, kacamata, dan tongkat sering dipakai oleh?", a: "Bayi", b: "Remaja", c: "Kakek/Nenek", correct: "C" },
        { q: "Buah kelapa muda di dalamnya berisi?", a: "Air dan Daging", b: "Minyak", c: "Madu", correct: "A" },
        { q: "Hewan apa yang jalannya melompat dan mengantongi anaknya?", a: "Monyet", b: "Kanguru", c: "Kucing", correct: "B" },
        { q: "Simbol silang merah putih biasanya ada di gedung?", a: "Pasar", b: "Bank", c: "Rumah Sakit", correct: "C" },
        { q: "Matahari terbit dari sebelah...?", a: "Timur", b: "Barat", c: "Utara", correct: "A" },
        { q: "Buku, pensil, dan penggaris disimpan di dalam?", a: "Dompet", b: "Tas", c: "Kotak Makan", correct: "B" },
        { q: "Uang kertas di Indonesia dikeluarkan resmi oleh Bank...?", a: "Mandiri", b: "BCA", c: "Indonesia (BI)", correct: "C" },
        { q: "Benda yang berputar ditiup angin atau listrik untuk menyejukkan ruangan adalah?", a: "Kipas Angin", b: "Lampu", c: "Jam", correct: "A" },
        { q: "Hewan apa yang bisa berkokok di pagi hari?", a: "Bebek", b: "Ayam Jantan", c: "Burung Hantu", correct: "B" },
        { q: "Sayuran berwarna oranye yang bagus untuk mata adalah?", a: "Bayam", b: "Kangkung", c: "Wortel", correct: "C" },
        { q: "Hari kemerdekaan Indonesia dirayakan setiap bulan...?", a: "Agustus", b: "Oktober", c: "Juni", correct: "A" },
        { q: "Ibu dari ayah atau ibu kita panggil...?", a: "Nenek", b: "Kakek", c: "Tante", correct: "A" },
        { q: "Benda yang digunakan untuk mengeringkan badan setelah mandi adalah?", a: "Selimut", b: "Handuk", c: "Baju", correct: "B" },
        { q: "Berapa jumlah roda pada sepeda motor standar?", a: "3 Roda", b: "4 Roda", c: "2 Roda", correct: "C" },
        { q: "Rasa dari garam dapur adalah...?", a: "Asin", b: "Manis", c: "Pahit", correct: "A" },
        { q: "Hewan apa yang suka memakan pisang dan memanjat pohon?", a: "Kelinci", b: "Monyet", c: "Singa", correct: "B" },
        { q: "Garam dibuat dari air...?", a: "Sungai", b: "Hujan", c: "Laut", correct: "C" },
        { q: "Alat untuk melihat benda-benda yang sangat jauh di langit adalah?", a: "Teleskop", b: "Kacamata", c: "Kaca Pembesar", correct: "A" },
        { q: "Kelompok hewan yang tidak memiliki kaki adalah?", a: "Ayam", b: "Ular", c: "Kambing", correct: "B" },
        { q: "Berapakah hasil dari 10 + 10 + 10?", a: "20", b: "40", c: "30", correct: "C" },
        { q: "Alat musik bedug dimainkan dengan cara...?", a: "Dipukul", b: "Ditiup", c: "Dipetik", correct: "A" },
        { q: "Supaya gigi bersih dan sehat, kita menggosok gigi menggunakan...?", a: "Sabun", b: "Pasta Gigi", c: "Sampo", correct: "B" },
        { q: "Warna langit pada malam hari yang cerah adalah?", a: "Putih", b: "Kuning", c: "Hitam", correct: "C" },
        { q: "Hewan yang tubuhnya ditutupi oleh cangkang keras dan jalannya lambat adalah?", a: "Siput", b: "Kucing", c: "Kelinci", correct: "A" },
        { q: "Bahan pakaian yang hangat dan cocok digunakan saat musim dingin adalah?", a: "Kain Tipis", b: "Kain Wol", c: "Kain Sutra", correct: "B" },
        { q: "Berapakah jumlah hari dalam satu minggu?", a: "5 Hari", b: "6 Hari", c: "7 Hari", correct: "C" },
        { q: "Nasi merupakan makanan pokok yang berasal dari tanaman...?", a: "Padi", b: "Jagung", c: "Gandum", correct: "A" },
        { q: "Hewan apa yang kulitnya licin dan suka berlendir?", a: "Ayam", b: "Belut", c: "Kambing", correct: "B" },
        { q: "Lawan kata dari 'MAHAL' adalah...?", a: "Bagus", b: "Baru", c: "Murah", correct: "C" },
        { q: "Kita mendengarkan penjelasan guru menggunakan...?", a: "Telinga", b: "Mata", c: "Mulut", correct: "A" },
        { q: "Jika kita berbuat salah kepada teman, kita harus...?", a: "Menangis", b: "Minta Maaf", c: "Marah", correct: "B" },
        { q: "Lambang negara Indonesia adalah burung...?", a: "Elang", b: "Merpati", c: "Garuda", correct: "C" },
        { q: "Buah yang memiliki daging warna merah dan banyak biji kecil hitam adalah?", a: "Semangka", b: "Pisang", c: "Mangga", correct: "A" },
        { q: "Berapakah hasil dari perkalian 3 x 3?", a: "6", b: "9", c: "12", correct: "B" },
        { q: "Petani menanam padi di...?", a: "Laut", b: "Pasar", c: "Sawah", correct: "C" },
        { q: "Kendaraan yang ditarik oleh kuda disebut...?", a: "Delman", b: "Mobil", c: "Sepeda", correct: "A" },
        { q: "Hewan apa yang terkenal sebagai raja hutan?", a: "Kancil", b: "Singa", c: "Zebra", correct: "B" },
        { q: "Bumbu dapur yang rasanya pedas adalah...?", a: "Gula", b: "Kecap", c: "Cabai", correct: "C" },
        { q: "Benda yang digunakan untuk mengukur panjang adalah...?", a: "Penggaris", b: "Timbangan", c: "Jam", correct: "A" },
        { q: "Tempat untuk membeli obat-obatan secara resmi adalah?", a: "Pasar", b: "Apotek", c: "Stasiun", correct: "B" },
        { q: "Lampu lalu lintas warna merah berarti kendaraan harus...?", a: "Jalan", b: "Siap-siap", c: "Berhenti", correct: "C" },
        { q: "Hewan yang memijat/merayap di dinding rumah adalah?", a: "Cicak", b: "Burung", c: "Ikan", correct: "A" },
        { q: "Olahraga yang memainkan bola dengan cara ditendang adalah?", a: "Basket", b: "Sepak Bola", c: "Tenis", correct: "B" },
        { q: "Buku yang berisi peta seluruh dunia disebut...?", a: "Kamus", b: "Komik", c: "Atlas", correct: "C" },
        { q: "Supaya tidak kehujanan di jalan, kita menggunakan...?", a: "Payung", b: "Topi", c: "Kacamata", correct: "A" },
        { q: "Hewan apa yang badannya besar dan belalainya panjang?", a: "Jerapah", b: "Gajah", c: "Sapi", correct: "B" },
        { q: "Berapa jumlah sila dalam Pancasila?", a: "3 Sila", b: "4 Sila", c: "5 Sila", correct: "C" },
        { q: "Bahan dasar pembuatan tempe dan tahu adalah...?", a: "Kedelai", b: "Beras", c: "Jagung", correct: "A" },
        { q: "Lawan kata dari 'HIDUP' adalah...?", a: "Sakit", b: "Mati", c: "Tidur", correct: "B" },
        { q: "Sebelum masuk ke rumah orang lain, kita harus mengucapkan?", a: "Halo", b: "Permisi", c: "Salam", correct: "C" },
        { q: "Alat yang memutar jarum angka untuk penunjuk waktu adalah?", a: "Jam", b: "Penggaris", c: "Kalkulator", correct: "A" },
        { q: "Hewan laut yang memiliki delapan lengan panjang dinamakan?", a: "Ikan Mas", b: "Gurita", c: "Kepiting", correct: "B" },
        { q: "Bumbu dapur yang membuat masakan menjadi manis adalah?", a: "Garam", b: "Cuka", c: "Gula", correct: "C" },
        { q: "Siapakah pahlawan yang menjahit bendera Merah Putih pertama?", a: "Fatmawati", b: "Kartini", c: "Cut Nyak Dhien", correct: "A" },
        { q: "Tempat berlabuhnya kapal laut dinamakan...?", a: "Stasiun", b: "Pelabuhan", c: "Bandara", correct: "B" },
        { q: "Warna daun yang sudah kering biasanya berwarna...?", a: "Hijau", b: "Biru", c: "Cokelat/Kuning", correct: "C" },
        { q: "Benda yang tajam dan digunakan untuk memotong kertas adalah?", a: "Gunting", b: "Penggaris", c: "Penghapus", correct: "A" },
        { q: "Hewan apa yang bisa menghasilkan telur ayam?", a: "Bebek", b: "Ayam Betina", c: "Burung Merpati", correct: "B" },
        { q: "Awan di langit yang mendung tebal biasanya berwarna...?", a: "Putih", b: "Biru", c: "Kelabu/Hitam", correct: "C" },
        { q: "Berapakah hasil dari pengurangan 10 - 4?", a: "6", b: "5", c: "4", correct: "A" },
        { q: "Binatang yang jalannya merayap dan suka memakan daun adalah?", a: "Burung", b: "Ulat", c: "Kucing", correct: "B" }
    ],
    katak: [
        { q: "Apakah ibu kota dari negara Indonesia saat ini?", a: "Nusantara (IKN)", b: "Jakarta", c: "Bandung", correct: "A" },
        { q: "Berapakah hasil perkalian dari 12 x 8?", a: "86", b: "96", c: "92", correct: "B" },
        { q: "Planet yang dijuluki sebagai 'Planet Merah' adalah?", a: "Venus", b: "Merkurius", c: "Mars", correct: "C" },
        { q: "Akar pangkat dua dari bilangan 144 adalah?", a: "12", b: "14", c: "11", correct: "A" },
        { q: "Benua terbesar di dunia adalah benua...?", a: "Afrika", b: "Asia", c: "Eropa", correct: "B" },
        { q: "Gaya yang menyebabkan buah apel jatuh ke bawah adalah?", a: "Gaya Gesek", b: "Gaya Pegas", c: "Gaya Gravitasi", correct: "C" },
        { q: "Peristiwa proklamasi kemerdekaan RI terjadi pada tahun?", a: "1945", b: "1928", c: "1950", correct: "A" },
        { q: "Zat hijau daun pada tumbuhan sering disebut dengan?", a: "Kromoplas", b: "Klorofil", c: "Stomata", correct: "B" },
        { q: "Rumah adat 'Tongkonan' berasal dari provinsi?", a: "Papua", b: "Sumatra Barat", c: "Sulawesi Selatan", correct: "C" },
        { q: "Berapakah jumlah provinsi di Indonesia saat ini?", a: "38 Provinsi", b: "34 Provinsi", c: "35 Provinsi", correct: "A" },
        { q: "Mamalia laut terbesar di dunia yang masih hidup adalah?", a: "Hiu Putih", b: "Paus Biru", c: "Lumba-lumba", correct: "B" },
        { q: "Lagu daerah 'Apuse' berasal dari daerah?", a: "Maluku", b: "NTT", c: "Papua", correct: "C" },
        { q: "Alat untuk mengukur suhu tubuh manusia dinamakan?", a: "Termometer", b: "Barometer", c: "Altimeter", correct: "A" },
        { q: "Samudra terluas di dunia adalah samudra...?", a: "Hindia", b: "Pasifik", c: "Atlantik", correct: "B" },
        { q: "Bentuk pecahan desimal dari 3/5 adalah?", a: "0,5", b: "0,75", c: "0,6", correct: "C" },
        { q: "Vitamin yang berfungsi menjaga daya tahan tubuh adalah?", a: "Vitamin C", b: "Vitamin D", c: "Vitamin K", correct: "A" },
        { q: "Tari Piring merupakan tarian tradisional dari daerah?", a: "Aceh", b: "Sumatra Barat", c: "Jawa Barat", correct: "B" },
        { q: "Penulisan kalimat yang benar di bawah ini adalah?", a: "Ibu memasak di dapur.", b: "ibu memasak di dapur", c: "Ibu Memasak Di Dapur", correct: "A" },
        { q: "Organ tubuh yang berfungsi memompa darah adalah?", a: "Paru-paru", b: "Jantung", c: "Hati", correct: "B" },
        { q: "Pancasila terdiri dari berapa sila?", a: "4 Sila", b: "6 Sila", c: "5 Sila", correct: "C" },
        { q: "Bahan dasar pembuatan kain katun berasal dari serat?", a: "Kapas", b: "Sutra", c: "Sintetis", correct: "A" },
        { q: "Berapakah hasil dari 150 : 5?", a: "25", b: "30", c: "40", correct: "B" },
        { q: "Danau vulkanik terbesar di Indonesia adalah danau?", a: "Singkarak", b: "Batur", c: "Toba", correct: "C" },
        { q: "hewan yang memakan segala (tumbuhan & daging) disebut?", a: "Omnivora", b: "Herbivora", c: "Karnivora", correct: "A" },
        { q: "Suku tertua di pulau Jawa adalah suku...?", a: "Sunda", b: "Baduy", c: "Tengger", correct: "B" },
        { q: "Lapisan udara yang menyelimuti bumi disebut dengan?", a: "Atmosfer", b: "Biosfer", c: "Litosfer", correct: "A" },
        { q: "Sudut yang besarnya tepat 90 derajat dinamakan sudut?", a: "Lancip", b: "Siku-siku", c: "Tumpul", correct: "B" },
        { q: "Kerajaan Hindu tertua di Indonesia adalah kerajaan?", a: "Majapahit", b: "Sriwijaya", c: "Kutai", correct: "C" },
        { q: "Siapakah pencipta tokoh pahlawan fiksi Gatotkaca?", a: "Empu Sedah", b: "Raden Saleh", c: "Kisah Mahabarata", correct: "C" },
        { q: "Negara kincir angin adalah julukan untuk negara?", a: "Belanda", b: "Jepang", c: "Inggris", correct: "A" },
        { q: "Berapakah jumlah rusuk pada bangun ruang kubus?", a: "8 Rusuk", b: "12 Rusuk", c: "6 Rusuk", correct: "B" },
        { q: "Proses pembuatan makanan pada tumbuhan hijau dibantu cahaya matahari disebut?", a: "Respirasi", b: "Evaporasi", c: "Fotosintesis", correct: "C" },
        { q: "Candi Borobudur yang megah terletak di provinsi?", a: "Jawa Tengah", b: "Yogyakarta", c: "Jawa Timur", correct: "A" },
        { q: "Alat optik pada kapal selam yang digunakan melihat permukaan laut adalah?", a: "Mikroskop", b: "Periskop", c: "Teleskop", correct: "B" },
        { q: "Hasil penulisan teks Sumpah Pemuda dibacakan pada tahun?", a: "1945", b: "1908", c: "1928", correct: "C" },
        { q: "Garis khatulistiwa di Indonesia salah satunya melewati kota?", a: "Pontianak", b: "Medan", c: "Jakarta", correct: "A" },
        { q: "Penyakit demam berdarah disebarkan melalui gigitan nyamuk?", a: "Anopheles", b: "Aedes Aegypti", c: "Culex", correct: "B" },
        { q: "Pengikisan tanah yang disebabkan oleh hempasan aliran air disebut?", a: "Kondensasi", b: "Reboisasi", c: "Erosi", correct: "C" },
        { q: "Berapakah hasil perhitungan dari -15 + 25?", a: "10", b: "-10", c: "40", correct: "A" },
        { q: "Organisasi PBB yang mengurusi kesehatan dunia adalah?", a: "UNICEF", b: "WHO", c: "UNESCO", correct: "B" },
        { q: "Suku Asmat dan Suku Dani merupakan suku asli dari daerah?", a: "Kalimantan", b: "Maluku", c: "Papua", correct: "C" },
        { q: "Benda gas jika berubah wujud menjadi benda cair dinamakan?", a: "Mengembun", b: "Menyublim", c: "Membeku", correct: "A" },
        { q: "Rumus matematis menghitung luas persegi panjang adalah?", a: "Sisi x Sisi", b: "Panjang x Lebar", c: "Alas x Tinggi", correct: "B" },
        { q: "Pencipta lagu anak-anak legendaris 'Pelangi-Pelangi' adalah?", a: "Ibu Sud", b: "Papa T. Bob", c: "A.T. Mahmud", correct: "C" },
        { q: "Gunung tertinggi di pulau Jawa adalah gunung?", a: "Semeru", b: "Merapi", c: "Slamet", correct: "A" },
        { q: "Hewan yang bernapas menggunakan trakea adalah kelompok?", a: "Mamalia", b: "Serangga", c: "Burung", correct: "B" },
        { q: "Bapak Proklamator Indonesia adalah Soekarno dan...?", a: "Soeharto", b: "Sutan Sjahrir", c: "Mohammad Hatta", correct: "C" },
        { q: "Bagian darah yang berfungsi membekukan darah saat luka adalah?", a: "Keping Darah (Trombosit)", b: "Sel Darah Merah", c: "Sel Darah Putih", correct: "A" },
        { q: "Penemu lampu pijar yang menerangi dunia adalah?", a: "Albert Einstein", b: "Thomas Alva Edison", c: "Isaac Newton", correct: "B" },
        { q: "Urutan tangga nada diatonis setelah nada 'FA' adalah?", a: "DO", b: "RE", c: "SOL", correct: "C" },
        { q: "Planet terbesar dalam tata surya kita adalah planet?", a: "Jupiter", b: "Saturnus", c: "Uranus", correct: "A" },
        { q: "Alat penunjuk arah mata angin dinamakan...?", a: "Termometer", b: "Kompas", c: "Barometer", correct: "B" },
        { q: "Lagu daerah 'Gundul Pacul' berasal dari provinsi?", a: "Jawa Barat", b: "Jawa Timur", c: "Jawa Tengah", correct: "C" },
        { q: "Hewan yang tidak berteulang belakang dikelompokkan sebagai?", a: "Invertebrata", b: "Vertebrata", c: "Mamalia", correct: "A" },
        { q: "Santi rahasia berbentuk titik dan garis dalam pramuka adalah?", a: "Sandi Rumput", b: "Sandi Morse", c: "Sandi Kotak", correct: "B" },
        { q: "Penemu benua Amerika adalah seorang penjelajah bernama?", a: "Vasco da Gama", b: "Magelhaens", c: "Christopher Columbus", correct: "C" },
        { q: "Sel darah yang bertugas melawan kuman penyakit adalah?", a: "Sel Darah Putih", b: "Sel Darah Merah", c: "Keping Darah", correct: "A" },
        { q: "Negara Gajah Putih adalah julukan untuk negara?", a: "Malaysia", b: "Thailand", c: "Vietnam", correct: "B" },
        { q: "Perubahan wujud dari benda padat langsung menjadi gas disebut?", a: "Mencair", b: "Menguap", c: "Menyublim", correct: "C" },
        { q: "Berapa lama bumi mengelilingi matahari dalam satu putaran?", a: "365 Hari", b: "30 Hari", c: "24 Jam", correct: "A" },
        { q: "Organ pencernaan manusia yang berfungsi menyerap air adalah?", a: "Lambung", b: "Usus Besar", c: "Usus Halus", correct: "B" },
        { q: "Tari Kecak merupakan tarian adat yang sangat terkenal dari?", a: "Jawa", b: "Sumatra", c: "Bali", correct: "C" },
        { q: "Pancasila sila ke-4 dilambangkan dengan gambar...?", a: "Kepala Banteng", b: "Pohon Beringin", c: "Padi dan Kapas", correct: "A" },
        { q: "Akar pangkat tiga dari bilangan 1.000 adalah...?", a: "100", b: "10", c: "20", correct: "B" },
        { q: "Peristiwa berputarnya bumi pada porosnya sendiri disebut?", a: "Revolusi", b: "Evolusi", c: "Rotasi", correct: "C" },
        { q: "Simbol kimia untuk air bersih yang sering kita gunakan adalah?", a: "H2O", b: "CO2", c: "O2", correct: "A" },
        { q: "Bunga nasional Indonesia yang dijuluki 'Puspa Bangsa' adalah?", a: "Mawar", b: "Melati Putih", c: "Anggrek Bulan", correct: "B" },
        { q: "Benua terkecil di dunia yang berada di dekat Indonesia adalah?", a: "Eropa", b: "Afrika", c: "Australia", correct: "C" },
        { q: "Alat indra manusia yang berfungsi mendeteksi rasa manis/pahit?", a: "Lidah", b: "Kulit", c: "Hidung", correct: "A" },
        { q: "Badak bercula satu merupakan hewan langka yang dilindungi di?", a: "Taman Nasional Komodo", b: "Ujung Kulon", c: "Way Kambas", correct: "B" },
        { q: "Bentuk pecahan biasa yang paling sederhana dari 75% adalah?", a: "1/2", b: "2/3", c: "3/4", correct: "C" },
        { q: "Hubungan timbal balik antara makhluk hidup dan lingkungannya disebut?", a: "Ekosistem", b: "Habitat", c: "Populasi", correct: "A" },
        { q: "Pahlawan nasional yang mendapat julukan 'Ayam Jantan dari Timur'?", a: "Pangeran Diponegoro", b: "Sultan Hasanuddin", c: "Kapitan Pattimura", correct: "B" },
        { q: "Garis lintang nol derajat yang membagi bumi utara dan selatan dinamakan?", a: "Garis Bujur", b: "Garis Meridian", c: "Garis Khatulistiwa", correct: "C" },
        { q: "Bunyi tidak dapat merambat melalui ruangan yang...?", a: "Hampa Udara", b: "Padat", c: "Berair", correct: "A" },
        { q: "Berapakah nilai KPK dari bilangan 12 dan 15?", a: "30", b: "60", c: "45", correct: "B" },
        { q: "Penemu telepon pertama kali di dunia adalah...?", a: "Albert Einstein", b: "Nikola Tesla", c: "Alexander Graham Bell", correct: "C" },
        { q: "Negara yang berbatasan darat langsung dengan pulau Papua adalah?", a: "Papua Nugini", b: "Timor Leste", c: "Malaysia", correct: "A" },
        { q: "Proses penguapan air laut ke atmosfer bumi disebut?", a: "Kondensasi", b: "Evaporasi", c: "Presipitasi", correct: "B" },
        { q: "Presiden ketiga Republik Indonesia adalah...?", a: "Soeharto", b: "Abdurrahman Wahid", c: "B.J. Habibie", correct: "C" },
        { q: "Kumpulan dari beberapa sel yang memiliki fungsi sama disebut?", a: "Jaringan", b: "Organ", c: "Sistem Organ", correct: "A" },
        { q: "Suku Minangkabau merupakan suku asli yang berasal dari?", a: "Sumatra Utara", b: "Sumatra Barat", c: "Riau", correct: "B" },
        { q: "Berapakah hasil dari 25 dikalikan 4 lalu dibagi 2?", a: "100", b: "25", c: "50", correct: "C" },
        { q: "Cairan pencernaan empedu diproduksi manusia di dalam organ?", a: "Hati", b: "Lambung", c: "Pankreas", correct: "A" },
        { q: "Hari Lahir Pancasila diperingati setiap tanggal...?", a: "17 Agustus", b: "1 Juni", c: "1 Oktober", correct: "B" },
        { q: "Alat musik 'Sasando' merupakan alat musik tradisional dari?", a: "Maluku", b: "Papua", c: "NTT", correct: "C" },
        { q: "Simbol gas yang dihirup manusia saat bernapas adalah?", a: "Oksigen (O2)", b: "Karbondioksida", c: "Nitrogen", correct: "A" },
        { q: "Berapakah jumlah sudut siku-siku pada sebuah bangun persegi?", a: "4 Sudut", b: "2 Sudut", c: "3 Sudut", correct: "A" },
        { q: "Tembok Raksasa yang menjadi salah satu keajaiban dunia berada di?", a: "Mesir", b: "India", c: "Cina", correct: "C" },
        { q: "Bagian terkecil dari makhluk hidup dinamakan...?", a: "Sel", b: "Atom", c: "Jaringan", correct: "A" },
        { q: "Perpindahan panas melalui aliran zat perantara disebut?", a: "Radiasi", b: "Konveksi", c: "Konduksi", correct: "B" },
        { q: "Ibu kota dari negara Jepang adalah kota...?", a: "Seoul", b: "Beijing", c: "Tokyo", correct: "C" },
        { q: "Garis yang menghubungkan titik pusat lingkaran dengan busur lingkaran?", a: "Jari-jari", b: "Diameter", c: "Tali Busur", correct: "A" },
        { q: "Hewan unta menyimpan cadangan air dan lemak tubuhnya di?", a: "Leher", b: "Punuk", c: "Kaki", correct: "B" },
        { q: "Lagu daerah 'Ampar-Ampar Pisang' berasal dari daerah?", a: "Sulawesi", b: "Sumatra", c: "Kalimantan Selatan", correct: "C" },
        { q: "Hubungan antara lebah dan bunga merupakan simbiosis...?", a: "Mutualisme", b: "Komensalisme", c: "Parasitisme", correct: "A" },
        { q: "Badan antariksa resmi milik negara Amerika Serikat bernama?", a: "ESA", b: "NASA", c: "Roscosmos", correct: "B" },
        { q: "Akar pangkat dua dari bilangan 625 adalah...?", a: "15", b: "35", c: "25", correct: "C" },
        { q: "Gaya yang bekerja saat kita mengerem laju sepeda motor adalah?", a: "Gaya Gesek", b: "Gaya Magnet", c: "Gaya Otot", correct: "A" },
        { q: "Organisasi ASEAN didirikan pada tanggal 8 Agustus tahun?", a: "1945", b: "1967", c: "1998", correct: "B" }
    ]
};

// STATE GAME
let currentLevel = 'kecebong';
let currentQuestionIndex = 0;
let score = 0;
let hearts = 5;
let timer;
let timeLeft = 40;
let isAudioPlaying = false; 

// FUNGSI LOGIKA AUDIO NYAMBUNG
function playTrack(trackPath) {
    const music = document.getElementById('bgMusic');
    if (!music) return;
    
    const currentTrack = decodeURIComponent(music.src.split('/').pop());
    const newTrack = trackPath.split('/').pop();

    if (currentTrack !== newTrack) {
        music.src = trackPath;
        music.load();
        if (isAudioPlaying) {
            music.play().catch(e => console.log("Audio diputar:", e));
        }
    } else {
        if (isAudioPlaying && music.paused) {
            music.play().catch(e => console.log("Melanjutkan audio:", e));
        }
    }
}

// LOGIKA NAVIGASI HALAMAN
function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    if (screenId === 'screen-main' || screenId === 'screen-level' || screenId === 'screen-score') {
        playTrack('assets/music-1.mp3'); // PERBAIKAN: Spasi nama file dibersihkan
    } else if (screenId === 'screen-quiz') {
        playTrack('assets/music-2-kuis.mp3'); // PERBAIKAN: Spasi nama file dibersihkan
    }
}

// TOGGLE AUDIO UTAMA
function toggleAudio() {
    const music = document.getElementById('bgMusic');
    const audioBtn = document.getElementById('btn-audio');
    if (!music) return;
    
    if (!isAudioPlaying) {
        isAudioPlaying = true;
        if (audioBtn) audioBtn.style.opacity = "1";
        // PERBAIKAN: Mengandalkan playTrack untuk memicu pemutaran, menghindari duplikasi crash
        playTrack(music.src ? music.src : 'assets/music-1.mp3');
    } else {
        isAudioPlaying = false;
        if (audioBtn) audioBtn.style.opacity = "0.5";
        music.pause();
    }
}

// MEMILIH LEVEL & MASUK KUIS
function selectLevel(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    hearts = 5;
    
    navigateTo('screen-quiz');
    loadQuestion();
}

// MEMUAT SOAL
// MEMUAT SOAL
function loadQuestion() {
    clearInterval(timer);
    timeLeft = 40;
    updateTimerDisplay();

    const questions = quizData[currentLevel];
    
    // Berakhir jika seluruh 100 soal di level tersebut habis atau nyawa 0
    if (currentQuestionIndex >= questions.length || hearts <= 0) {
        endGame();
        return;
    }

    const frog = document.getElementById('frog-game');
    if (frog) frog.src = 'assets/karakter-katak-1.png';

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = `${currentQuestionIndex + 1}. ${currentQuestion.q}`;
    
    // Ambil semua elemen dengan class answer-card
    const cards = document.querySelectorAll('.answer-card');
    
    // HANYA GANTI TEKSNYA SAJA (Fungsi klik sudah aman dihandle oleh onclick milik HTML)
    if (cards.length >= 3) {
        cards[0].innerText = currentQuestion.a;
        cards[1].innerText = currentQuestion.b;
        cards[2].innerText = currentQuestion.c;
    }

    document.getElementById('heart-text').innerText = `❤️ x${hearts}`;

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleWrongAnswer();
        }
    }, 1000);
}

function updateTimerDisplay() {
    let secs = timeLeft < 10 ? '0' + timeLeft : timeLeft;
    const timerText = document.getElementById('timer-text');
    if (timerText) timerText.innerText = `00:${secs}`;
}

// CEK JAWABAN
function checkAnswer(selectedLetter) {
    clearInterval(timer);
    const currentQuestion = quizData[currentLevel][currentQuestionIndex];
    const frog = document.getElementById('frog-game');

    if (selectedLetter === currentQuestion.correct) {
        score += 100;
        if (frog) {
            frog.src = 'assets/karakter-katak-2.png'; // PERBAIKAN: Spasi nama file dibersihkan
            frog.classList.add('jump-animation');
        }

        setTimeout(() => {
            if (frog) frog.classList.remove('jump-animation');
            currentQuestionIndex++;
            loadQuestion();
        }, 600);
    } else {
        handleWrongAnswer();
    }
}

// JAWABAN SALAH
function handleWrongAnswer() {
    const frog = document.getElementById('frog-game');
    hearts--;
    document.getElementById('heart-text').innerText = `❤️ x${hearts}`;
    
    if (frog) {
        frog.src = 'assets/karakter-katak-1.png'; // PERBAIKAN: Spasi nama file dibersihkan
        frog.classList.add('sad-animation');
    }

    setTimeout(() => {
        if (frog) frog.classList.remove('sad-animation');
        currentQuestionIndex++;
        if(hearts <= 0) {
            endGame();
        } else {
            loadQuestion();
        }
    }, 600);
}

// SELESAI GAME -> PERGI KE HALAMAN SKOR
function endGame() {
    clearInterval(timer); // Pastikan timer bersih saat game over
    navigateTo('screen-score');
    document.getElementById('final-score').innerText = score;
    
    const heartRow = document.getElementById('final-hearts');
    if (heartRow) {
        heartRow.innerHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= hearts) {
                heartRow.innerHTML += '❤️ ';
            } else {
                heartRow.innerHTML += '🤍 ';
            }
        }
    }
}

// RESET GAME KEMBALI KE MENU UTAMA
function resetGame() {
    navigateTo('screen-main');
}

// // =======================================================
// TAMBAHAN UNTUK MOBILE FULLSCREEN & AUTO LANDSCAPE
// =======================================================
document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.querySelector('.btn-start');
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            // Pindah ke layar pilihan level saat tombol mulai diklik
            navigateTo('screen-level');

            // 1. Meminta browser masuk ke mode Fullscreen
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) { /* Safari / iOS */
                document.documentElement.webkitRequestFullscreen();
            }

            // 2. Mengunci orientasi layar HP menjadi mendatar (Landscape)
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('landscape').catch(function(error) {
                    console.log("Kunci orientasi via JS ditolak, sistem beralih menggunakan rotasi CSS.");
                });
            }
        });
    }
});