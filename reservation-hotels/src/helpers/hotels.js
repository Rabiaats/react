const citiesHotels =  [
    {
      city: "Adana",
      hotels: [
        { 
            name: "Adana HcitytonSA", 
            address: "Seyhan Mah. 1. Cadde No: 1", 
            phone: "+90 322 456 78 90"
        },
        { 
            name: "Divan Adana", 
            address: "Ziyapasa Bulvari No: 74", 
            phone: "+90 322 456 78 91" 
        },
        { 
            name: "Park Bosphorus Hotel Adana", 
            address: "Sumer Mah. 5. Cadde No: 5", 
            phone: "+90 322 456 78 92" 
        }
      ]
    },
    {
      city: "Adıyaman",
      hotels: [
        { 
            name: "Adıyaman Hcityton Garden Inn", 
            address: "Gölbaşı Yolu 5. Km", 
            phone: "+90 416 123 45 67" 
        },
        { 
            name: "Hotel Cevher", 
            address: "Belediye Caddesi No: 11", 
            phone: "+90 416 123 45 68" 
        },
        { 
            name: "Grand Hotel Adıyaman", 
            address: "Şehitler Caddesi No: 23", 
            phone: "+90 416 123 45 69" 
        }
      ]
    },
    {
      city: "Afyonkarahisar",
      hotels: [
        { 
            name: "Afyon Anemon Hotel", 
            address: "Dumlupinar Mah. Ataturk Bulvari", 
            phone: "+90 272 123 45 67" 
        },
        { 
            name: "NG Afyon", 
            address: "Sandıklı Yolu 7. Km", 
            phone: "+90 272 123 45 68" 
        },
        { 
            name: "Afyon Midas Hotel", 
            address: "Cumhuriyet Mah. Atatürk Bulvari", 
            phone: "+90 272 123 45 69" 
        }
      ]
    },
    {
      city: "Ağrı",
      hotels: [
        { 
            name: "Ağrı İkizler Hotel", 
            address: "Cengiz Topel Caddesi No: 2", 
            phone: "+90 472 123 45 67" 
        },
        { 
            name: "Grand Hotel Ağrı", 
            address: "Şehitler Mah. 1. Cadde", 
            phone: "+90 472 123 45 68" 
        },
        { 
            name: "Ağrı Palace Hotel", 
            address: "Hüseyin Gazi Mah. No: 10", 
            phone: "+90 472 123 45 69" 
        }
      ]
    },
    {
      city: "Aksaray",
      hotels: [
        { 
            name: "Aksaray Grand Hotel", 
            address: "Atatürk Bulvarı No: 10", 
            phone: "+90 382 123 45 67" 
        },
        { 
            name: "Aksaray İmparator Hotel", 
            address: "Cumhuriyet Mah. 2. Cadde", 
            phone: "+90 382 123 45 68" 
        },
        { 
            name: "Aksaray Şehir Hotel", 
            address: "Yeni Mah. 3. Sokak", 
            phone: "+90 382 123 45 69" 
        }
      ]
    },
    {
      city: "Amasya",
      hotels: [
        { 
            name: "Amasya Merkez Hotel", 
            address: "Gazi Caddesi No: 5", 
            phone: "+90 358 123 45 67" 
        },
        { 
            name: "Amasya Park Hotel", 
            address: "Yeşcityırmak Caddesi No: 20", 
            phone: "+90 358 123 45 68" 
        },
        { 
            name: "Amasya Yıldız Hotel", 
            address: "İncesu Mah. 1. Cadde", 
            phone: "+90 358 123 45 69" 
        }
      ]
    },
    {
      city: "Ankara",
      hotels: [
        { 
            name: "JW Marriott Hotel Ankara", 
            address: "Kocatepe Mah. Sakarya Caddesi No: 35", 
            phone: "+90 312 123 45 67" 
        },
        { 
            name: "Sheraton Ankara Hotel & Convention Center", 
            address: "Nenehatun Caddesi No: 89", 
            phone: "+90 312 123 45 68" 
        },
        { 
            name: "Mövenpick Hotel Ankara", 
            address: "Sakarya Caddesi No: 17", 
            phone: "+90 312 123 45 69" 
        }
      ]
    },
    {
      city: "Antalya",
      hotels: [
        { 
            name: "Akra Hotel", 
            address: "Lara Yolu No: 24", 
            phone: "+90 242 123 45 67" 
        },
        { 
            name: "Mardan Palace", 
            address: "Kundu Mah. Postane Caddesi No: 1", 
            phone: "+90 242 123 45 68" 
        },
        { 
            name: "Regnum Carya Golf & Resort Hotel", 
            address: "Belek Mah. Carya Golf Club", 
            phone: "+90 242 123 45 69" 
        }
      ]
    },
    {
      city: "Ardahan",
      hotels: [
        { 
            name: "Ardahan Park Hotel", 
            address: "Atatürk Caddesi No: 5", 
            phone: "+90 478 123 45 67" 
        },
        { 
            name: "Grand Ardahan Hotel", 
            address: "Çamlıçatak Mah. No: 20", 
            phone: "+90 478 123 45 68" 
        },
        { 
            name: "Ardahan Hotel", 
            address: "Şehir Merkezi No: 15", 
            phone: "+90 478 123 45 69" 
        }
      ]
    },
    {
      city: "Artvin",
      hotels: [
        { 
            name: "Artvin Park Hotel", 
            address: "Merkez Mah. No: 10", 
            phone: "+90 466 123 45 67" 
        },
        { 
            name: "Grand Artvin Hotel", 
            address: "Gürcistan Caddesi No: 22", 
            phone: "+90 466 123 45 68" 
        },
        { 
            name: "Artvin Mountain Hotel", 
            address: "Köy Yolu No: 30", 
            phone: "+90 466 123 45 69" 
        }
      ]
    },
    {
      city: "Aydın",
      hotels: [
        { 
            name: "Adaland Aquapark Hotel", 
            address: "Kuşadası Yolu No: 12", 
            phone: "+90 256 123 45 67" 
        },
        { 
            name: "Kuşadası Pine Bay Holiday Resort", 
            address: "Kuşadası Mah. No: 8", 
            phone: "+90 256 123 45 68" 
        },
        { 
            name: "Aydın Grand Hotel", 
            address: "Aydın Merkez No: 15", 
            phone: "+90 256 123 45 69" 
        }
      ]
    },
    {
      city: "Balıkesir",
      hotels: [
        { 
            name: "Kaya Regency Hotel", 
            address: "Edremit Yolu No: 4", 
            phone: "+90 266 123 45 67" 
        },
        { 
            name: "Balıkesir Grand Hotel", 
            address: "Şehir Merkezi No: 5", 
            phone: "+90 266 123 45 68" 
        },
        { 
            name: "Ayvalık Cinar Hotel", 
            address: "Ayvalık Merkez No: 7", 
            phone: "+90 266 123 45 69" 
        }
      ]
    },
    {
      city: "Bcityecik",
      hotels: [
        { 
            name: "Bcityecik Grand Hotel", 
            address: "Şehir Merkezi No: 3", 
            phone: "+90 228 123 45 67" 
        },
        { 
            name: "Bcityecik Park Hotel", 
            address: "Sakarya Caddesi No: 10", 
            phone: "+90 228 123 45 68" 
        },
        { 
            name: "Bcityecik Hcityl Hotel", 
            address: "Köy Yolu No: 20", 
            phone: "+90 228 123 45 69" 
        }
      ]
    },
    {
      city: "Bingöl",
      hotels: [
        { 
            name: "Bingöl Grand Hotel", 
            address: "Atatürk Caddesi No: 1", 
            phone: "+90 426 123 45 67" 
        },
        { 
            name: "Bingöl Park Hotel", 
            address: "Şehir Merkezi No: 5", 
            phone: "+90 426 123 45 68" 
        },
        { 
            name: "Bingöl Hotel", 
            address: "Yeni Mah. 2. Sokak", 
            phone: "+90 426 123 45 69" 
        }
      ]
    },
    {
      city: "Bitlis",
      hotels: [
        { 
            name: "Bitlis Park Hotel", 
            address: "Merkez Mah. No: 4", 
            phone: "+90 434 123 45 67" 
        },
        { 
            name: "Bitlis Grand Hotel", 
            address: "Süleyman Mah. No: 6", 
            phone: "+90 434 123 45 68" 
        },
        { 
            name: "Bitlis Hotel", 
            address: "Kurtuluş Caddesi No: 12", 
            phone: "+90 434 123 45 69" 
        }
      ]
    },
    {
      city: "Bolu",
      hotels: [
        { 
            name: "Bolu Koru Hotel", 
            address: "Bolu Yolu No: 8", 
            phone: "+90 374 123 45 67" 
        },
        { 
            name: "Bolu Grand Hotel", 
            address: "Şehir Merkezi No: 7", 
            phone: "+90 374 123 45 68" 
        },
        { 
            name: "Bolu Park Hotel", 
            address: "Gölbaşı Mah. 3. Cadde", 
            phone: "+90 374 123 45 69" 
        }
      ]
    },
    {
      city: "Burdur",
      hotels: [
        { 
            name: "Burdur Grand Hotel", 
            address: "Şehir Merkezi No: 2", 
            phone: "+90 248 123 45 67" 
        },
        { 
            name: "Burdur Park Hotel", 
            address: "Atatürk Caddesi No: 8", 
            phone: "+90 248 123 45 68" 
        },
        { 
            name: "Burdur Hotel", 
            address: "Yeni Mah. 4. Sokak", 
            phone: "+90 248 123 45 69" 
        }
      ]
    },
    {
      city: "Bursa",
      hotels: [
        { 
            name: "Hcityton Bursa Convention Center & Spa", 
            address: "Cekirge Caddesi No: 81", 
            phone: "+90 224 123 45 67" 
        },
        { 
            name: "Kervansaray Bursa City Hotel", 
            address: "Kültürpark Caddesi No: 10", 
            phone: "+90 224 123 45 68" 
        },
        { 
            name: "Marriott Hotel Bursa", 
            address: "Mimar Sinan Mah. No: 15", 
            phone: "+90 224 123 45 69" 
        }
      ]
    },
    {
      city: "Çanakkale",
      hotels: [
        { 
            name: "Kolin Hotel", 
            address: "Güzelyalı Mah. No: 1", 
            phone: "+90 286 123 45 67" 
        },
        { 
            name: "Grand Eceabat Hotel", 
            address: "Eceabat Merkez No: 3", 
            phone: "+90 286 123 45 68" 
        },
        { 
            name: "Çanakkale Hotel", 
            address: "Çanakkale Merkez No: 8", 
            phone: "+90 286 123 45 69" 
        }
      ]
    },
    {
      city: "Çankırı",
      hotels: [
        { 
            name: "Çankırı Grand Hotel", 
            address: "İskcityip Yolu No: 10", 
            phone: "+90 376 123 45 67" 
        },
        { 
            name: "Çankırı Park Hotel", 
            address: "Atatürk Caddesi No: 15", 
            phone: "+90 376 123 45 68" 
        },
        { 
            name: "Çankırı Hotel", 
            address: "Yeni Mah. 2. Sokak", 
            phone: "+90 376 123 45 69" 
        }
      ]
    },
    {
      city: "Çorum",
      hotels: [
        { 
            name: "Grand Hotel Çorum", 
            address: "Atatürk Caddesi No: 7", 
            phone: "+90 364 123 45 67" 
        },
        { 
            name: "Park Hotel Çorum", 
            address: "Şehir Merkezi No: 5", 
            phone: "+90 364 123 45 68" 
        },
        { 
            name: "Çorum Hotel", 
            address: "Yeni Mah. 3. Cadde", 
            phone: "+90 364 123 45 69" 
        }
      ]
    },
    {
      city: "Denizli",
      hotels: [
        { 
            name: "Pamukkale Hotel", 
            address: "Karahayıt Mah. No: 10", 
            phone: "+90 258 123 45 67" 
        },
        { 
            name: "Richmond Pamukkale Thermal", 
            address: "Pamukkale Mah. No: 15", 
            phone: "+90 258 123 45 68" 
        },
        { 
            name: "Çardak Hotel", 
            address: "Çardak Mah. 1. Sokak", 
            phone: "+90 258 123 45 69" 
        }
      ]
    },
    {
      city: "Diyarbakır",
      hotels: [
        { 
            name: "Hcityton Garden Inn Diyarbakır", 
            address: "Gazi Caddesi No: 10", 
            phone: "+90 412 123 45 67" 
        },
        { 
            name: "Ramada Plaza Diyarbakır", 
            address: "Şehitlik Caddesi No: 20", 
            phone: "+90 412 123 45 68" 
        },
        { 
            name: "Diyarbakır Grand Hotel", 
            address: "Bağlar Mah. 2. Cadde", 
            phone: "+90 412 123 45 69" 
        }
      ]
    },
    {
      city: "Düzce",
      hotels: [
        { 
            name: "Düzce Park Hotel", 
            address: "Merkez Mah. No: 5", 
            phone: "+90 380 123 45 67" 
        },
        { 
            name: "Düzce Grand Hotel", 
            address: "Atatürk Bulvarı No: 10", 
            phone: "+90 380 123 45 68" 
        },
        { 
            name: "Düzce Hotel", 
            address: "Yeni Mah. 3. Sokak", 
            phone: "+90 380 123 45 69" 
        }
      ]
    },
    {
      city: "Edirne",
      hotels: [
        { 
            name: "Edirne Palace Hotel", 
            address: "İstanbul Caddesi No: 12", 
            phone: "+90 284 123 45 67" 
        },
        { 
            name: "Edirne Grand Hotel", 
            address: "Şehir Merkezi No: 5", 
            phone: "+90 284 123 45 68" 
        },
        { 
            name: "Edirne Park Hotel", 
            address: "Kırkpınar Mah. 1. Cadde", 
            phone: "+90 284 123 45 69" 
        }
      ]
    },
    {
      city: "Elazığ",
      hotels: [
        { 
            name: "Hcityton Garden Inn Elazığ", 
            address: "Mustafa Kemal Atatürk Caddesi No: 5", 
            phone: "+90 424 123 45 67" 
        },
        { 
            name: "Ramada Plaza Elazığ", 
            address: "Yunus Emre Mah. 2. Cadde", 
            phone: "+90 424 123 45 68" 
        },
        { 
            name: "Elazığ Grand Hotel", 
            address: "Gazi Caddesi No: 10", 
            phone: "+90 424 123 45 69" 
        }
      ]
    },
    {
      city: "Erzincan",
      hotels: [
        { 
            name: "Erzincan Anemon Hotel", 
            address: "Atatürk Caddesi No: 8", 
            phone: "+90 446 123 45 67" 
        },
        { 
            name: "Grand Erzincan Hotel", 
            address: "Şehir Merkezi No: 15", 
            phone: "+90 446 123 45 68" 
        },
        { 
            name: "Erzincan Hotel", 
            address: "Cumhuriyet Mah. 3. Cadde", 
            phone: "+90 446 123 45 69" 
        }
      ]
    },
    {
      city: "Erzurum",
      hotels: [
        { 
            name: "Polat Erzurum Resort Hotel", 
            address: "Palandöken Dağı Yolu", 
            phone: "+90 442 123 45 67" 
        },
        { 
            name: "Kolej Hotel Erzurum", 
            address: "Sümer Mah. No: 12", 
            phone: "+90 442 123 45 68" 
        },
        { 
            name: "Erzurum Grand Hotel", 
            address: "Şehir Merkezi No: 7", 
            phone: "+90 442 123 45 69" 
        }
      ]
    },
    {
      city: "Eskişehir",
      hotels: [
        { 
            name: "Hcityton Garden Inn Eskişehir", 
            address: "Anadolu Caddesi No: 22", 
            phone: "+90 222 123 45 67" 
        },
        { 
            name: "Eskişehir Park Hotel", 
            address: "Kültür Mah. No: 15", 
            phone: "+90 222 123 45 68" 
        },
        { 
            name: "Eskişehir Grand Hotel", 
            address: "Cumhuriyet Mah. 3. Cadde", 
            phone: "+90 222 123 45 69" 
        }
      ]
    },
    {
      city: "Gaziantep",
      hotels: [
        { 
            name: "Hcityton Gaziantep", 
            address: "Ali İhsan Göğüş Caddesi No: 8", 
            phone: "+90 342 123 45 67" 
        },
        { 
            name: "Elit Class Hotel", 
            address: "Şehitkamcity Mah. No: 12", 
            phone: "+90 342 123 45 68" 
        },
        { 
            name: "Gaziantep Grand Hotel", 
            address: "Şehir Merkezi No: 15", 
            phone: "+90 342 123 45 69" 
        }
      ]
    },
    {
      city: "Giresun",
      hotels: [
        { 
            name: "Giresun Park Hotel", 
            address: "Merkez Mah. No: 8", 
            phone: "+90 454 123 45 67" 
        },
        { 
            name: "Grand Giresun Hotel", 
            address: "Atatürk Caddesi No: 10", 
            phone: "+90 454 123 45 68" 
        },
        { 
            name: "Giresun Hotel", 
            address: "Yeniyol Mah. 2. Cadde", 
            phone: "+90 454 123 45 69" 
        }
      ]
    },
    {
      city: "Gümüşhane",
      hotels: [
        { 
            name: "Gümüşhane Grand Hotel", 
            address: "Şehir Merkezi No: 3", 
            phone: "+90 456 123 45 67" 
        },
        { 
            name: "Gümüşhane Park Hotel", 
            address: "Kurtuluş Mah. No: 5", 
            phone: "+90 456 123 45 68" 
        },
        { 
            name: "Gümüşhane Hotel", 
            address: "Cumhuriyet Mah. 1. Sokak", 
            phone: "+90 456 123 45 69" 
        }
      ]
    },
    {
      city: "Hakkari",
      hotels: [
        { 
            name: "Hakkari Park Hotel", 
            address: "Atatürk Caddesi No: 4", 
            phone: "+90 438 123 45 67" 
        },
        { 
            name: "Hakkari Grand Hotel", 
            address: "Merkez Mah. No: 10", 
            phone: "+90 438 123 45 68" 
        },
        { 
            name: "Hakkari Hotel", 
            address: "Yeni Mah. 2. Sokak", 
            phone: "+90 438 123 45 69" 
        }
      ]
    },
    {
      city: "Hatay",
      hotels: [
        { 
            name: "Hcityton Antakya", 
            address: "Cevdet Sunay Caddesi No: 1", 
            phone: "+90 326 123 45 67" 
        },
        { 
            name: "Antakya Palace Hotel", 
            address: "Şehir Merkezi No: 12", 
            phone: "+90 326 123 45 68" 
        },
        { 
            name: "Hatay Grand Hotel", 
            address: "Kurtuluş Mah. 3. Cadde", 
            phone: "+90 326 123 45 69" 
        }
      ]
    },
    {
      city: "Iğdır",
      hotels: [
        { 
            name: "Iğdır Hotel", 
            address: "Gazi Caddesi No: 8", 
            phone: "+90 476 123 45 67" 
        },
        { 
            name: "Iğdır Park Hotel", 
            address: "Şehir Merkezi No: 10", 
            phone: "+90 476 123 45 68" 
        },
        { 
            name: "Grand Iğdır Hotel", 
            address: "Cumhuriyet Mah. 2. Sokak", 
            phone: "+90 476 123 45 69" 
        }
      ]
    },
    {
      city: "Isparta",
      hotels: [
        { 
            name: "Isparta Anemon Hotel", 
            address: "Süleyman Demirel Bulvarı No: 15", 
            phone: "+90 246 123 45 67" 
        },
        { 
            name: "Isparta Grand Hotel", 
            address: "Şehir Merkezi No: 8", 
            phone: "+90 246 123 45 68" 
        },
        { 
            name: "Isparta Park Hotel", 
            address: "Yeni Mah. 3. Cadde", 
            phone: "+90 246 123 45 69" 
        }
      ]
    },
    {
      city: "İstanbul",
      hotels: [
        { 
            name: "Four Seasons Hotel Istanbul at Sultanahmet", 
            address: "Sultanahmet Mah. 8-10", 
            phone: "+90 212 123 45 67" 
        },
        { 
            name: "The Ritz-Carlton Istanbul", 
            address: "Konaklar Mah. No: 47", 
            phone: "+90 212 123 45 68" 
        },
        { 
            name: "Swissotel The Bosphorus Istanbul", 
            address: "Vişnezade Mah. No: 10", 
            phone: "+90 212 123 45 69" 
        }
      ]
    },
    {
      city: "İzmir",
      hotels: [
        { 
            name: "Swissotel Grand Efes Izmir", 
            address: "Cumhuriyet Bulvarı No: 130", 
            phone: "+90 232 123 45 67" 
        },
        { 
            name: "Hcityton Izmir", 
            address: "Gazi Bulvarı No: 130", 
            phone: "+90 232 123 45 68" 
        },
        { 
            name: "Mövenpick Hotel Izmir", 
            address: "Inönü Caddesi No: 5", 
            phone: "+90 232 123 45 69" 
        }
      ]
    },
    {
      city: "Kahramanmaraş",
      hotels: [
        { 
            name: "Grand Kahramanmaraş Hotel", 
            address: "Sakarya Mah. No: 3", 
            phone: "+90 344 123 45 67" 
        },
        { 
            name: "Kahramanmaraş Park Hotel", 
            address: "Atatürk Bulvarı No: 12", 
            phone: "+90 344 123 45 68" 
        },
        { 
            name: "Kahramanmaraş Hotel", 
            address: "Yeniyol Mah. 2. Sokak", 
            phone: "+90 344 123 45 69" 
        }
      ]
    },
    {
      city: "Karabük",
      hotels: [
        { 
            name: "Karabük Grand Hotel", 
            address: "Atatürk Caddesi No: 7", 
            phone: "+90 370 123 45 67" 
        },
        { 
            name: "Karabük Park Hotel", 
            address: "Şehir Merkezi No: 10", 
            phone: "+90 370 123 45 68" 
        },
        { 
            name: "Karabük Hotel", 
            address: "Yeni Mah. 3. Cadde", 
            phone: "+90 370 123 45 69" 
        }
      ]
    },
    {
      city: "Karaman",
      hotels: [
        { 
            name: "Karaman Grand Hotel", 
            address: "Cumhuriyet Caddesi No: 5", 
            phone: "+90 338 123 45 67" 
        },
        { 
            name: "Karaman Park Hotel", 
            address: "Şehir Merkezi No: 8", 
            phone: "+90 338 123 45 68" 
        },
        { 
            name: "Karaman Hotel", 
            address: "Yeni Mah. 2. Sokak", 
            phone: "+90 338 123 45 69" 
        }
      ]
    },
    {
      city: "Kars",
      hotels: [
        { 
            name: "Kars Grand Hotel", 
            address: "İstasyon Caddesi No: 12", 
            phone: "+90 474 123 45 67" 
        },
        { 
            name: "Kars Park Hotel", 
            address: "Şehir Merkezi No: 15", 
            phone: "+90 474 123 45 68" 
        },
        { 
            name: "Kars Hotel", 
            address: "Kurtuluş Mah. 1. Sokak", 
            phone: "+90 474 123 45 69" 
        }
      ]
    },
    {
      city: "Kastamonu",
      hotels: [
        { 
            name: "Kastamonu Park Hotel", 
            address: "Merkez Mah. No: 7", 
            phone: "+90 366 123 45 67" 
        },
        { 
            name: "Kastamonu Grand Hotel", 
            address: "Şehir Merkezi No: 8", 
            phone: "+90 366 123 45 68" 
        },
        { 
            name: "Kastamonu Hotel", 
            address: "Yeni Mah. 3. Cadde", 
            phone: "+90 366 123 45 69" 
        }
      ]
    },
    {
      city: "Manisa",
      hotels: [
        { 
            name: "Manisa Park Hotel", 
            address: "Merkez Mah. No: 7", 
            phone: "+90 366 123 46 67" 
        },
        { 
            name: "Manisa Grand Hotel", 
            address: "Şehir Merkezi No: 8", 
            phone: "+90 366 123 45 48" 
        },
        { 
            name: "Manisa Hotel", 
            address: "Yeni Mah. 3. Cadde", 
            phone: "+90 366 126 45 69" 
        }
      ]
    },
    {
      city: "Ordu",
      hotels: [
        { 
            name: "Ordu Park Hotel", 
            address: "Merkez Mah. No: 10", 
            phone: "+90 452 123 45 67" 
        },
        { 
            name: "Ordu Grand Hotel", 
            address: "Şehir Merkezi No: 12", 
            phone: "+90 452 123 45 68" 
        },
        { 
            name: "Ordu Hotel", 
            address: "Yeni Mah. 2. Cadde", 
            phone: "+90 452 123 45 69" 
        }
      ]
    },
    {
      city: "Rize",
      hotels: [
        { 
            name: "Rize Park Hotel", 
            address: "Şehir Merkezi No: 2", 
            phone: "+90 464 123 45 67" 
        },
        { 
            name: "Rize Grand Hotel", 
            address: "Kültür Mah. No: 5", 
            phone: "+90 464 123 45 68" 
        },
        { 
            name: "Rize Hotel", 
            address: "Yeni Mah. 1. Cadde", 
            phone: "+90 464 123 45 69" 
        }
      ]
    },
    {
      city: "Samsun",
      hotels: [
        { 
            name: "Samsun Grand Hotel", 
            address: "Samsun Caddesi No: 12", 
            phone: "+90 362 123 45 67" 
        },
        { 
            name: "Samsun Park Hotel", 
            address: "Şehir Merkezi No: 15", 
            phone: "+90 362 123 45 68" 
        },
        { 
            name: "Samsun Hotel", 
            address: "Yenidoğan Mah. 3. Sokak", 
            phone: "+90 362 123 45 69" 
        }
      ]
    },
    {
      city: "Siirt",
      hotels: [
        { 
            name: "Siirt Park Hotel", 
            address: "Şehir Merkezi No: 5", 
            phone: "+90 484 123 45 67" 
        },
        { 
            name: "Siirt Grand Hotel", 
            address: "Gazi Caddesi No: 7", 
            phone: "+90 484 123 45 68" 
        },
        { 
            name: "Siirt Hotel", 
            address: "Yeniyol Mah. 2. Cadde", 
            phone: "+90 484 123 45 69" 
        }
      ]
    },
    {
      city: "Sinop",
      hotels: [
        { 
            name: "Sinop Grand Hotel", 
            address: "Merkez Mah. No: 6", 
            phone: "+90 368 123 45 67" 
        },
        { 
            name: "Sinop Park Hotel", 
            address: "Şehir Merkezi No: 9", 
            phone: "+90 368 123 45 68" 
        },
        { 
            name: "Sinop Hotel", 
            address: "Yeni Mah. 4. Sokak", 
            phone: "+90 368 123 45 69" 
        }
      ]
    },
    {
      city: "Sivas",
      hotels: [
        { 
            name: "Sivas Grand Hotel", 
            address: "Cumhuriyet Caddesi No: 7", 
            phone: "+90 346 123 45 67" 
        },
        { 
            name: "Sivas Park Hotel", 
            address: "Şehir Merkezi No: 10", 
            phone: "+90 346 123 45 68" 
        },
        { 
            name: "Sivas Hotel", 
            address: "Yeni Mah. 2. Cadde", 
            phone: "+90 346 123 45 69" 
        }
      ]
    },
    {
      city: "Şanlıurfa",
      hotels: [
        { 
            name: "Şanlıurfa Grand Hotel", 
            address: "Atatürk Bulvarı No: 4", 
            phone: "+90 414 123 45 67" 
        },
        { 
            name: "Şanlıurfa Park Hotel", 
            address: "Merkez Mah. No: 8", 
            phone: "+90 414 123 45 68" 
        },
        { 
            name: "Şanlıurfa Hotel", 
            address: "Yeniyol Mah. 3. Cadde", 
            phone: "+90 414 123 45 69" 
        }
      ]
    },
    {
      city: "Tekirdağ",
      hotels: [
        { 
            name: "Tekirdağ Grand Hotel", 
            address: "Şehir Merkezi No: 6", 
            phone: "+90 282 123 45 67" 
        },
        { 
            name: "Tekirdağ Park Hotel", 
            address: "Atatürk Caddesi No: 9", 
            phone: "+90 282 123 45 68" 
        },
        { 
            name: "Tekirdağ Hotel", 
            address: "Yeni Mah. 1. Sokak", 
            phone: "+90 282 123 45 69" 
        }
      ]
    },
    {
      city: "Tokat",
      hotels: [
        { 
            name: "Tokat Grand Hotel", 
            address: "Cumhuriyet Meydanı No: 2", 
            phone: "+90 356 123 45 67" 
        },
        { 
            name: "Tokat Park Hotel", 
            address: "Atatürk Caddesi No: 5", 
            phone: "+90 356 123 45 68" 
        },
        { 
            name: "Tokat Hotel", 
            address: "Yeni Mah. 4. Cadde", 
            phone: "+90 356 123 45 69" 
        }
      ]
    },
    {
      city: "Trabzon",
      hotels: [
        { 
            name: "Radisson Blu Hotel Trabzon", 
            address: "Yomra Mah. No: 1", 
            phone: "+90 462 123 45 67" 
        },
        { 
            name: "Zorlu Grand Hotel", 
            address: "Uzunsokak Mah. No: 2", 
            phone: "+90 462 123 45 68" 
        },
        { 
            name: "Trabzon Park Hotel", 
            address: "Kalkınma Mah. No: 10", 
            phone: "+90 462 123 45 69" 
        }
      ]
    },
    {
      city: "Tunceli",
      hotels: [
        { 
            name: "Tunceli Park Hotel", 
            address: "Atatürk Caddesi No: 5", 
            phone: "+90 428 123 45 67" 
        },
        { 
            name: "Tunceli Grand Hotel", 
            address: "Merkez Mah. No: 8", 
            phone: "+90 428 123 45 68" 
        },
        { 
            name: "Tunceli Hotel", 
            address: "Yeniyol Mah. 1. Cadde", 
            phone: "+90 428 123 45 69" 
        }
      ]
    },
    {
      city: "Uşak",
      hotels: [
        { 
            name: "Uşak Park Hotel", 
            address: "Şehir Merkezi No: 3", 
            phone: "+90 276 123 45 67" 
        },
        { 
            name: "Uşak Grand Hotel", 
            address: "Cumhuriyet Caddesi No: 8", 
            phone: "+90 276 123 45 68" 
        },
        { 
            name: "Uşak Hotel", 
            address: "Yeni Mah. 2. Cadde", 
            phone: "+90 276 123 45 69" 
        }
      ]
    },
    {
      city: "Yozgat",
      hotels: [
        { 
            name: "Yozgat Grand Hotel", 
            address: "Cumhuriyet Mah. No: 5", 
            phone: "+90 354 123 45 67" 
        },
        { 
            name: "Yozgat Park Hotel", 
            address: "Şehir Merkezi No: 7", 
            phone: "+90 354 123 45 68" 
        },
        { 
            name: "Yozgat Hotel", 
            address: "Yeni Mah. 3. Cadde", 
            phone: "+90 354 123 45 69" 
        }
      ]
    },
    {
      city: "Zonguldak",
      hotels: [
        {
            name: "Zonguldak Grand Hotel",
            address: "Cumhuriyet Mah. No: 5",
            phone: "+90 372 123 45 67"
        },
        {
            name: "Zonguldak Park Hotel",
            address: "Şehir Merkezi No: 7",
            phone: "+90 372 123 45 68"
        },
        {
            name: "Zonguldak Hotel",
            address: "Yeni Mah. 3. Cadde",
            phone: "+90 372 123 45 69"
        }
      ]
    }
  ]

  export default citiesHotels;