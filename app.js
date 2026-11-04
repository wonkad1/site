'use strict';

const UI = {
  tr: {
    hotelWelcomeKicker:'OTELİNİZDEN MANAVGAT\'A',hotelWelcomeText:'Konaklamanız boyunca güzel duraklar cebinizde.',hotelWelcomeTag:'OTEL MİSAFİRİNE ÖZEL',mobileHome:'Başlangıç',mobileExplore:'Keşfet',mobilePlan:'Rotalar',mobileShare:'Paylaş',
    noInstall:'Uygulama kurmadan açılır',flavourPhotoNote:'Temsili görsel',flavourKicker:'YAVAŞLA · TADINI ÇIKAR',flavourTitle:'Manavgat sadece görülecek değil, yaşanacak bir yer.',flavourText:'Nehir kıyısında mola ver, Side sokaklarında dolaş, yerel işletmeleri keşfet ve Akdeniz gününü acele etmeden yaşa. Menü, fiyat ve işletme bilgilerini ziyaret öncesinde kontrol et.',flavourButton:'Keşfe devam et ↗',offlinePill:'İlk açılıştan sonra temel içerikler çevrimdışı da saklanır.',qrAdminLink:'QR baskı sayfası',
    skip:'İçeriğe geç',navDiscover:'Keşfet',navPlan:'Planını yap',navTransport:'Ulaşım',navShare:'Paylaş',language:'Dil',
    heroEyebrow:'ANTALYA · TÜRKİYE',heroTitle:'Manavgat\'a<br><em>hoş geldiniz.</em>',heroLead:'Nehirlerin serinliğini, antik kentlerin hikâyesini ve Akdeniz\'in güzelliğini tek rehberde keşfedin.',exploreNow:'Manavgat\'ı keşfet',planVisit:'Ziyaretini planla',mobileGuide:'Telefonun için hazırlandı',fourLanguages:'4 dilde rehber',stampTop:'KEŞFET · HİSSET',heroBottom:'Bir QR kod. Koca bir keşif.',
    quick1Title:'Doğa',quick1Sub:'Nehirler ve kanyonlar',quick2Title:'Tarih',quick2Sub:'Antik kentler',quick3Title:'Akdeniz',quick3Sub:'Kıyılar ve gün batımı',quick4Title:'Kolay erişim',quick4Sub:'Harita ve pratik bilgiler',
    discoverKicker:'MANAVGAT\'I TANI',discoverTitle:'Keşfedilecek çok şey var.',discoverLead:'Sana en yakın deneyimi bul. Bir yer seç, detayları incele ve haritada yolunu aç.',curatedNote:'Yerel ve kurumsal kaynaklardan derlendi',searchPlaceholder:'Yer veya deneyim ara…',filterAll:'Tümü',filterNature:'Doğa',filterHistory:'Tarih',filterAdventure:'Macera',filterBeach:'Plaj',loading:'Keşif durakları yükleniyor…',emptyTitle:'Bu aramayla eşleşen yer yok.',emptyText:'Başka bir kelime veya kategori deneyin.',
    featured:'ÖNE ÇIKAN',categoryNature:'DOĞA',categoryHistory:'TARİH',categoryAdventure:'MACERA',categoryBeach:'PLAJ',viewDetails:'Detayları keşfet ↗',
    planKicker:'KÜÇÜK BİR PLAN, GÜZEL BİR GÜN',planTitle:'Zamanına göre keşfet.',planLead:'İlham veren kısa rotalar. Ulaşım ve ziyaret koşullarını yola çıkmadan kontrol etmeyi unutma.',plan1Time:'YARIM GÜN · RAHAT TEMPO',plan1Title:'Nehir ve şelale',plan1Text:'Manavgat Şelalesi ile başla, ardından nehir kıyısında sakin bir mola ver.',plan2Time:'YARIM / TAM GÜN · TARİH',plan2Title:'Side\'de zaman yolculuğu',plan2Text:'Antik tiyatroyu, sütunlu yolları ve deniz kıyısındaki tapınakları keşfet.',plan3Time:'TAM GÜN · DOĞA',plan3Title:'Toroslar\'a doğru',plan3Text:'Köprülü Kanyon ve çevresindeki dağ manzaraları için tam günlük gezi planla.',viewStops:'Durakları gör ↗',
    infoKicker:'YOLA ÇIKMADAN ÖNCE',infoTitle:'İşine yarayacak bilgiler.',infoLead:'Yolculuğunu planlarken resmî kaynakları kontrol et; saatler ve ulaşım düzenleri değişebilir.',municipalityLink:'Belediyenin ulaşım bilgileri ↗',airportTitle:'Havalimanından geliş',emergencyTitle:'Acil durum',call112:'112\'yi ara ↗',sunTitle:'Akdeniz güneşi',sunText:'Özellikle yaz aylarında su, şapka ve güneş koruması bulundur. Açık hava gezilerini sabah veya akşam saatlerine planla.',mapTitle:'Haritayla yolunu bul',mapText:'Her gezi kartında konumu haritada açabilir, yol tarifini telefonundan alabilirsin.',sourceSee:'Kaynağı gör ↗',
    qrKicker:'TEK TARAMA YETER',qrTitle:'Manavgat cebinde.',qrLead:'Bu rehberi otelinde, işletmende veya karşılama noktasında paylaşmak için web adresine özel bir QR kod oluştur.',qrBenefit1:'Telefonla hızlı erişim',qrBenefit2:'4 dilde içerik',qrBenefit3:'Harita bağlantıları',qrUrlLabel:'Yayındaki web sitesi adresi',generateQr:'QR oluştur',qrHint:'Önemli: QR kodu basmadan önce siteyi herkese açık bir alan adına yayınlamalısın. localhost adresi ziyaretçilerde açılmaz.',qrReady:'QR kodun hazır.',downloadQr:'PNG olarak indir ↓',qrLocalWarning:'Şu an yerel test adresindesin. Turistlerin kullanacağı QR için siteyi internette yayınladıktan sonra herkese açık alan adını gir.',qrGenerating:'QR kod hazırlanıyor…',qrInvalid:'Lütfen https:// ile başlayan geçerli bir internet adresi gir.',qrError:'QR kod oluşturulamadı. Sunucuda npm install komutunun tamamlandığından emin ol.',
    shareKicker:"MANAVGAT'I PAYLAŞ",shareTitle:'Güzel yerler paylaştıkça çoğalır.',shareLead:'Bu rehberi birlikte gezdiğin kişilerle paylaş. Dört dilde içerik, harita bağlantıları ve ziyaret notları cebinde olsun.',shareButton:'Rehberi paylaş ↗',copyLink:'Bağlantıyı kopyala',shareNote:'QR kodla açılan mobil gezi rehberi',copied:'Bağlantı kopyalandı.',shareError:'Paylaşım desteklenmiyor; bağlantıyı kopyalayabilirsin.',
    sourcesKicker:'GÜVENİLİR BİLGİ, İYİ GEZİ',sourcesTitle:'Bilginin kaynağını gör.',sourcesText:'Rehberdeki tarihî alan, gezi ve ulaşım bilgileri aşağıdaki kurumların yayımladığı içeriklerden derlenmiştir.',footerNote:'Manavgat\'ı keşfetmenin kolay yolu.',openMap:'Haritada aç ↗',officialInfo:'Kaynak bilgisi ↗',area:'Bölge',distance:'Uzaklık',hours:'Yayımlanan ziyaret saati',practicalTip:'Ziyaret notu',detailNotice:'Bilgiler değişebilir. Yola çıkmadan önce resmî kaynağı kontrol edin.',beachLocations:'Plaj konumları',
  },
  en: {
    hotelWelcomeKicker:'A WELCOME FROM YOUR HOTEL',hotelWelcomeText:'Keep the best of Manavgat close throughout your stay.',hotelWelcomeTag:'FOR HOTEL GUESTS',mobileHome:'Home',mobileExplore:'Explore',mobilePlan:'Routes',mobileShare:'Share',
    noInstall:'Opens without installing an app',flavourPhotoNote:'Illustrative image',flavourKicker:'SLOW DOWN · SAVOR THE DAY',flavourTitle:'Manavgat is not just a place to see — it is a place to experience.',flavourText:'Pause by the river, wander through Side, discover local businesses and enjoy the Mediterranean at your own pace. Check menus, prices and business details before visiting.',flavourButton:'Keep exploring ↗',offlinePill:'Core guide content is saved for offline use after the first visit.',qrAdminLink:'QR print page',
    skip:'Skip to content',navDiscover:'Explore',navPlan:'Plan your visit',navTransport:'Getting here',navShare:'Share',language:'Language',
    heroEyebrow:'ANTALYA · TÜRKİYE',heroTitle:'Welcome to<br><em>Manavgat.</em>',heroLead:'Discover cool rivers, stories of ancient cities and the beauty of the Mediterranean in one guide.',exploreNow:'Explore Manavgat',planVisit:'Plan your visit',mobileGuide:'Made for your phone',fourLanguages:'Guide in 4 languages',stampTop:'EXPLORE · FEEL',heroBottom:'One QR code. A world to discover.',
    quick1Title:'Nature',quick1Sub:'Rivers and canyons',quick2Title:'History',quick2Sub:'Ancient cities',quick3Title:'Mediterranean',quick3Sub:'Coast and sunsets',quick4Title:'Easy access',quick4Sub:'Maps and travel tips',
    discoverKicker:'GET TO KNOW MANAVGAT',discoverTitle:'There is so much to explore.',discoverLead:'Find an experience nearby. Choose a place, read the details and open directions on your map.',curatedNote:'Compiled from local and institutional sources',searchPlaceholder:'Search places or experiences…',filterAll:'All',filterNature:'Nature',filterHistory:'History',filterAdventure:'Adventure',filterBeach:'Beaches',loading:'Loading places to explore…',emptyTitle:'No places match your search.',emptyText:'Try another word or category.',
    featured:'FEATURED',categoryNature:'NATURE',categoryHistory:'HISTORY',categoryAdventure:'ADVENTURE',categoryBeach:'BEACHES',viewDetails:'Explore details ↗',
    planKicker:'A SIMPLE PLAN FOR A GREAT DAY',planTitle:'Explore at your own pace.',planLead:'A few itinerary ideas. Check transport and visitor conditions before setting off.',plan1Time:'HALF DAY · EASY PACE',plan1Title:'River and waterfall',plan1Text:'Start at Manavgat Waterfall, then take a relaxing break by the river.',plan2Time:'HALF / FULL DAY · HISTORY',plan2Title:'A journey through Side',plan2Text:'Explore the ancient theatre, colonnaded streets and temples by the sea.',plan3Time:'FULL DAY · NATURE',plan3Title:'Into the Taurus Mountains',plan3Text:'Plan a full-day trip for Köprülü Canyon and the surrounding mountain scenery.',viewStops:'View places ↗',
    infoKicker:'BEFORE YOU GO',infoTitle:'Useful things to know.',infoLead:'Check official sources while planning; opening times and transport arrangements can change.',municipalityLink:'Municipal transport information ↗',airportTitle:'Arriving from the airport',emergencyTitle:'Emergency',call112:'Call 112 ↗',sunTitle:'Mediterranean sun',sunText:'Especially in summer, carry water, a hat and sun protection. Plan outdoor visits for morning or evening.',mapTitle:'Find your way',mapText:'Open each place on the map and get directions on your phone.',sourceSee:'View source ↗',
    qrKicker:'ONE SCAN IS ALL IT TAKES',qrTitle:'Manavgat in your pocket.',qrLead:'Create a QR code for your website address and share this guide at your hotel, business or welcome desk.',qrBenefit1:'Quick mobile access',qrBenefit2:'Content in 4 languages',qrBenefit3:'Map links',qrUrlLabel:'Public website address',generateQr:'Create QR',qrHint:'Important: publish the site on a public domain before printing the QR code. A localhost address will not open for visitors.',qrReady:'Your QR code is ready.',downloadQr:'Download PNG ↓',qrLocalWarning:'You are viewing a local test address. Enter your public website domain after the site is published online.',qrGenerating:'Creating QR code…',qrInvalid:'Enter a valid public web address beginning with https://.',qrError:'Could not create the QR code. Make sure npm install has completed on the server.',
    shareKicker:'SHARE MANAVGAT',shareTitle:'Beautiful places are better when shared.',shareLead:'Share this guide with the people you travel with. Four languages, map links and visitor tips in one place.',shareButton:'Share the guide ↗',copyLink:'Copy link',shareNote:'A mobile guide opened by QR code',copied:'Link copied.',shareError:'Sharing is unavailable. You can copy the link instead.',
    sourcesKicker:'TRUSTED INFORMATION, BETTER TRIPS',sourcesTitle:'See where the information comes from.',sourcesText:'History, visitor and transport information in this guide is compiled from the institutions listed below.',footerNote:'An easy way to discover Manavgat.',openMap:'Open map ↗',officialInfo:'Source information ↗',area:'Area',distance:'Distance',hours:'Published visiting hours',practicalTip:'Visitor note',detailNotice:'Information may change. Check the official source before visiting.',beachLocations:'Beach locations'
  },
  de: {
    hotelWelcomeKicker:'EIN WILLKOMMEN VON IHREM HOTEL',hotelWelcomeText:'Die schönsten Orte Manavgats während Ihres Aufenthalts immer dabei.',hotelWelcomeTag:'FÜR HOTELGÄSTE',mobileHome:'Start',mobileExplore:'Entdecken',mobilePlan:'Routen',mobileShare:'Teilen',
    noInstall:'Öffnet ohne App-Installation',flavourPhotoNote:'Symbolbild',flavourKicker:'ENTSPANNEN · GENIESSEN',flavourTitle:'Manavgat ist nicht nur ein Ort zum Anschauen, sondern zum Erleben.',flavourText:'Machen Sie eine Pause am Fluss, schlendern Sie durch Side und entdecken Sie lokale Betriebe. Genießen Sie das Mittelmeer in Ihrem eigenen Tempo. Speisekarten, Preise und Angaben bitte vor dem Besuch prüfen.',flavourButton:'Weiter entdecken ↗',offlinePill:'Die wichtigsten Inhalte werden nach dem ersten Besuch offline gespeichert.',qrAdminLink:'QR-Druckseite',
    skip:'Zum Inhalt springen',navDiscover:'Entdecken',navPlan:'Besuch planen',navTransport:'Anreise',navShare:'Teilen',language:'Sprache',
    heroEyebrow:'ANTALYA · TÜRKEI',heroTitle:'Willkommen in<br><em>Manavgat.</em>',heroLead:'Entdecken Sie kühle Flüsse, Geschichten antiker Städte und die Schönheit des Mittelmeers in einem Reiseführer.',exploreNow:'Manavgat entdecken',planVisit:'Besuch planen',mobileGuide:'Für Ihr Smartphone gemacht',fourLanguages:'Reiseführer in 4 Sprachen',stampTop:'ENTDECKEN · ERLEBEN',heroBottom:'Ein QR-Code. Eine ganze Welt.',
    quick1Title:'Natur',quick1Sub:'Flüsse und Schluchten',quick2Title:'Geschichte',quick2Sub:'Antike Städte',quick3Title:'Mittelmeer',quick3Sub:'Küste und Sonnenuntergänge',quick4Title:'Einfacher Zugang',quick4Sub:'Karten und Reisetipps',
    discoverKicker:'MANAVGAT KENNENLERNEN',discoverTitle:'Es gibt viel zu entdecken.',discoverLead:'Finden Sie ein Erlebnis in Ihrer Nähe. Wählen Sie einen Ort, lesen Sie die Details und öffnen Sie die Karte.',curatedNote:'Aus lokalen und institutionellen Quellen zusammengestellt',searchPlaceholder:'Orte oder Erlebnisse suchen…',filterAll:'Alle',filterNature:'Natur',filterHistory:'Geschichte',filterAdventure:'Abenteuer',filterBeach:'Strände',loading:'Ausflugsziele werden geladen…',emptyTitle:'Keine passenden Orte gefunden.',emptyText:'Versuchen Sie ein anderes Wort oder eine andere Kategorie.',
    featured:'EMPFOHLEN',categoryNature:'NATUR',categoryHistory:'GESCHICHTE',categoryAdventure:'ABENTEUER',categoryBeach:'STRÄNDE',viewDetails:'Details entdecken ↗',
    planKicker:'EIN KLEINER PLAN FÜR EINEN SCHÖNEN TAG',planTitle:'Im eigenen Tempo entdecken.',planLead:'Ein paar Ideen für Ihren Ausflug. Prüfen Sie Verkehr und Besuchsbedingungen vor der Abfahrt.',plan1Time:'HALBER TAG · ENTSPANNT',plan1Title:'Fluss und Wasserfall',plan1Text:'Beginnen Sie am Manavgat-Wasserfall und machen Sie anschließend eine Pause am Fluss.',plan2Time:'HALB-/GANZTAGS · GESCHICHTE',plan2Title:'Zeitreise in Side',plan2Text:'Entdecken Sie das antike Theater, Säulenstraßen und Tempel am Meer.',plan3Time:'GANZER TAG · NATUR',plan3Title:'Richtung Taurusgebirge',plan3Text:'Planen Sie einen Tagesausflug zum Köprülü-Kanyon und in die Berglandschaft.',viewStops:'Orte ansehen ↗',
    infoKicker:'BEVOR SIE LOSFAHREN',infoTitle:'Nützliche Informationen.',infoLead:'Prüfen Sie bei der Planung offizielle Quellen; Öffnungszeiten und Verkehrsangebote können sich ändern.',municipalityLink:'Verkehrsinformationen der Stadt ↗',airportTitle:'Anreise vom Flughafen',emergencyTitle:'Notfall',call112:'112 anrufen ↗',sunTitle:'Mittelmeersonne',sunText:'Nehmen Sie besonders im Sommer Wasser, Hut und Sonnenschutz mit. Planen Sie Aktivitäten im Freien morgens oder abends.',mapTitle:'Den Weg finden',mapText:'Öffnen Sie jeden Ort auf der Karte und lassen Sie sich auf dem Smartphone navigieren.',sourceSee:'Quelle ansehen ↗',
    qrKicker:'EIN SCAN GENÜGT',qrTitle:'Manavgat in Ihrer Tasche.',qrLead:'Erstellen Sie einen QR-Code für Ihre Website-Adresse und teilen Sie den Reiseführer im Hotel, Geschäft oder Empfangsbereich.',qrBenefit1:'Schneller mobiler Zugang',qrBenefit2:'Inhalte in 4 Sprachen',qrBenefit3:'Kartenlinks',qrUrlLabel:'Öffentliche Website-Adresse',generateQr:'QR erstellen',qrHint:'Wichtig: Veröffentlichen Sie die Website unter einer öffentlichen Domain, bevor Sie den QR-Code drucken. localhost funktioniert für Besucher nicht.',qrReady:'Ihr QR-Code ist fertig.',downloadQr:'PNG herunterladen ↓',qrLocalWarning:'Sie sehen eine lokale Testadresse. Geben Sie nach der Veröffentlichung die öffentliche Domain ein.',qrGenerating:'QR-Code wird erstellt…',qrInvalid:'Geben Sie eine gültige Webadresse ein, die mit https:// beginnt.',qrError:'QR-Code konnte nicht erstellt werden. Stellen Sie sicher, dass npm install auf dem Server abgeschlossen ist.',
    shareKicker:'MANAVGAT TEILEN',shareTitle:'Schöne Orte entdeckt man am besten gemeinsam.',shareLead:'Teilen Sie diesen Reiseführer mit Ihren Mitreisenden. Vier Sprachen, Kartenlinks und Besuchertipps an einem Ort.',shareButton:'Reiseführer teilen ↗',copyLink:'Link kopieren',shareNote:'Mobiler Reiseführer, geöffnet per QR-Code',copied:'Link kopiert.',shareError:'Teilen ist nicht verfügbar. Sie können den Link kopieren.',
    sourcesKicker:'VERTRAUENSWÜRDIGE INFORMATIONEN',sourcesTitle:'Informieren Sie sich über die Quellen.',sourcesText:'Die historischen, touristischen und verkehrlichen Informationen stammen aus den unten aufgeführten Institutionen.',footerNote:'Manavgat einfach entdecken.',openMap:'Karte öffnen ↗',officialInfo:'Quellenangabe ↗',area:'Gebiet',distance:'Entfernung',hours:'Veröffentlichte Besuchszeiten',practicalTip:'Besucherhinweis',detailNotice:'Informationen können sich ändern. Prüfen Sie vor dem Besuch die offizielle Quelle.',beachLocations:'Strandstandorte'
  },
  ru: {
    hotelWelcomeKicker:'ПРИВЕТСТВИЕ ОТ ВАШЕГО ОТЕЛЯ',hotelWelcomeText:'Лучшие места Манавгата — рядом на протяжении всего отдыха.',hotelWelcomeTag:'ДЛЯ ГОСТЕЙ ОТЕЛЯ',mobileHome:'Главная',mobileExplore:'Открыть',mobilePlan:'Маршруты',mobileShare:'Поделиться',
    noInstall:'Открывается без установки приложения',flavourPhotoNote:'Иллюстративное изображение',flavourKicker:'НЕ СПЕШИТЕ · НАСЛАЖДАЙТЕСЬ',flavourTitle:'Манавгат — это место не только для просмотра, но и для впечатлений.',flavourText:'Отдохните у реки, прогуляйтесь по улицам Сиде и откройте для себя местные заведения. Наслаждайтесь Средиземноморьем в своём темпе. Перед посещением уточняйте меню, цены и сведения о заведениях.',flavourButton:'Продолжить знакомство ↗',offlinePill:'Основные материалы сохраняются для офлайн-доступа после первого посещения.',qrAdminLink:'Страница печати QR',
    skip:'Перейти к содержанию',navDiscover:'Открыть',navPlan:'План поездки',navTransport:'Как добраться',navShare:'Поделиться',language:'Язык',
    heroEyebrow:'АНТАЛЬЯ · ТУРЦИЯ',heroTitle:'Добро пожаловать<br><em>в Манавгат.</em>',heroLead:'Откройте прохладу рек, истории древних городов и красоту Средиземноморья в одном путеводителе.',exploreNow:'Открыть Манавгат',planVisit:'Спланировать поездку',mobileGuide:'Создано для телефона',fourLanguages:'Путеводитель на 4 языках',stampTop:'ОТКРОЙ · ПОЧУВСТВУЙ',heroBottom:'Один QR-код. Целый мир открытий.',
    quick1Title:'Природа',quick1Sub:'Реки и каньоны',quick2Title:'История',quick2Sub:'Древние города',quick3Title:'Средиземноморье',quick3Sub:'Побережье и закаты',quick4Title:'Просто добраться',quick4Sub:'Карты и советы',
    discoverKicker:'ПОЗНАКОМЬТЕСЬ С МАНАВГАТОМ',discoverTitle:'Здесь так много интересного.',discoverLead:'Выберите место, изучите подробности и откройте маршрут на карте.',curatedNote:'Собрано по местным и официальным источникам',searchPlaceholder:'Поиск мест и впечатлений…',filterAll:'Все',filterNature:'Природа',filterHistory:'История',filterAdventure:'Приключения',filterBeach:'Пляжи',loading:'Загружаем места для прогулок…',emptyTitle:'Ничего не найдено.',emptyText:'Попробуйте другое слово или категорию.',
    featured:'РЕКОМЕНДУЕМ',categoryNature:'ПРИРОДА',categoryHistory:'ИСТОРИЯ',categoryAdventure:'ПРИКЛЮЧЕНИЯ',categoryBeach:'ПЛЯЖИ',viewDetails:'Подробнее ↗',
    planKicker:'НЕБОЛЬШОЙ ПЛАН ДЛЯ ХОРОШЕГО ДНЯ',planTitle:'Открывайте в своём темпе.',planLead:'Несколько идей для маршрута. Перед выездом уточняйте транспорт и условия посещения.',plan1Time:'ПОЛДНЯ · СПОКОЙНЫЙ ТЕМП',plan1Title:'Река и водопад',plan1Text:'Начните с водопада Манавгат, затем отдохните у реки.',plan2Time:'ПОЛДНЯ / ДЕНЬ · ИСТОРИЯ',plan2Title:'Путешествие во времени в Сиде',plan2Text:'Исследуйте античный театр, колоннадные улицы и храмы у моря.',plan3Time:'ЦЕЛЫЙ ДЕНЬ · ПРИРОДА',plan3Title:'К Таврским горам',plan3Text:'Запланируйте поездку на целый день в каньон Кёпрюлю и горы вокруг.',viewStops:'Посмотреть места ↗',
    infoKicker:'ПЕРЕД ПОЕЗДКОЙ',infoTitle:'Полезная информация.',infoLead:'Проверяйте официальные источники: часы работы и транспортные условия могут меняться.',municipalityLink:'Транспортная информация муниципалитета ↗',airportTitle:'Из аэропорта',emergencyTitle:'Экстренная помощь',call112:'Позвонить 112 ↗',sunTitle:'Средиземноморское солнце',sunText:'Летом берите с собой воду, головной убор и солнцезащитные средства. Планируйте прогулки на утро или вечер.',mapTitle:'Найдите дорогу',mapText:'Откройте каждое место на карте и постройте маршрут на телефоне.',sourceSee:'Источник ↗',
    qrKicker:'ДОСТАТОЧНО ОДНОГО СКАНИРОВАНИЯ',qrTitle:'Манавгат у вас в кармане.',qrLead:'Создайте QR-код для адреса сайта и разместите путеводитель в отеле, заведении или на стойке регистрации.',qrBenefit1:'Быстрый доступ с телефона',qrBenefit2:'Контент на 4 языках',qrBenefit3:'Ссылки на карты',qrUrlLabel:'Публичный адрес сайта',generateQr:'Создать QR',qrHint:'Важно: перед печатью QR-кода разместите сайт на общедоступном домене. Адрес localhost у посетителей не откроется.',qrReady:'QR-код готов.',downloadQr:'Скачать PNG ↓',qrLocalWarning:'Сейчас открыт локальный тестовый адрес. После публикации введите публичный домен сайта.',qrGenerating:'Создаём QR-код…',qrInvalid:'Введите правильный веб-адрес, начинающийся с https://.',qrError:'Не удалось создать QR-код. Убедитесь, что на сервере завершилась команда npm install.',
    shareKicker:'ПОДЕЛИТЬСЯ МАНАВГАТОМ',shareTitle:'Красивыми местами лучше делиться.',shareLead:'Поделитесь путеводителем с попутчиками. Четыре языка, ссылки на карты и советы для посетителей в одном месте.',shareButton:'Поделиться путеводителем ↗',copyLink:'Скопировать ссылку',shareNote:'Мобильный путеводитель открывается по QR-коду',copied:'Ссылка скопирована.',shareError:'Функция отправки недоступна. Скопируйте ссылку.',
    sourcesKicker:'НАДЁЖНАЯ ИНФОРМАЦИЯ',sourcesTitle:'Посмотрите источники информации.',sourcesText:'Историческая, туристическая и транспортная информация собрана по материалам учреждений ниже.',footerNote:'Простой способ открыть для себя Манавгат.',openMap:'Открыть карту ↗',officialInfo:'Информация об источнике ↗',area:'Район',distance:'Расстояние',hours:'Опубликованные часы посещения',practicalTip:'Совет посетителю',detailNotice:'Информация может меняться. Перед поездкой проверьте официальный источник.',beachLocations:'Расположение пляжей'
  }
};

const state = { lang: 'tr', category: 'all', query: '', places: [], sources: [], config: {} };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = key => (UI[state.lang] && UI[state.lang][key]) || UI.tr[key] || key;
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const localText = place => place.translations?.[state.lang] || place.translations?.tr || { name: place.name, summary: '', description: '', tip: '' };
const categoryKey = category => ({nature:'categoryNature',history:'categoryHistory',adventure:'categoryAdventure',beach:'categoryBeach'}[category] || 'categoryNature');

function applyLanguage() {
  document.documentElement.lang = state.lang;
  $('#languageSelect').value = state.lang;
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (UI[state.lang]?.[key] !== undefined) el.innerHTML = UI[state.lang][key];
  });
  $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  $('#airportText').textContent = state.config.essentials?.airport?.[state.lang] || state.config.essentials?.airport?.tr || '';
  $('#emergencyText').textContent = state.config.essentials?.emergency?.[state.lang] || state.config.essentials?.emergency?.tr || '';
  $('#disclaimerText').textContent = state.config.essentials?.disclaimer?.[state.lang] || state.config.essentials?.disclaimer?.tr || '';
  renderPlaces();
  if ($('#placeModal').dataset.placeId) showPlace($('#placeModal').dataset.placeId, false);
}

function getCategoryLabel(category) { return t(categoryKey(category)); }
function renderPlaces() {
  const query = state.query.trim().toLocaleLowerCase(state.lang === 'tr' ? 'tr-TR' : state.lang);
  const filtered = state.places.filter(place => {
    const data = localText(place);
    const text = [data.name, data.summary, place.area, place.name, place.category].join(' ').toLocaleLowerCase(state.lang === 'tr' ? 'tr-TR' : state.lang);
    return (state.category === 'all' || place.category === state.category) && (!query || text.includes(query));
  });
  const grid = $('#placesGrid');
  grid.innerHTML = filtered.map(place => {
    const data = localText(place);
    return `<article class="place-card">
      <div class="place-image-wrap">
        <img class="place-image" src="${escapeHtml(place.image)}" alt="${escapeHtml(data.name)}" loading="lazy" referrerpolicy="no-referrer">
        <span class="category-label">${escapeHtml(getCategoryLabel(place.category))}</span><small class="image-credit">${escapeHtml(place.imageNote || 'Temsili görsel')}</small>
        ${place.featured ? `<span class="featured-label">${escapeHtml(t('featured'))}</span>` : ''}
      </div>
      <div class="place-card-body">
        <div class="place-meta"><span class="place-area"><span>⌖</span>${escapeHtml(place.area)}</span><span>${escapeHtml(place.distance || '')}</span></div>
        <h3>${escapeHtml(data.name)}</h3>
        <p>${escapeHtml(data.summary)}</p>
        <div class="place-card-footer"><span>${escapeHtml(getCategoryLabel(place.category))}</span><button type="button" data-open-place="${escapeHtml(place.id)}">${escapeHtml(t('viewDetails'))}</button></div>
      </div>
    </article>`;
  }).join('');
  $('#emptyState').hidden = filtered.length !== 0;
  if (!filtered.length) grid.innerHTML = '';
  $$('.place-image', grid).forEach(img => img.addEventListener('error', () => {
    img.src = 'assets/images/hero-manavgat.webp';
    img.classList.add('fallback-image');
  }, { once: true }));
}

function showPlace(id, focus = true) {
  const place = state.places.find(item => item.id === id);
  if (!place) return;
  const data = localText(place);
  const modal = $('#placeModal');
  modal.dataset.placeId = id;
  $('#modalTitle').textContent = data.name;
  $('#modalArea').textContent = place.area;
  $('#modalSummary').textContent = data.summary;
  $('#modalDescription').textContent = data.description;
  $('#modalTip').textContent = data.tip;
  $('#modalCategory').textContent = getCategoryLabel(place.category);
  $('#modalCredit').textContent = place.imageNote || 'Temsili görsel — gerçek yer fotoğrafı değildir.';
  const image = $('#modalImage');
  image.src = place.image;
  image.alt = data.name;
  image.onerror = () => { image.src = 'assets/images/hero-manavgat.webp'; };
  const facts = [
    `<div class="fact"><small>${escapeHtml(t('area'))}</small><strong>${escapeHtml(place.area)}</strong></div>`,
    `<div class="fact"><small>${escapeHtml(t('distance'))}</small><strong>${escapeHtml(place.distance || '—')}</strong></div>`
  ];
  if (place.hours?.[state.lang] || place.hours?.tr) facts.push(`<div class="fact"><small>${escapeHtml(t('hours'))}</small><strong>${escapeHtml(place.hours[state.lang] || place.hours.tr)}</strong></div>`);
  if (Array.isArray(place.beachOptions) && place.beachOptions.length) {
    const links = place.beachOptions.map(option => {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(option.mapQuery || option.name)}`;
      return `<a class="fact-map-link" href="${url}" target="_blank" rel="noopener">${escapeHtml(option.name)} <span>${escapeHtml(option.area)}</span> ↗</a>`;
    }).join('');
    facts.push(`<div class="fact fact-wide"><small>${escapeHtml(t('beachLocations'))}</small><div class="beach-links">${links}</div></div>`);
  }
  $('#modalFacts').innerHTML = facts.join('');
  $('#modalMap').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery || place.name)}`;
  const source = state.sources.find(item => (place.sourceIds || []).includes(item.id));
  $('#modalSource').href = place.imageSource || source?.url || 'https://www.manavgat.bel.tr/gezi-rehberi';
  modal.hidden = false;
  document.body.classList.add('modal-open');
  if (focus) $('#modalClose').focus();
}
function closePlace() {
  $('#placeModal').hidden = true;
  delete $('#placeModal').dataset.placeId;
  document.body.classList.remove('modal-open');
}

function renderSources() {
  $('#sourceLinks').innerHTML = state.sources.map(source =>
    `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener">${escapeHtml(source.name)} ↗</a>`
  ).join('');
}

async function loadData() {
  const response = await fetch(new URL('data/places.json', document.baseURI), { cache: 'no-cache' });
  if (!response.ok) throw new Error('Rehber verileri yüklenemedi.');
  const payload = await response.json();
  if (!Array.isArray(payload.places) || !Array.isArray(payload.sources)) throw new Error('Rehber veri dosyasının yapısı geçersiz.');
  state.places = payload.places;
  state.sources = payload.sources;
  state.config = payload;
  renderSources();
}


function toast(message) {
  const el = $('#toast'); el.textContent = message; el.classList.add('show');
  window.clearTimeout(toast.timer); toast.timer = window.setTimeout(() => el.classList.remove('show'), 2300);
}

function setupHotelBranding() {
  const params = new URLSearchParams(location.search);
  const partner = params.get('hotel') || params.get('otel') || params.get('partner');
  if (!partner) return;
  const fallbackName = partner.replace(/[-_]+/g, ' ').trim();
  const hotelName = (params.get('name') || params.get('hotelName') || params.get('otel_adi') || fallbackName).replace(/\s+/g, ' ').trim().slice(0, 48);
  if (!hotelName) return;
  $('#hotelWelcomeName').textContent = hotelName;
  $('#hotelWelcome').hidden = false;
  document.body.dataset.hotel = partner.slice(0, 60).replace(/[^\w-]/g, '');
  const accent = params.get('accent') || params.get('renk') || '';
  if (/^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(accent)) document.documentElement.style.setProperty('--hotel-accent', accent);
}

function setupMobileDock() {
  if (!('IntersectionObserver' in window)) return;
  const items = $$('.mobile-dock-item');
  const targets = items.map(item => document.getElementById(item.dataset.dockSection)).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    items.forEach(item => item.classList.toggle('active', item.dataset.dockSection === visible.target.id));
  }, { rootMargin: '-32% 0px -58% 0px', threshold: [0, .15, .4] });
  targets.forEach(target => observer.observe(target));
}

function setupEvents() {
  $('#languageSelect').addEventListener('change', event => {
    state.lang = event.target.value;
    try { localStorage.setItem('manavgat-guide-language', state.lang); } catch {}
    applyLanguage();
  });
  $('#placeSearch').addEventListener('input', event => { state.query = event.target.value; renderPlaces(); });
  $('#categoryFilters').addEventListener('click', event => {
    const button = event.target.closest('[data-category]'); if (!button) return;
    state.category = button.dataset.category;
    $$('.filter-chip').forEach(chip => chip.classList.toggle('active', chip === button));
    renderPlaces();
  });
  $('#placesGrid').addEventListener('click', event => {
    const button = event.target.closest('[data-open-place]'); if (button) showPlace(button.dataset.openPlace);
  });
  $('#modalClose').addEventListener('click', closePlace);
  $('#placeModal').addEventListener('click', event => { if (event.target === $('#placeModal')) closePlace(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !$('#placeModal').hidden) closePlace();
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#placeSearch').focus(); }
  });
  $('#menuToggle').addEventListener('click', () => {
    const nav = $('#mainNav'); const open = nav.classList.toggle('open');
    $('#menuToggle').setAttribute('aria-expanded', String(open));
  });
  $$('#mainNav a').forEach(link => link.addEventListener('click', () => {
    $('#mainNav').classList.remove('open'); $('#menuToggle').setAttribute('aria-expanded','false');
  }));
  $('#shareGuide').addEventListener('click', async () => {
    const shareData = { title: document.title, text: t('shareTitle'), url: location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (error) { if (error.name !== 'AbortError') toast(t('shareError')); }
    } else {
      try { await navigator.clipboard.writeText(location.href); toast(t('copied')); }
      catch { toast(t('shareError')); }
    }
  });
  $('#copyGuide').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(location.href); toast(t('copied')); }
    catch { toast(t('shareError')); }
  });
  $$('[data-place-link]').forEach(link => link.addEventListener('click', () => {
    const id = link.dataset.placeLink; window.setTimeout(() => showPlace(id), 250);
  }));
  $('#year').textContent = new Date().getFullYear();
  setupMobileDock();
}

(async function init() {
  const stored = (() => { try { return localStorage.getItem('manavgat-guide-language'); } catch { return null; } })();
  const browserLang = (navigator.language || 'tr').slice(0,2).toLowerCase();
  state.lang = ['tr','en','de','ru'].includes(stored) ? stored : (['tr','en','de','ru'].includes(browserLang) ? browserLang : 'en');
  setupHotelBranding();
  setupEvents();
  applyLanguage();
  const scanSource = new URLSearchParams(location.search).get('via');
  if (scanSource === 'bus' || scanSource === 'stop') {
    try { sessionStorage.setItem('manavgat-qr-source', scanSource); } catch {}
  }
  try {
    await loadData();
    applyLanguage();
  } catch (error) {
    $('#placesGrid').innerHTML = `<div class="empty-state"><strong>${escapeHtml(error.message)}</strong><p>Sayfayı bir web sunucusu üzerinden açın; dosyaya doğrudan çift tıklamayın.</p></div>`;
  }
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register(new URL('sw.js?v=5', document.baseURI), { scope: new URL('./', document.baseURI).pathname })
      .catch(() => {});
  }
})();
