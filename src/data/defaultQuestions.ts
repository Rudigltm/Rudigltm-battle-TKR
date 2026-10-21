import { Question } from '../types/game';

export const INITIAL_QUESTIONS: Question[] = [
  // --- 1. SISTEM MESIN KENDARAAN RINGAN ---
  {
    id: 'tkr-eng-01',
    topic: 'Sistem Mesin Kendaraan Ringan',
    difficulty: 1,
    question: 'Urutan siklus kerja motor bensin 4 langkah (4-stroke engine) yang benar adalah...',
    options: {
      A: 'Hisap - Usaha - Kompresi - Buang',
      B: 'Hisap - Kompresi - Usaha - Buang',
      C: 'Kompresi - Hisap - Usaha - Buang',
      D: 'Usaha - Hisap - Kompresi - Buang'
    },
    correctAnswer: 'B',
    explanation: 'Pada motor 4 langkah, siklus kerja berlangsung selama 4 gerakan torak (2 putaran poros engkol): langkah hisap (piston turun, katup hisap buka), kompresi (piston naik, katup tutup), usaha (pembakaran memicu piston turun), dan buang (piston naik mendorong gas sisa keluar).',
    incorrectReasoning: {
      A: 'Kompresi harus mendahului langkah usaha agar campuran bahan bakar dapat terbakar efisien.',
      C: 'Langkah hisap harus terjadi terlebih dahulu untuk memasukkan campuran udara dan bahan bakar.',
      D: 'Langkah usaha merupakan hasil dari pembakaran setelah kompresi, bukan awal siklus.'
    }
  },
  {
    id: 'tkr-eng-02',
    topic: 'Sistem Mesin Kendaraan Ringan',
    difficulty: 2,
    question: 'Komponen mesin yang berfungsi mengubah gerakan translasi bolak-balik torak menjadi gerakan putar adalah...',
    options: {
      A: 'Poros nok (Camshaft)',
      B: 'Batang penekan (Push rod)',
      C: 'Poros engkol (Crankshaft)',
      D: 'Roda gila (Flywheel)'
    },
    correctAnswer: 'C',
    explanation: 'Poros engkol (crankshaft) dihubungkan dengan piston melalui batang torak (connecting rod) untuk mentransformasikan gaya gerak lurus naik-turun torak menjadi momen puntir/gerak putar.',
    incorrectReasoning: {
      A: 'Camshaft berfungsi mengatur saat membuka dan menutupnya katup.',
      B: 'Push rod meneruskan dorongan tappet ke rocker arm pada mekanisme katup OHV.',
      D: 'Flywheel berfungsi menyimpan energi inersia putaran mesin agar putaran tetap stabil.'
    }
  },
  {
    id: 'tkr-eng-03',
    topic: 'Sistem Mesin Kendaraan Ringan',
    difficulty: 3,
    question: 'Tujuan utama penyetelan celah katup sesuai spesifikasi buku manual perbaikan adalah untuk...',
    options: {
      A: 'Menghindari kebocoran oli mesin ke ruang bakar',
      B: 'Mengkompensasi pemuaian batang katup saat mesin mencapai suhu kerja optimal',
      C: 'Meningkatkan tegangan pegas katup agar tidak terjadi floating',
      D: 'Mengurangi beban gesek pada poros nok secara drastis'
    },
    correctAnswer: 'B',
    explanation: 'Logam katup memuai akibat panas kerja mesin. Jika tidak ada celah katup, saat memuai katup tidak akan tertutup rapat (bocor kompresi). Jika celah terlalu lebar, katup terlambat membuka dan timbul suara berisik.',
    incorrectReasoning: {
      A: 'Kebocoran oli dicegah oleh sil katup (valve stem seal), bukan celah katup.',
      C: 'Tegangan pegas katup ditentukan oleh kekuatan elastisitas pegas, bukan celah tappet.',
      D: 'Celah katup tidak dirancang semata-mata untuk gesekan camshaft, melainkan kerapatan dudukan katup.'
    }
  },
  {
    id: 'tkr-eng-04',
    topic: 'Sistem Mesin Kendaraan Ringan',
    difficulty: 4,
    caseStudyContext: 'Sebuah mobil MPV mengalami keluhan mesin pincang (misfire pada silinder 3) dan keluar asap putih kebiruan tipis dari knalpot. Hasil tes kompresi silinder: Silinder 1: 12 bar, Silinder 2: 12 bar, Silinder 3: 7 bar, Silinder 4: 12 bar. Setelah oli dimasukkan ke silinder 3 (wet compression test), tekanan kompresi silinder 3 naik drastis menjadi 11,5 bar.',
    question: 'Berdasarkan data pemeriksaan tersebut, komponen yang mengalami kerusakan atau keausan adalah...',
    options: {
      A: 'Katup hisap silinder 3 bengkok',
      B: 'Paking kepala silinder (head gasket) silinder 3 bocor ke jalur air',
      C: 'Cincin kompresi (piston ring) atau dinding silinder nomor 3 aus',
      D: 'Dudukan katup buang (valve seat) silinder 3 terbakar (pitted)'
    },
    correctAnswer: 'C',
    explanation: 'Pada tes kompresi basah (wet compression test), oli diteteskan ke dalam silinder untuk menyekat celah antara ring piston dan dinding silinder. Jika tekanan kompresi melonjak naik secara signifikan, kerusakan pasti berada pada ring piston atau dinding silinder yang aus. Jika kompresi tetap rendah, indikasi mengarah ke katup bocor atau paking kepala silinder.',
    incorrectReasoning: {
      A: 'Jika katup bengkok, penambahan oli tidak akan menaikkan tekanan kompresi karena udara bocor melalui celah katup.',
      B: 'Kebocoran paking silinder biasanya menyebabkan kompresi tetap rendah dan air pendingin mendidih/berbusa.',
      D: 'Dudukan katup terbakar menyebabkan kebocoran udara yang tidak tertutup oleh lapisan oli pelumas ring piston.'
    }
  },
  {
    id: 'tkr-eng-05',
    topic: 'Sistem Mesin Kendaraan Ringan',
    difficulty: 5,
    caseStudyContext: 'Sebuah mesin bensin 4 silinder DOHC 16 valve baru saja dibongkar total (overhaul). Saat distarter pertama kali, terdengar suara tumbukan keras dari dalam kepala silinder dan mesin langsung terkunci tidak dapat berputar. Pemeriksaan visual menunjukkan beberapa katup bengkok menghantam puncak piston.',
    question: 'Kesalahan prosedur perakitan yang paling mendasar penyebab kegagalan tersebut adalah...',
    options: {
      A: 'Momen pengencangan baut kepala silinder tidak merata',
      B: 'Pemasangan timing belt/chain tidak tepat pada tanda keselarasan (timing mark out of synchronization)',
      C: 'Oli mesin pelumas awal (assembly lube) kurang banyak di poros nok',
      D: 'Pemasangan ring kompresi terbalik antara ring nomor 1 dan 2'
    },
    correctAnswer: 'B',
    explanation: 'Pada mesin interferensi (interference engine), ruang pembakaran sangat sempit. Jika timing mark poros nok dan poros engkol tidak sejajar tepat, katup akan terbuka saat torak mencapai Titik Mati Atas (TMA), mengakibatkan tabrakan langsung antara torak dan payung katup hingga bengkok.',
    incorrectReasoning: {
      A: 'Momen baut kepala silinder yang tidak rata menyebabkan kebocoran kompresi/oli, bukan tabrakan katup dan torak.',
      C: 'Kurang assembly lube menyebabkan keausan camshaft saat start awal, tidak membuat katup menabrak piston.',
      D: 'Ring piston terbalik menyebabkan konsumsi oli boros atau blow-by gas, bukan katup menghantam piston.'
    }
  },

  // --- 2. SISTEM BAHAN BAKAR BENSIN & DIESEL ---
  {
    id: 'tkr-fuel-01',
    topic: 'Sistem Bahan Bakar Bensin & Diesel',
    difficulty: 1,
    question: 'Perbandingan campuran udara dan bahan bakar bensin teoritis (stoikiometri) untuk pembakaran sempurna adalah...',
    options: {
      A: '14,7 : 1 (14,7 kg udara per 1 kg bensin)',
      B: '1 : 14,7 (1 kg udara per 14,7 kg bensin)',
      C: '12,5 : 1 (campuran kaya)',
      D: '16,0 : 1 (campuran kurus)'
    },
    correctAnswer: 'A',
    explanation: 'Perbandingan stoikiometrik ideal untuk motor bensin adalah 14,7 bagian massa udara berbanding 1 bagian massa bensin (nilai Lambda = 1,0), di mana oksigen cukup tepat untuk membakar seluruh hidrokarbon.',
    incorrectReasoning: {
      B: 'Ini adalah rasio terbalik yang keliru.',
      C: '12,5 : 1 adalah campuran kaya (power mixture) untuk akselerasi maksimum.',
      D: '16,0 : 1 adalah campuran miskin (lean mixture) untuk efisiensi jelajah jalan datar.'
    }
  },
  {
    id: 'tkr-fuel-02',
    topic: 'Sistem Bahan Bakar Bensin & Diesel',
    difficulty: 2,
    question: 'Komponen pada sistem bahan bakar Common Rail Diesel yang berfungsi mengatur tekanan tinggi solar di dalam accumulator rail adalah...',
    options: {
      A: 'Feed pump mekanis',
      B: 'Suction Control Valve (SCV) / Pressure Regulator Valve',
      C: 'Glow plug (busi pijar)',
      D: 'Water sedimenter'
    },
    correctAnswer: 'B',
    explanation: 'SCV (Suction Control Valve) atau Pressure Control Valve mengatur jumlah solar yang ditekan pompa supply ke rail pipa rel bersama, sehingga tekanan tinggi rail (mencapai 1600 - 2200 bar) terjaga stabil sesuai target ECU.',
    incorrectReasoning: {
      A: 'Feed pump hanya menyedot solar tekanan rendah dari tangki menuju supply pump.',
      C: 'Glow plug memanaskan ruang bakar sebelum start awal pada mesin diesel.',
      D: 'Water sedimenter menyaring endapan air dari bahan bakar diesel.'
    }
  },
  {
    id: 'tkr-fuel-03',
    topic: 'Sistem Bahan Bakar Bensin & Diesel',
    difficulty: 3,
    question: 'Prosedur pembuangan udara palsu (bleeding) pada sistem bahan bakar mesin diesel konvensional wajib dilakukan apabila...',
    options: {
      A: 'Tangki bahan bakar terisi penuh hingga leher pengisian',
      B: 'Mesin mengalami kehabisan solar atau setelah pergantian filter bahan bakar solar',
      C: 'Oli mesin diganti dengan viskositas lebih kental',
      D: 'Tekanan ban kempes di bawah 30 psi'
    },
    correctAnswer: 'B',
    explanation: 'Udara yang terjebak di saluran bahan bakar diesel bersifat elastis (dapat dikompresi), sehingga tekanan pompa injeksi tidak mampu membuka jarum injektor. Oleh karena itu, priming pump harus dipompa dan sumbat bleeding dibuka untuk mengeluarkan udara.',
    incorrectReasoning: {
      A: 'Tangki terisi penuh justru menjamin pasokan solar lancar tanpa udara.',
      C: 'Penggantian oli mesin tidak berhubungan dengan rongga udara di sirkuit solar.',
      D: 'Tekanan ban merupakan sistem roda/sasis, tidak terkait sistem injeksi mesin.'
    }
  },
  {
    id: 'tkr-fuel-04',
    topic: 'Sistem Bahan Bakar Bensin & Diesel',
    difficulty: 4,
    caseStudyContext: 'Sebuah mobil diesel common rail mengeluhkan mesin mendadak mati (stall) saat digas mendadak di tanjakan (high engine load). Pada putaran idle mesin hidup normal. DTC yang terbaca adalah P0087 (Fuel Rail/System Pressure - Too Low). Uji kebocoran balik injektor (injector back-leak test) menunjukkan silinder 2 mengeluarkan volume solar balik 3 kali lebih banyak daripada silinder lainnya.',
    question: 'Berdasarkan hasil diagnosa tersebut, penyebab utama mesin mati mendadak saat akselerasi adalah...',
    options: {
      A: 'Kotoran menyumbat saringan knalpot (muffler)',
      B: 'Injektor silinder 2 mengalami kebocoran internal (internal leak), menyebabkan tekanan rail drop drastis',
      C: 'Busi pijar silinder 2 putus kawat pemanasnya',
      D: 'Sensor pedal gas (APP Sensor) aus pada jalur kontak 1'
    },
    correctAnswer: 'B',
    explanation: 'Injektor common rail menggunakan control valve bertekanan tinggi. Jika dudukan katup internal injektor silinder 2 aus atau macet terbuka, solar tekanan tinggi akan langsung kabur ke saluran balik (return line). Saat beban tinggi dibutuhkan tekanan tinggi, supply pump tidak sanggup menutupi kebocoran tersebut, memicu penurunan tekanan rail (P0087) dan ECU mematikan mesin demi proteksi.',
    incorrectReasoning: {
      A: 'Knalpot tersumbat menimbulkan hilangnya tenaga secara bertahap dan gas buang panas, tidak menyebabkan kebocoran return injector silinder 2.',
      C: 'Busi pijar hanya aktif saat cold start, tidak mempengaruhi tekanan rail diesel saat berjalan.',
      D: 'APP sensor error memunculkan DTC pedal throttle correlation, bukan drop tekanan bahan bakar.'
    }
  },
  {
    id: 'tkr-fuel-05',
    topic: 'Sistem Bahan Bakar Bensin & Diesel',
    difficulty: 5,
    caseStudyContext: 'Mobil bensin EFI mengalami gejala mesin tersendat (hunting) saat beban penuh dan sulit dihidupkan saat kondisi mesin dingin. Teknisi memasang fuel pressure gauge: tekanan bahan bakar saat kunci kontak ON (mesin mati) terukur 320 kPa (spek: 310-350 kPa). Namun saat kunci kontak dimatikan, jarum tekanan langsung anjlok ke 0 kPa dalam tempo kurang dari 3 detik (spek: minimal bertahan di atas 150 kPa selama 5 menit).',
    question: 'Komponen yang paling mungkin mengalami kerusakan pada fuel pump assembly tersebut adalah...',
    options: {
      A: 'Motor dinamo pompa bensin putaran kumparannya terbalik',
      B: 'Check valve (katup satu arah) pada fuel pump atau fuel pressure regulator bocor',
      C: 'Sensor temperatur udara masuk (IAT) menghasilkan resistansi terlalu besar',
      D: 'Kabel massa baterai berkarat'
    },
    correctAnswer: 'B',
    explanation: 'Check valve di fuel pump berfungsi menjaga tekanan sisa (residual pressure) di fuel delivery pipe saat mesin mati, agar bensin tidak menguap (vapor lock) dan mesin langsung cepat hidup saat di-crank berikutnya. Jika tekanan drop ke 0 kPa secara instan, check valve atau diaphragm pressure regulator bocor.',
    incorrectReasoning: {
      A: 'Jika kumparan putarannya terbalik, tekanan saat mesin ON tidak akan mencapai 320 kPa.',
      C: 'Sensor IAT mempengaruhi durasi injeksi saat mesin hidup, tidak mempengaruhi tekanan mekanik pipa bahan bakar.',
      D: 'Kabel massa mempengaruhi suplai tegangan kelistrikan, tidak memicu kebocoran hidrolik bahan bakar saat kunci OFF.'
    }
  },

  // --- 3. SISTEM PELUMASAN & PENDINGINAN ---
  {
    id: 'tkr-lub-01',
    topic: 'Sistem Pelumasan & Pendinginan',
    difficulty: 1,
    question: 'Arti kode standar SAE 10W-40 pada kemasan botol oli mesin mobil adalah...',
    options: {
      A: 'Masa pakai oli 10 minggu dan tahan suhu maksimal 40 derajat Celsius',
      B: 'Oli multigrade dengan kekentalan setara indeks 10 pada suhu dingin (W=Winter) dan indeks 40 pada suhu kerja',
      C: 'Kekuatan gesek oli sebesar 10 Watt pada 40 putaran per detik',
      D: 'Kapasitas oli maksimal 10 liter untuk 40 silinder mesin'
    },
    correctAnswer: 'B',
    explanation: 'SAE (Society of Automotive Engineers) menetapkan klasifikasi viskositas. Huruf W menandakan Winter (sifat alir di suhu beku/dingin), sedangkan angka kedua (40) adalah tingkat kekentalan oli pada suhu kerja mesin 100°C.',
    incorrectReasoning: {
      A: 'Angka SAE tidak menunjukkan durasi waktu minggu pemakaian.',
      C: 'Watt adalah satuan daya listrik/mekanik, tidak terkait viskositas oli.',
      D: 'SAE adalah standar kekentalan fluida, bukan volume kapasitas oli mesin.'
    }
  },
  {
    id: 'tkr-lub-02',
    topic: 'Sistem Pelumasan & Pendinginan',
    difficulty: 2,
    question: 'Katup pada tutup radiator (radiator cap) yang bekerja membuka saat tekanan air radiator melebihi ambang batas (sekitar 0,9 - 1,1 bar) untuk mengalirkan ke tangki cadangan (reservoir) adalah...',
    options: {
      A: 'Vacuum valve (katup vakum)',
      B: 'Pressure valve (katup pelepas tekanan)',
      C: 'Thermostat valve',
      D: 'Water bypass valve'
    },
    correctAnswer: 'B',
    explanation: 'Pressure valve akan terangkat saat air pendingin panas dan memuai hingga melampaui tekanan pegas tutup, membiarkan kelebihan cairan dan uap mengalir ke reservoir tank untuk mencegah radiator pecah.',
    incorrectReasoning: {
      A: 'Vacuum valve terbuka saat mesin dingin untuk menyedot kembali cairan dari reservoir ke radiator.',
      C: 'Thermostat berada di saluran mesin/blok silinder, bukan di tutup radiator.',
      D: 'Bypass valve mengalirkan air di dalam blok mesin saat thermostat masih tertutup.'
    }
  },
  {
    id: 'tkr-lub-03',
    topic: 'Sistem Pelumasan & Pendinginan',
    difficulty: 3,
    question: 'Komponen pada sistem pelumasan yang berfungsi mencegah komponen mesin kekurangan oli jika elemen filter oli tersumbat kotoran pekat adalah...',
    options: {
      A: 'Relief valve pada pompa oli',
      B: 'Bypass valve (safety relief valve) pada rumah filter oli',
      C: 'Dipstick oli (batang pengukur)',
      D: 'Oil strainer (saringan kasar)'
    },
    correctAnswer: 'B',
    explanation: 'Bypass valve pada filter oli akan membuka secara otomatis karena perbedaan tekanan akibat filter tersumbat, sehingga oli mesin tetap mengalir ke bantalan-bantalan mesin tanpa filtrasi untuk mencegah mesin macet (engine seizure).',
    incorrectReasoning: {
      A: 'Relief valve pompa oli membatasi tekanan oli maksimum agar seal oli tidak jebol.',
      C: 'Dipstick hanya alat ukur manual level oli di karter.',
      D: 'Oil strainer hanya menyaring partikel logam besar di dasar bak oli.'
    }
  },
  {
    id: 'tkr-lub-04',
    topic: 'Sistem Pelumasan & Pendinginan',
    difficulty: 4,
    caseStudyContext: 'Sebuah sedan mengalami panas mesin berlebih (overheating) saat melaju di jalan tol dengan kecepatan tinggi, tetapi suhu normal saat terjebak macet santai di dalam kota. Teknisi memeriksa radiator bagian bawah terasa dingin sedangkan selang radiator atas sangat panas dan keras bertekanan.',
    question: 'Penyebab kerusakan teknis yang paling akurat dari kasus tersebut adalah...',
    options: {
      A: 'Kipas pendingin elektrik (cooling fan) putarannya terbalik arah',
      B: 'Thermostat macet pada posisi tertutup atau kisi-kisi radiator tersumbat kerak kapur',
      C: 'Tali kipas (fan belt) terlalu kencang',
      D: 'Oli transmisi otomatis tercampur bensin'
    },
    correctAnswer: 'B',
    explanation: 'Jika thermostat macet menutup, air panas dari mesin tidak dapat bersirkulasi menuju radiator untuk didinginkan. Akibatnya selang atas mendidih sementara selang bawah tetap dingin karena tidak menerima sirkulasi air panas.',
    incorrectReasoning: {
      A: 'Kipas terbalik atau mati justru membuat mesin overheat saat macet berhenti, bukan di tol kecepatan tinggi.',
      C: 'Tali kipas kencang merusak bearing water pump, tidak menyumbat sirkulasi aliran thermostat.',
      D: 'Oli transmisi tidak mempengaruhi perbedaan suhu selang radiator atas dan bawah secara langsung.'
    }
  },
  {
    id: 'tkr-lub-05',
    topic: 'Sistem Pelumasan & Pendinginan',
    difficulty: 5,
    caseStudyContext: 'Ketika teknisi memeriksa oli mesin saat servis berkala, oli pada dipstick tampak berwarna putih kecoklatan menyerupai kopi susu (milky oil) dan level oli bertambah naik melebihi batas F. Pada leher pengisian oli terdapat busa putih emulsi.',
    question: 'Diagnosis kerusakan dan tindakan perbaikan komprehensif yang wajib dilakukan adalah...',
    options: {
      A: 'Cukup ganti oli mesin dengan SAE lebih kental dan kurangi beban muatan',
      B: 'Terjadi percampuran cairan pendingin (coolant) ke sirkuit pelumasan akibat paking silinder jebol atau blok retak; perlu overhaul dan uji kerataan kepala silinder',
      C: 'Bensin menetes dari injektor yang bocor ke ruang bakar; bersihkan injektor dengan injector cleaner',
      D: 'Saringan udara basah terkena air hujan; cukup ganti saringan udara'
    },
    correctAnswer: 'B',
    explanation: 'Warna oli seperti susu kopi (emulsi oli dan air) merupakan indikator mutlak bahwa cairan pendingin radiator masuk bercampur ke sirkuit oli. Penyebab utamanya adalah gasket kepala silinder (cylinder head gasket) putus, kepala silinder melengkung karena overheat sebelumnya, atau oil cooler internal bocor.',
    incorrectReasoning: {
      A: 'Hanya mengganti oli akan merusak seluruh metal duduk dan metal jalan karena oli bercampur air hilang daya lumasnya.',
      C: 'Bensin bercampur oli membuat oli encer dan berbau bensin tajam, tidak berwarna emulsi putih susu.',
      D: 'Filter udara basah memicu mesin brebet kekurangan pasokan udara, bukan membuat oli mesin jadi susu kopi di karter.'
    }
  },

  // --- 4. SISTEM PEMINDAH TENAGA ---
  {
    id: 'tkr-pow-01',
    topic: 'Sistem Pemindah Tenaga',
    difficulty: 1,
    question: 'Komponen sistem pemindah tenaga (power train) yang berfungsi membedakan putaran roda kiri dan roda kanan saat mobil berbelok adalah...',
    options: {
      A: 'Kopling (Clutch)',
      B: 'Transmisi (Gearbox)',
      C: 'Diferensial / Gardan (Differential)',
      D: 'Poros propeller (Propeller shaft)'
    },
    correctAnswer: 'C',
    explanation: 'Diferensial memungkinkan roda luar berputar lebih cepat daripada roda dalam saat berbelok, melalui mekanisme pinion gear dan side gear.',
    incorrectReasoning: {
      A: 'Kopling menghubungkan dan memutuskan putaran mesin ke transmisi.',
      B: 'Transmisi merubah momen puntir dan kecepatan kendaraan.',
      D: 'Poros propeller meneruskan putaran dari transmisi ke gardan belakang.'
    }
  },
  {
    id: 'tkr-pow-02',
    topic: 'Sistem Pemindah Tenaga',
    difficulty: 2,
    question: 'Komponen pada transmisi manual sinkromes (synchromesh) yang berfungsi menyamakan putaran roda gigi transmisi sebelum gigi bertaut adalah...',
    options: {
      A: 'Synchronizer ring (cincin sinkromes)',
      B: 'Shift fork (garpu pemindah)',
      C: 'Reverse idler gear',
      D: 'Input shaft bearing'
    },
    correctAnswer: 'A',
    explanation: 'Synchronizer ring bekerja berdasarkan prinsip gesekan kerucut (cone clutch) untuk menyamakan kecepatan putaran antara roda gigi dan clutch hub sleeve sebelum dog teeth saling bertaut secara halus.',
    incorrectReasoning: {
      A: 'Tepat.',
      B: 'Shift fork hanya menggerakkan sleeve maju mundur.',
      C: 'Reverse idler gear membalik arah putaran roda gigi mundur.',
      D: 'Input shaft bearing mendukung tumpuan poros input.'
    }
  },
  {
    id: 'tkr-pow-03',
    topic: 'Sistem Pemindah Tenaga',
    difficulty: 3,
    question: 'Pemeriksaan run-out (kebengkokan) poros propeller shaft menggunakan alat ukur...',
    options: {
      A: 'Mikrometer luar (Outside Micrometer)',
      B: 'Jangka sorong (Vernier Caliper)',
      C: 'Dial Indicator (Dial Gauge) dengan V-block',
      D: 'Feeler gauge (bilah peraba)'
    },
    correctAnswer: 'C',
    explanation: 'Dial indicator yang dipasang di atas tumpuan V-block digunakan untuk mengukur keolengan poros saat diputar perlahan. Nilai toleransi run-out poros propeller umumnya di bawah 0,8 mm.',
    incorrectReasoning: {
      A: 'Mikrometer mengukur diameter luar batang poros, bukan kelengkungan putar.',
      B: 'Jangka sorong tidak memiliki jarum pembacaan defleksi dinamik presisi tinggi hingga 0,01 mm.',
      D: 'Feeler gauge untuk mengukur celah datar antara dua bidang rapat.'
    }
  },
  {
    id: 'tkr-pow-04',
    topic: 'Sistem Pemindah Tenaga',
    difficulty: 4,
    caseStudyContext: 'Sebuah mobil manual berpenggerak roda belakang (RWD) mengalami gejala slip kopling: saat pedal gas diinjak mendadak di jalan menanjak, jarum RPM mesin melonjak tinggi namun laju kecepatan kendaraan tidak bertambah sebanding. Bau hangus tercium dari rumah kopling.',
    question: 'Penyebab kerusakan teknis yang paling mendasar pada unit kopling tersebut adalah...',
    options: {
      A: 'Oli transmisi SAE 90 terlalu kental',
      B: 'Kanvas kopling (clutch disc) aus tipis atau terkena ceceran oli bocor dari sil kruk as belakang',
      C: 'Release bearing macet tidak bisa berputar sama sekali',
      D: 'Pegas diafragma terlalu keras daya tekannya'
    },
    correctAnswer: 'B',
    explanation: 'Slip kopling terjadi saat koefisien gesek plat kopling berkurang drastis, biasanya akibat kampas aus melewati paku keling atau terkontaminasi oli dari kebocoran rear crankshaft oil seal, sehingga flywheel tidak mampu memutar plat kopling secara penuh.',
    incorrectReasoning: {
      A: 'Oli transmisi kental membuat perpindahan tuas gigi keras, bukan menyebabkan kopling slip.',
      C: 'Release bearing macet menimbulkan suara mendesing saat pedal kopling diinjak.',
      D: 'Pegas diafragma yang keras justru menambah daya jepit plat kopling.'
    }
  },
  {
    id: 'tkr-pow-05',
    topic: 'Sistem Pemindah Tenaga',
    difficulty: 5,
    caseStudyContext: 'Sebuah mobil SUV berpenggerak 4WD menimbulkan bunyi dengung keras (howling/whining noise) dari kolong gardan belakang saat mobil melaju pada kecepatan 60-80 km/jam saat pedal gas ditekan (drive condition), namun bunyi menghilang saat mobil meluncur (coast/deceleration).',
    question: 'Diagnosis penyetelan diferensial yang tidak tepat adalah...',
    options: {
      A: 'Penyetelan persinggungan gigi (tooth contact) dan backlash antara drive pinion dan ring gear di luar toleransi',
      B: 'Rem tromol belakang macet bergesekan dengan kanvas',
      C: 'Tekanan ban belakang kiri dan kanan berbeda 1 psi',
      D: 'Mur roda belakang kurang kencang 5 Nm'
    },
    correctAnswer: 'A',
    explanation: 'Suara dengung diferensial yang timbul pada kondisi pembebanan (drive) dan hilang saat meluncur mengindikasikan pola kontak gigi (tooth pattern contact) atau backlash antara pinion gear dan crown wheel (ring gear) tidak tepat atau keausan bearing pinion.',
    incorrectReasoning: {
      B: 'Rem macet menimbulkan panas berlebih pada tromol dan bau kanvas terbakar terus menerus.',
      C: 'Perbedaan ban 1 psi terlalu kecil untuk memicu dengung roda gigi hipoid.',
      D: 'Mur roda kendor menimbulkan bunyi ketukan berulang (clunking), bukan dengung gear melolong konstan.'
    }
  },

  // --- 5. SISTEM REM ---
  {
    id: 'tkr-brk-01',
    topic: 'Sistem Rem',
    difficulty: 1,
    question: 'Prinsip hukum fisika yang mendasari sistem kerja rem hidrolis mobil adalah...',
    options: {
      A: 'Hukum Ohm',
      B: 'Hukum Pascal',
      C: 'Hukum Archimedes',
      D: 'Hukum Newton I'
    },
    correctAnswer: 'B',
    explanation: 'Hukum Pascal menyatakan bahwa tekanan yang diberikan pada zat cair dalam ruang tertutup akan diteruskan ke segala arah dengan sama besar dan sama rata.',
    incorrectReasoning: {
      A: 'Hukum Ohm adalah hukum kelistrikan (V = I x R).',
      C: 'Hukum Archimedes membahas gaya apung fluida.',
      D: 'Hukum Newton berkaitan dengan gerak dan kelembaman.'
    }
  },
  {
    id: 'tkr-brk-02',
    topic: 'Sistem Rem',
    difficulty: 2,
    question: 'Fungsi utama Brake Booster (booster rem) pada sistem pengereman kendaraan adalah...',
    options: {
      A: 'Mencegah roda terkunci saat pengereman mendadak',
      B: 'Melipatgandakan gaya penekanan pedal rem menggunakan kevakuman intake manifold',
      C: 'Mengatur keseimbangan gaya rem roda depan dan belakang',
      D: 'Mendinginkan piringan cakram rem dari gesekan kanvas'
    },
    correctAnswer: 'B',
    explanation: 'Brake booster memanfaatkan perbedaan tekanan antara kevacuuman saluran masuk (intake manifold) dan tekanan atmosfer untuk meringankan tenaga injakan pengemudi pada pedal rem.',
    incorrectReasoning: {
      A: 'Mencegah roda terkunci adalah fungsi ABS (Anti-lock Braking System).',
      C: 'Mengatur keseimbangan depan-belakang adalah fungsi Proportioning Valve.',
      D: 'Pendinginan cakram dilakukan oleh ventilasi sirip piringan rotor disc.'
    }
  },
  {
    id: 'tkr-brk-03',
    topic: 'Sistem Rem',
    difficulty: 3,
    question: 'Minyak rem yang dianjurkan untuk mobil penumpang modern umumnya berstandar DOT 3 atau DOT 4. Perbedaan utama antara keduanya adalah...',
    options: {
      A: 'DOT 4 memiliki titik didih (boiling point) yang lebih tinggi dibanding DOT 3',
      B: 'DOT 3 terbuat dari minyak mineral murni sedangkan DOT 4 dari oli mesin',
      C: 'DOT 4 tidak boleh bersentuhan dengan karet seal rem',
      D: 'DOT 3 tidak dapat menyerap uap air sama sekali'
    },
    correctAnswer: 'A',
    explanation: 'DOT 4 memiliki dry boiling point minimal 230°C dan wet boiling point 155°C, lebih tahan panas dibanding DOT 3 (205°C / 140°C), sehingga lebih tahan terhadap bahaya vapour lock saat pengereman intensif.',
    incorrectReasoning: {
      B: 'Baik DOT 3 maupun DOT 4 berbasis glikol eter (glycol ether).',
      C: 'DOT 4 dirancang aman terhadap semua karet EPDM sistem rem modern.',
      D: 'Keduanya bersifat higroskopis (menyerap uap air dari udara).'
    }
  },
  {
    id: 'tkr-brk-04',
    topic: 'Sistem Rem',
    difficulty: 4,
    caseStudyContext: 'Seorang pengemudi mengeluhkan pedal rem mobilnya terasa sangat dalam dan membal/lembek (spongy pedal). Jika pedal rem dikocok berulang kali secara cepat, posisi pedal naik dan rem mulai menggigit, tetapi jika dibiarkan sesaat kembali amblas.',
    question: 'Langkah diagnosis dan perbaikan yang paling tepat untuk masalah tersebut adalah...',
    options: {
      A: 'Melakukan pembuangan udara palsu (bleeding sistem hidrolis rem)',
      B: 'Mengganti seluruh piringan cakram dengan diameter lebih besar',
      C: 'Mengencangkan baut kaliper rem dengan momen 100 Nm',
      D: 'Mengganti minyak rem dengan oli transmisi SAE 90'
    },
    correctAnswer: 'A',
    explanation: 'Pedal rem yang terasa membal seperti spons dan naik saat dikocok menandakan adanya gelembung udara di dalam pipa hidrolis rem (karena sifat udara yang kompresibel). Solusinya adalah melakukan bleeding sirkuit rem sampai tidak ada gelembung yang keluar.',
    incorrectReasoning: {
      B: 'Piringan cakram aus memicu getaran pedal rem saat berputar, bukan pedal membal.',
      C: 'Baut kaliper tidak mempengaruhi sifat elastis fluida rem di master silinder.',
      D: 'Oli transmisi akan merusak dan mengembangkan seluruh seal karet rem dalam hitungan jam.'
    }
  },
  {
    id: 'tkr-brk-05',
    topic: 'Sistem Rem',
    difficulty: 5,
    caseStudyContext: 'Sebuah mobil dengan rem ABS mengalami indikator lampu peringatan ABS menyala di dashboard secara permanen. Scan tool membaca kode kerusakan DTC C0205: "Left Front Wheel Speed Sensor Circuit Malfunction". Teknisi mengukur sinyal output sensor roda kiri depan saat roda diputar: multimeter membaca tegangan 0 Volt AC konstan, sementara kabel harness ke ECU memiliki kontinuitas normal.',
    question: 'Pemeriksaan fisik lanjutan yang harus dilakukan pada unit roda tersebut adalah...',
    options: {
      A: 'Memeriksa kebersihan ujung sensor magnetik dan rotor ring (reluctor ring/tone wheel) dari kotoran gram besi atau keretakan gigi',
      B: 'Mengganti master silinder rem tandem',
      C: 'Menyetel celah pedal gas mesin',
      D: 'Mengganti kampas rem belakang tromol'
    },
    correctAnswer: 'A',
    explanation: 'Sensor kecepatan roda tipe induktif menghasilkan sinyal AC sinusoidal saat gigi reluctor ring melintas di depan magnet sensor. Jika sensor kotor oleh partikel besi, retak, atau celah udara (air gap) terlalu jauh, tidak ada pulsa voltase yang terinduksi ke ECU.',
    incorrectReasoning: {
      B: 'Master silinder adalah komponen hidrolik dasar, tidak menghasilkan sinyal pulsa kecepatan roda.',
      C: 'Pedal gas terkait throttle mesin, tidak berhubungan dengan sinyal roda kiri depan.',
      D: 'DTC merujuk spesifik pada sensor roda kiri depan (Left Front), bukan roda belakang.'
    }
  },

  // --- 6. SISTEM KEMUDI & SUSPENSI ---
  {
    id: 'tkr-str-01',
    topic: 'Sistem Kemudi & Suspensi',
    difficulty: 1,
    question: 'Sudut kemiringan roda depan bagian atas ke arah luar atau dalam jika dilihat dari arah depan kendaraan disebut sudut...',
    options: {
      A: 'Caster',
      B: 'Camber',
      C: 'Toe-in',
      D: 'Kingpin inclination'
    },
    correctAnswer: 'B',
    explanation: 'Camber adalah sudut kemiringan roda terhadap garis vertikal jika dilihat dari depan. Camber positif bila roda miring keluar di bagian atas, camber negatif bila miring ke dalam.',
    incorrectReasoning: {
      A: 'Caster adalah kemiringan poros putar kemudi (steering axis) jika dilihat dari samping kendaraan.',
      C: 'Toe adalah selisih jarak roda depan bagian muka dan belakang jika dilihat dari atas.',
      D: 'Kingpin inclination adalah kemiringan sumbu putar kemudi terhadap garis vertikal dari depan.'
    }
  },
  {
    id: 'tkr-str-02',
    topic: 'Sistem Kemudi & Suspensi',
    difficulty: 2,
    question: 'Komponen suspensi yang berfungsi meredam osilasi (ayunan berulang) pegas suspensi saat melintasi jalan bergelombang adalah...',
    options: {
      A: 'Stabilizer bar',
      B: 'Shock absorber (peredam kejut)',
      C: 'Lower control arm',
      D: 'Ball joint'
    },
    correctAnswer: 'B',
    explanation: 'Pegas berfungsi menyerap kejutan, sedangkan peredam kejut (shock absorber) bekerja meredam ayunan lentur pegas dengan mengubah energi kinetik menjadi energi panas melalui tahanan fluida minyak/gas.',
    incorrectReasoning: {
      A: 'Stabilizer bar mengurangi kemiringan bodi mobil (body roll) saat berbelok tajam.',
      C: 'Lower control arm menghubungkan knuckle roda dengan rangka/subframe.',
      D: 'Ball joint berfungsi sebagai engsel tumpuan putar dan ayun knuckle kemudi.'
    }
  },
  {
    id: 'tkr-str-03',
    topic: 'Sistem Kemudi & Suspensi',
    difficulty: 3,
    question: 'Pada sistem Electric Power Steering (EPS), komponen yang bertugas mendeteksi besar dan arah gaya putaran setir yang diberikan oleh pengemudi adalah...',
    options: {
      A: 'Torque sensor (sensor torsi)',
      B: 'Wheel speed sensor',
      C: 'Motor DC brushless',
      D: 'Rack end joint'
    },
    correctAnswer: 'A',
    explanation: 'Torque sensor dipasang pada poros kemudi untuk mengukur defleksi puntiran torsion bar, lalu mengirimkan data sinyal voltase ke EPS ECU guna menentukan besar arus yang harus dialirkan ke motor bantu kemudi.',
    incorrectReasoning: {
      B: 'Wheel speed sensor mengukur kecepatan putar roda.',
      C: 'Motor DC adalah aktuator penggerak pembantu, bukan sensor pendeteksi.',
      D: 'Rack end joint adalah batang mekanis penerus gaya ke tie rod.'
    }
  },
  {
    id: 'tkr-str-04',
    topic: 'Sistem Kemudi & Suspensi',
    difficulty: 4,
    caseStudyContext: 'Sebuah mobil penumpang mengalami getaran (shaking/shimmy) pada roda kemudi hanya saat kecepatan kendaraan menyentuh kisaran 80 - 100 km/jam di jalan tol yang mulus. Di bawah 70 km/jam kemudi terasa tenang.',
    question: 'Tindakan perawatan sasis yang paling tepat untuk mengatasi gangguan tersebut adalah...',
    options: {
      A: 'Mengganti pompa power steering hidrolik',
      B: 'Melakukan penyeimbangan dinamis roda (wheel dynamic balancing) pada roda depan',
      C: 'Menguras oli gardan belakang',
      D: 'Menyetel celah katup mesin silinder 1'
    },
    correctAnswer: 'B',
    explanation: 'Getaran roda kemudi pada rentang kecepatan tertentu (shimmy pada 80-100 km/jam) merupakan ciri khas ketidakseimbangan massa putar dinamis roda (unbalance wheel). Pemasangan timbel balancing mengoreksi distribusi massa putaran roda.',
    incorrectReasoning: {
      A: 'Pompa power steering yang bermasalah menimbulkan bunyi mendesis dan setir berat di semua kecepatan.',
      C: 'Oli gardan belakang tidak menimbulkan getaran frekuensi tinggi pada kemudi depan di kecepatan spesifik tol.',
      D: 'Celah katup mesin menimbulkan suara ticking mesin, tidak membuat setir bergetar pada 80 km/jam.'
    }
  },
  {
    id: 'tkr-str-05',
    topic: 'Sistem Kemudi & Suspensi',
    difficulty: 5,
    caseStudyContext: 'Setelah dilakukan penggantian tie rod end kanan dan kiri pada sebuah mobil, mobil selalu menarik ke arah kiri saat setir dilepas di jalan datar. Hasil print out spooring 4 roda menunjukkan: Camber Kiri: -0°30\', Camber Kanan: -0°30\', Caster Kiri: +1°30\', Caster Kanan: +3°00\', Total Toe: +0°05\'.',
    question: 'Penyebab utama kendaraan cenderung menarik ke arah kiri adalah...',
    options: {
      A: 'Perbedaan sudut Caster yang signifikan (caster kiri lebih kecil dari caster kanan)',
      B: 'Sudut camber kiri dan kanan terlalu simetris',
      C: 'Total toe bernilai positif',
      D: 'Ketinggian profil ban belakang tidak seimbang'
    },
    correctAnswer: 'A',
    explanation: 'Kendaraan cenderung menarik (pull) ke arah sisi dengan sudut caster yang lebih kecil/paling negatif. Selisih caster (cross caster) kiri (+1°30\') dan kanan (+3°00\') adalah 1,5 derajat (toleransi normal maksimal 0,5 derajat). Roda kanan yang lebih maju akan mendorong mobil berbelok ke arah kiri.',
    incorrectReasoning: {
      B: 'Sudut camber simetris justru sangat diinginkan agar keausan ban merata.',
      C: 'Total toe positif (toe-in) memberikan kestabilan arah lurus, bukan memicu mobil belok sepihak.',
      D: 'Data spooring caster jelas menunjukkan deviasi 1,5 derajat yang merupakan penyebab langsung steering pull.'
    }
  },

  // --- 7. SISTEM KELISTRIKAN KENDARAAN ---
  {
    id: 'tkr-elec-01',
    topic: 'Sistem Kelistrikan Kendaraan',
    difficulty: 1,
    question: 'Komponen pengaman kelistrikan yang dirancang untuk meleleh dan memutus arus jika terjadi korsleting (short circuit) adalah...',
    options: {
      A: 'Relay',
      B: 'Sekring (Fuse / Fusible link)',
      C: 'Kondensor',
      D: 'Dioda Zener'
    },
    correctAnswer: 'B',
    explanation: 'Sekring menggunakan kawat paduan bertitik lebur rendah yang akan terbakar/putus saat arus yang melaluinya melebihi nilai kapasitas amperenya demi melindungi instalasi kabel mobil.',
    incorrectReasoning: {
      A: 'Relay adalah saklar elektromagnetik pengalir arus besar dengan arus pengendali kecil.',
      C: 'Kondensor menyimpan muatan listrik sementara.',
      D: 'Dioda menyearahkan aliran arus listrik satu arah.'
    }
  },
  {
    id: 'tkr-elec-02',
    topic: 'Sistem Kelistrikan Kendaraan',
    difficulty: 2,
    question: 'Kode standar terminal pada relay otomotif 4 kaki tipe normal terbuka (Normally Open) adalah...',
    options: {
      A: '30 (Input Baterai), 87 (Output Beban), 85 & 86 (Kumparan Relay)',
      B: '15 (Kontak), 50 (Starter), 31 (Massa), 49 (Flasher)',
      C: 'B, IG, L, E',
      D: '54, 56a, 56b, 58'
    },
    correctAnswer: 'A',
    explanation: 'Sesuai standar DIN 72552: Terminal 30 adalah sumber positif standby, terminal 87 adalah output ke lampu/beban, sedangkan terminal 85 dan 86 adalah kutub positif dan negatif koil solenoid relay.',
    incorrectReasoning: {
      B: '15, 50, dan 31 adalah kode switch pengapian dan ground.',
      C: 'B, IG, L, E adalah terminal pada regulator alternator pengisian.',
      D: '56a/b adalah kode saklar lampu jauh dan dekat.'
    }
  },
  {
    id: 'tkr-elec-03',
    topic: 'Sistem Kelistrikan Kendaraan',
    difficulty: 3,
    question: 'Penyebab lampu tanda belok (lampu sein) berkedip jauh lebih cepat dari frekuensi normal pada salah satu sisi (misalnya sisi kanan) adalah...',
    options: {
      A: 'Tegangan baterai drop di bawah 9 Volt',
      B: 'Salah satu bohlam lampu sein sisi kanan putus atau daya watt bohlam pengganti terlalu kecil',
      C: 'Saklar kombinasi (combination switch) korslet ke ground',
      D: 'Kabel massa baterai longgar'
    },
    correctAnswer: 'B',
    explanation: 'Unit flasher bimetal maupun elektronik mengandalkan beban arus nominal untuk timing kedipan. Jika satu bohlam putus, arus berkurang drastis sehingga flasher berosilasi lebih cepat sebagai sinyal peringatan kepada pengemudi.',
    incorrectReasoning: {
      A: 'Tegangan drop membuat kedipan menjadi sangat lambat atau lampu hanya menyala redup diam.',
      C: 'Korslet ke ground akan langsung membakar sekring sein (fuse blown).',
      D: 'Massa longgar mempengaruhi seluruh sistem kelistrikan, bukan satu sisi sein saja.'
    }
  },
  {
    id: 'tkr-elec-04',
    topic: 'Sistem Kelistrikan Kendaraan',
    difficulty: 4,
    caseStudyContext: 'Lampu kepala (headlamp) sebelah kiri sebuah mobil menyala sangat redup saat dihidupkan, sedangkan lampu sebelah kanan menyala sangat terang benderang. Teknisi mengukur beda potensial pada soket lampu kiri: tegangan antara terminal positif dan soket negatif terukur hanya 8,5 Volt (tegangan baterai 12,6 Volt). Pengukuran voltage drop antara pin ground soket lampu kiri dan bodi sasis menunjukkan angka 4,1 Volt.',
    question: 'Berdasarkan data pengukuran voltage drop tersebut, penyebab utama kerusakan adalah...',
    options: {
      A: 'Filamen lampu sebelah kiri terlalu tebal kawatnya',
      B: 'Baterai mengalami pengosongan sel nomor 3',
      C: 'Tahanan kontak tinggi (high resistance) akibat karat atau soket kotor pada titik pentanahan (ground point) lampu kiri',
      D: 'Sekring lampu utama putus sebagian'
    },
    correctAnswer: 'C',
    explanation: 'Sesuai hukum Ohm, voltage drop pada kabel ground maksimal adalah 0,2 Volt. Angka voltage drop 4,1 Volt di jalur massa menunjukkan adanya resistansi parasitik yang sangat besar (sambungan berkarat/kendor), mencuri suplai tegangan bohlam sehingga hanya tersisa 8,5 V.',
    incorrectReasoning: {
      A: 'Filamen lampu spesifikasi standar pabrik, bukan kawat tebal buatan.',
      B: 'Baterai terbukti menyuplai lampu kanan dengan terang normal 12,6 V.',
      D: 'Sekring adalah saklar biner: putus total (0 Volt) atau utuh normal.'
    }
  },
  {
    id: 'tkr-elec-05',
    topic: 'Sistem Kelistrikan Kendaraan',
    difficulty: 5,
    caseStudyContext: 'Sebuah mobil mewah mengalami masalah aki selalu tekor (mati total) setiap kali mobil diparkir selama 2 malam berturut-turut. Baterai dan alternator telah diuji dalam kondisi sangat prima. Teknisi melakukan uji parasitik (parasitic draw test) dengan multimeter mode ampere DC terpasang seri di kutub negatif aki: arus terukur konstan sebesar 850 mA (0,85 A) saat seluruh pintu terkunci dan modul bodi memasuki sleep mode (spek arus bocor maksimal: 30 - 50 mA).',
    question: 'Metode pelacakan yang paling efektif dan efisien untuk menemukan sirkuit sumber kebocoran arus tersebut adalah...',
    options: {
      A: 'Mencabut sekring satu per satu dari kotak sekring (fuse box) sambil memantau penurunan display ampere pada multimeter',
      B: 'Mengganti seluruh kabel body harness mobil dengan yang baru',
      C: 'Memasang dua baterai secara paralel untuk cadangan daya',
      D: 'Melepas motor starter dan menyolder ulang kabel solenoidnya'
    },
    correctAnswer: 'A',
    explanation: 'Metode pencabutan sekring individual (fuse pulling) atau pengukuran voltage drop melintasi tab sekring (millivolt drop method) memungkinkan teknisi mengisolasi cabang sirkuit yang tetap mengonsumsi daya tidak normal saat kendaraan tertidur tanpa merusak kabel.',
    incorrectReasoning: {
      B: 'Mengganti seluruh rangkaian kabel sangat memakan biaya dan tidak menyelesaikan identifikasi komponen yang macet ON.',
      C: 'Menambah baterai hanya memperlambat waktu tekor, tidak menyembuhkan kebocoran arus parasitik.',
      D: 'Solenoid starter tidak dilewati arus saat kunci kontak OFF (dikontrol relay starter).'
    }
  },

  // --- 8. SISTEM STARTER & PENGISIAN ---
  {
    id: 'tkr-stc-01',
    topic: 'Sistem Starter & Pengisian',
    difficulty: 1,
    question: 'Komponen pada sistem pengisian yang bertugas mengubah arus bolak-balik (AC) dari alternator menjadi arus searah (DC) untuk baterai adalah...',
    options: {
      A: 'Rotor coil',
      B: 'Diode Rectifier (penyearah)',
      C: 'IC Regulator',
      D: 'Stator core'
    },
    correctAnswer: 'B',
    explanation: 'Rectifier terdiri dari susunan dioda positif dan negatif yang mengubah gelombang arus AC 3 fasa yang dibangkitkan gulungan stator menjadi arus DC.',
    incorrectReasoning: {
      A: 'Rotor coil berfungsi membangkitkan medan magnet elektromagnetik.',
      C: 'IC Regulator mengatur besarnya tegangan pengisian agar konstan sekitar 13,8 - 14,8 V.',
      D: 'Stator core adalah tempat kumparan kawat tembaga tempat terjadinya induksi elektromagnetik.'
    }
  },
  {
    id: 'tkr-stc-02',
    topic: 'Sistem Starter & Pengisian',
    difficulty: 2,
    question: 'Komponen pada motor starter yang berfungsi mendorong pinion gear agar bertaut dengan ring gear flywheel sekaligus menghubungkan kontak utama arus baterai ke motor adalah...',
    options: {
      A: 'Armature assembly',
      B: 'Magnetic switch (solenoid starter)',
      C: 'Overrunning clutch',
      D: 'Brush holder'
    },
    correctAnswer: 'B',
    explanation: 'Solenoid starter memiliki dua kumparan: Pull-in coil dan Hold-in coil. Plunger solenoid menarik tuas pendorong (drive lever) untuk memajukan pinion dan menghubungkan lempeng tembaga terminal 30 ke terminal C.',
    incorrectReasoning: {
      A: 'Armature adalah poros berputar yang menghasilkan torsi motor starter.',
      C: 'Overrunning clutch melindungi motor starter dari putaran berlebih saat mesin mulai hidup.',
      D: 'Brush holder memegang sikat arang untuk menyuplai arus ke komutator.'
    }
  },
  {
    id: 'tkr-stc-03',
    topic: 'Sistem Starter & Pengisian',
    difficulty: 3,
    question: 'Berapa rentang tegangan pengisian (charging voltage) normal pada terminal baterai saat mesin berputar pada 2000 RPM dengan beban kelistrikan mati?',
    options: {
      A: '11,5 Volt - 12,2 Volt',
      B: '13,8 Volt - 14,8 Volt',
      C: '16,5 Volt - 18,0 Volt',
      D: '24,0 Volt - 28,0 Volt'
    },
    correctAnswer: 'B',
    explanation: 'Tegangan pengisian alternator dikontrol oleh IC regulator pada kisaran ideal 13,8 V hingga 14,8 V. Di bawah 13,5 V pengisian kurang (undercharge), di atas 15 V terjadi overcharge yang dapat merusak aki dan modul ECU.',
    incorrectReasoning: {
      A: '11,5 - 12,2 V menunjukkan alternator tidak mengisi dan sistem hanya memakan daya simpan aki.',
      C: '16,5 - 18 V adalah kondisi overcharge fatal akibat rusaknya IC regulator.',
      D: '24 - 28 V adalah standar sistem kelistrikan truk besar/bus, bukan mobil kendaraan ringan 12V.'
    }
  },
  {
    id: 'tkr-stc-04',
    topic: 'Sistem Starter & Pengisian',
    difficulty: 4,
    caseStudyContext: 'Saat kunci kontak diputar ke posisi START, hanya terdengar suara ketukan keras satu kali "CETIK" dari arah motor starter, namun poros engkol mesin sama sekali tidak berputar. Lampu kabin tidak redup saat kunci diputar ke posisi START. Tegangan baterai terukur 12,6 Volt.',
    question: 'Kemungkinan terbesar kerusakan teknis pada motor starter tersebut adalah...',
    options: {
      A: 'Kontak lempeng tembaga utama di dalam solenoid aus/kotor atau sikat arang (carbon brush) aus habis',
      B: 'Flywheel patah seluruh giginya',
      C: 'Kunci kontak putus kabel massanya',
      D: 'Oli mesin membeku menjadi es batu'
    },
    correctAnswer: 'A',
    explanation: 'Bunyi "CETIK" menandakan solenoid berhasil menarik plunger (pull-in bekerja), tetapi ketiadaan putaran dinamo menunjukkan arus utama baterai dari terminal 30 gagal mengalir ke terminal C dan armature (akibat plat kontak hangus atau brush habis menggantung).',
    incorrectReasoning: {
      B: 'Jika gigi flywheel patah, dinamo starter akan berputar mendesing kencang dengan kecepatan tinggi tanpa memutar mesin.',
      C: 'Jika kabel kunci kontak putus, solenoid tidak akan merespon dan tidak terdengar bunyi cetik sama sekali.',
      D: 'Oli mesin membeku tidak realistis dalam iklim operasional bengkel normal Indonesia.'
    }
  },
  {
    id: 'tkr-stc-05',
    topic: 'Sistem Starter & Pengisian',
    difficulty: 5,
    caseStudyContext: 'Lampu indikator pengisian aki (battery warning light) menyala di meter kombinasi saat mesin mobil hidup pada putaran idle, tetapi lampu mati saat pedal gas diinjak ke 2500 RPM. Pengukuran multimeter menunjukkan tegangan baterai 12,4 V pada idle, dan naik ke 13,9 V pada 2500 RPM. Saat diperiksa, tali kipas alternator dalam kondisi kencang.',
    question: 'Diagnosis kerusakan internal alternator yang paling tepat adalah...',
    options: {
      A: 'Salah satu dioda pada rectifier alternator putus atau sikat arang (brush) telah mencapai batas keausan servis',
      B: 'Kapasitor audio mobil meledak',
      C: 'Piston alternator bocor kompresinya',
      D: 'Busi silinder 1 dan 4 mati'
    },
    correctAnswer: 'A',
    explanation: 'Jika satu dioda penyearah putus (open diode), alternator kehilangan 1/3 kapasitas pembangkitan arusnya. Pada putaran idle rendah, output tegangan tidak mampu mengatasi ambang lampu peringatan, tetapi pada RPM tinggi frekuensi putaran mampu mengimbangi kebutuhan tegangan.',
    incorrectReasoning: {
      B: 'Kapasitor audio tidak mengontrol lampu peringatan pengisian di dashboard.',
      C: 'Alternator adalah mesin listrik berputar (rotor/stator), tidak memiliki piston kompresi.',
      D: 'Busi mati menyebabkan mesin goyang (misfire), bukan alternator undercharge parsial.'
    }
  },

  // --- 9. SISTEM AC KENDARAAN ---
  {
    id: 'tkr-ac-01',
    topic: 'Sistem AC Kendaraan',
    difficulty: 1,
    question: 'Zat pendingin (refrigerant) yang umum digunakan pada sistem Air Conditioner (AC) kendaraan ringan modern adalah...',
    options: {
      A: 'HFC R-134a atau HFO-1234yf',
      B: 'CFC R-12',
      C: 'Amoniak cair',
      D: 'Karbon Monoksida (CO)'
    },
    correctAnswer: 'A',
    explanation: 'R-134a dan refrigeran ramah lingkungan generasi terbaru HFO-1234yf tidak merusak lapisan ozon (Zero ODP) dan menjadi standar mobil kendaraan ringan modern menggantikan R-12.',
    incorrectReasoning: {
      B: 'R-12 telah dilarang global karena merusak lapisan ozon stratosfer.',
      C: 'Amoniak beracun dan korosif, hanya digunakan pada pabrik es industri skala besar.',
      D: 'CO adalah gas beracun mematikan hasil pembakaran mesin.'
    }
  },
  {
    id: 'tkr-ac-02',
    topic: 'Sistem AC Kendaraan',
    difficulty: 2,
    question: 'Komponen sistem AC yang berfungsi menurunkan tekanan freon cair dan mengabutkannya sehingga suhunya turun drastis sebelum masuk ke evaporator adalah...',
    options: {
      A: 'Kondensor',
      B: 'Katup Ekspansi (Expansion Valve)',
      C: 'Kompresor',
      D: 'Receiver Drier'
    },
    correctAnswer: 'B',
    explanation: 'Katup ekspansi menurunkan tekanan refrigeran cair bersuhu dan bertekanan tinggi menjadi kabut cairan bertekanan rendah dan bersuhu dingin melalui celah sempit (orifis).',
    incorrectReasoning: {
      A: 'Kondensor membuang panas refrigeran ke udara luar agar freon gas mengembun jadi cair.',
      C: 'Kompresor menaikkan tekanan dan memompa gas freon ke seluruh sistem.',
      D: 'Receiver drier menyaring kotoran dan menyerap uap air dari freon cair.'
    }
  },
  {
    id: 'tkr-ac-03',
    topic: 'Sistem AC Kendaraan',
    difficulty: 3,
    question: 'Manifold gauge dipasang pada sistem AC: selang biru dihubungkan ke pentil Service Valve sisi...',
    options: {
      A: 'Tekanan tinggi (Discharge / High pressure - simbol H)',
      B: 'Tekanan rendah (Suction / Low pressure - simbol L)',
      C: 'Knalpot kendaraan',
      D: 'Selang pembuangan air kondensasi'
    },
    correctAnswer: 'B',
    explanation: 'Selang biru manifold gauge standar selalu dihubungkan ke servis port hisap tekanan rendah (Low side / katup L), sedangkan selang merah dihubungkan ke katup tekanan tinggi (High side / katup H).',
    incorrectReasoning: {
      A: 'Tekanan tinggi menggunakan manifold gauge dan selang berwarna merah.',
      C: 'Sistem AC adalah sirkuit tertutup mandiri, terpisah total dari gas knalpot.',
      D: 'Pembuangan air kondensasi hanya meneteskan air embun dari bak evaporator kabin.'
    }
  },
  {
    id: 'tkr-ac-04',
    topic: 'Sistem AC Kendaraan',
    difficulty: 4,
    caseStudyContext: 'AC mobil berhembus hanya angin hangat. Saat AC dinyalakan, teknisi melihat magnetic clutch kompresor berputar normal. Pembacaan manifold gauge menunjukkan: Tekanan Rendah (Low) = 100 psi (spek normal: 25 - 35 psi), Tekanan Tinggi (High) = 110 psi (spek normal: 190 - 230 psi). Saat putaran mesin digas ke 2000 RPM, kedua jarum tekanan hampir tidak bergerak sama sekali.',
    question: 'Berdasarkan data manifold gauge tersebut, kerusakan komponen sistem AC adalah...',
    options: {
      A: 'Kompresor AC jebol / katup kompresi kompresor bocor parah (kehilangan daya hisap dan tekan)',
      B: 'Kondensor tersumbat debu tanah',
      C: 'Freon terlalu banyak diisi hingga 2 kilogram',
      D: 'Blower kabin berputar terbalik'
    },
    correctAnswer: 'A',
    explanation: 'Jika tekanan Low dan High hampir sama (equalized pressure sekitar 100-110 psi) saat kompresor berputar, menandakan kompresor tidak mampu mengompresi gas lagi akibat katup klep (reed valve) patah atau piston kompresor aus aus tanpa kompresi.',
    incorrectReasoning: {
      B: 'Kondensor tersumbat membuat tekanan High melonjak sangat tinggi (>300 psi), bukan drop.',
      C: 'Overcharge freon membuat kedua tekanan naik drastis melampaui ambang normal.',
      D: 'Blower kabin mempengaruhi kecepatan udara kisi AC, tidak mempengaruhi kapasitas kompresi hidrolis kompresor.'
    }
  },
  {
    id: 'tkr-ac-05',
    topic: 'Sistem AC Kendaraan',
    difficulty: 5,
    caseStudyContext: 'AC mobil terasa sangat dingin selama 15 menit pertama perjalanan, namun setelah itu hembusan udara mendadak mengecil dan berubah menjadi tidak dingin sama sekali. Jika tombol AC dimatikan selama 10 menit sementara blower tetap hidup, air menetes deras dari selang pembuangan bawah mobil dan AC dingin kembali normal sementara waktu.',
    question: 'Penyebab kerusakan teknis sistem pengatur suhu tersebut adalah...',
    options: {
      A: 'Thermostat / Thermistor evaporator rusak sehingga kompresor hidup terus tanpa cut-off, memicu pembekuan es (icing) di sirip evaporator',
      B: 'Sabuk kompresor putus',
      C: 'Motor blower terbakar gulungannya',
      D: 'Tutup reservoir radiator bocor'
    },
    correctAnswer: 'A',
    explanation: 'Jika thermistor evaporator tidak memutus siklus kompresor saat suhu mencapai 1-2°C, embun air pada sirip evaporator akan membeku menjadi balok es padat. Balok es menghalangi total aliran udara kabin. Saat kompresor dimatikan, es mencair dan saluran udara terbuka kembali.',
    incorrectReasoning: {
      B: 'Jika sabuk kompresor putus, AC tidak akan pernah dingin sejak awal start.',
      C: 'Jika motor blower terbakar, udara tidak akan berhembus sama sekali baik saat awal maupun sesudahnya.',
      D: 'Air reservoir radiator tidak berhubungan dengan sirkulasi pembekuan sirip evaporator kabin.'
    }
  },

  // --- 10. SISTEM EFI & SENSOR ---
  {
    id: 'tkr-efi-01',
    topic: 'Sistem EFI & Sensor',
    difficulty: 1,
    question: 'Sensor pada sistem EFI yang bertugas mendeteksi sudut pembukaan katup gas (throttle valve) adalah...',
    options: {
      A: 'TPS (Throttle Position Sensor)',
      B: 'MAP (Manifold Absolute Pressure) Sensor',
      C: 'ECT (Engine Coolant Temperature) Sensor',
      D: 'O2 (Oxygen) Sensor'
    },
    correctAnswer: 'A',
    explanation: 'TPS dipasang pada poros throttle body untuk memberi informasi ke ECU mengenai posisi bukaan pedal gas (idle, akselerasi, atau full throttle).',
    incorrectReasoning: {
      B: 'MAP mendeteksi tekanan kevacuuman di dalam intake manifold.',
      C: 'ECT mendeteksi suhu air pendingin mesin.',
      D: 'O2 Sensor mendeteksi kadar oksigen sisa pembakaran pada knalpot.'
    }
  },
  {
    id: 'tkr-efi-02',
    topic: 'Sistem EFI & Sensor',
    difficulty: 2,
    question: 'Sensor utama yang menentukan sudut saat pengapian (ignition timing) dan saat penginjeksian bahan bakar silinder nomor 1 (TDC recognition) adalah sinyal kombinasi dari...',
    options: {
      A: 'CKP (Crankshaft Position) dan CMP (Camshaft Position) Sensor',
      B: 'IAT (Intake Air Temperature) dan Knock Sensor',
      C: 'Speedometer dan Fuel Level Sensor',
      D: 'TPS dan Brake Pedal Switch'
    },
    correctAnswer: 'A',
    explanation: 'CKP mengukur kecepatan putaran mesin dan posisi piston poros engkol, sedangkan CMP mendeteksi langkah kompresi silinder nomor 1 pada poros nok agar ECU dapat melakukan sekuensial pengapian dan injeksi yang tepat.',
    incorrectReasoning: {
      B: 'IAT dan Knock sensor hanya untuk koreksi campuran udara dan memundurkan timing jika terjadi knocking/detonasi.',
      C: 'Speedometer untuk info laju kendaraan, bukan sinkronisasi fase mesin silinder.',
      D: 'Brake switch mendeteksi injakan rem untuk memutus throttle atau keselamatan.'
    }
  },
  {
    id: 'tkr-efi-03',
    topic: 'Sistem EFI & Sensor',
    difficulty: 3,
    question: 'Tipe sensor suhu seperti ECT (Engine Coolant Temperature) umumnya menggunakan material termistor bertipe NTC. Karakteristik NTC adalah...',
    options: {
      A: 'Nilai resistansinya semakin kecil ketika suhu cairan semakin panas',
      B: 'Nilai resistansinya semakin besar ketika suhu cairan semakin panas',
      C: 'Menghasilkan sinyal frekuensi digital pulsa on-off',
      D: 'Resistansinya selalu bernilai tetap 1000 Ohm pada segala suhu'
    },
    correctAnswer: 'A',
    explanation: 'NTC (Negative Temperature Coefficient) memiliki sifat berbanding terbalik: saat suhu dingin hambatan besar (sekitar 2-3 kOhm), dan saat mesin panas mencapai 80-90°C hambatannya turun menjadi 200-300 Ohm.',
    incorrectReasoning: {
      B: 'Itu adalah karakteristik PTC (Positive Temperature Coefficient).',
      C: 'Termistor adalah komponen pasif analog pembagi tegangan (voltage divider), bukan sinyal frekuensi digital.',
      D: 'Resistansi termistor berubah secara eksponensial terhadap temperatur.'
    }
  },
  {
    id: 'tkr-efi-04',
    topic: 'Sistem EFI & Sensor',
    difficulty: 4,
    caseStudyContext: 'Sebuah mobil injeksi mengalami keluhan: saat pedal gas diinjak mendadak untuk akselerasi menyalip, mesin tersendat (hesitation / bogging) sesaat sebelum akhirnya mau berakselerasi. Saat pedal gas ditekan secara sangat perlahan dan halus, mesin tidak tersendat. Pada scan tool, data live parameter TPS saat digerakkan perlahan menunjukkan tegangan naik mulus dari 0,6 V ke 4,2 V, tetapi saat diperiksa dengan osiloskop terdapat drop voltage sesaat ke 0 V pada bukaan sudut 15-20%.',
    question: 'Penyebab kerusakan teknis pada sistem EFI tersebut adalah...',
    options: {
      A: 'Jalur resistor variabel (potensiometer) sensor TPS mengalami aus/tergores pada area bukaan rendah',
      B: 'Saringan bahan bakar tersumbat pasir',
      C: 'Busi silinder 2 meleleh elektrodanya',
      D: 'Knalpot mengalami kebocoran pada pipa fleksibel'
    },
    correctAnswer: 'A',
    explanation: 'Kerusakan khas sensor TPS analog potensiometer adalah ausnya lapisan karbon pada titik bukaan yang paling sering dilewati (low throttle cruise). Osiloskop mendeteksi sinyal drop (glitch ke 0V) saat melintasi goresan tersebut, membuat ECU memotong suplai bahan bakar sesaat sehingga mesin tersendat.',
    incorrectReasoning: {
      B: 'Filter tersumbat akan gagal mensuplai pada RPM dan bukaan gas tinggi konstan.',
      C: 'Busi meleleh menyebabkan mesin pincang terus menerus di setiap beban.',
      D: 'Kebocoran knalpot fleksibel menimbulkan suara desis bising, bukan drop sinyal TPS.'
    }
  },
  {
    id: 'tkr-efi-05',
    topic: 'Sistem EFI & Sensor',
    difficulty: 5,
    caseStudyContext: 'Mesin mobil bensin modern sulit dihidupkan saat kondisi dingin di pagi hari (perlu cranking 5-7 kali), tetapi bila mesin sudah pernah hidup hangat, start ulang sangat mudah sekali putar. Tegangan baterai dan pompa bensin normal. Scan tool menunjukkan data ECT saat mesin dingin pagi hari terbaca konstan pada angka 85°C.',
    question: 'Analisis teknis yang paling mendasar penyebab sulitnya start dingin tersebut adalah...',
    options: {
      A: 'ECU mengira mesin sudah dalam suhu kerja optimal (85°C), sehingga tidak memberikan pengayaan bahan bakar campuran dingin (cold start enrichment)',
      B: 'Katup buang mengalami kebocoran kompresi parah hanya saat dingin',
      C: 'Pompa oli mesin tidak mampu menghasilkan tekanan pelumasan',
      D: 'Sensor oksigen mengirimkan sinyal campuran terlalu kurus'
    },
    correctAnswer: 'A',
    explanation: 'Saat cold start pagi hari (misal suhu lingkungan 25°C), mesin membutuhkan rasio bahan bakar kaya (enrichment) untuk mengimbangi penguapan bensin yang lambat di dinding intake yang dingin. Sensor ECT yang macet melaporkan 85°C menipu ECU untuk menyemprotkan bensin sedikit sesuai rasio mesin panas, menyebabkan campuran terlalu kurus dan mesin gagal menyala.',
    incorrectReasoning: {
      B: 'Jika katup bocor, kompresi akan hilang baik saat dingin maupun panas.',
      C: 'Tekanan oli tidak mencegah penyalaan pembakaran awal busi di ruang bakar.',
      D: 'Sensor O2 masih dalam kondisi open loop (belum bekerja) saat awal start dingin.'
    }
  },

  // --- 11. SISTEM OBD & DIAGNOSIS KERUSAKAN ---
  {
    id: 'tkr-obd-01',
    topic: 'Sistem OBD & Diagnosis Kerusakan',
    difficulty: 1,
    question: 'Bentuk konektor diagnostik standar OBD-II (On-Board Diagnostics) pada kendaraan ringan memiliki jumlah pin sebanyak...',
    options: {
      A: '16 Pin berbentuk trapesium',
      B: '12 Pin berbentuk kotak bulat',
      C: '8 Pin USB port',
      D: '24 Pin serial port'
    },
    correctAnswer: 'A',
    explanation: 'Konektor standar OBD-II (SAE J1962) memiliki 16 pin yang dipasang di bawah dasbor sisi pengemudi.',
    incorrectReasoning: {
      B: '12 pin adalah konektor OBD-I model lama pada pabrikan tertentu tahun 1990-an.',
      C: 'USB bukan standar konektor diagnostik fisik OBD-II kendaraan.',
      D: '24 pin adalah konektor catu daya komputer ATX, bukan OBD mobil.'
    }
  },
  {
    id: 'tkr-obd-02',
    topic: 'Sistem OBD & Diagnosis Kerusakan',
    difficulty: 2,
    question: 'Arti dari huruf awalan "P" pada kode kesalahan DTC (Diagnostic Trouble Code) seperti P0300 adalah sistem...',
    options: {
      A: 'Powertrain (Mesin dan Transmisi)',
      B: 'Chassis (Sasis, Kemudi, dan Rem)',
      C: 'Body (Bodi kelistrikan kabin)',
      D: 'Network (Jaringan komunikasi data CAN Bus)'
    },
    correctAnswer: 'A',
    explanation: 'Standar SAE membagi DTC menjadi 4 kategori: P = Powertrain, C = Chassis, B = Body, dan U = Network/Communication Bus.',
    incorrectReasoning: {
      B: 'Chassis menggunakan huruf C.',
      C: 'Body menggunakan huruf B.',
      D: 'Network menggunakan huruf U.'
    }
  },
  {
    id: 'tkr-obd-03',
    topic: 'Sistem OBD & Diagnosis Kerusakan',
    difficulty: 3,
    question: 'Fitur pada scan tool diagnostik yang merekam data parameter sensor-sensor mesin tepat pada detik terjadinya kerusakan dan lampu MIL menyala disebut...',
    options: {
      A: 'Freeze Frame Data',
      B: 'Clear DTC Memory',
      C: 'Actuation Test',
      D: 'ECU Coding'
    },
    correctAnswer: 'A',
    explanation: 'Freeze Frame Data merekam snapshot kondisi operasional mesin (seperti RPM, suhu air pendingin, kecepatan mobil, beban mesin, dan status trim bahan bakar) pada saat DTC tersimpan.',
    incorrectReasoning: {
      B: 'Clear DTC menghapus riwayat kode kesalahan dari memori.',
      C: 'Actuation test menguji aktuator secara aktif dengan perintah scan tool.',
      D: 'ECU coding mengatur konfigurasi identitas modul.'
    }
  },
  {
    id: 'tkr-obd-04',
    topic: 'Sistem OBD & Diagnosis Kerusakan',
    difficulty: 4,
    caseStudyContext: 'Lampu Check Engine menyala pada SUV bensin. Scan tool membaca DTC P0171: "System Too Lean (Bank 1)". Data live stream menunjukkan: Short Term Fuel Trim (STFT) = +25% dan Long Term Fuel Trim (LTFT) = +22% pada putaran idle (RPM 750). Namun ketika putaran mesin dinaikkan ke 2500 RPM stabil, nilai STFT dan LTFT berangsur turun ke nilai normal (+3% dan +4%).',
    question: 'Berdasarkan interpretasi data fuel trim tersebut, sumber kerusakan yang paling logis adalah...',
    options: {
      A: 'Kebocoran kevakuman udara masuk (vacuum leak) pada selang PCV atau intake manifold gasket',
      B: 'Pompa bahan bakar melemah parah tidak mampu menyuplai tekanan',
      C: 'Semua injektor tersumbat kerak tebal',
      D: 'Filter udara sangat kotor tertutup jelaga'
    },
    correctAnswer: 'A',
    explanation: 'Karakteristik khas kebocoran udara vakum (false air intake) adalah pengaruhnya sangat dominan saat idle (di mana katup gas tertutup dan kevakuman manifold tinggi, sehingga proporsi udara bocor signifikan menipiskan campuran). Saat RPM tinggi, volume udara masuk lewat throttle body jauh lebih masif dibanding udara bocor sehingga nilai trim kembali normal.',
    incorrectReasoning: {
      B: 'Jika pompa bensin lemah, kekurangan bahan bakar akan semakin parah pada RPM tinggi (fuel trim akan semakin melonjak positif pada 2500 RPM).',
      C: 'Injektor tersumbat akan membatasi bahan bakar lebih buruk saat durasi injeksi panjang di RPM tinggi.',
      D: 'Filter udara kotor justru membatasi udara masuk sehingga campuran menjadi kaya (rich), bukan kurus (lean).'
    }
  },
  {
    id: 'tkr-obd-05',
    topic: 'Sistem OBD & Diagnosis Kerusakan',
    difficulty: 5,
    caseStudyContext: 'Sebuah mobil tiba-tiba mogok tidak dapat distarter sama sekali, lampu indikator check engine, ABS, dan EPS di dashboard berkedip serentak dan speedometer melonjak liar. Scan tool tidak dapat berkomunikasi sama sekali dengan Engine ECU (muncul pesan "No Communication with ECM"). Teknisi mengukur resistansi jaringan komunikasi CAN Bus antara pin 6 (CAN-H) dan pin 14 (CAN-L) pada DLC OBD-II saat kunci kontak OFF dan aki dilepas: multimeter membaca nilai resistansi 120 Ohm (spek standar: 60 Ohm).',
    question: 'Kesimpulan hasil analisis rangkaian komunikasi data tersebut adalah...',
    options: {
      A: 'Salah satu terminating resistor 120 Ohm pada jalur CAN Bus terputus jalurnya (open circuit)',
      B: 'Kabel CAN-H korslet langsung menempel ke sasis ground',
      C: 'Baterai kendaraan mengalami korsleting antar sel',
      D: 'Konektor DLC terbalik pemasangan pinnya'
    },
    correctAnswer: 'A',
    explanation: 'Jaringan kecepatan tinggi CAN Bus memiliki dua terminating resistor 120 Ohm yang terpasang paralel pada kedua ujung bus (biasanya satu di ECU mesin dan satu di cluster instrumen). Berdasarkan rumus hambatan paralel (120 // 120 = 60 Ohm), pembacaan normal wajib 60 Ohm. Jika terbaca 120 Ohm, berarti salah satu resistor atau kabel jalurnya putus (open circuit), melumpuhkan komunikasi data bus.',
    incorrectReasoning: {
      B: 'Jika CAN-H korslet ke ground, pembacaan resistansi ke ground akan mendekati 0 Ohm dan CAN Bus lumpuh total tanpa komunikasi.',
      C: 'Pengukuran dilakukan dengan baterai dilepas, sehingga aki tidak mempengaruhi nilai resistansi ohm bus.',
      D: 'Pin 6 dan 14 adalah posisi standar baku J1962 dan pembacaan 120 Ohm membuktikan pin terhubung ke salah satu resistor terminasi.'
    }
  },

  // --- 12. K3 BENGKEL OTOMOTIF ---
  {
    id: 'tkr-k3-01',
    topic: 'K3 Bengkel Otomotif',
    difficulty: 1,
    question: 'Alat Pelindung Diri (APD) wajib yang harus digunakan teknisi saat melakukan proses pemotongan atau penggerindaan logam di bengkel adalah...',
    options: {
      A: 'Kacamata pelindung (Safety Goggles / Face Shield)',
      B: 'Topi santai kain katun',
      C: 'Sandal karet jepit',
      D: 'Perhiasan cincin dan gelang logam'
    },
    correctAnswer: 'A',
    explanation: 'Kacamata pelindung atau kedok muka melindungi kornea mata dari loncatan serpihan gram logam panas berkecepatan tinggi saat menggerinda.',
    incorrectReasoning: {
      B: 'Topi santai tidak melindungi mata atau muka dari percikan api gerinda.',
      C: 'Sandal dilarang keras di bengkel karena risiko tertimpa benda berat atau terkena cairan kimia.',
      D: 'Perhiasan dilarang karena berisiko tersangkut pada mesin berputar atau memicu sengatan listrik.'
    }
  },
  {
    id: 'tkr-k3-02',
    topic: 'K3 Bengkel Otomotif',
    difficulty: 2,
    question: 'Peralatan pengaman yang wajib dipasang di bawah sasis kendaraan setelah mobil diangkat menggunakan dongkrak hidrolik sebelum mekanik masuk ke kolong mobil adalah...',
    options: {
      A: 'Jack Stand (Penyangga Rangka)',
      B: 'Batu bata merah atau balok kayu lapuk',
      C: 'Kain lap majun basah',
      D: 'Roda cadangan yang ditumpuk miring'
    },
    correctAnswer: 'A',
    explanation: 'Dongkrak hidrolik hanya alat pengangkat dinamis sesaat dan rentan bocor seal tekanannya. Jack stand logam bersertifikat wajib menopang beban statis mobil saat bekerja di kolong demi mencegah kecelakaan fatal tertimpa mobil.',
    incorrectReasoning: {
      B: 'Batu bata sangat getas dan dapat pecah tiba-tiba menahan beban ton mobil.',
      C: 'Kain lap tidak memiliki daya tahan mekanis penopang.',
      D: 'Roda cadangan miring tidak stabil dan melanggar SOP keselamatan bengkel.'
    }
  },
  {
    id: 'tkr-k3-03',
    topic: 'K3 Bengkel Otomotif',
    difficulty: 3,
    question: 'Tipe Alat Pemadam Api Ringan (APAR) yang paling tepat dan aman untuk memadamkan kebakaran kelas B (bahan bakar bensin/pelumas) dan kelas C (kelistrikan bertegangan) di bengkel otomotif adalah APAR jenis...',
    options: {
      A: 'Dry Chemical Powder (Serbuk Kimia Kering) atau Karbon Dioksida (CO2)',
      B: 'Air bertekanan tinggi (Water pressurized)',
      C: 'Busa basah (Foam) berbasis air langsung disemprotkan ke panel listrik',
      D: 'Pasir basah bercampur solar'
    },
    correctAnswer: 'A',
    explanation: 'Dry Chemical Powder memotong reaksi rantai pembakaran bahan kimia dan non-konduktif listrik, sedangkan CO2 mengikat oksigen dan mendinginkan tanpa meninggalkan residu perusak komponen elektronik sensitif.',
    incorrectReasoning: {
      B: 'Air menghantarkan arus listrik (sengatan fatal kebakaran kelas C) dan membuat bensin mengapung menyebar (kebakaran kelas B).',
      C: 'Busa berbasis air menghantarkan arus listrik jika disemprotkan ke perangkat bertegangan.',
      D: 'Solar adalah bahan bakar mudah terbakar yang justru akan memperbesar kobaran api.'
    }
  },
  {
    id: 'tkr-k3-04',
    topic: 'K3 Bengkel Otomotif',
    difficulty: 4,
    caseStudyContext: 'Saat melakukan uji emisi dan tune up mesin di dalam ruangan bengkel praktik yang tertutup rapat tanpa ventilasi exhaust gas, seorang siswa tiba-tiba mengeluh sakit kepala hebat, mual, pusing melayang, dan bibirnya tampak pucat kebiruan.',
    question: 'Gas beracun utama dari knalpot kendaraan penyebab keracunan akut tersebut dan tindakan pertolongan pertamanya adalah...',
    options: {
      A: 'Gas Karbon Monoksida (CO); segera evakuasi korban ke udara terbuka beroksigen bersih dan buka semua ventilasi bengkel',
      B: 'Gas Oksigen murni; suruh korban berbaring di samping knalpot',
      C: 'Uap air kondensasi; beri minum air es',
      D: 'Gas Nitrogen; nyalakan kompor bengkel'
    },
    correctAnswer: 'A',
    explanation: 'Gas Karbon Monoksida (CO) tidak berbau, tidak berwarna, dan memiliki afinitas ikatan dengan hemoglobin darah 200 kali lebih kuat dibanding oksigen, memicu hipoksia jaringan tubuh hingga kematian jika bengkel tidak memiliki saluran pipa pembuangan gas keluar ruangan.',
    incorrectReasoning: {
      B: 'Oksigen murni tidak beracun dan membaringkan dekat knalpot akan mempercepat kematian.',
      C: 'Uap air knalpot tidak menyebabkan sakit kepala keracunan.',
      D: 'Nitrogen gas atmosfer umum, bukan gas racun emisi tak sempurna.'
    }
  },
  {
    id: 'tkr-k3-05',
    topic: 'K3 Bengkel Otomotif',
    difficulty: 5,
    caseStudyContext: 'Teknisi bengkel hendak menyetel celah platina dan memeriksa timing belt pada saat mesin mobil distarter. Teknisi tersebut mengenakan pakaian wearpack dengan lengan panjang tidak terkancing kancingnya dan memakai kalung rantai gantungan kunci.',
    question: 'Evaluasi potensi bahaya (hazard assessment) dan perbaikan SOP K3 yang wajib dipatuhi adalah...',
    options: {
      A: 'Pakaian longgar dan aksesoris berisiko fatal terbelit putaran puli/tali kipas mesin; kancingkan lengan baju secara rapat atau gulung rapi, dan lepas semua perhiasan sebelum bekerja di dekat komponen berputar',
      B: 'Tidak ada bahaya karena mesin mobil modern memiliki pelindung plastik',
      C: 'Cukup matikan lampu ruangan bengkel',
      D: 'Cukup gunakan sarung tangan kain wol tebal saat menyentuh sabuk berputar'
    },
    correctAnswer: 'A',
    explanation: 'Komponen mesin yang berputar seperti pulley poros engkol dan fan belt memiliki daya puntir raksasa yang mampu menarik anggota tubuh dalam sekejap bila ujung pakaian longgar atau kalung tersangkut. SOP K3 melarang tegas penggunaan aksesoris dan mewajibkan wearpack terpasang rapi.',
    incorrectReasoning: {
      B: 'Banyak komponen mesin yang terbuka saat servis dilakukan.',
      C: 'Mematikan lampu mengurangi visibilitas dan justru memperbesar peluang celaka.',
      D: 'Sarung tangan kain justru sangat berbahaya di dekat puli berputar karena serat kain mudah tertarik masuk ke celah sabuk.'
    }
  },

  // --- 13. PERAWATAN BERKALA KENDARAAN ---
  {
    id: 'tkr-mnt-01',
    topic: 'Perawatan Berkala Kendaraan',
    difficulty: 1,
    question: 'Interval jarak tempuh standar penggantian oli mesin berbahan dasar sintetis pada mobil penumpang umumnya dilakukan setiap...',
    options: {
      A: '10.000 km atau 6 bulan (mana yang tercapai lebih dahulu)',
      B: '100.000 km atau 5 tahun',
      C: '500 km atau 1 minggu',
      D: 'Oli mesin tidak perlu diganti seumur hidup kendaraan'
    },
    correctAnswer: 'A',
    explanation: 'Pabrikan mobil menetapkan servis berkala standar penggantian oli mesin dan filter oli setiap 10.000 km atau 6 bulan untuk menjamin viskositas pelumasan dan aditif anti-wear tidak terdegradasi.',
    incorrectReasoning: {
      B: '100.000 km oli sudah lama teroksidasi dan membentuk lumpur oli (oil sludge) perusak mesin.',
      C: '500 km adalah penggantian berlebihan yang memboroskan biaya konsumen.',
      D: 'Semua oli mesin mengalami penurunan kualitas akibat panas, gesekan, dan uap pembakaran.'
    }
  },
  {
    id: 'tkr-mnt-02',
    topic: 'Perawatan Berkala Kendaraan',
    difficulty: 2,
    question: 'Pekerjaan servis berkala yang dilakukan untuk memindahkan posisi roda ban (misal depan ke belakang atau silang) guna meratakan keausan tapak ban disebut...',
    options: {
      A: 'Rotasi ban (Tire rotation)',
      B: 'Balancing roda',
      C: 'Spooring roda',
      D: 'Vulkanisir ban'
    },
    correctAnswer: 'A',
    explanation: 'Rotasi ban dilakukan setiap 10.000 km agar keausan telapak keempat ban merata, mengingat roda depan menerima beban setir dan pengereman lebih berat dibanding roda belakang.',
    incorrectReasoning: {
      B: 'Balancing adalah menyamakan bobot putar pelek dan ban dengan timbel.',
      C: 'Spooring adalah menyetel sudut keselarasan roda (wheel alignment).',
      D: 'Vulkanisir adalah proses penempelan telapak karet ban bekas.'
    }
  },
  {
    id: 'tkr-mnt-03',
    topic: 'Perawatan Berkala Kendaraan',
    difficulty: 3,
    question: 'Kondisi busi standar yang baru dilepas dari mesin yang sehat dengan pembakaran sempurna ditandai dengan warna...',
    options: {
      A: 'Abu-abu terang atau coklat muda keemasan (light brown) pada ujung insulator elektroda',
      B: 'Hitam pekat basah berminyak oli mesin',
      C: 'Hitam berjelaga kering seperti arang tebal',
      D: 'Putih melepuh dengan lelehan elektroda logam'
    },
    correctAnswer: 'A',
    explanation: 'Warna coklat kemerahan muda atau abu-abu terang pada insulator elektroda menandakan rasio udara-bensin pas, suhu kerja busi berada pada self-cleaning range (450-800°C), dan tidak ada kebocoran oli ke ruang bakar.',
    incorrectReasoning: {
      B: 'Hitam basah menandakan oli mesin bocor masuk melalui ring piston atau sil katup.',
      C: 'Hitam jelaga kering menandakan campuran bahan bakar terlalu kaya (over-rich mixture) atau pengapian lemah.',
      D: 'Putih melepuh menandakan busi overheating akibat campuran terlalu kurus atau angka panas busi terlalu panas.'
    }
  },
  {
    id: 'tkr-mnt-04',
    topic: 'Perawatan Berkala Kendaraan',
    difficulty: 4,
    caseStudyContext: 'Sebuah mobil menjalani servis besar berkala 40.000 km. SOP bengkel resmi mewajibkan pembersihan throttle body. Setelah throttle body dibersihkan dengan chemical cleaner dan dipasang kembali dengan rapi, saat mesin dihidupkan putaran idle mesin melonjak tinggi di 1500 - 1800 RPM dan tidak mau turun meski suhu mesin sudah mencapai 90°C.',
    question: 'Langkah lanjutan yang wajib dilakukan teknisi sesuai SOP kendaraan modern adalah...',
    options: {
      A: 'Melakukan prosedur kalibrasi ulang pembelajaran idle (Throttle / Idle Air Volume Learning Re-learn) menggunakan scan tool atau manual switch',
      B: 'Memotong per katup gas agar katup tertutup lebih paksa',
      C: 'Menyumbat intake manifold dengan kain majun',
      D: 'Mengganti seluruh kabel body mobil'
    },
    correctAnswer: 'A',
    explanation: 'Pada kendaraan Drive-by-Wire (elektronik throttle), ECU secara bertahap membuka katup gas sedikit demi sedikit untuk mengompensasi kerak karbon lama. Setelah kerak dibersihkan, celah menjadi longgar sehingga udara masuk lebih banyak. ECU wajib di-reset melalui prosedur Throttle Position Learning agar mempelajari kembali posisi tertutup baru.',
    incorrectReasoning: {
      B: 'Memotong per merusak throttle body elektrik modern yang dikendalikan motor servo.',
      C: 'Menyumbat kain ke intake manifold berbahaya karena kain dapat terhisap ke ruang bakar.',
      D: 'Kabel body tidak mengalami kerusakan apapun; ini murni masalah adaptasi memori digital ECU.'
    }
  },
  {
    id: 'tkr-mnt-05',
    topic: 'Perawatan Berkala Kendaraan',
    difficulty: 5,
    caseStudyContext: 'Saat melakukan perawatan berkala sistem rem pada mobil berusia 3 tahun, teknisi menguji kualitas minyak rem di master silinder menggunakan brake fluid tester digital: layar LED menampilkan kadar air 4,2% (lampu merah menyala / bahaya).',
    question: 'Evaluasi dampak teknis kadar air tinggi tersebut terhadap keselamatan dan rekomendasi perbaikannya adalah...',
    options: {
      A: 'Kadar air menurunkan titik didih minyak rem secara drastis, berisiko tinggi memicu vapour lock (rem blong saat turunan panjang) dan karat silinder rem; wajib kuras dan ganti total seluruh minyak rem',
      B: 'Kadar air tidak berpengaruh karena rem bekerja berdasarkan tekanan hidrolis murni',
      C: 'Cukup tambahkan minyak rem baru sampai garis Max tanpa menguras minyak lama',
      D: 'Cukup keringkan minyak rem dengan menjemurnya di terik matahari'
    },
    correctAnswer: 'A',
    explanation: 'Minyak rem berbasis glikol menyerap uap air dari kelembaban udara. Kadar air di atas 3,5% memangkas titik didih dari 230°C ke bawah 140°C. Saat turunan panjang panas kanvas rem merambat ke kaliper, mendidihkan air menjadi gelembung uap air yang kompresibel sehingga pedal rem amblas seketika (rem blong).',
    incorrectReasoning: {
      B: 'Air mendidih pada suhu 100°C di dalam sirkuit rem yang panas, menghancurkan daya hidrolis fluida.',
      C: 'Menambah minyak baru di tabung tidak membersihkan minyak rem lama yang tercemar air di dalam kaliper roda.',
      D: 'Minyak rem yang tercemar air tidak dapat dipisahkan secara fisik dengan dijemur.'
    }
  },

  // --- 14. PENGGUNAAN ALAT UKUR & DIAGNOSTIK ---
  {
    id: 'tkr-tst-01',
    topic: 'Penggunaan Alat Ukur & Diagnostik',
    difficulty: 1,
    question: 'Tingkat ketelitian (least count) standar pembacaan sebuah Mikrometer Luar (Outside Micrometer) metrik adalah...',
    options: {
      A: '0,01 mm',
      B: '0,1 mm',
      C: '1,0 mm',
      D: '0,0001 mm'
    },
    correctAnswer: 'A',
    explanation: 'Mikrometer sekrup metrik umumnya memiliki pitch ulir 0,5 mm dengan 50 skala thimble putar, sehingga satu strip thimble bernilai 0,5 mm / 50 = 0,01 mm.',
    incorrectReasoning: {
      B: '0,1 mm adalah ketelitian mistar ukur kasar atau jangka sorong ketelitian rendah.',
      C: '1,0 mm adalah ketelitian penggaris baja standar.',
      D: '0,0001 mm adalah ketelitian mikroskop elektron / mesin koordinat CMM laboratorium kalibrasi.'
    }
  },
  {
    id: 'tkr-tst-02',
    topic: 'Penggunaan Alat Ukur & Diagnostik',
    difficulty: 2,
    question: 'Alat ukur presisi yang digunakan bersama Magnetic Base untuk mengukur celah kebebasan roda gigi (backlash) gardan atau keolengan (run-out) piringan cakram rem adalah...',
    options: {
      A: 'Dial Indicator (Dial Gauge)',
      B: 'Cylinder Bore Gauge',
      C: 'Tire Pressure Gauge',
      D: 'Timing Light'
    },
    correctAnswer: 'A',
    explanation: 'Dial indicator dengan sensor jarum kontak dan dudukan magnet (magnetic stand) digunakan untuk mengukur pergeseran linier atau keolengan bidang putar dengan ketelitian 0,01 mm.',
    incorrectReasoning: {
      B: 'Cylinder bore gauge khusus untuk mengukur keausan dan keovalan diameter dinding silinder mesin.',
      C: 'Tire pressure gauge mengukur tekanan udara ban.',
      D: 'Timing light untuk memeriksa saat pengapian busi mesin.'
    }
  },
  {
    id: 'tkr-tst-03',
    topic: 'Penggunaan Alat Ukur & Diagnostik',
    difficulty: 3,
    question: 'Alat ukur pneumatik yang dipasang pada lubang busi untuk mengukur kemampuan penahanan kompresi ruang bakar silinder saat mesin di-cranking adalah...',
    options: {
      A: 'Compression Tester (Pressure Gauge Kompresi)',
      B: 'Radiator Cup Tester',
      C: 'Vacuum Gauge',
      D: 'Hydrometer'
    },
    correctAnswer: 'A',
    explanation: 'Compression tester memiliki selang berulir seukuran lubang busi dengan katup satu arah (one-way check valve) untuk merekam tekanan puncak yang dihasilkan gerakan torak saat mesin distarter.',
    incorrectReasoning: {
      B: 'Radiator cup tester untuk menguji tekanan buka katup tutup radiator dan kebocoran sistem pendingin.',
      C: 'Vacuum gauge dipasang pada saluran masuk (intake manifold) untuk menguji kevakuman mesin.',
      D: 'Hydrometer untuk mengukur berat jenis elektrolit cairan asam baterai.'
    }
  },
  {
    id: 'tkr-tst-04',
    topic: 'Penggunaan Alat Ukur & Diagnostik',
    difficulty: 4,
    caseStudyContext: 'Siswa SMK mengukur diameter pena engkol (crankpin) poros engkol menggunakan Outside Micrometer rentang 50 - 75 mm. Pada tabung laras (sleeve) tampak garis skala horizontal 52 mm dan garis bawah 0,5 mm terlihat jelas terbuka. Pada garis putar bidal (thimble), garis strip angka 27 berimpit tepat sejajar dengan garis referensi laras.',
    question: 'Berapa hasil pembacaan ukuran diameter crankpin yang benar dan presisi?',
    options: {
      A: '52,77 mm',
      B: '52,27 mm',
      C: '52,50 mm',
      D: '50,77 mm'
    },
    correctAnswer: 'A',
    explanation: 'Perhitungan: Skala utama pada sleeve = 52,00 mm. Skala setengah mm di bawah terlihat = +0,50 mm. Skala putar thimble = 27 x 0,01 mm = +0,27 mm. Total ukuran = 52,00 + 0,50 + 0,27 = 52,77 mm.',
    incorrectReasoning: {
      B: '52,27 mm keliru karena lupa menghitung garis setengah milimeter (0,5 mm) yang sudah terlihat jelas.',
      C: '52,50 mm hanya menjumlahkan skala sleeve tanpa membaca angka thimble.',
      D: '50,77 mm keliru membaca skala utama 52 mm menjadi 50 mm.'
    }
  },
  {
    id: 'tkr-tst-05',
    topic: 'Penggunaan Alat Ukur & Diagnostik',
    difficulty: 5,
    caseStudyContext: 'Saat melakukan pengukuran keausan dan keovalan silinder blok mesin menggunakan Cylinder Bore Gauge (CBG), mikrometer luar terlebih dahulu diset pada diameter spesifikasi silinder standar yaitu 75,00 mm. Setelah jarum dial indicator CBG diset pada angka "0" menggunakan mikrometer tersebut, alat dimasukkan ke dalam silinder posisi atas arah tegak lurus (Y). Jarum dial indicator bergeser ke arah kanan sebanyak 8 strip (1 strip = 0,01 mm).',
    question: 'Berapakah ukuran diameter aktual silinder tersebut dan interpretasinya?',
    options: {
      A: '74,92 mm (diameter lebih kecil 0,08 mm dari ukuran acuan nol)',
      B: '75,08 mm (silinder mengalami keausan membesar 0,08 mm)',
      C: '75,80 mm',
      D: '74,08 mm'
    },
    correctAnswer: 'A',
    explanation: 'Pada Cylinder Bore Gauge, saat plunger tertekan ke dalam (diameter silinder lebih sempit dari nol acuan mikrometer), jarum jam akan berputar searah jarum jam (ke kanan) menjauhi angka 0. 8 strip x 0,01 mm = 0,08 mm. Maka ukuran diameter aktual adalah 75,00 mm - 0,08 mm = 74,92 mm.',
    incorrectReasoning: {
      B: 'Jika diameter silinder lebih besar (aus membesar), jarum dial CBG akan berputar ke kiri (berlawanan jarum jam) dari titik nol.',
      C: '75,80 mm salah membaca 8 strip (0,08 mm) menjadi 0,80 mm.',
      D: '74,08 mm keliru menghitung nilai pengurangan dasar.'
    }
  },

  // --- ADDITIONAL TOPICS & HOTS QUESTIONS TO EXCEED 65 TOTAL HIGH QUALITY TKR QUESTIONS ---
  {
    id: 'tkr-eng-06',
    topic: 'Sistem Mesin Kendaraan Ringan',
    difficulty: 3,
    question: 'Penyebab utama timbulnya suara ketukan logam tajam (knocking / pinging) pada mesin bensin saat mendaki tanjakan adalah...',
    options: {
      A: 'Penggunaan bahan bakar dengan nilai oktan (RON) lebih rendah dari spesifikasi rasio kompresi mesin',
      B: 'Oli mesin terlalu kental',
      C: 'Thermostat macet membuka terus',
      D: 'Tali kipas terlalu kendor'
    },
    correctAnswer: 'A',
    explanation: 'Bahan bakar dengan angka oktan rendah mudah terbakar sendiri secara prematur (auto-ignition) akibat tekanan dan temperatur ruang bakar yang tinggi sebelum percikan busi mencapai titik optimal, menimbulkan gelombang kejut knocking.',
    incorrectReasoning: {
      B: 'Oli kental membuat mesin berat dan boros bensin, tidak memicu detonasi auto-ignition.',
      C: 'Thermostat membuka terus membuat mesin terlalu dingin, bukan overheating pemicu pinging.',
      D: 'Tali kipas kendor menimbulkan bunyi berdecit di area belt, bukan ketukan di ruang bakar.'
    }
  },
  {
    id: 'tkr-fuel-06',
    topic: 'Sistem Bahan Bakar Bensin & Diesel',
    difficulty: 4,
    caseStudyContext: 'Truk bermesin diesel mengeluarkan asap hitam pekat dari ujung knalpot saat diakselerasi di tanjakan. Mesin terasa kurang bertenaga dan boros bahan bakar. Saringan udara diperiksa terlihat tertutup lumpur debu tebal.',
    question: 'Hubungan teknis antara saringan udara tersumbat dengan kepulan asap hitam knalpot adalah...',
    options: {
      A: 'Pasokan udara oksigen ke ruang bakar berkurang drastis sehingga solar tidak terbakar sempurna dan berubah menjadi jelaga karbon padat',
      B: 'Solar tercampur dengan oli gardan belakang',
      C: 'Tekanan injektor melonjak hingga 3000 bar',
      D: 'Suhu pendingin mesin turun drastis di bawah 0°C'
    },
    correctAnswer: 'A',
    explanation: 'Mesin diesel beroperasi dengan surplus udara (kelebihan oksigen). Jika filter udara tersumbat, massa udara berkurang drastis sehingga rasio bahan bakar menjadi terlampau kaya. Bahan bakar solar yang tidak mendapat pasangan oksigen terurai menjadi partikel jelaga karbon hitam tak terbakar.',
    incorrectReasoning: {
      B: 'Oli gardan terpisah di sasis belakang, tidak masuk ke saluran pembakaran mesin.',
      C: 'Injektor tidak menaikkan tekanan akibat filter udara tersumbat.',
      D: 'Suhu mesin diesel yang bekerja berat justru meningkat.'
    }
  },
  {
    id: 'tkr-brk-06',
    topic: 'Sistem Rem',
    difficulty: 3,
    question: 'Penyebab permukaan piringan cakram rem aus bergelombang atau beralur dalam adalah...',
    options: {
      A: 'Kampas rem habis hingga plat besi landasan kampas bergesekan langsung dengan cakram',
      B: 'Minyak rem di reservoir terlalu penuh',
      C: 'Pedal rem disetel terlalu empuk',
      D: 'Ban kendaraan memakai angin nitrogen'
    },
    correctAnswer: 'A',
    explanation: 'Jika material gesek kampas rem habis total, plat punggung besi kampas akan beradu kontak logam-ke-logam dengan piringan rotor cakram, mengikis dan merusak permukaan cakram hingga timbul alur parah dan bunyi mendecit logam kasar.',
    incorrectReasoning: {
      B: 'Minyak rem penuh tidak mengikis fisik permukaan rotor cakram roda.',
      C: 'Setelan pedal mempengaruhi stroke pedal, bukan keausan gesek plat ke cakram.',
      D: 'Angin nitrogen menjaga stabilitas tekanan ban, tidak merusak sistem rem cakram.'
    }
  },
  {
    id: 'tkr-elec-06',
    topic: 'Sistem Kelistrikan Kendaraan',
    difficulty: 2,
    question: 'Warna standar sekring tancap (blade fuse) dengan kapasitas arus 15 Ampere pada kendaraan adalah warna...',
    options: {
      A: 'Biru',
      B: 'Merah (10A)',
      C: 'Kuning (20A)',
      D: 'Hijau (30A)'
    },
    correctAnswer: 'A',
    explanation: 'Kode warna standar internasional sekring blade otomotif: Coklat = 7,5A, Merah = 10A, Biru = 15A, Kuning = 20A, Transparan/Putih = 25A, Hijau = 30A.',
    incorrectReasoning: {
      B: 'Merah adalah kode untuk 10 Ampere.',
      C: 'Kuning adalah kode untuk 20 Ampere.',
      D: 'Hijau adalah kode untuk 30 Ampere.'
    }
  },
  {
    id: 'tkr-efi-06',
    topic: 'Sistem EFI & Sensor',
    difficulty: 3,
    question: 'Fungsi dari Knock Sensor pada blok mesin kendaraan injeksi modern adalah...',
    options: {
      A: 'Mendeteksi frekuensi getaran ketukan pembakaran abnormal (knocking) menggunakan elemen piezoelektrik untuk memundurkan saat pengapian',
      B: 'Mengukur tekanan oli di dalam karter mesin',
      C: 'Menyalakan klakson saat terjadi tabrakan mobil',
      D: 'Menghitung jumlah putaran roda belakang'
    },
    correctAnswer: 'A',
    explanation: 'Knock sensor memanfaatkan kristal piezoelektrik yang peka getaran frekuensi resonansi knocking (sekitar 6-8 kHz). Ketika timbul knocking, sensor mengirim sinyal tegangan bolak-balik ke ECU agar ECU segera memundurkan (retard) waktu pengapian demi melindungi piston.',
    incorrectReasoning: {
      B: 'Tekanan oli diukur oleh Oil Pressure Switch/Sender.',
      C: 'Klakson tabrakan dikontrol modul airbag / SRS crash sensor.',
      D: 'Putaran roda diukur oleh wheel speed sensor ABS.'
    }
  },
  {
    id: 'tkr-pow-06',
    topic: 'Sistem Pemindah Tenaga',
    difficulty: 2,
    question: 'Pada poros propeller, komponen yang memungkinkan poros meneruskan tenaga putar secara mulus saat sudut kemiringan diferensial berubah-ubah akibat ayunan suspensi adalah...',
    options: {
      A: 'Universal Joint (Cross joint / Spider)',
      B: 'Center bearing',
      C: 'Sleeve yoke',
      D: 'Balance weight'
    },
    correctAnswer: 'A',
    explanation: 'Universal joint (cross joint dengan bantalan jarum) berfungsi mentransmisikan putaran antara dua poros yang saling membentuk sudut variabel tanpa patah atau tersendat.',
    incorrectReasoning: {
      B: 'Center bearing menumpu bagian tengah propeller shaft dua bagian (2-piece shaft).',
      C: 'Sleeve yoke mengkompensasi perubahan panjang-pendek jarak poros propeller.',
      D: 'Balance weight menyeimbangkan momen inersia putar poros.'
    }
  },
  {
    id: 'tkr-k3-06',
    topic: 'K3 Bengkel Otomotif',
    difficulty: 2,
    question: 'Ketika menyolder atau melakukan perbaikan kelistrikan bodi mobil, tindakan preventif utama untuk mencegah kebakaran dan kerusakan ECU adalah...',
    options: {
      A: 'Melepas kabel terminal negatif baterai aki sebelum memulai pekerjaan',
      B: 'Menyiram bodi mobil dengan solar',
      C: 'Menghidupkan mesin pada putaran tinggi',
      D: 'Mengganti semua sekring dengan kawat tembaga tebal'
    },
    correctAnswer: 'A',
    explanation: 'Melepas terminal negatif baterai memutus seluruh jalur kelistrikan ground sirkuit mobil, meniadakan risiko korsleting tak sengaja saat kunci atau alat solder menyentuh bodi logam kendaraan.',
    incorrectReasoning: {
      B: 'Solar sangat mudah tersulut percikan api solder.',
      C: 'Mesin hidup meningkatkan risiko kebakaran dan lonjakan tegangan.',
      D: 'Kawat tembaga tebal menghilangkan proteksi sekring dan berisiko membakar seluruh harness kabel.'
    }
  },
  {
    id: 'tkr-mnt-06',
    topic: 'Perawatan Berkala Kendaraan',
    difficulty: 2,
    question: 'Pemeriksaan berat jenis elektrolit cairan baterai basah (accu zuur) menggunakan alat Hydrometer pada kondisi baterai terisi penuh (full charge) menunjukkan angka ideal...',
    options: {
      A: '1,260 - 1,280 pada suhu 20°C',
      B: '1,000 (setara air murni)',
      C: '0,850',
      D: '2,500'
    },
    correctAnswer: 'A',
    explanation: 'Elektrolit baterai asam timbal (H2SO4) memiliki berat jenis 1,260 - 1,280 saat muatan penuh (100% charged). Bila di bawah 1,200 baterai sudah membutuhkan pengisian ulang (recharge).',
    incorrectReasoning: {
      B: '1,000 adalah berat jenis air suling murni (baterai mati total).',
      C: '0,850 lebih ringan dari air (setara berat jenis bensin/minyak).',
      D: '2,500 adalah nilai di luar batas fisik campuran asam sulfat encer.'
    }
  },
  {
    id: 'tkr-tst-06',
    topic: 'Penggunaan Alat Ukur & Diagnostik',
    difficulty: 3,
    question: 'Untuk mengukur celah renggang katup (valve clearance) atau celah kontak ujung ring piston (piston ring end gap), alat ukur yang paling tepat digunakan adalah...',
    options: {
      A: 'Feeler Gauge (Thickness Gauge / Bilah Peraba)',
      B: 'Mistar baja',
      C: 'Mikrometer kedalaman (Depth Micrometer)',
      D: 'Torsi meter (Torque Wrench)'
    },
    correctAnswer: 'A',
    explanation: 'Feeler gauge terdiri dari bilah-bilah baja presisi dengan berbagai ketebalan terstandarisasi (misal 0,05 mm hingga 1,00 mm) yang diselipkan di antara dua permukaan rapat untuk mengukur celah celah presisi.',
    incorrectReasoning: {
      B: 'Mistar baja tidak bisa masuk ke celah sempit 0,2 mm katup.',
      C: 'Depth micrometer untuk mengukur kedalaman lubang atau ceruk.',
      D: 'Torque wrench adalah alat pengencang baut dengan momen terukur, bukan pengukur celah.'
    }
  },
  {
    id: 'tkr-str-06',
    topic: 'Sistem Kemudi & Suspensi',
    difficulty: 4,
    caseStudyContext: 'Sebuah mobil mengalami keluhan bunyi gemertak atau decit ketukan logam "klok-klok-klok" di bagian roda depan kanan secara ritmis HANYA saat setir dibelokkan patah ke arah kiri sambil melaju di tikungan. Saat jalan lurus tidak terdengar bunyi sama sekali.',
    question: 'Komponen yang mengalami keausan pada suspensi/penggerak depan tersebut adalah...',
    options: {
      A: 'Outer Constant Velocity (CV) Joint roda kanan aus atau sobek karet boot pelindungnya',
      B: 'Pegas spiral kiri patah',
      C: 'Ban serep kendor di bagasi',
      D: 'Dinamo starter longgar'
    },
    correctAnswer: 'A',
    explanation: 'Outer CV joint (as roda luar) menerima sudut belok ekstrem bersama putaran roda. Bunyi ketukan ritmis berulang hanya saat berbelok merupakan gejala khas got bola-bola baja CV joint aus atau kering pelumas akibat karet boot sobek.',
    incorrectReasoning: {
      B: 'Pegas spiral patah membuat bodi mobil miring permanen di kedua kondisi lurus maupun belok.',
      C: 'Ban serep di bagasi belakang tidak menimbulkan suara ketukan ritmis sinkron dengan sudut roda depan.',
      D: 'Starter dinamo mati diam saat mobil melaju jalan.'
    }
  },
  {
    id: 'tkr-ac-06',
    topic: 'Sistem AC Kendaraan',
    difficulty: 3,
    question: 'Gejala udara AC mobil berbau apek asam saat pertama kali dinyalakan umumnya disebabkan oleh...',
    options: {
      A: 'Pertumbuhan jamur dan bakteri pada sirip evaporator yang lembab serta filter kabin kotor',
      B: 'Freon R-134a yang sudah basi kadaluarsa',
      C: 'Tali kompresor terlalu licin',
      D: 'Knalpot mobil bocor ke dalam tangki bensin'
    },
    correctAnswer: 'A',
    explanation: 'Evaporator kabin yang dingin dan lembab menjadi sarang ideal berkembangnya spora jamur dan bakteri bila filter kabin tidak pernah diganti atau dibersihkan.',
    incorrectReasoning: {
      B: 'Freon adalah gas kimia stabil yang tidak basi dan tidak memiliki aroma apek.',
      C: 'Tali kompresor licin hanya menimbulkan bunyi decitan belt.',
      D: 'Knalpot bocor menimbulkan bau gas asap CO tajam, bukan bau apek lembab jamur.'
    }
  },
  {
    id: 'tkr-obd-06',
    topic: 'Sistem OBD & Diagnosis Kerusakan',
    difficulty: 4,
    caseStudyContext: 'Lampu indikator mesin MIL menyala dengan DTC P0303: "Cylinder 3 Misfire Detected". Teknisi ingin memastikan apakah penyebabnya berasal dari koil pengapian (ignition coil) tanpa harus membeli komponen baru.',
    question: 'Metode pengujian diagnosa cepat (swap test) yang paling tepat dan logis adalah...',
    options: {
      A: 'Menukar koil silinder 3 dengan koil silinder 1, lalu hapus DTC dan jalankan mesin untuk melihat apakah DTC berpindah ke P0301',
      B: 'Memukul koil silinder 3 dengan palu besi',
      C: 'Menyemprotkan bensin langsung ke soket koil',
      D: 'Mengganti seluruh oli mesin'
    },
    correctAnswer: 'A',
    explanation: 'Metode tukar silang (component swap test) adalah standar emas bengkel untuk komponen modular. Jika koil dipindah ke silinder 1 dan kode kerusakan berpindah dari P0303 menjadi P0301, terbukti 100% kerusakan berada pada unit koil tersebut.',
    incorrectReasoning: {
      B: 'Memukul koil dengan palu akan merusak inti ferit dan isolasi resin koil.',
      C: 'Menyemprot bensin ke konektor listrik berisiko tinggi memicu kebakaran percikan api.',
      D: 'Oli mesin tidak ada kaitannya dengan deteksi misfire spesifik silinder 3 akibat koil.'
    }
  },
  {
    id: 'tkr-eng-07',
    topic: 'Sistem Mesin Kendaraan Ringan',
    difficulty: 4,
    caseStudyContext: 'Sebuah mobil mengeluarkan asap putih tebal berbau sangit manis dari knalpot terus menerus, disertai air radiator yang selalu berkurang drastis tanpa ada tetesan kebocoran di kolong lantai. Saat tutup radiator dibuka dan mesin distarter, terlihat gelembung udara menyembur keluar bersama air radiator.',
    question: 'Diagnosis kerusakan mekanik mesin yang paling tepat adalah...',
    options: {
      A: 'Paking kepala silinder (cylinder head gasket) bocor atau kepala silinder melengkung/retak',
      B: 'Knalpot kemasukan air saat mencuci mobil',
      C: 'Injektor silinder nomor 4 menyemprot terlalu banyak bensin',
      D: 'Filter oli mesin terpasang miring'
    },
    correctAnswer: 'A',
    explanation: 'Gelembung udara yang menyembur di leher radiator membuktikan tekanan kompresi silinder bocor menembus jaket air pendingin (water jacket). Air radiator yang terhisap ke ruang bakar menguap menjadi asap putih pekat berbau manis khas cairan etilen glikol.',
    incorrectReasoning: {
      B: 'Air cuci mobil di knalpot hanya menguap beberapa menit saat awal start dan tidak membuat air radiator berkurang terus.',
      C: 'Injektor bocor menimbulkan asap hitam pekat berbau bensin mentah, bukan asap putih manis.',
      D: 'Filter oli miring memicu ceceran oli di lantai bawah mobil, bukan gelembung di leher radiator.'
    }
  },
  {
    id: 'tkr-lub-07',
    topic: 'Sistem Pelumasan & Pendinginan',
    difficulty: 3,
    question: 'Komponen pada sistem pendingin yang membuka dan menutup aliran cairan pendingin ke radiator berdasarkan suhu kerja mesin adalah...',
    options: {
      A: 'Thermostat',
      B: 'Water pump',
      C: 'Expansion tank',
      D: 'Cooling fan relay'
    },
    correctAnswer: 'A',
    explanation: 'Thermostat menggunakan elemen lilin (wax pellet) yang memuai saat dipanaskan di atas suhu tertentu (umumnya 82 - 88°C) untuk membuka katup sirkulasi ke radiator.',
    incorrectReasoning: {
      B: 'Water pump memompa sirkulasi air secara kontinu diputar sabuk mesin.',
      C: 'Expansion tank menampung luapan air pemuaian.',
      D: 'Relay kipas menyalakan motor kipas listrik saat suhu air mencapai batas saklar thermonet.'
    }
  },
  {
    id: 'tkr-brk-07',
    topic: 'Sistem Rem',
    difficulty: 4,
    caseStudyContext: 'Pada saat mobil direm mendadak di jalan raya, kendaraan cenderung membanting/membuang keras ke arah kanan (pulls to the right), sehingga pengemudi harus menahan setir sekuat tenaga agar tidak keluar lajur jalan.',
    question: 'Penyebab gangguan hidrolis atau mekanis pada sistem rem tersebut adalah...',
    options: {
      A: 'Piston kaliper rem depan kiri macet tidak menjepit atau kanvas rem depan kiri basah terkena minyak pelumas',
      B: 'Rem belakang sebelah kanan bocor kabel handbrake-nya',
      C: 'Master rem bocor di kedua sirkuit tandem',
      D: 'Tekanan ban belakang kanan lebih tinggi 0,5 psi'
    },
    correctAnswer: 'A',
    explanation: 'Mobil akan membanting ke arah sisi roda yang memiliki daya cengkeram rem lebih kuat. Jika rem membanting ke kanan, berarti rem roda kanan bekerja normal menggigit, sedangkan rem roda kiri depan gagal bekerja (piston macet atau kanvas licin terkontaminasi gemuk).',
    incorrectReasoning: {
      B: 'Rem parkir belakang tidak aktif saat pengereman dinamis di jalan raya.',
      C: 'Jika kedua sirkuit tandem bocor, pedal rem akan amblas ke lantai dan rem blong total di kedua sisi.',
      D: 'Perbedaan 0,5 psi ban belakang tidak mampu menimbulkan efek banting keras pengereman depan.'
    }
  },
  {
    id: 'tkr-elec-07',
    topic: 'Sistem Kelistrikan Kendaraan',
    difficulty: 3,
    question: 'Tujuan pemasangan relay pada rangkaian kelistrikan beban besar seperti lampu kepala (headlamp) dan klakson adalah...',
    options: {
      A: 'Mencegah penurunan tegangan (voltage drop) dan melindungi saklar kombinasi dari percikan api arus besar',
      B: 'Mengubah arus searah DC menjadi arus bolak-balik AC',
      C: 'Menambah daya watt lampu agar lebih terang dari standar aslinya',
      D: 'Menghilangkan kebutuhan akan sekring pengaman'
    },
    correctAnswer: 'A',
    explanation: 'Relay memperpendek jalur kabel arus utama dari baterai langsung ke lampu melalui kontak relay, sehingga saklar di dashboard hanya mengalirkan arus kecil koil solenoid (sekitar 0,15 A), mencegah saklar terbakar dan nyala lampu maksimal.',
    incorrectReasoning: {
      B: 'Relay mekanik tidak mengubah jenis arus DC ke AC (fungsi inverter).',
      C: 'Relay menyalurkan tegangan baterai penuh yang seharusnya, bukan menambah watt bohlam melampaui fisiknya.',
      D: 'Sirkuit relay tetap wajib dilengkapi sekring pengaman.'
    }
  },
  {
    id: 'tkr-stc-07',
    topic: 'Sistem Starter & Pengisian',
    difficulty: 4,
    caseStudyContext: 'Sebuah mobil dapat distarter dengan lancar di pagi hari, namun setelah menempuh perjalanan jauh 1 jam dan mesin dimatikan di SPBU, saat kunci kontak distarter kembali dinamo starter berputar sangat lambat dan berat (cranking sluggish) seperti aki soak. Setelah kap mesin dibuka dan didiamkan dingin selama 30 menit, mesin dapat distarter kencang kembali secara normal.',
    question: 'Penyebab masalah mekanikal/elektrikal pada starter tersebut adalah...',
    options: {
      A: 'Bushing / bearing poros armature motor starter aus dan memuai saat terkena radiasi panas mesin, menyebabkan rotor bergesekan dengan stator magnet (armature dragging)',
      B: 'Air radiator membeku',
      C: 'Minyak rem berbuih',
      D: 'Busi silinder nomor 3 korslet'
    },
    correctAnswer: 'A',
    explanation: 'Gejala "starter berat hanya saat mesin panas" (hot soak starter drag) terjadi akibat keausan bushing poros starter. Panas dari blok mesin dan knalpot membuat poros armature memuai sehingga clearance hilang, mengakibatkan gesekan langsung antara inti armature dan pole shoe medan magnet.',
    incorrectReasoning: {
      B: 'Air radiator tidak membeku setelah perjalanan 1 jam di jalan raya tropis.',
      C: 'Minyak rem tidak terhubung dengan dinamo motor starter listrik.',
      D: 'Busi hanya menyala saat starter berputar, tidak menghambat putaran mekanis poros armature.'
    }
  },
  {
    id: 'tkr-efi-07',
    topic: 'Sistem EFI & Sensor',
    difficulty: 4,
    caseStudyContext: 'Sebuah mobil MPV bermesin bensin konsumsi bahan bakarnya sangat boros (hanya 1 liter per 6 km, biasanya 1:12 km) dan knalpot berbau bensin mentah pedih di mata. Scan tool membaca sinyal Oxygen Sensor (O2 Sensor Bank 1 Sensor 1) terkunci diam pada voltase 0,1 Volt konstan (campuran terbaca kurus terus-menerus), meskipun teknisi menyemprotkan propana/karburator cleaner ke intake.',
    question: 'Analisis logika pengendalian ECU berdasarkan pembacaan O2 sensor yang rusak tersebut adalah...',
    options: {
      A: 'O2 Sensor mati terkunci di 0,1V (palsu lean), sehingga ECU tertipu dan terus menambah durasi semprotan injektor secara maksimal (Full Rich Compensation)',
      B: 'ECU mengalami korsleting memori RAM',
      C: 'Knalpot tersumbat oleh batu kerikil',
      D: 'Busi mati secara bersamaan'
    },
    correctAnswer: 'A',
    explanation: 'Sinyal O2 sensor rentang 0,1V menandakan campuran kurus (terlalu banyak oksigen), sedangkan 0,9V menandakan kaya. Jika sensor rusak dan terkunci di 0,1V, sistem closed-loop ECU menganggap pembakaran sangat kurus sehingga ECU memerintahkan injektor membuka sangat lama (+25% fuel trim), membanjiri ruang bakar dengan bensin berlebih.',
    incorrectReasoning: {
      B: 'ECU bertindak normal sesuai algoritma pemrograman pabrikan merespons input sinyal sensor yang salah.',
      C: 'Batu kerikil di knalpot menahan gas buang, tidak mengunci tegangan O2 sensor ke 0,1V.',
      D: 'Jika busi mati bersamaan mesin tidak akan bisa hidup berjalan sama sekali.'
    }
  },
  {
    id: 'tkr-pow-07',
    topic: 'Sistem Pemindah Tenaga',
    difficulty: 3,
    question: 'Tanda kerusakan pada bantalan pembebas kopling (clutch release bearing) pada mobil manual adalah...',
    options: {
      A: 'Terdengar bunyi mendesing atau berisik dari rumah kopling saat pedal kopling diinjak, dan bunyi menghilang saat pedal dilepas',
      B: 'Setir bergetar saat kecepatan 100 km/jam',
      C: 'Rem tangan tidak mengunci',
      D: 'Lampu sein berkedip cepat'
    },
    correctAnswer: 'A',
    explanation: 'Release bearing hanya berputar dan menerima beban tekan ketika pedal kopling diinjak menekan pegas diafragma matahari. Bila bantalannya kering gemuk atau pelornya cacat, bunyi mendesing/kasar akan langsung muncul saat pedal kopling ditekan.',
    incorrectReasoning: {
      B: 'Setir bergetar adalah masalah balancing roda depan.',
      C: 'Rem tangan adalah sistem pengunci kabel tromol belakang.',
      D: 'Lampu sein adalah sistem kelistrikan flasher sinyal.'
    }
  },
  {
    id: 'tkr-k3-07',
    topic: 'K3 Bengkel Otomotif',
    difficulty: 1,
    question: 'Arti dari simbol rambu keselamatan kerja bergambar tanda seru di dalam segitiga berwarna kuning di area bengkel otomotif adalah...',
    options: {
      A: 'Peringatan bahaya atau waspada potensi bahaya (Caution / Warning)',
      B: 'Larangan merokok',
      C: 'Area parkir gratis',
      D: 'Petunjuk jalur evakuasi darurat'
    },
    correctAnswer: 'A',
    explanation: 'Segitiga kuning dengan batas hitam dan simbol tanda seru secara universal merupakan standar keselamatan ISO untuk tanda peringatan (Warning/Caution) adanya potensi bahaya.',
    incorrectReasoning: {
      B: 'Larangan menggunakan lingkaran merah dengan garis silang diagonal.',
      C: 'Area parkir menggunakan rambu persegi berwarna biru dengan huruf P.',
      D: 'Jalur evakuasi menggunakan kotak hijau dengan gambar orang berlari.'
    }
  },
  {
    id: 'tkr-mnt-07',
    topic: 'Perawatan Berkala Kendaraan',
    difficulty: 3,
    question: 'Pemeriksaan kelenturan (kekencangan) tali kipas / fan belt manual dilakukan dengan cara menekan tali di antara dua puli dengan beban jari sekitar 10 kg (98 N). Standar lendutan (defleksi) yang baik adalah...',
    options: {
      A: '7 - 10 mm',
      B: '25 - 35 mm',
      C: '0 mm (tidak boleh ada lenturan sama sekali)',
      D: '50 mm'
    },
    correctAnswer: 'A',
    explanation: 'Defleksi tali kipas baru umumnya berkisar 5-7 mm, dan tali bekas berkisar 7-10 mm. Jika terlalu kendor (>15 mm) tali akan slip dan berdecit; jika terlalu kencang (<5 mm) akan merusak bantalan water pump dan alternator.',
    incorrectReasoning: {
      B: '25 - 35 mm terlampau kendor dan tali kipas akan mudah melompat keluar puli.',
      C: '0 mm tanpa lendutan akan memberikan beban radial raksasa yang menghancurkan bearing pompa air dalam waktu singkat.',
      D: '50 mm sangat kendor dan water pump tidak akan berputar sama sekali.'
    }
  },
  {
    id: 'tkr-tst-07',
    topic: 'Penggunaan Alat Ukur & Diagnostik',
    difficulty: 2,
    question: 'Alat ukur yang digunakan untuk menyetel saat pengapian (ignition timing) distributor konvensional dengan memancarkan kilatan cahaya stroboskopik ke puli poros engkol adalah...',
    options: {
      A: 'Timing Light',
      B: 'Multimeter Digital',
      C: 'Radiator Pressure Tester',
      D: 'Sound Level Meter'
    },
    correctAnswer: 'A',
    explanation: 'Timing light mengambil sinyal induksi pulsa tegangan tinggi dari kabel busi nomor 1 untuk menyalakan lampu kilat stroboskopik, membekukan tampilan visual tanda timing pada puli poros engkol terhadap skala derajat pada penutup rantai timing.',
    incorrectReasoning: {
      B: 'Multimeter digital mengukur voltase, hambatan, dan arus listrik statis/dinamis.',
      C: 'Radiator tester untuk kebocoran air pendingin.',
      D: 'Sound level meter mengukur kebisingan desibel suara knalpot.'
    }
  }
];
