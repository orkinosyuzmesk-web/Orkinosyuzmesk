// ORKINOS YÜZME SPOR KULÜBÜ - SİTE AYARLARI
// Sitedeki her yazıyı, rengi ve fotoğrafı buradan değiştirirsin.
// Sadece tırnak içindeki yazıları değiştir. Tırnakları ve virgülleri silme.
// Açık/kapalı ayarlar: '1' = açık, '' = kapalı.

window.ORKINOS = {
  s: {

    // ----- Genel -----
    site_name: "Orkinos Yüzme Spor Kulübü", // Kulüp / site adı
    seo: "4 yaş ve üzeri bireysel yüzme eğitimleri. Suyu sevdirme, sıfırdan yüzme öğrenme ve performans eğitimleri. Adana.", // Google açıklaması
    msg_title: "Orkinos Yüzme Spor Kulübü - Ön Kayıt", // WhatsApp mesaj başlığı

    // ----- Menü yazıları -----
    m1: "Ana sayfa", // Menü 1
    m2: "Hakkımızda", // Menü 2
    m3: "Eğitimler", // Menü 3
    m4: "Formu doldur / Kayıt ol", // Menü 4 (form butonu)

    // ----- Ana ekran -----
    h_title: "Suya ilk adımını Orkinos'la at.", // Büyük başlık
    h_text: "Orkinos Yüzme Spor Kulübü'nde 4 yaş ve üzeri herkes, bilimsel temelli bireysel eğitimlerle suyu sevmeyi, korkusunu yenmeyi ve yüzmeyi öğrenir.", // Alt yazı
    h_b1: "Kayıt formunu doldur", // 1. buton
    h_b2: "WhatsApp'tan yaz", // 2. buton (WhatsApp)

    // ----- Açılış animasyonu (deniz ve Orkinos balığı) -----
    i_on: "1", // Animasyon açık
    i_sec: "7", // Süre (5-10 saniye)
    i_text: "Suya ilk adımını Orkinos'la at", // Animasyondaki yazı
    i_skip: "1", // "Geç" butonu göster

    // ----- Kampanya -----
    c_on: "", // Kampanyayı ana sayfada göster
    c_title: "Yeni dönem kayıtları başladı", // Kampanya başlığı
    c_text: "İlk ders deneme dersi hediye.", // Kampanya açıklaması
    c_btn: "Hemen kayıt ol", // Kampanya butonu

    // ----- Hakkımızda -----
    a_title: "Hakkımızda", // Başlık
    a_text: "Orkinos Yüzme Spor Kulübü, 4 yaş ve üzeri herkese suyu sevdirmeyi, korkuyu yenmeyi ve özgüven kazanmayı hedefleyen bilimsel temelli bir yüzme kulübüdür.", // 1. paragraf
    a_text2: "Eğitimlerimiz her yaş grubuna uygun, bireysel ilgiyle planlanır. Sıfırdan yüzme öğrenmek isteyenler de performansını geliştirmek isteyenler de kendi seviyesinde ilerler.", // 2. paragraf
    a_loc: "Şehit Ahmet Mehmet Oruç Spor Lisesi kapalı yüzme havuzunda eğitim veriyoruz.", // Havuz / konum yazısı
    a_btn: "Haritada aç", // Harita butonu

    // ----- Eğitimler -----
    e_title: "Her seviyeye uygun eğitim", // Bölüm başlığı
    e_sub: "İlk kez suya girenden performans hedefleyen yüzücüye kadar, her yaş grubu için planlı program.", // Bölüm alt yazısı
    e1i: "💧", // 1. kart simgesi (emoji)
    e1t: "Suyu sevdirme", // 1. kart başlığı
    e1d: "Korkuyu yenme ve özgüven kazanma odaklı, çocuğun hızına göre ilerleyen dersler.", // 1. kart yazısı
    e2i: "🏊", // 2. kart simgesi
    e2t: "Sıfırdan yüzme", // 2. kart başlığı
    e2d: "Serbest, sırtüstü, kurbağalama ve kelebek stillerini adım adım öğrenin.", // 2. kart yazısı
    e3i: "⚡", // 3. kart simgesi
    e3t: "Performans", // 3. kart başlığı
    e3d: "Teknik, dayanıklılık ve hız gelişimi için bilimsel temelli antrenman.", // 3. kart yazısı
    e4i: "🎯", // 4. kart simgesi
    e4t: "Bireysel ilgi", // 4. kart başlığı
    e4d: "4 yaş ve üzeri her yaş grubuna uygun, kişiye özel eğitimler.", // 4. kart yazısı

    // ----- Kayıt formu -----
    f_title: "Ön kayıt formu", // Form başlığı
    f_sub: "Bilgileri doldur, \"WhatsApp ile gönder\" butonuna bas. Sana geri dönelim.", // Form alt yazısı
    f_btn: "WhatsApp ile gönder", // Gönder butonu

    // ----- İletişim ve alt bilgi -----
    wa: "905431013488", // WhatsApp numarası (905xxxxxxxxx)
    phone: "0543 101 34 88", // Görünen telefon
    ft_addr: "Şehit Ahmet Mehmet Oruç Spor Lisesi", // Adres yazısı
    map: "https://maps.apple/p/dLUztVBMZ4amgw", // Harita linki
    ins: "", // Instagram linki (boşsa görünmez)

    // ----- Renkler -----
    c_bg: "#04162e", // Arka plan
    c_card: "#0a2a52", // Kart / kutu rengi
    c_acc: "#27c4e6", // Ana vurgu (butonlar)
    c_acc2: "#0e7fb8", // İkinci vurgu
    c_red: "#e0243c", // Kırmızı vurgu (kampanya)
    c_txt: "#eaf9ff", // Yazı rengi
  },
  // Fotoğraflar: dosyayı img klasörüne yükle, burada adını yaz.
  img: {
    hero: 'img/havuz.jpg', // Ana ekran arka plan
    pool: 'img/havuz.jpg', // Hakkımızda fotoğrafı
    logo: 'img/logo.jpg',  // Logo
    camp: ''               // Kampanya fotoğrafı (örnek: 'img/kampanya.jpg')
  },
  // Galeri fotoğrafları (örnek: ['img/g1.jpg','img/g2.jpg'])
  gallery: []
};
