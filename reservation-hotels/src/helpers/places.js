const places = [
    {
        id: 1,
        name: "Arnavutköy",
        city: "İstanbul",
        type: "Tarihi Yer",
        description: "Kuruçeşme ve Bebek arasında Boğaz hattının en tatlı yerleşimlerinden biri olan Arnavutköy son 5 senedir İstanbul sosyal hayatın en gözde yeri oldu. Arnavutköy’ün olayı boğaz manzarası ve kentsel dönüşüm canavarının diş geçiremediği tarihi dokundan geliyor. Bir zamanlar buranın sakinleri olan Rum ve Yahudi cemaati giderken arkalarında muhteşem Art-Nouveau işlemelli ahşap konaklar, semtin silüetini süsleyen kilise ve sinagoglar bırakmış.",
        location: {
          src:"https://www.google.com/maps/d/embed?mid=1Xyx4PzJqoOQkMxNnBgm96tV_At9f4Fca&hl=tr;&ehbc=2E312F", 
          width:'100%',
          height:'450'
          },
        img: "./img/arnavutköy.jpg",
    },
    {
        id: 2,
        name: "Atatürk Arboretumu",
        city: "İstanbul",
        type: "Botanik Park",
        description: "Beton bir çöle dönen İstanbul’da Atatürk Arboretumu bir vaha. Hatta Belgrad’daki piknikçilerden kaçanlara bile çare.Belgrad Ormanı ile yan yana olmasına rağmen mangal dumanı ve futbol oynayanlara maruz kalma stresi yaşamadan gidebileceğiniz bir yer. O kadar fotojenik, o kadar romantik ki düğün fotogafçısı, dizi seti, eksik olmuyor.Bu park aslında bir müze de olduğu için koruma amaçlı çeşitli sınırlandırmalar ve uygulamalar var. Dolayısı ile bir örtü serip kitap okumak, ya da bisiklete binmek gibi bir niyetle gitmeyin, izin verilmiyor. Burayı 1 saatlik hoş bir yürüyüş gibi düşümekte fayda var.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.070652405382!2d28.982802576587208!3d41.17662617132756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab4ccc1879c9f%3A0x398fc905f39432d0!2sAtat%C3%BCrk%20Arboretumu!5e0!3m2!1str!2str!4v1718860659593!5m2!1str!2str", 
          width:"100%", 
          height:"450"
        },
        img: "./img/atatürkarboretumu.JPG"
    },
    {
        id: 3,
        name: "Çamlıca Tepesi",
        city: "İstanbul",
        type: "Seyir Tepesi",
        description: "İsmini Büyük Çamlıca tepesinden alan koruluk, Osmanlı döneminde edebiyata ve şarkılara konu olmuş gözde gezinti yerlerinden. Küçük Çamlıca Korusu’na göre daha küçük ve daha dar bir alanda bulunuyor. Burası da tıpkı Küçük Çamlıca Korusu gibi Lütfü Kırdar tarafından 1940’da kamulaştırılmış. İstanbul’u panoramik olarak seyredebileceğiniz Çamlıca Tepesi de burada. Alanda bir şeyler yiyip içebileceğiniz bir restoran da var.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8283.220403084852!2d29.06042475425469!3d41.03021594761624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9a54a01fc33%3A0xcf23399c76e05ec7!2zw4dhbWzEsWNhIFRlcGVzaQ!5e0!3m2!1str!2str!4v1718861231636!5m2!1str!2str", 
          width:"100%", 
          height:"450"
        },
        img: "./img/çamlıca.jpg"
    },
    {
        id: 4,
        name: "Dolmabahçe Sarayı",
        city: "İstanbul",
        type: "Müze",
        description: "Dolmabahçe Sarayı, İstanbul, Beşiktaş'ta, Kabataş'tan Beşiktaş'a uzanan Dolmabahçe Caddesi'yle İstanbul Boğazı arasında, 250.000 m²'lik bir alan üzerinde bulunan Osmanlı sarayı. Marmara Denizi'nden Boğaziçi'ne deniz yoluyla girişte sol kıyıda, Üsküdar ve Kuzguncuk'un karşısında yer alır. Sultan Abdülmecid tarafından inşa ettirilen sarayın yapımı 1843 yılında başlayıp 1856 yılında bitirilmiştir. Günümüzde müze olarak kullanılmaktadır.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7710559479087!2d28.975297712144677!3d41.008383971230955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7761a3b7de3%3A0xdcd33e38cf3b830b!2zRG9sbWFiYWjDp2UgU2FyYXnEsQ!5e0!3m2!1str!2str!4v1718861998617!5m2!1str!2str", 
          width:"100%",
          height:"450"
        },
        img: "./img/dolmabahçe.jpg"
    },
    {
        id: 5,
        name: "Galata Kulesi",
        city: "İstanbul",
        type: "Tarihi Yer",
        description: "İstanbullular için Galata Kulesi gökteki kutup yıldızı gibi birşey: Her vapura bindiğimizde gözlerimizin aradığı, Tünel ve Karaköy taraflarındayken pusula görevi gören, İstanbul’un çöplüğe dönen silüetinde yüzyıllardır kendini ezdirmeden varolmasını, şahsi hayat mücadelemize benzettiğimiz İstanbul’un daim bekçisidir Galata Kulesi. Yerli yabancı turistlerin İstanbul’da gezilecek yerler listesinde en üst sıralarda yer alırken, biz İstanbullular hep ona karışık çerez tabağında talep görmeyen sarı leblebi muamelesi yaptık, ayıp ettik. Halbuki ne enteresandır Galata Kulesi. Anka kuşu gibi yanıp, yıkılıp tekrar tekrar dirilmesi, hakkındaki efsaneler, çılgın mucit Hezarfen Ahmet Çelebi’nin İstanbul üzerinde uçması… Şam fıstıklarının şovu çaldığı yeter, sahneyi Galata Kulesi’ne bırakıyoruz.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8283.220403084852!2d29.06042475425469!3d41.03021594761624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sGalata%20Kulesi!5e0!3m2!1str!2str!4v1718861439849!5m2!1str!2str", 
          width:"100%", 
          height:"450"
        },
        img: "./img/galata.jpg"
    },
    {
        id: 6,
        name: "Kariye Camii",
        city: "İstanbul",
        type: "Camii",
        description: "Edirnekapı semtinde, hâlen ayakta duran Theodosius Surları'na yaklaşık yüz metre uzaklıkta bulunan yapı, Doğu Roma İmparatorluğu döneminde büyük bir yapı topluluğu olan Khoara Manastırı'nın merkezini oluşturmaktaydı. İstanbul'un Fethi'nden sonra elli sekiz yıl daha kilise olarak işlevini sürdürdü. Mozaikleri ile ünlü kilise, 1511'de cami olarak kullanılmaya başladı. 1945'te ulusal anıt ilan edilen yapı, Bakanlar Kurulu kararı ile 1948 yılında Müzeler İdaresi’ne bağlı bir müze hâline getirildi. Türkiye'nin en çok ziyaret edilen müzelerinden birisi olan[2][3] Kariye, 2019 yılında Danıştay'ın iptal kararı sonucu Cumhurbaşkanı tarafından Diyanet İşleri Başkanlığı'na devredilmiş olup, 6 Mayıs 2024 tarihinde ibadete açılmıştır..",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8283.220403084852!2d29.06042475425469!3d41.03021594761624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba10452ec3d9%3A0x7049b74f9ff4d60c!2sKariye%20Camii!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str", 
          width:"100%", 
          height:"450"
        },
        img: "./img/kariye.jpg"
    },
    {
        id: 7,
        name: "Kız Kulesi",
        city: "İstanbul",
        type: "Tarihi Yer",
        description: "Kız Kulesi, İstanbul Boğazı'nın Marmara Denizi'ne yakın kısmında, Salacak açıklarında yer alan küçük adacık üzerinde inşa edilmiş yapıdır. Üsküdar'ın sembolü hâline gelen kule, Üsküdar’da Bizans devrinden kalan tek eserdir. MÖ 24 yıllarına kadar uzanan bir geçmişe sahiptir.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8283.220403084852!2d29.06042475425469!3d41.03021594761624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab82bea99445f%3A0x6ed7f4baceb4476c!2sK%C4%B1z%20Kulesi!5e0!3m2!1str!2str!4v1718861648221!5m2!1str!2str", 
          width:"100%", 
          height:"450"
        },
        img: "./img/kızkulesi.jpg"
    },
    {
        id: 8,
        name: "Büyük Mecidiye Camii",
        city: "İstanbul",
        type: "Camii",
        description: "Sarıyer’den başlayıp kesintisiz bir şekilde Karaköy’e kadar uzanan Avrupa Yakası sahil şeridinin herhangi bir noktasından başlarsanız başlayın Boğaz’ın masmavi suları eşliğinde keyifli bir yürüyüş sizi bekliyor. Yine de bizce yürüyüş için en ideal aralık, aşırı turistik olan Ortaköy’ü geçtikten sonra Yeniköy’e devam eden yaklaşık 12 kilometrelik kısım. Ortaköy Cami’nden başlayacağınız rotayı; Arnavutköy Akıntı Burnu’nda 3 kilometreye, Rumeli’de 6 kilometreye, Sakıp Sabancı Müzesi’nde 8 kilometreye Yeniköy sahilinde 11 kilometreye tamamlayabilirsiniz. Bu hattın en güzel avantajı da mola verebileceğiniz birçok seçeneğinizin olması. Rotayı yürümek yaklaşık 2.5 saat sürüyor ama dilediğiniz kısmını yürüdükten sonra geri kalan yolu bisikletle de tamamlayabilirsiniz.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6017.370110411628!2d29.023303097637363!3d41.05401593537656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7cb58883451%3A0x41cdb323256c259c!2zT3J0YWvDtnksIDM0MzQ3IEJlxZ9pa3RhxZ8vxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1718861029835!5m2!1str!2str",
          width:"100%", 
          height:"450"
        },
        img: "./img/ortaköy.JPG"
    },
    {
        id: 9,
        name: "Yerebatan Sarnıcı",
        city: "İstanbul",
        type: "Tarihi Yer",
        description: "Bizans döneminde şehrin su ihtiyacını gidermek için inşa edilen Yerebatan Sarnıcı hiç şühpesiz İstanbul’un en özel tarihi mekanlardan. Yerebatan Sarnıcı’na uğramayan bir Sultanahmet gezisi düşünülemez bile. Bir Aya Sofya ya da Topkapı Sarayı kadar tarihe yön vermiş bir mekan olduğunu söylenemez ama bu 1500 yıllık yapının o kadar mistik ve etkileyici bir ambiyansı var ki kesinlikle atlamamak gerekir. Biliyoruz, Sultanahmet gezileri oldukça yorucu olabiliyor, sakın pes edip Yerebatan Sarnıcı’nı pas geçmeyin. Söz veriyoruz ki “İyi ki ısrar etmişsiniz” diyeceksiniz. Zaten diğerlerinden farklı olarak, hızlıca gezilebilen bir yer.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7710559479087!2d28.975297712144677!3d41.008383971230955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bde0c66ac9%3A0x60c02fe1ee6d8471!2zWWVyZWJhdGFuIFNhcm7EsWPEsQ!5e0!3m2!1str!2str!4v1718861949199!5m2!1str!2str", 
          width:"100%", height:"450"},
        img: "./img/yerebatan.jpg"
    },
    {
        id: 10,
        name: "Yıldız Parkı",
        city: "İstanbul",
        type: "Koru",
        description: "Beşiktaş – Ortaköy arasında yer alan Yıldız Parkı veya Yıldız Korusu, 1600’lerden beri şehrin en önemli yeşil alanlarından biri. 17. yüzyılda Kazancıoğlu adlı bir ailenin özel mülkü olan koru, IV. Murat tarafından satın alınarak kızı Kaya Sultan’a hediye ediliyor. Lale Devri’nde Çırağan Sarayı’nın arka bahçesi olan koru, 1877’den itibaren Yıldız Sarayı’nın dış koruluğu haline gelen koru, 1940’tan sonra Yıldız Parkı olarak halka açılıyor. Şu anda İstanbul Belediyesi’ne bağlı olan parkta spor veya piknik yapabiliyor, dilerseniz içindeki köşklerde bir şeyler yiyip içebiliyorsunuz. Park spor anlamında sınırlarını zorlamak isteyenler için bire bir. Sınırları zorlamak diyoruz çünkü oldukça yokuşlu bir park. Çevresini tam tur dönmek 3 kilometre kadar yürümeniz veya koşmanız gerekiyor. Peyzaj düzenlemesi, güzel kasırları, boğaz manzarası ve kocaman ağaçları bile bir harika. Hafta içi daha boş oluyor. Şelalenin olduğu turistik alan dışındaki yerler çok daha tenha oluyor. Burada birçok ahşap piknik masası var. Arazi büyük olduğu için illa ki kendinize uygun bir yer bulabiliyorsunuz. Parkın içinde çay kahve içebileceğiniz, kahvaltı edebileceğiniz, yemek yiyebileceğiniz yerler de var. Bunlar restoran olarak işletilen Malta Köşkü ve Çadır Köşkü.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.907902335177!2d29.012688176581744!3d41.049143071344815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7ba74cafa3d%3A0x8d3f0c3423ee17e6!2zWcSxbGTEsXogUGFya8Sx!5e0!3m2!1str!2str!4v1718861074312!5m2!1str!2str", width:"100%", height:"450"},
        img: "./img/yıldızparkı.jpg"
    },
    {
        id: 11,
        name: "Ayasofya Camii",
        city: "İstanbul",
        type: "Camii",
        description: "Ayasofya için “dünyanın 8. harikası” diyor. Ayasofya’nın uluslararası önemini ve döneminin ne kadar ötesinde bir yapı olduğunu düşünürsek bu hiç de abartılı bir söylem değil. Gerçekten Ayasofya, sanatsal ve mimari anlamında dünyanın en değerli eserlerinden biri. Buna bir de dini önemi eklenince ortaya dünyanın en değerli kültürel varlıklarından biri çıkıyor. Haliyle tüm dünyada en çok ziyaret edilen turistik yerler arasında.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8283.220403084852!2d29.06042475425469!3d41.03021594761624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236e6f6f37444fae!2sAyasofya-i%20Kebir%20Cami-i%20%C5%9Eerifi!5e0!3m2!1str!2str!4v1718861781658!5m2!1str!2str", width:"100%", height:"450"},
        img: "./img/ayasofya.jpg"
    },
    {
        id: 12,
        name: "Japon Bahçesi",
        city: "İstanbul",
        type: "Botanik Park",
        description: "Baltalimanı Japon Bahçesi, 2003’te “Türkiye’de Japon Yılı” vesilesiyle 1970’lerden beri kardeş şehir anlaşması bulunan İstanbul ile Shimonoseki belediyeleri işbirliği ile kurulmuş küçük bir Japon Bahçesi. Bu parkı spor veya yürüyüş amaçlı olarak düşünmeyin daha çok geçerken uğramalık ve Japon kültürünü tanımalık. En önemli özelliği de bahçede ilkbaharda pembe pembe açan meşhur Japon ağacı sakuralardan olması.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.070652405382!2d28.982802576587208!3d41.17662617132756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca0ed05f2dd7%3A0xd0f87dbb1157d37b!2zxLBCQiBKYXBvbiBCYWjDp2VzaSBQYXJrxLE!5e0!3m2!1str!2str!4v1718860837579!5m2!1str!2str", width:"100%", height:"450"},
        img: "./img/baltalimani-japon-bahcesi.jpg"
    },
    {
        id: 13,
        name: "Emirgan Korusu",
        city: "İstanbul",
        type: "Koru",
        description: "Her sene Mart-Nisan aylarında Lale Festivali’nin gerçekleştiği Emirgan Korusu, İstanbul Boğazı’nı tepeden gören konumu ile harika bir yürüyüş parkuru ve piknik noktası. İçinde küçük bir gölet, çocuklar için oyun alanı, Sarı Köşk, Pembe Köşk ve Beyaz Köşk olmak gezip görebileceğiniz üç turistik nokta var.",
        location: {
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6012.344684087735!2d29.04811604764693!3d41.10892703534629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca7152beb381%3A0x163da0c8ff4d15bb!2sEmirgan%20Korusu!5e0!3m2!1str!2str!4v1718860893870!5m2!1str!2str", width:"100%", height:"450"},
        img: "./img/emirgan-parki-sariyer.jpg"
    },
    {
      id: 14,
      name: "İzmir Saat Kulesi",
      city: "İzmir",
      type: "Tarihi Yer",
      description: "İzmir'in Konak Meydanı'nda yer alan İzmir Saat Kulesi, 1901 yılında Osmanlı Padişahı II. Abdülhamid'in tahta çıkışının 25. yılı şerefine inşa edilmiştir. Kule, mimar Raymond Charles Péré tarafından tasarlanmış olup, Osmanlı İmparatorluğu'nun son dönem mimarisinin güzel örneklerinden biridir. 25 metre yüksekliğindeki kule, dört katlı olup, her bir katında farklı mimari detaylar barındırmaktadır. İzmir'in sembollerinden biri haline gelmiş olan Saat Kulesi, şehirdeki önemli turistik yerlerden biridir.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4838284235583!2d27.138371915139075!3d38.41924927964305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9621bbd8c0b57%3A0x6c0d1f2a934b7bb3!2sİzmir%20Saat%20Kulesi!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', 
        width:'100%', 
        height:'450'
      },
      img: "./img/izmir_saat_kulesi.jpg"
  },
  {
      id: 15,
      name: "Kadifekale",
      city: "İzmir",
      type: "Kale",
      description: "Kadifekale, İzmir'de deniz seviyesinden 186 metre yükseklikte bir tepe üzerinde yer alır ve M.Ö. 4. yüzyılda Büyük İskender tarafından yaptırılmıştır. Kale, İzmir Körfezi ve şehir manzarasına hâkim bir noktada bulunur. Kadifekale, hem tarihi hem de doğal güzellikleri ile yerli ve yabancı turistlerin ilgisini çeken önemli bir yerdir.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.372792463633!2d27.151148115139115!3d38.0983297944024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b962172e2161e9%3A0x51b26c53983327c2!2sKadifekale!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},
      img: "./img/kadifekale.jpg"
  },
  {     
      id: 16,
      name: "Kemeraltı Çarşısı",
      city: "İzmir",
      type: "Çarşı",
      description: "İzmir'in tarihi çarşısı olan Kemeraltı, Osmanlı döneminden kalma birçok han, hamam, cami ve dükkânları barındıran geniş bir alışveriş alanıdır. Kemeraltı, İzmir'in tarihi merkezinde yer almakta olup, geleneksel Türk el sanatlarından modern hediyelik eşyaya kadar çeşitli ürünlerin satıldığı bir çarşıdır. İzmir'in en canlı noktalarından biri olarak hem alışveriş hem de kültürel zenginlikler sunar.",
      location: {
        src:'https://www.google.com/maps/embed?b=!1m18!m12!1m3!1d3323.4773529576215!2d27.136031315139085!3d38.41992397964379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9622180ae040b%3A0xf1c2a97b8cbe0d70!2sKemeraltı%20Çarşısı!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},
      img: "./img/kemeralti.png"
  },  
  {      
      id: 17,
      name: "İzmir Atatürk Müzesi",
      city: "İzmir",
      type: "Müze",
      description: "İzmir Atatürk Müzesi, Mustafa Kemal Atatürk'ün İzmir'i ziyaretlerinde konakladığı ve 1927'de halkın bağışları ile satın alınarak Atatürk'e hediye edilen tarihi bir binada yer alır. Müze, Atatürk'ün özel eşyaları, fotoğrafları ve döneme ait diğer belgeler ile İzmir'in Kurtuluş Savaşı'ndaki rolüne dair çeşitli eserleri barındırır.",
      location: {src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4990583700424!2d27.13899491513911!3d38.224035794365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9625ef8eeb4a7%3A0x84f44d8d91de6b68!2sİzmir%20Atatürk%20Müzesi!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},
      img: "./img/ataturk_muze.jpg"
  },
  {     
      id: 18,
      name: "Agora Antik Kenti",
      city: "İzmir",
      type: "Antik Kent",
      description: "İzmir'in merkezinde yer alan Agora Antik Kenti, Roma dönemine ait kalıntılar barındıran önemli bir arkeolojik alandır. İzmir'in antik dönemdeki adı Smyrna olan bu şehirde yer alan Agora, ticaret, adalet ve siyaset faaliyetlerinin merkezi olarak kullanılmıştır. Agora, İzmir'in antik tarihi hakkında bilgi edinmek isteyenler için önemli bir duraktır.",
      location: {src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.461220889936!2d27.150374715139057!3d38.1898327943846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b96261baf0baf9%3A0x2e85fcb6e1a97b4f!2sAgora%20Antik%20Kenti!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},
      img: "./img/agora.jpeg"
  },
  {     
      id: 19,
      name: "Alsancak Kordon",
      city: "İzmir",
      type: "Kordon",
      description: "Alsancak Kordon, İzmir'in en popüler ve hareketli bölgelerinden biridir. İzmir Körfezi boyunca uzanan Kordonboyu, yürüyüş yolları, bisiklet yolları, yeşil alanlar ve kafe-restoranlarla dolu bir yerdir. Özellikle gün batımında Kordon'da yürüyüş yapmak, hem İzmir halkının hem de ziyaretçilerin keyif aldığı bir aktivitedir.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.561798338086!2d27.141334515139032!3d38.264380794318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b96257c4103671%3A0x44121a6a81f7c3b5!2sAlsancak%20Kordon!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str',
         width:'100%', height:'450'},
      img: "./img/alsancak_kordon.jpg"
  },
  {     
      id: 20,
      name: "Efes Antik Kenti",
      city: "İzmir",
      type: "Antik Kent",
      description: "İzmir'in Selçuk ilçesinde yer alan Efes Antik Kenti, dünyanın en iyi korunmuş antik şehirlerinden biridir. Efes, Antik Yunan ve Roma dönemlerinde önemli bir ticaret ve kültür merkezi olarak bilinir. Artemis Tapınağı, Celsus Kütüphanesi ve Büyük Tiyatro gibi yapılar, Efes'in en çok ziyaret edilen yerlerindendir.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.716467066187!2d27.34127761521939!3d37.381375792956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b959b6e5100b97%3A0xf0ec820cd23b09b5!2sEfes%20Antik%20Kenti!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},
      img: "./img/efes.jpg"
  },
  {     
      id: 21,
      name: "Şirince Köyü",
      city: "İzmir",
      type: "Tarihi Yer",
      description: "İzmir'in Selçuk ilçesine bağlı Şirince Köyü, tarihi evleri ve doğal güzellikleri ile ünlü bir turistik yerdir. Eski bir Rum köyü olan Şirince, dar sokakları, şarap evleri ve yerel ürünleri ile ziyaretçilerine otantik bir deneyim sunar. Şirince, özellikle butik otelleri ve huzurlu atmosferi ile popüler bir tatil destinasyonudur.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.215787194617!2d27.423935815218393!3d37.441474792832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9599b44e8e4d1%3A0x18303ff0a24b76e4!2sŞirince%20Köyü!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450' },
      img: "./img/sirince.jpg"
  },
  {     
      id: 22,
      name: "İzmir Doğal Yaşam Parkı",
      city: "İzmir",
      type: "Milli Park",
      description: "İzmir Doğal Yaşam Parkı, Çiğli ilçesinde yer alan ve geniş bir alanda çeşitli hayvan türlerini doğal yaşam alanlarına uygun şekilde barındıran bir parktır. Park, hem çocuklar hem de yetişkinler için eğitici ve eğlenceli bir ziyaret noktasıdır. Doğal yaşamı ve hayvanları sevenler için İzmir'de kaçırılmaması gereken bir yerdir.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.8031642824597!2d26.936973815138758!3d38.947200793674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b8b5dfc50245f7%3A0x2f75b72f81cbf1d8!2sİzmir%20Doğal%20Yaşam%20Parkı!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%' ,height:'450'},
        img: "./img/dogal_yasam_parki.jpg"
  },
  {     
      id: 23,
      name: "Bergama Antik Kenti",
      city: "İzmir",
      type: "Antik Kent",
      description: "İzmir'in Bergama ilçesinde yer alan Bergama Antik Kenti, eski Yunan ve Roma medeniyetlerinin izlerini taşıyan önemli bir arkeolojik alandır. Bergama, özellikle Pergamon Krallığı'nın başkenti olarak bilinir ve Akropol, Asklepion ve Kızıl Avlu gibi tarihi yapıları ile ünlüdür. Bergama, UNESCO Dünya Mirası Listesi'nde yer almakta ve tarih meraklıları için cazip bir destinasyondur.",
      location: {
        src:'https://www.google.com/maps/embed?b=!1m18!m12!1m3!1d3320.846186232839!2d27.177096915139605!3d39.12375837953138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b88b5c1939e017%3A0x1914ff8a67b9334d!2sBergama%20Antik%20Kenti!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},
      img: "./img/bergama.jpg"
  },
  {
    id: 24,
    name: "Spil Dağı Milli Parkı",
    city: "Manisa",
    type: "Milli Park",
    description: "Spil Dağı Milli Parkı, Manisa'da yer alan doğa severler için ideal bir yerdir. Dağ yürüyüşleri, kamp alanları ve eşsiz manzaralar sunan park, aynı zamanda nadir bitki türlerine ve yaban hayatına ev sahipliği yapar.",
    location: {
      src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.850915943799!2d27.401876615466286!3d38.56598347962326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b98b17fbfb9fc1%3A0x3dd0075374b53d2b!2sSpil%20Dağı%20Milli%20Parkı!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str',
      width:'100%', 
      height:'450'
    },
    img: "./img/spil_dagi.jpg"
}
,
{
    id: 25,
    name: "Manisa Kalesi",
    city: "Manisa",
    type: "Kale",
    description: "Manisa Kalesi, Spil Dağı'nın eteklerinde yer alan ve şehrin tarihine tanıklık eden önemli bir yapıdır. Bizans dönemine ait olan kale, muhteşem manzaralar sunan bir ziyaret noktasıdır.",
    location: {
      src:'https://www.google.com/maps/embed?b=!1m18!m12!1m3!1d3142.668163339352!2d27.424988115466576!3d38.57118697962225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b98b2e97f6da77%3A0x56a8d10b3a769cdd!2sManisa%20Kalesi!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},   img: "./img/manisa_kalesi.jpg"
},
{
    id: 26,
    name: "Sardes Antik Kenti",
    city: "Manisa",
    type: "Antik Kent",
    description: "Sardes Antik Kenti, Lidya Krallığı'nın başkenti olarak bilinen tarihi bir alandır. Tiyatrosu, gymnasionu ve Artemis Tapınağı ile ünlü bu antik kent, tarih severler için önemli bir destinasyondur.",
    location: {
      src:'https://www.google.com/maps/embed?b=!1m18!m12!1m3!1d3144.3178369439647!2d28.046472315464844!3d38.48871627963783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9725b0b11fd37%3A0xf6e1a5a621b11c89!2sSardes%20Antik%20Kenti!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},
    img: "./img/sardes.jpg"
},
{
    id: 27,
    name: "Aigai Antik Kenti",
    city: "Manisa",
    type: "Antik Kent",
    description: "Aigai Antik Kenti, Yunt Dağı üzerinde yer alan ve eski Yunan dönemine ait bir antik yerleşimdir. Kalıntıları arasında tiyatro, agora ve tapınaklar bulunur.",
    location: {
      src:'https://www.google.com/maps/embed?b=!1m18!m12!1m3!1d3164.6243066564517!2d27.946923715446145!3d38.925775679548116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b93e87c13aaf1b%3A0x18b5a7a33f9d2b2b!2sAigai%20Antik%20Kenti!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},
    img: "./img/aigai.jpg"
},
{
  id: 28,
    name: "Niobe Taşı",
    city: "Manisa",
    type: "Doğal Güzellik",
    description: "Niobe Taşı, Manisa'da yer alan ve mitolojik bir hikayeye dayanan doğal bir anıttır. Taş, Tanrıça Niobe'nin çocuklarının öldürülmesi sonucu gözyaşları ile taşa dönüştüğüne inanılır.",
    location: {
      src:'https://www.google.com/maps/embed?b=!1m18!m12!1m3!1d3142.8637312289085!2d27.407176315466298!3d38.565619679623354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b98b26edb633e3%3A0x31c3ed477660c98d!2sNiobe%20Taşı!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},
    img: "./img/niobe.JPG"
},
{
  id: 29,
    name: "Kula Peri Bacaları",
    city: "Manisa",
    type: "Doğal Güzellik",
    description: "Kula Peri Bacaları, Manisa'nın Kula ilçesinde yer alan doğal oluşumlar olup, Kapadokya'daki peri bacalarına benzer özellikler taşır. Bu doğal güzellik, volkanik patlamalar sonucu oluşmuş ilginç kaya formasyonları ile ünlüdür.",
    location: {
      src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.5796354109364!2d28.607827915455138!3d38.55287927962869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b973a2b7eb32c7%3A0x4e787d9ffbff4735!2sKula%20Peri%20Bacaları!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', 
      width:'100%', 
      height:'450'
    },
    img: "./img/kula_peri_bacalari.jpg"
},
{
  id: 30,
  name: "Kula Evleri",
  city: "Manisa",
  type: "Tarihi Yer",
  description: "Kula Evleri, Osmanlı mimarisinin en güzel örneklerinden birini sergileyen, tarihi ve kültürel açıdan önemli yapılardır. Kula ilçesinde yer alan bu evler, ahşap işçiliği ve özgün mimarisi ile dikkat çeker.",
  location: {
    src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.7485943918667!2d28.641675415454925!3d38.54856167962934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97350bbae3645%3A0xe746f6cb4ed7a255!2sKula%20Evleri!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'},
  img: "./img/kula_evleri.jpg"
},
{
  id: 31,
  name: "Süleyman Şah Türbesi",
  city: "Manisa",
  type: "Tarihi Yer",
  description: "Süleyman Şah Türbesi, Osmanlı İmparatorluğu'nun kurucusu Osman Gazi'nin dedesi olan Süleyman Şah'a adanmış bir türbedir. Türbe, manevi önemi nedeniyle sıkça ziyaret edilir.",
  location: {
    src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.4212174952826!2d28.52193991545541!3d38.56035707962799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b974528b9fb2a1%3A0xd92409d7ab2643a!2sSüleyman%20Şah%20Türbesi!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450'}, img: "./img/suleyman_sah_turbesi.jpg"
},
{
  id: 32,
  name: "Manisa Müzesi",
  city: "Manisa",
  type: "Müze",
  description: "Manisa Müzesi, Manisa'nın tarihi ve kültürel zenginliklerini sergileyen bir müzedir. Müze, arkeolojik eserler, etnografik koleksiyonlar ve Osmanlı dönemine ait objeler ile doludur.",
  location: {
    src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.7354576452556!2d27.425076315466513!3d38.568296479623064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b98b2f81f8b64f%3A0x5ba6c09c3f0d4d14!2sManisa%20Müzesi!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450' },
  img: "./img/manisa_muzesi.png"
},
{
  id: 33,
  name: "Muradiye Camii",
  city: "Manisa",
  type: "Camii",
  description: "Muradiye Camii, Osmanlı Sultanı II. Murad tarafından yaptırılmış olan, klasik Osmanlı mimarisini yansıtan önemli bir ibadet yeridir. Caminin içindeki çiniler ve işlemeler dikkat çekicidir.",
  location: {
    src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.7134603505394!2d27.42727421546663!3d38.56887407962293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b98b2eb2c50a33%3A0xb8e7e59e771e7b12!2sMuradiye%20Camii!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', width:'100%', height:'450' },  img: "./img/muradiye_camii.jpeg"
},
  {
      id: 34,
      name: "Ballıca Mağarası",
      city: "Tokat",
      type: "Mağara",
      description: "Ballıca Mağarası, Tokat'ın Pazar ilçesinde yer alan, doğanın harika bir eseri olarak bilinen ve Türkiye'nin en büyük mağaralarından biridir. Mağara, çeşitli sarkıt ve dikitleri ile ünlüdür.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.216451171628!2d36.32442431557648!3d40.44607317936344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0403e7f7f27a1%3A0x8a3bce88bba3082d!2sBallıca%20Mağarası!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str',
        width:'100%',
        height:'450'
      },
      img: "./img/ballica_magarasi.jpeg"
  },
  {
      id: 35,
      name: "Tokat Kalesi",
      city: "Tokat",
      type: "Kale",
      desciption: "Tokat Kalesi, Tokat'ın merkezinde yer alan ve şehrin en nemli simgeerinden biri olan tarihi bir kaledir. Kale, geçmişte savunma amacıyla kullanılmış olup, tarihi boyunca birçok farklı medeniyete ev sahipliği yapmıştır.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.3674749410153!2d36.55232921558189!3d40.31223807938427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d042f817dc84a1%3A0x4a9d3640b5e6a695!2sTokat%20Kalesi!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str',
        width:'100%',
        height:'450'
      },
      img: "./img/tokat_kalesi.jpg"
  },
  {
      id: 36,
      name: "Gök Medrese",
      city: "Tokat",
      type: "Tarihi Yer",
      description: "Gök Medrese, Tokat'ın merkezinde yer alan, Selçuklu dönemine ait önemli bir yapıdır. Medrese, çini süslemeleri ve mimarisi ile dikkat çekmektedir.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.297484393484!2d36.55312261558197!3d40.31344187938411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d042f8bd0f7a9d%3A0xab08b8f2b6a59a8e!2sGök%20Medrese!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', 
        width:'100%', 
        height:'450'
      },
      img: "./img/gok_medrese.jpg"
  },
  {
      id: 37,
      name: "Zile Kalesi",
      city: "Tokat",
      type: "Kale",
      description: "Zile Kalesi, Tokat'ın Zile ilçesinde yer alan tarihi bir kaledir. Kale, Roma döneminden kalma olup, savunma amacıyla inşa edilmiştir. Kale, stratejik konumu ile ünlüdür.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.2209493170956!2d36.075196315576494!3d40.44598887936345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d07b0b5f6f1fbd%3A0x818c41c8818262df!2sZile%20Kalesi!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', 
        width:'100%',
        height:'450'
      },
      img: "./img/zile_kalesi.jpg"
  },
  {
      id: 38,
      name: "Niksar Kalesi",
      city: "Tokat",
      type: "Kale",
      description: "Niksar Kalesi, Tokat'ın Niksar ilçesinde yer alan tarihi bir kaledir. Kale, Bizans dönemine ait olup, bölgenin en iyi korunmuş kalelerinden biridir.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.5435975014376!2d36.996892815584106!3d40.36415827937669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085b490d5cb4d%3A0x6ddf09e7d8ab8491!2sNiksar%20Kalesi!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str',
        width:'100%',
        height:'450'
      },
      img: "./img/niksar_kalesi.jpg"
  },
  {
      id: 39,
      name: "Yağıbasan Medresesi",
      city: "Tokat",
      type: "Tarihi Yer",
      description: "Yağıbasan Medresesi, Tokat'ın Niksar ilçesinde yer alan, Danişmendliler dönemine ait önemli bir yapıdır. Medrese, Anadolu'nun ilk medreselerinden biri olarak kabul edilir.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.547938960602!2d36.9964242155841!3d40.36407417937675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085b49f8aeb4f%3A0x7b0f5de7cb877f3f!2sYağıbasan%20Medresesi!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', 
        width:'100%', 
        height:'450'
      },
      img: "./img/yagıbasan_medresesi.jpg"
  },
  {
      id: 40,
      name: "Sulusaray Kaplıcaları",
      city: "Tokat",
      type: "Kaplıca",
      description: "Sulusaray Kaplıcaları, Tokat'ın Sulusaray ilçesinde yer alan, termal su kaynakları ile ünlü bir kaplıcadır. Kaplıcalar, sağlık turizmi açısından önemli bir yere sahiptir.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.326894205099!2d36.62524071558423!3d40.367799079376226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085b4aa57bb27%3A0xb7fdd3b0c6b7372c!2sSulusaray%20Kaplıcaları!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', 
        width:'100%', 
        height:'450'
      },
      img: "./img/sulusaray_kaplicasi.jpg"
  },
  {
      id: 41,
      name: "Sebastapolis Antik Kenti",
      city: "Tokat",
      type: "Antik Kent",
      description: "Sebastapolis Antik Kenti, Tokat'ın Sulusaray ilçesinde yer alan, Roma dönemine ait önemli bir antik kenttir. Kent, termal suların bulunduğu bölgedeki zengin tarih ve kültürün izlerini taşır.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.326894205099!2d36.62524071558423!3d40.367799079376226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085b4aa57bb27%3A0xb7fdd3b0c6b7372c!2sSulusaray%20Antik%20Kenti!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str', 
        width:'100%',
         height:'450'
        },
      img: "./img/sebastapolis_antik_kenti.jpg"
  },
  {
      id: 42,
      name: "Kaz Gölü",
      city: "Tokat",
      type: "Göl",
      description: "Kaz Gölü, Tokat'ın Reşadiye ilçesinde yer alan, doğal güzellikleri ile ünlü bir göldür. Göl, özellikle göçmen kuşların konaklama noktası olarak bilinir.",
      location: {
        src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.2209493170956!2d36.075196315576494!3d40.44598887936345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d07b0b5f6f1fbd%3A0x818c41c8818262df!2sKaz%20Gölü!5e0!3m2!1str!2str!4v1718861523308!5m2!1str!2str',
        width:'100%',
        height:'450'
      },
      img: "./img/kaz_golu.jpg"
  },
]

export default places;