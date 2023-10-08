// the main page elements
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");
const navAtags = document.querySelectorAll(".nav-link a");
const mobileMenuATags = document.querySelectorAll(".mobile-menu-item a");
const footerLinks = document.querySelectorAll("#useful-links a");
const navigationElement = document.getElementById("navigation");
// other pages elements
const searchContainer = document.getElementById("search-container");
// nav-search-section elements
const navSearchSection = document.getElementById("nav-search-section");
const searchIcon = document.getElementById("nav-search-icon");
const searchInput = document.getElementById("nav-search-input");
// mobile menu elements
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileMenuCloseIcon = document.getElementById("mobile-menu-close-icon");
const mobileMenuList = document.querySelector(".mobile-menu-list");
const mobileMenuItems = document.querySelectorAll(".sub-mobile-menu-items");

// data arrays
const seriesData = [
  {
    title: "Stranger Things",
    img: "Stranger-Things.jpg",
    rating: "8.7",
    id: "5002",
    director: "Matt Duffer",
    plot: "داستان در دهه ۸۰ میلادی در شهر ساحلی لانگ ایلند اتفاق می افتد. پس از ناپدید شدن یک پسر جوان، تحقیقات برای پیدا کردن او آغاز میشود. خانواده، دوستان و پلیس محلی همگی درگیر معمای گم شدن این پسر هستند. اهالی شهر بعد از مدتی متوجه می شوند دولت، نیروهای ماوراء الطبیعه و یک دختر کوچک در گم شدن پسر دست داشته اند…",
    dl_link: {
      s1: "https://nairobi.saymyname.website/?dir=Series/S/Stranger%20Things/S01/720p%20%20WEB-DL%20%20AAC%202CH%20%20x265%20%20PSA/&x=47137",
      s2: "https://nairobi.saymyname.website/?dir=Series/S/Stranger%20Things/S02/720p%20%20WEB-DL%20%20AAC%202CH%20%20x265%20%2010bit%20%20PSA/&x=15877",
      s3: "https://nairobi.saymyname.website/?dir=Series/S/Stranger%20Things/S03/720p%20%20WEB-DL%20%20AAC%202CH%20%20x265%20%2010bit%20%20PSA/&x=16864",
      s4: "https://nairobi.saymyname.website/?dir=Series/S/Stranger%20Things/S04/720p%20WEBRip%202CH%20x265%2010bit%20PSA/&x=14862",
    },
  },
  {
    title: "The Boys",
    img: "The-Boys1.jpg",
    rating: "8.7",
    id: "5102",
    director: "Evan Goldberg",
    plot: "داستان سریال پسران (The Boys) در دنیایی اتفاق می افتد که ابرقهرمان ها وجه تاریک از شهرت خود را در آغوش گرفته و به سمت فساد کشیده شده اند. در این میان، یک گروه از ویجیلانته ها (مبارزان پارتیزان) که برای پلیس سیا (سی آی اِی) کار می کنند، موظف می شوند تا به هر قیمتی که شده، ابرقهرمان های فاسد را نابود کنند…",
    dl_link: {
      s1: "https://nairobi.saymyname.website/?dir=Series/T/The%20Boys/S01/720p.WEB-DL.2CH.x265.10bit.PSA/&x=23867",
      s2: "https://nairobi.saymyname.website/?dir=Series/T/The%20Boys/S02/720p%20WEB-DL%202CH%20x264%20PaHe/&x=31027",
      s3: "https://nairobi.saymyname.website/?dir=Series/T/The%20Boys/S03/720p%20WEB-DL%202CH%20x264%20PaHe/&x=58577",
    },
  },
  {
    title: "The Last of Us",
    img: "last-of-us.jpg",
    rating: "9.6",
    id: "5202",
    director: "	Bruce Straley Neil Druckmann",
    plot: "۲۰ سال پس از نابودی تمدن مدرن، جوئل، یک بازمانده سرسخت، استخدام می شود تا الی، دختری ۱۴ ساله را از یک منطقه قرنطینه ظالمانه خارج کند.",
    dl_link: {
      s1: "https://rio.saymyname.website/?dir=Series/T/The%20Last%20of%20Us/S01/720p%20WEBRip%202CH%20x265%2010bit%20PSA/&x=96619",
    },
  },
  {
    title: "The Witcher",
    img: "witcher.jpg",
    rating: "8.1",
    id: "5302",
    director: "Lauren Schmidt",
    plot: "داستان در باره گرالت ریویایی، جادوگر و شکارچی جهش یافته هیولا است که در تلاش است تا جای خود را در این دنیای پر از هیولا و آدم های ظالم پیدا کند.",
    dl_link: {
      s1: "https://nairobi.saymyname.website/?dir=Series/T/The%20Witcher/720p%20WEBRip%202CH%20x265%2010bit%20PSA/&x=33060",
      s2: "https://nairobi.saymyname.website/?dir=Series/T/The%20Witcher/S02/720p%20WEBRip%202CH%20x265%2010bit%20PSA/&x=17660",
      s3: "https://rio.saymyname.website/?dir=Series/T/The%20Witcher/S05/720p%20WEB-DL%202CH%20x265%2010bit%20PSA/&x=86772",
    },
  },
  {
    title: "Game of Thrones",
    img: "got.jpg",
    rating: "9.2",
    id: "5402",
    director: "Alex Graves, David Nutter, Mark Mylod, and Jeremy Podeswa",
    plot: "داستان سریال گیم اف ترونز در سرزمین های خیالی وستروس و اسوس، در نزدیکی پایان یک تابستان ۱۰ ساله اتفاق می‌افتد و چندین خط داستانی را دنبال می‌کند.داستان سریال مربوط به جنگ بین خانواده‌های اشرافی برای به دست آوردن تخت آهنین پادشاهی هفت اقلیم است. دومین خط داستانی، نزدیک بودن زمستانی طولانی و یورش موجوداتی افسانه‌ای از شمال را شرح می‌دهد.",
    dl_link: {
      s1: "https://nairobi.saymyname.website/?dir=Series/G/Game%20Of%20Thrones/S01/720p.BluRay.2Ch.10bit.x265.PSA/&x=97013",
      s2: "https://nairobi.saymyname.website/?dir=Series/G/Game%20Of%20Thrones/S02/720p.BluRay.2Ch.10bit.x265.PSA/&x=59743",
      s3: "https://nairobi.saymyname.website/?dir=Series/G/Game%20Of%20Thrones/S03/720p.BluRay.10bit.2CH.x265.PSA/&x=25821",
      s4: "https://nairobi.saymyname.website/?dir=Series/G/Game%20Of%20Thrones/S04/720p.BluRay.10bit.2CH.x265.PSA/&x=92759",
      s5: "https://nairobi.saymyname.website/?dir=Series/G/Game%20Of%20Thrones/S05/720p.BluRay.10bit.2CH.x265.PSA/&x=56717",
      s6: "https://nairobi.saymyname.website/?dir=Series/G/Game%20Of%20Thrones/S06/720p%20BluRay%202CH%20x265%2010bit%20PSA/&x=45926",
      s7: "https://nairobi.saymyname.website/?dir=Series/G/Game%20Of%20Thrones/S07/720p.10bit.BluRay.2CH.x265.PSA/&x=75351",
      s8: "https://nairobi.saymyname.website/?dir=Series/G/Game%20Of%20Thrones/S08/720p.BluRay.x264.Pahe/&x=52775",
    },
  },
  {
    title: "His Dark Materials",
    img: "His-Dark-Materials.jpg",
    rating: "7.8",
    id: "5502",
    director: "Philip Pullman",
    plot: "دو کودک کم سن و سال به نام‌های لیرا و ویل که ساکن جهان‌های موازی هستند، عازم سفری ماجراجویانه و سحرآمیز می‌شوند و…",
    dl_link: {
      s1: "https://tokyo.saymyname.website/?dir=Series/H/His%20Dark%20Materials/S01/720p%20BluRay%202CH%20x265%20Pahe/&x=36916",
      s2: "https://tokyo.saymyname.website/?dir=Series/H/His%20Dark%20Materials/S02/720p%20BluRay%202CH%20x265%20Pahe/&x=94346",
      s3: "https://rio.saymyname.website/?dir=Series/H/His%20Dark%20Materials/S03/720p%20WEBRip%202CH%20x265%2010bit%20PSA/&x=15022",
    },
  },
  {
    title: "House of the Dragon",
    img: "house-of-the-dragon.jpg",
    rating: "8.9",
    id: "5602",
    director: "",
    plot: "این سریال داستان خاندان تارگرین را روایت می کند و ۲۰۰ سال قبل از وقایع سریال “بازی تاج و تخت” جریان دارد.",
    dl_link: {
      s1: "https://rio.saymyname.website/?dir=Series/H/House%20of%20The%20Dragon/S01/720p%20WEBRip%202CH%20x265%2010bit%20PSA/&x=32415",
    },
  },
  {
    title: "SEE",
    img: "See-Third-Season.jpg",
    rating: "7.6",
    id: "5702",
    director: "Steven Knight",
    plot: "در آینده ای دور از انتظار، نسل بشر قدرت بینایی خود را از دست داده است و جامعه باید راهی جدید برای تعامل با یکدیگر، شکار و بقا پیدا کند. اما تمام این کارها هنگامی که دو نوزاد به دنیا می آیند که قدرت بینایی دارند تغییر می کند و…",
    dl_link: {
      s1: "https://nairobi.saymyname.website/?dir=Series/S/See/S01/720p.WEB-DL.AAC.2CH.x265.PSA/&x=15013",
      s2: "https://nairobi.saymyname.website/?dir=Series/S/See/S02/720p%20WEBRip%202CH%20x265%2010bit%20PSA/&x=84257",
      s3: "https://rio.saymyname.website/?dir=Series/S/See/S03/720p%20WEBRip%202CH%20x265%2010bit%20PSA/&x=23339",
    },
  },
  {
    title: "Rick and Morty",
    img: "rick.jpg",
    rating: "9.2",
    id: "5802",
    director: "Pete Michels",
    plot: "ریک سانچز دانشمند نابغهٔ الکلی است که به تازگی در خانهٔ خانوادهٔ دخترش، بِث که یک دامپزشک و جراح قلب اسب است، اقامت گزیده. او اوقاتش را حول کار بر روی پروژه‌های محرمانهٔ علمی بیشمارش و ماجراجویی‌های خطرناک و سورئالش در کهکشان‌ها با نوهٔ نوجوانش، مورتی (و گهگاهی همراه با سامر، نوه ی بزرگترش) می‌گذراند. درآمیختن این اتفاقات با کشمکش‌های درون خانوادگی، باعث پریشانی و اضطراب بیشتر مورتی در مدرسه و خانه شده است و …",
    dl_link: {
      s1: "https://nairobi.saymyname.website/?dir=Series/R/Rick%20And%20Morty/S01/720p%20BluRay%202CH%20x264%20Pahe/&x=61960",
      s2: "https://nairobi.saymyname.website/?dir=Series/R/Rick%20And%20Morty/S02/720p%20BluRay%202CH%20x264%20Pahe/&x=39419",
      s3: "https://nairobi.saymyname.website/?dir=Series/R/Rick%20And%20Morty/S03/720p%20%20BluRay%20%20AAC%202CH%20%20x264%20%20Pahe/&x=32292",
      s4: "https://nairobi.saymyname.website/?dir=Series/R/Rick%20And%20Morty/S04/720p%20%20WEB-DL%20%20AAC%202CH%20%20x265%20%20PSA/&x=97208",
      s5: "https://nairobi.saymyname.website/?dir=Series/R/Rick%20And%20Morty/S05/720p%20WEBRip%202CH%20x265%2010bit%20PSA/&x=62411",
      s6: "https://rio.saymyname.website/?dir=Series/R/Rick%20and%20Morty/S06/720p%20WEBRip%202CH%20x265%2010bit%20PSA/&x=78079",
    },
  },
];
const newFilmsArray = [
  {
    id: 3000,
    title: "Barbie",
    year: 2023,
    img: "https://aiofilm.click/wp-content/uploads/2023/08/barbie.jpg",
    rating: 7.4,
    director: "Greta Gerwig",
    genre: "comedy",
    plot: "باربی از بحرانی رنج می برد که او را به زیر سوال بردن جهان و وجودش می کشاند.    ",
    dl_link:
      "https://dl6.rostam.top/movie/2023/Barbie/Barbie.2023%5B720p%5D%5Bx265%5D%5BSS%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3001,
    title: "Carl’s Date",
    year: 2023,
    img: "https://aiofilm.click/wp-content/uploads/2023/09/Carls-Date.jpg",
    rating: 6.4,
    director: "Bob Peterson",
    genre: "comedy",

    plot: "کارل فردریکسن با اکراه موافقت می کند که با یک دوست خانم قرار بگذارد – اما مسلماً نمی داند که این روزها قرار ملاقات چگونه کار می کند.",
    dl_link:
      "https://dl6.rostam.top/movie/2023/Carls%20Date/Carls.Date.2023%5B720p%5D%5BSS%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3002,
    title: "Jeanne du Barry",
    year: 2023,
    img: "https://aiofilm.click/wp-content/uploads/2023/09/Jeanne-du-Barry.jpg",
    rating: 6.8,
    director: "Maïwenn",

    plot: "داستان زندگی ژان بکو که به عنوان دختر نامشروع یک خیاط فقیر در سال ۱۷۴۳ به دنیا آمد و در دربار لویی پانزدهم به پایان رسید.    ",
    dl_link:
      "https://dl6.rostam.top/movie/2023/Jeanne%20du%20Barry/Jeanne.du.Barry.2023%5B720p%5D%5BSS%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3003,
    title: "Shazam! Fury of the Gods",
    year: 2023,
    img: "https://aiofilm.click/wp-content/uploads/2022/04/Shazam-Fury-of-the-Gods-1.jpg",
    rating: 6,
    director: "David F. Sandberg",
    genre: "comedy",
    plot: "«بیلی بتسون» و دوستانش باید با «دختران اطلس» نبرد کنند و مانع از نابودی دنیا با سلاح مرگبار آنان شوند.    ",
    dl_link:
      "https://dl6.rostam.top/movie/2023/Shazam%20Fury%20of%20the%20Gods/Shazam.Fury.of.the.Gods.2023%5B720p%5D%5Bx265%5D%5BSS%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3004,
    title: "Avatar: The Way of Water",
    year: 2022,
    img: "https://aiofilm.click/wp-content/uploads/2022/12/image_2023-03-28_053433118-1.png",
    rating: 7.8,
    director: "James Cameron",
    genre: "fantasy",
    plot: "جیک سالی با خانواده جدید خود که در سیاره پاندورا تشکیل شده اند زندگی می کند. هنگامی که یک تهدید آشنا برای پایان دادن به آنچه قبلاً شروع شده بود برمی گردد، جیک باید با Neytiri و ارتش نژاد Na’vi برای محافظت از سیاره خود همکاری کند.",
    dl_link:
      "https://dl6.rostam.top/movie/2022/Avatar%20The%20Way%20of%20Water/Avatar%20The%20Way%20of%20Water.%5BSS%5D%5B720%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3005,
    title: "Guillermo del Toro’s Pinocchio",
    year: 2022,
    img: "https://aiofilm.click/wp-content/uploads/2023/03/photo_2023-03-22_09-10-41.jpg",
    rating: 7.6,
    director: "Guillermo del Toro Mark Gustafson",
    genre: "fantasy",
    plot: "گیلرمو دل تورو، فیلمساز برنده جایزه اسکار، داستان کلاسیک کارلو کولودی از ماریونت چوبی را دوباره اختراع می کند که به طور جادویی زنده می شود تا قلب یک چوب تراشی غمگین به نام ژپتو را ترمیم کند.    ",
    dl_link:
      "https://dl5.rostam.top/Movie/2022/Guillermo%20del%20Toros%20Pinocchio/Guillermo.del.Toros.Pinocchio.2022.Farsi.Dubbed%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3006,
    title: "Puss in Boots: The Last Wish",
    year: 2022,
    img: "https://aiofilm.click/wp-content/uploads/2023/01/image_2023-01-18_105848773.jpg",
    rating: 7.8,
    director: "Januel Mercado Joel Crawford",
    genre: "fantasy",
    plot: "گربه چکمه پوش متوجه می شود که اشتیاق او به ماجراجویی تاثیر خود را گذاشته است: او هشت زندگی از ۹ زندگی خود را سوزانده است. پوس سفری حماسی را آغاز می کند تا آخرین آرزوی افسانه ای را بیابد و زندگی نه گانه خود را بازسازی کند.    ",
    dl_link:
      "https://dl5.rostam.top/Movie/2022/Puss%20in%20Boots%20-%20The%20Last%20Wish/Puss%20in%20Boots%20-%20The%20Last%20Wish.%5BSS%5D%5B720%5D%5Bx265%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3007,
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    img: "https://aiofilm.click/wp-content/uploads/2021/10/Black-Panther-Wakanda-Forever-1.jpg",
    rating: 7.4,
    director: "Ryan Coogler",
    genre: "fantasy",
    plot: "ملکه راموندا، شوری، ام باکو، اوکویه و دورا میلاجه برای محافظت از پادشاهی واکاندا در برابر قدرت‌های جهانی مداخله گر در پی مرگ پادشاه تچالا می‌جنگند.",
    dl_link:
      "https://dl5.rostam.top/Movie/2022/Black%20Panther%20Wakanda%20Forever/Black.Panther.Wakanda.Forever.2022.HDCam%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3008,
    title: "Spider-Man: No Way Home",
    year: 2021,
    img: "https://aiofilm.click/wp-content/uploads/2021/12/image_2021-12-16_190856.png",
    rating: 8.7,
    genre: "fantasy",
    director: "Jon Watts",
    dl_link:
      "https://dl3.rostam.top/film/2021/Spider-Man%20No%20Way%20Home/Spider-Man%20No%20Way%20Home.%5BSS%5D%5BBluRay%5D%5B720%5D%5Bx265%5D%5BAioFilm.com%5D.mkv",
    plot: "«پیتر پارکر» با بازی «تام هالند» به دنبال وقایع «دور از خانه» به قتل «میستریو» با بازی «جیک جیلنهال» متهم است و هویت محرمانه‌اش توسط «جی. جونا جیمسون» با بازی «جی.کی. سیمونز» در روزنامه «دیلی باگل» فاش شده است. «پیتر پارکر» برای طلب یاری نزد «دکتر استرنج» با بازی «بندیکت کامبربچ» می‌رود تا بخواهد با طلسمی اجرا کند که مردم به جز نزدیکانش فراموش کنند او «مرد عنکبوتی» است و «میستریو» را از بین برده.",
  },
  {
    id: 3009,
    title: "Monica and Friends: Lessons",
    year: 2021,
    img: "https://aiofilm.click/wp-content/uploads/2022/04/Turma-da-Monica-Licoes.jpg",
    rating: 7.8,
    director: "Daniel Rezende",
    genre: "comedy",
    plot: "مونیکا و دوستانش سعی می کنند قلاب بازی کنند و نتیجه معکوس می دهد. اکنون، آنها باید در طول سفری که در آن باید درس های ارزشمندی در مورد ارزش واقعی دوستی بیاموزند، با عواقب آن روبرو شوند.    ",
    dl_link:
      "https://dl3.rostam.top/film/2021/Monica%20and%20Friends%20Lessons/Monica.and.Friends.Lessons.2021%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3010,
    title: "Wrath of Man",
    year: 2021,
    img: "https://aiofilm.click/wp-content/uploads/2022/06/image_2022-06-21_182715021.jpg",
    rating: 7.1,
    director: "Guy Ritchie",
    genre: "action",
    plot: "فیلم خشم مردانه Wrath of Man 2021 در مورد فردی مرموز و خشن با نام مستعار اچ (با بازی جیسون استاتهام) است که در یک شرکت حمل پول کار میکند. اچ ماموریت د ارد تا هر هفته صدها میلیون دلار را با ماشین حمل پول به لس آنجلس منتقل کرده و…",
    dl_link:
      "https://dl3.rostam.top/film/2021/Wrath%20of%20Man/Wrath%20of%20Man.%5BSS%5D%5BBluRay%5D%5B720%5D%5Bx265%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3011,
    title: "Your Eyes Tell ",
    year: 2020,
    img: "https://aiofilm.click/wp-content/uploads/2022/12/image_2022-12-29_235416479.jpg",
    rating: 7.3,
    director: " Takahiro Miki",
    genre: "action",

    plot: "کائوری در یک حادثه بینایی خود را از دست میدهد با این وجود هنوز به زندگی امیدوار است و سعی در لذت بردن از آن را دارد تا اینکه با روی که قبلا یک بوکسور بوده آشنا می شود…",
    dl_link:
      "https://dl5.rostam.top/Movie/2020/Your%20Eyes%20Tell/Your%20Eyes%20Tell.%5BSS%5D%5B720%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3012,
    title: "Sergio ",
    year: 2020,
    img: "https://aiofilm.click/wp-content/uploads/2022/06/Sergio.jpg",
    rating: 6.2,
    director: "Greg Barker",
    genre: "action",

    plot: "پس از حمله به عراق، این کشور در هرج و مرج کامل فرو می‌رود، سرجیو ویرا به عنوان نماینده سازمان ملل به عراق می‌رود تا در خطرناک‌ترین ماموریت دوران حرفه‌ای خود شرکت کند و…    ",
    dl_link:
      "https://dl3.rostam.top/film/2020/Sergio/Sergio.2020%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3013,
    title: "Tenet ",
    year: 2020,
    img: "https://aiofilm.click/wp-content/uploads/2022/04/image_2022-04-21_053811823.jpg",
    rating: 7.3,
    director: "Christopher Nolan",
    genre: "fantasy",

    plot: "دو جاسوس بین‌المللی حرفه‌ای برای جلوگیری از وقوع جنگ جهانی سوم، درگیر ماجرا و توطئه‌ای پیچیده می‌شوند؛ از جمله یک فناوری بی‌مانند که امکان وارونگی زمان را به بشر داده‌ است.",
    dl_link:
      "https://dl3.rostam.top/film/2020/Tenet/Tenet.%5BSS%5D%5B720%5D%5Bx265%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3014,
    title: "El Camino: A Breaking Bad Movie ",
    year: 2019,
    img: "https://aiofilm.click/wp-content/uploads/2023/03/image_2023-03-12_080011584.jpg",
    rating: 7.3,
    director: " Vince Gilligan",
    genre: "action",

    plot: "جسی پینکمن پس از آنکه موفق می‌شود از چنگ جک و دار و دسته‌اش بگریزد، باید با پلیس و آشفتگی‌های درونی خود هم کنار بیاید…",
    dl_link:
      "https://dl6.rostam.top/movie/2019/El%20Camino%20-%20A%20Breaking%20Bad%20Movie/El%20Camino%20-%20A%20Breaking%20Bad%20Movie.%5BSS%5D%5B720%5D%5Bx265%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3015,
    title: "Ip Man 4: The Finale",
    year: 2019,
    img: "https://aiofilm.click/wp-content/uploads/2022/09/image_2022-09-18_185554119.jpg",
    rating: 7.0,
    director: "Wilson Yip",
    genre: "action",

    plot: "ایپ من استاد کنگ‌فو به آمریکا سفر می‌کند ، جایی که شاگردش با باز کردن یک آموزشگاه هنرهای رزمی به نام وینگ چان ، موجب ناراحتی جامعه‌ی محلی هنرهای رزمی شده است و…    ",
    dl_link:
      "https://dl4.rostam.top/Movie/2019/Ip%20Man%204/Ip%20Man%204%202019.%5BSS%5D%5B720%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3016,
    title: "John Wick: Chapter 3 – Parabellum",
    year: 2019,
    img: "https://aiofilm.click/wp-content/uploads/2022/06/John-Wick-Chapter-3-Parabellum.jpg",
    rating: 7.4,
    director: "Chad Stahelski",
    genre: "action",

    plot: "جان ویک پس از قتل یکی از اعضای اتحادیه‌ی آدمکشان بین‌المللی، فراری شده و با جایزه‌ی ۱۴ میلیون دلاری که برای سرش تعیین کرده‌اند، همه جا هدف حملات خلافکاران است…",
    dl_link:
      "https://dl3.rostam.top/film/2019/John%20Wick%20Chapter%203%20Parabellum/John.Wick.Chapter.3.Parabellum.2019.Farsi.Dubbed%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3017,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    img: "https://aiofilm.click/wp-content/uploads/2022/03/image_2022-03-01_171149.jpg",
    rating: 8.3,
    director: "Bob Persichetti Peter Ramsey Rodney Rothman",
    genre: "fantasy",
    plot: "مایلز مورالز یک نوجوان اهل محله بروکلین شهر نیویورک است. پیتر پارکر در دنیای مایلز از دنیا رفته اما مایلز متوجه می‌شود که پیتر پارکر دیگری در بعد دیگری وجود دارد و از او درخواست می‌کند تا به او آموزش دهد که او چگونه به مرد عنکبوتی تبدیل شود …",
    dl_link:
      "https://dl3.rostam.top/film/2018/Spider-Man%20Into%20The%20Spider-Verse/Spider-Man%20Into%20The%20Spider-Verse.%5BSS%5D%5B720%5D%5BAioFilm.com%5D.mp4",
  },
  {
    id: 3018,
    title: "John Wick: Chapter 2",
    year: 2017,
    img: "https://aiofilm.click/wp-content/uploads/2022/06/John-Wick-Chapter-2.jpg",
    rating: 7.4,
    director: " Chad Stahelski",
    genre: "action",
    plot: "در این قسمت “جان ویک” برای پرداخت یک بدهی دوباره به دنیای جرم و جنایات زیر زمینی بازمیگردد و همانجا متوجه می شود که جایزه‌ی بزرگی برای مرگش در نظر گرفته اند…    ",
    dl_link:
      "https://dl3.rostam.top/film/2017/John%20Wick%20Chapter%202/John.Wick.Chapter.2.2017.Farsi.Dubbed%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3019,
    title: "La La Land",
    year: 2016,
    img: "https://aiofilm.click/wp-content/uploads/2022/01/image_2022-01-09_074310.jpg",
    rating: 8.0,
    genre: "fantasy",
    director: "Damien Chazelle",
    plot: "میا (اِما استون) یک بازیگر جوان است که منتظر است تا یک موفقیت بزرگ نصیبش شود و تبدیل به ستاره ای دست نیافتنی در هالیوود شود. میا در مسیر رسیدن به موفقیتش با یک نوازنده پیانو به نام سباستین (رایان گسلینگ) آشنا می شود. آشنایی میا و سباستین منجر به ایجاد عشقی رویایی میان آنها شده اما در ادامه عشق آنها دچار چالش هایی می شود…",
    dl_link:
      "https://dl2.rostam.top/film/2016/La%20La%20Land/La%20La%20Land.%5BSS%5D%5B720%5D%5BAioFilm.com%5D.mp4",
  },
  {
    id: 3020,
    title: "John Wick",
    year: 2014,
    img: "https://aiofilm.click/wp-content/uploads/2022/06/John-Wick.jpg",
    rating: 7.4,
    genre: "action",
    director: "Chad Stahelski",
    plot: "مردی به نام جان ویک که پس از ازدواج با همسرش، شغل آدم‌کشی را رها کرده‌است، برای از پای درآوردن گانگسترهایی که سگش را به قتل رسانده‌اند، از هیچ تلاشی فروگذار نمی‌کند و…    ",
    dl_link:
      "https://dl3.rostam.top/film/2014/John%20Wick/John.Wick.2014.Farsi.Dubbed%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3021,
    title: "The Hobbit: The Battle of the Five Armies",
    year: 2014,
    img: "https://aiofilm.click/wp-content/uploads/2022/05/The-Hobbit-The-Battle-of-the-Five-Armies.jpg",
    rating: 7.4,
    genre: "fantasy",
    director: "Peter Jackson",
    plot: "Peter Jackson",
    dl_link:
      "https://dl3.rostam.top/film/2014/The%20Hobbit%20The%20Battle%20of%20the%20Five%20Armies/The.Hobbit.The.Battle.of.the.Five.Armies.2014.Farsi.Dubbed%5B720p%5D%5BAioFilm.com%5D.mkv.mkv",
  },
  {
    id: 3022,
    title: "The Hobbit: An Unexpected Journey",
    year: 2012,
    img: "https://aiofilm.click/wp-content/uploads/2022/05/The-Hobbit-An-Unexpected-Journey.jpg",
    rating: 7.8,
    genre: "fantasy",
    director: "Peter Jackson",
    plot: "داستان این فیلم قبل از سه گانه ارباب حلقه ها اتفاق می‌افتد و نوعی پیش‌درآمد بر آن مجموعه فیلم است. بیلبو بگینز (مارتین فریمن) شخصیت اصلی داستان برای پیدا کردن گنجینه ی اژدهایی بنام اسماگ، در سفری پرماجرا با گندالف (یان مک کلن) و گروهی از دورف ها (کوتوله ها) همراه می‌شود…    ",
    dl_link:
      "https://dl3.rostam.top/film/2012/The%20Hobbit%20An%20Unexpected%20Journey/The.Hobbit.An.Unexpected.Journey.2012.Farsi.Dubbed%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3022,
    title: "How to Train Your Dragon",
    year: 2010,
    img: "https://aiofilm.click/wp-content/uploads/2022/06/How-to-Train-Your-Dragon.jpg",
    rating: 8.1,
    genre: "fantasy",
    director: "Chris Sanders",
    plot: "یک وایکینگ جوان که علاقه زیادی به شکار اژدها دارد، اما بر خلاف انتظار خودش با یک اژدهای جوان دوست می شود و …    ",
    dl_link:
      "https://dl3.rostam.top/film/2010/How%20to%20Train%20Your%20Dragon/How.to.Train.Your.Dragon.2010%5B720p%5D%5BAioFilm.com%5D.mp4",
  },
  {
    id: 3023,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    img: "https://aiofilm.click/wp-content/uploads/2021/09/The-Lord-of-the-Rings-The-Fellowship-of-the-Ring.jpg",
    rating: 8.8,
    genre: "action",
    director: "Peter Jackson",
    plot: "یک حلقه‌ی باستانی که قرن‌ها پیش گم گشته بود، حالا دوباره پیدا شده و از دست تقدیر، به هابیتی جوان بنام فرودو رسیده است. وقتی که گندالف می‌فهمد که این حلقه، همان حلقه یگانه ارباب تاریکی، سائورون است، فرودو مجبور می‌شود این حلقه را به کوه نابودی برده و آن را از بین ببرد. با این وجود او تنها نمی‌رود و در این راه هشت یار دیگر به او در انجام ماموریتش کمک می کنند. یاران حلقه باید از میان کوه‌ها، جنگل‌ها، برف و بوران و تاریکی عبور کنند و با نیروهای شرور تاریکی در میان راهشان مقابله کنند. موفقیت آن‌ها در این ماموریت سخت، تنها امید برای خاتمه دادن به دوران حکومت ارباب تاریکی است…",
    dl_link:
      "https://dl.rostam.top/film/2001/The%20Lord%20of%20the%20Rings%20The%20Fellowship%20of%20the%20Ring/The.Lord.of.the.Rings.The.Fellowship.of.the.Ring.2001%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3024,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    img: "https://aiofilm.click/wp-content/uploads/2021/09/The-Lord-of-the-Rings-The-Return-of-the-King.jpg",
    rating: 8.9,
    genre: "action",
    director: "Peter Jackson",
    plot: "فرودو و سم با راهنمایی گالوم، به مسیرشان به سمت کوه نابودی ادامه میدهند، در حالی که مطمئن نیستند او به چه سمتی هدایتشان می کند. باقیمانده یاران حلقه، مردم گاندور و روهان را در نبردی عظیم علیه نیروهای سائورون، یاری می کنند.",
    dl_link:
      "https://dl.rostam.top/film/2003/The%20Lord%20of%20the%20Rings%20The%20Return%20of%20the%20King/The.Lord.of.the.Rings.The.Return.of.the.King.2003%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3025,
    title: "Talk to Me",
    year: 2022,
    img: "https://aiofilm.click/wp-content/uploads/2023/09/Talk-to-Me.jpg",
    rating: 7.4,
    genre: "horror",
    director: "Danny Philippou",
    plot: "هنگامی که گروهی از دوستان متوجه می شوند که چگونه با استفاده از یک دست مومیایی شده، ارواح را تداعی کنند، در هیجان جدید گیر می کنند، تا زمانی که یکی از آنها زیاده روی می کند و نیروهای ماوراء طبیعی وحشتناک را آزاد می کند.",
    dl_link:
      "https://dl6.rostam.top/movie/2022/Talk%20to%20Me/Talk.to.Me.2022%5B720p%5D%5BSS%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3026,
    title: "The Dark Knight",
    year: 2008,
    img: "https://aiofilm.click/wp-content/uploads/2021/09/The-Dark-Knight.jpg",
    rating: 9,
    genre: "action",
    director: "Christopher Nolan",
    plot: "بتمن به کمک سرگرد جیم گوردون و دادستان جدید هاروی دنت، شهر را از وجود آخرین خانواده‌های تبهکاری پاک می کند. همکاری این سه نفر ظاهرا موثر واقع میشود، اما طولی نمی کشد که خود را در مقابل هرج و مرج های یک تبهکار نو پا بنام جوکر، عاجز می‌بینند.",
    dl_link:
      "https://dl.rostam.top/film/2008/The%20Dark%20Knight/The.Dark.Knight.2008%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3027,
    title: "The Dark Knight Rises",
    year: 2012,
    img: "https://aiofilm.click/wp-content/uploads/2021/09/The-Dark-Knight-Rises.jpg",
    rating: 8.4,
    genre: "action",
    director: "Christopher Nolan",
    plot: "هشت سال بعد از اینکه بتمن تمام جنایت‌های هاروی دنت را گردن میگیرد، رهبر گروهی از تروریست ها بنام بین، شهر گاتهام را ویران می‌کند و اینگونه است که شوالیه تاریکی برای محافظت از شهر باز می‌گردد…",
    dl_link:
      "https://dl.rostam.top/film/2012/The%20Dark%20Knight%20Rises/The.Dark.Knight.Rises.2012%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3028,
    title: "The Suicide Squad ",
    year: 2021,
    img: "https://aiofilm.click/wp-content/uploads/2021/09/The-Suicide-Squad.jpg",
    rating: 7.4,
    genre: "action",
    director: "James Gunn",
    plot: "زندانیان سابق که حالا از شر ریموت کنترل کننده خلاص شده‌اند، با یکدیگر متحد می‌شوند تا با تهدیدی جدید مواجه شوند که…    ",
    dl_link:
      "https://dl.rostam.top/film/2021/The%20Suicide%20Squad/The.Suicide.Squad%5B720%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3029,
    title: "Extraction ",
    year: 2020,
    img: "https://aiofilm.click/wp-content/uploads/2021/10/image_2021-10-14_223842.png",
    rating: 6.7,
    genre: "action",
    director: "Sam Hargrave",
    plot: "فیلم استخراج Extraction : درباره یک مزدور بی‌باک بازار سیاه به نام تایلر راک است که یک روز از او درخواست می شود از مهارت های خود برای نجات فرزند ربوده شده یک جنایتکار بین الملل ی استفاده کند. حالا مرگبارترین ماموریت شغلی‌اش آغاز می‌شود و…",
    dl_link:
      "https://dl.rostam.top/film/2020/Extraction/Extraction.%5BSS%5D%5B720%5D%5BAioFilm.com%5D.mp4",
  },
  {
    id: 3030,
    title: "Spider-Man: Far From Home",
    year: 2019,
    img: "https://aiofilm.click/wp-content/uploads/2021/11/Spider-Man-Far-from-Home.jpg",
    rating: 7.4,
    genre: "action",
    director: "Jon Watts",
    plot: "پس از حوادث فیلم “انتقام جویان: پایان بازی”، مرد عنکبوتی باید برای از بین بردن تهدیدات جدید، در دنیایی که برای همیشه تغییر کرده‌ است قدم بردارد.    ",
    dl_link:
      "https://dl.rostam.top/film/2019/Spider-Man%3A%20Far%20From%20Home/Spider-Man.Far.from.Home.2019%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3031,
    title: "Insidious: The Red Door ",
    year: 2023,
    img: "https://aiofilm.click/wp-content/uploads/2023/08/insidious-the-red-door.jpg",
    rating: 5.6,
    genre: "horror",
    director: "Patrick Wilson",
    plot: "لامبرت ها باید بیشتر از همیشه به The Further بروند تا شیاطین خود را یک بار برای همیشه آرام کنند.",
    dl_link:
      "https://dl6.rostam.top/movie/2023/Insidious%20The%20Red%20Door/Insidious.The.Red.Door.2023%5BSS%5D%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3032,
    title: "Spider-Man: Homecoming ",
    year: 2017,
    img: "https://aiofilm.click/wp-content/uploads/2021/11/Spider-Man-Homecoming.jpg",
    rating: 7.4,
    genre: "action",
    director: "Jon Watts",
    plot: "پیتر پارکر پس از تجربه ای که با گروه انتقام جویان داشت به خانه بازمیگردد تا با عمه‌ی خود زندگی کند. او در همین حال که تحت نظر مربی اش تونی استارک است، سعی میکند با هویت تازه اش کنار بیاید…    ",
    dl_link:
      "https://dl.rostam.top/film/2017/Spider-Man%3A%20Homecoming/Spider.Man.Homecoming.2017%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3033,
    title: "Thor: The Dark World",
    year: 2013,
    img: "https://aiofilm.click/wp-content/uploads/2021/11/Thor-The-Dark-World.jpg",
    rating: 6.8,
    genre: "action",
    director: "Alan Taylor",
    plot: "بعد از اینکه جین فاستر مورد تهدید ساکنان دنیای تاریک سارتالفیم قرار می گیرد، تور آماده می شود تا به زمین بازگشته و به هر قیمتی از جان او محافظت کند…    ",
    dl_link:
      "https://dl.rostam.top/film/2013/Thor%3A%20The%20Dark%20World/Thor.The.Dark.World.2013.Farsi.Dubbed%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3034,
    title: "If I Can’t Have Love, I Want Power ",
    year: 2021,
    img: "https://aiofilm.click/wp-content/uploads/2021/10/If-I-Cant-Have-Love-I-Want-Power.jpg",
    rating: 7.6,
    genre: "horror",
    director: "Colin Tilley",
    plot: "اگر من نمی توانم عشق داشته باشم ، من قدرت می خواهم ، یک فیلم سینمایی یک ساعته با موسیقی آلبوم آینده Halsey ، یک ملکه باردار جوان ، لیلا را معرفی می کند ، در حالی که او با خفه کننده عشق دست و پنجه نرم می کند تا در نهایت این توانایی را کشف کند.",
    dl_link:
      "https://dl.rostam.top/film/2021/If%20i%20Cant%20Have%20Love%20I%20Want%20Power/If.I.Cant.Have.Love.I.Want.Power.2021%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3035,
    title: "The Night House",
    year: 2020,
    img: "https://aiofilm.click/wp-content/uploads/2021/10/The-Night-House.jpg",
    rating: 6.9,
    genre: "horror",
    director: "David Bruckner",
    plot: "یک بیوه شروع به کشف اسرار شومی از شوهرش می کند که اخیرا فوت کرده است و…    ",
    dl_link:
      "https://dl.rostam.top/film/2020/The%20Night%20House/The.Night.House.2020%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3036,
    title: "Halloween Kills",
    year: 2021,
    img: "https://aiofilm.click/wp-content/uploads/2021/10/Halloween-Kills.jpg",
    rating: 7.7,
    genre: "horror",
    director: "David Gordon Green",
    plot: "هالووین می‌کشد یک فیلم اسلشر آمریکایی به کارگردانی دیوید گوردون گرین و نویسندگی گیرن، دنی مک‌براید و اسکات تیمز است. این دنباله فیلم ۲۰۱۸ هالووین و قسمت دوازدهم فرنچایز مجموعه هالووین است. در فیلم ستارگانی از جمله جیمی لی کرتیس، نیک کسل تکرار نقش خود را به عنوان لوری استرود و مایکل مایرز به تصویر می‌کشند.",
    dl_link:
      "https://dl.rostam.top/film/2021/Halloween%20Kills/Halloween.Kills.2021%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3037,
    title: "Spirited ",
    year: 2022,
    img: "https://aiofilm.click/wp-content/uploads/2022/11/Spirited.jpg",
    rating: 6.6,
    genre: "comedy",
    director: "Sean Anders",
    plot: "نسخه ای موزیکال از داستان چارلز دیکنز درباره یک انسان دوست خسیس که به سفری جادویی برده می شود.    ",
    dl_link: "",
  },
  {
    id: 3038,
    title: "Bullet Train",
    year: 2022,
    img: "https://aiofilm.click/wp-content/uploads/2022/11/Bullet-Train.jpg",
    rating: 7.3,
    genre: "comedy",
    director: "David Leitch",
    plot: "پنج آدمکش در قطاری سریع السیر متوجه می‌شوند که در ماموریتشان نقاط مشترکی وجود دارد.    ",
    dl_link:
      "https://dl4.rostam.top/Movie/2022/Bullet%20Train/Bullet.Train.2022.REPACK.Farsi.Dubbed%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3039,
    title: "Jungle Cruise",
    year: 2021,
    img: "https://aiofilm.click/wp-content/uploads/2021/09/Jungle-Cruise.jpg",
    rating: 6.6,
    genre: "comedy",
    director: "Jaume Collet-Serra",
    plot: "دکتر «لیلی هاوتن» شخصی به نام «فرانک ولف» را استخدام می‌کند تا او را با استفاده از قایقش به اعماق آمازون ببرد. در کنار یک‌دیگر، آنها به دنبال یک درخت باستانی که می‌تواند آینده علم پزشکی را تغییر دهد، می‌گردند اما…    ",
    dl_link:
      "https://dl.rostam.top/film/2021/Jungle%20Cruise/Jungle.Cruise.2021%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3040,
    title: "Se7en ",
    year: 1995,
    img: "https://aiofilm.click/wp-content/uploads/2022/05/Se7en.jpg",
    rating: 8.6,
    genre: "",
    director: "David Fincher",
    plot: "جان دوو قاتلی است که تصمیم گرفته است هفت نفر را که نماد هفت گناه کبیره هستند به قتل برساند. هدف او از این کار هشدار دادن به انسانهایی است که غرق در گناه روز خود را به شب می رسانند. مسئول پرونده این قتلها دیوید میلز است، کاراگاه جوانی که تازه به نیویورک منتقل شده است. میلز با همکاری کاراگاه سامرست که در شرف بازنشستگی است قدم به قدم دوو را تعقیب می کنند اما حوادثی رخ می دهد که شرایط را تغییر می دهد. تغییری اساسی…",
    dl_link:
      "https://dl3.rostam.top/film/1995/Se7en/Se7en.1995.REMASTERED%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3041,
    title: "Léon ",
    year: 1994,
    img: "https://aiofilm.click/wp-content/uploads/2022/05/Leon.jpg",
    rating: 8.5,
    genre: "action",
    director: "Luc Besson",
    plot: "آدم کشی حرفه ای به نام “لئون” در آپارتمانی در محله ی ایتالیایی های نیویورک زندگی می کند. “استانسفیلد”، مأمور فاسد پلیس، تمام خانواده ی همسایه را می کشد و تنها دختر دوازده ساله شان، “ماتیلدا” که برای خرید بیرون رفته جان سالم به در می برد.”ماتیلدا” به “لئون” پناه می برد و خیلی زود این دو با یک دیگر دوست می شوند…",
    dl_link:
      "https://dl3.rostam.top/film/1994/Leon%20The%20Professional/Leon%20The%20Professional.%5BSS%5D%5B720%5D%5BAioFilm.com%5D.mp4",
  },
  {
    id: 3042,
    title: "Goodfellas",
    year: 1990,
    img: "https://aiofilm.click/wp-content/uploads/2022/05/Goodfellas.jpg",
    rating: 8.7,
    genre: "",
    director: "Martin Scorsese",
    plot: "این فیلم داستانِ زندگی «هنری هیل» یک خلافکار و روابطش با همسرش «کارن هیل» و همدستانش «جیمی کانوی» و «تامی دویتو» در یک سندیکای خلافکاریِ ایتالیایی-آمریکایی را برای ما روایت می‌کند.",
    dl_link:
      "https://dl3.rostam.top/film/1990/Goodfellas/Goodfellas.1990%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3043,
    title: "Forrest Gump",
    year: 1994,
    img: "https://aiofilm.click/wp-content/uploads/2022/05/Forrest-Gump.jpg",
    rating: 8.8,
    genre: "",
    director: "Robert Zemeckis",
    plot: "داستان این فیلم درباره‌ی فردی به نام «فورست گامپ» می‌باشد که روی نیمکت نشسته و منتظر اتوبوس است. او در همانجا، برای افراد مختلف، گوشه‌هایی از داستان زندگی خود را نیز تعریف می‌کند که مصادف با اتفاقات مهم دوران تاریخی آمریکا نیز می‌باشد.",
    dl_link:
      "https://dl3.rostam.top/film/1994/Forrest%20Gump/Forrest.Gump.1994.Farsi.Dubbed%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3044,
    title: "Fight Club",
    year: 1999,
    img: "https://aiofilm.click/wp-content/uploads/2021/10/Fight-Club.jpg",
    rating: 8.8,
    genre: "",
    director: "David Fincher",
    plot: "راوی، جوانی پریشان حال پی می برد که به کمک مشت بازی با دست های برهنه، بیش از هر زمان دیگری احساس زنده بودن می کند. او و تایلر دردن که به دوستانی صمیمی تبدیل شده اند، هفته ای یک بار با هم ملاقات می کنند تا با هم مشت بازی کنند. در حالی که افراد دیگری هم به باشگاه شان می پیوندند، محفل شان به رغم آن که رازی است بین شرکت کننده هایش، شهرت و محبوبیت یک باشگاه زیرزمینی را پیدا می کند.    ",
    dl_link:
      "https://dl.rostam.top/film/1999/Fight%20Club/Fight.Club.1999%5B720p%5D%5BAioFilm.com%5D.mkv",
  },
  {
    id: 3045,
    title: "A Better Tomorrow",
    year: 1986,
    img: "https://aiofilm.click/wp-content/uploads/2022/03/image_2022-03-01_134322.jpg",
    rating: 7.4,
    genre: "action",
    director: "John Woo",
    plot: "فردایی بهتر؛ فیلمی اکشن به کارگردانی جان وو است. داستان دو برادر است.یکی از آنها جاعلی موفق و دیگری فارغ التحصیل آکادمی پلیس هنگ کنگ است. وقتی برادر کوچکتر متوجه می شود که برادر دیگرش تبهکار است تلاش می کند او را اصلاح کند اما…",
    dl_link:
      "https://dl2.rostam.top/film/1986/A%20Better%20Tomorrow/A%20Better%20Tomorrow.%5BBluRay%5D%5B720%5D%5BAioFilm.com%5D.mp4",
  },
];
const allFilms = [...newFilmsArray, ...seriesData];

const urlParams = new URLSearchParams(window.location.search);
const navLinkId = urlParams.get("id");

// nav links
navAtags.forEach((tag) => {
  tag.addEventListener("click", () => {
    window.location.href = `search.html?id=${tag.className}`;
  });
});
mobileMenuATags.forEach((tag) => {
  tag.addEventListener("click", () => {
    window.location.href = `search.html?id=${tag.className}`;
  });
});
footerLinks.forEach((tag) => {
  tag.addEventListener("click", () => {
    window.location.href = `search.html?id=${tag.className}`;
  });
});

function addNewFilms(array, where) {
  array.map((film) => {
    const { img, title, rating, id, year } = film;
    let isSeries = film.id > 5000;
    return (where.innerHTML += `
    <div class="film-card">
          <img src=${isSeries ? `assets/series/${img}` : `${img}`} alt="" />
          <div class="film-details">
            <div class="film-title">${title} ${!isSeries ? year : ""}</div>
            <div class="film-rating">
              <span>${rating}</span>
              <img src="assets/imdb.png" alt="" />
            </div>
            <a href="#" id="${id}">دانلود فیلم</a>
          </div>
          </div>
  `);
  });
}
function addNewFilmsBasedOnGenre(genreNumber) {
  let thisFilm = newFilmsArray.filter((film) => film.genre == genreNumber);
  addNewFilms(thisFilm, searchContainer);
}
// ==================== SLIDER ========================
function sliderFunction(whereto) {
  const sliderImages = whereto.querySelectorAll(".film-details img");
  const arrowButtons = whereto.parentElement.querySelectorAll(".arrow");
  const firstCardWidth = whereto.querySelector(".film-card").offsetWidth;

  // slider buttons
  arrowButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let leftArrow = button.classList.contains("fa-chevron-left");
      let thisSlider = e.target.parentElement.querySelector(".film-slider");
      thisSlider.scrollLeft += leftArrow ? -firstCardWidth : firstCardWidth;
    });
  });

  // make imdb images undraggable
  sliderImages.forEach((image) => (image.draggable = false));

  // dragging the slider
  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutID;

  const dragStart = (e) => {
    isDragging = true;
    startX = e.pageX;
    startScrollLeft = whereto.scrollLeft;
    whereto.classList.add("dragging");
  };
  const dragging = (e) => {
    if (!isDragging) return;
    whereto.scrollLeft = startScrollLeft - (e.pageX - startX);
  };
  const dragStop = () => {
    isDragging = false;
    whereto.classList.remove("dragging");
  };

  // infinite scroll
  const sliderChildren = [...whereto.children];
  let cardPerView = Math.round(whereto.offsetWidth / firstCardWidth);
  sliderChildren
    .slice(-cardPerView)
    .reverse()
    .forEach((card) => {
      whereto.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

  sliderChildren.slice(0, cardPerView).forEach((card) => {
    whereto.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  const infiniteScroll = () => {
    if (whereto.scrollLeft === 0) {
      whereto.classList.add("no-transition");
      whereto.scrollLeft = -(whereto.scrollWidth - 2 * whereto.offsetWidth);
      whereto.classList.remove("no-transition");
    } else if (
      Math.abs(whereto.scrollLeft) >=
      whereto.scrollWidth - whereto.offsetWidth - 10
    ) {
      whereto.classList.add("no-transition");
      whereto.scrollLeft = whereto.offsetWidth;
      whereto.classList.remove("no-transition");
    }
  };

  // autoplay
  const autoplay = () => {
    if (window.innerWidth < 800) return;
    timeoutID = setInterval(() => {
      whereto.scrollLeft -= firstCardWidth;
    }, 2000);
  };
  autoplay();
  // event listeners
  whereto.addEventListener("mousedown", dragStart);
  document.addEventListener("mouseup", dragStop);
  whereto.addEventListener("mousemove", dragging);
  whereto.addEventListener("scroll", infiniteScroll);
  whereto.parentElement.addEventListener("mouseover", () =>
    clearInterval(timeoutID)
  );
  whereto.addEventListener("mouseleave", autoplay);
}
// show navigation sub-links
navLinks.forEach((link) => {
  const icon = link.querySelector(".fa-chevron-down");
  const subLinks = link.querySelector(".sub-nav-links");

  link.addEventListener("mouseover", () => {
    if (icon) {
      icon.style.transform = "rotate(180deg)";
      subLinks.style.opacity = "1";
      subLinks.style.top = "100%";
      subLinks.style.pointerEvents = "all";
    }
  });

  link.addEventListener("mouseout", () => {
    if (icon) {
      icon.style.transform = "rotate(0deg)";
      subLinks.style.opacity = "0";
      subLinks.style.top = "130%";
      subLinks.style.pointerEvents = "none";
    }
  });
});
// ==================== FILTER YEAR ============================
function extractFilmYear(year) {
  let yearBefore1990 = newFilmsArray.filter((film) => film.year < 1990);
  let year1990till2010 = newFilmsArray.filter(
    (film) => film.year >= 1990 && film.year <= 2010
  );
  let year2011till2020 = newFilmsArray.filter(
    (film) => film.year >= 2011 && film.year <= 2020
  );
  let year2021 = newFilmsArray.filter((film) => film.year == 2021);
  let year2022 = newFilmsArray.filter((film) => film.year == 2022);
  let year2023 = newFilmsArray.filter((film) => film.year == 2023);

  let array;
  switch (year) {
    case 1990:
      array = yearBefore1990;
      break;
    case 2000:
      array = year1990till2010;
      break;
    case 2011:
      array = year2011till2020;
      break;
    case 2021:
      array = year2021;
      break;
    case 2022:
      array = year2022;
      break;
    case 2023:
      array = year2023;
      break;
  }

  addNewFilms(array, searchContainer);

  const downloadButtons = document.querySelectorAll(".film-details a");
  downloadButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `details.html?id=${btn.id}`;
    });
  });
}
// ===================== SEARCH ALL FILMS ============================
navSearchSection.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = searchInput.value.toLowerCase();
  window.location.href = `search.html?search=${value}`;
  searchInput.value = "";
});
// ===================== SEARCH MOBILE ============================
function searchFilmsMobile() {
  if (window.innerWidth < 900) {
    searchIcon.addEventListener("click", (e) => {
      if (navSearchSection.clientWidth < 50) e.preventDefault();
      navSearchSection.classList.add("active");
      searchInput.focus();
    });
  }
  searchInput.addEventListener("blur", () => {
    if (searchInput.value.length == 0) {
      navSearchSection.classList.remove("active");
    }
  });
}
searchFilmsMobile();
// ===================== MOBILE MENU ============================

mobileMenuIcon.addEventListener("click", showMobileMenu);
mobileMenuCloseIcon.addEventListener("click", hideMobileMenu);
overlay.addEventListener("click", hideMobileMenu);

function showMobileMenu() {
  overlay.style.display = "block";
  overlay.style.zIndex = "100";
  mobileMenuList.style.transform = "translateX(0)";
}
function hideMobileMenu() {
  overlay.style.display = "none";
  mobileMenuList.style.transform = "translateX(100%)";
}

function removeMobileActive() {
  mobileMenuItems.forEach((item) => {
    item.parentElement.classList.remove("active");
  });
}

mobileMenuItems.forEach((item) => {
  let menuName = item.parentElement;
  menuName.addEventListener("click", () => {
    removeMobileActive();
    menuName.classList.add("active");
  });
});
