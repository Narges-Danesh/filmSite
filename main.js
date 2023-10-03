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
const filmPlotTranslation = [
  {
    id: 4,
    plot: "هنگامی که تهدیدی که به نام جوکر نامیده می شود ویرانی و هرج و مرج را بر سر مردم گاتهام ایجاد می کند، صلیبی شنل پوش باید با یکی از بزرگترین آزمون های روانشناختی توانایی خود در مبارزه با بی عدالتی کنار بیاید.",
  },
  {
    id: 8,
    plot: "گندالف و آراگورن، دنیای انسان‌ها را در مقابل ارتش سائورون رهبری می‌کنند تا نگاه او را از فرودو و سام در حالی که با حلقه یگانه به کوه عذاب نزدیک می‌شوند، جلب کنند.",
  },
  {
    id: 11,
    plot: "یک هابیت فروتن از شایر و هشت همراهش برای نابودی حلقه قدرتمند وان و نجات زمین میانه از دست ارباب تاریکی سائورون راهی سفر می شوند.",
  },
  {
    id: 12,
    plot: "پس از اینکه شورشیان به طور وحشیانه ای توسط امپراتوری در پایگاه تازه تأسیس خود غلبه کردند، لوک اسکای واکر به آموزش جدی جدی با استاد یودا می گذرد، در حالی که دوستانش توسط دارث ویدر به عنوان بخشی از نقشه او برای دستگیری لوک تعقیب می شوند.",
  },
  {
    id: 13,
    plot: "فارست گامپ، اگرچه باهوش نیست، اما به طور تصادفی در بسیاری از لحظات تاریخی حضور داشته است، اما عشق واقعی او، جنی کوران، از او فرار می کند.",
  },
  {
    id: 14,
    plot: "دزدی که اسرار شرکت را با استفاده از فناوری به اشتراک گذاری رویا می دزدد، وظیفه معکوس ایجاد یک ایده در ذهن یک مدیر عامل را بر عهده دارد.",
  },
  {
    id: 15,
    plot: "در حالی که فرودو و سام با کمک گولوم شیطون به موردور نزدیک‌تر می‌شوند، گروه دوپاره در برابر متحد جدید سائورون، سارومان، و انبوهی از ایزنگارد او ایستادگی می‌کنند.",
  },
  {
    id: 18,
    plot: "یک هکر رایانه از شورشیان مرموز در مورد ماهیت واقعی واقعیت خود و نقش خود در جنگ علیه کنترل‌کنندگان آن اطلاعات می‌گیرد.",
  },
  {
    id: 19,
    plot: "دهکده ای فقیر که مورد حمله راهزنان قرار گرفته است، هفت سامورایی بیکار را برای کمک به دفاع از خود استخدام می کند.",
  },
  {
    id: 20,
    plot: "لوک اسکای واکر با یک شوالیه جدی، یک خلبان خودسر، یک ووکی و دو دروید به نیروهای خود می‌پیوندد تا کهکشان را از ایستگاه نبرد ویرانگر جهان امپراتوری نجات دهد، در حالی که تلاش می‌کند شاهزاده خانم لیا را از شر دارث ویدر نجات دهد.",
  },
  {
    id: 24,
    plot: "فرشته ای به یک تاجر دلسوز اما ناامید کمک می کند و نشان می دهد که اگر هرگز وجود نداشت، زندگی چگونه بود.",
  },
  {
    id: 26,
    plot: "هنگامی که یک کتابدار یهودی با ذهن باز و پسرش قربانی هولوکاست می شوند، او از ترکیبی عالی از اراده، شوخ طبعی و تخیل برای محافظت از پسرش در برابر خطرات اطراف اردوگاهشان استفاده می کند.",
  },
  {
    id: 29,
    plot: "پس از فرود نرماندی، گروهی از سربازان آمریکایی به پشت خطوط دشمن می روند تا چتربازی را که برادرانش در عملیات کشته شده اند، پس بگیرند.",
  },
  {
    id: 34,
    plot: "یک منشی فینیکس 40000 دلار از مشتری کارفرمایش اختلاس می کند، فرار می کند و به متل دورافتاده ای که توسط مرد جوانی تحت سلطه مادرش اداره می شود مراجعه می کند.",
  },
  {
    id: 35,
    plot: "با کمک یک ولگرد بی نظم ثروتمند، یک ولگرد چشم شبنم که عاشق یک دختر گل بی بینا شده است، پول جمع می کند تا بتواند از نظر پزشکی به او کمک کند.",
  },
  {
    id: 36,
    plot: "زندگی نگهبانان در محکومیت مرگ تحت تأثیر یکی از اتهامات آنها قرار می گیرد: مرد سیاه پوستی که متهم به قتل و تجاوز به کودک است، اما هدیه ای مرموز دارد.",
  },
  {
    id: 37,
    plot: "ایندیانا جونز باستان شناس و ماجراجو توسط دولت ایالات متحده استخدام می شود تا صندوقچه عهد را در برابر نازی ها بیابد.",
  },
  {
    id: 38,
    plot: "بعد از اینکه یک اشراف زاده در اثر تصادف با پاراگلایدر چهار پلژیک می شود، مرد جوانی را از پروژه ها استخدام می کند تا مراقب او باشد.",
  },
  {
    id: 39,
    plot: "ولگرد برای زندگی در جامعه صنعتی مدرن با کمک یک زن جوان بی خانمان تلاش می کند.",
  },
  {
    id: 41,
    plot: "یک سایبورگ، مشابه کسی که نتوانست سارا کانر را بکشد، اکنون باید از پسر جوانش، جان کانر، در برابر یک سایبورگ پیشرفته‌تر، ساخته شده از فلز مایع محافظت کند.",
  },
  {
    id: 44,
    plot: "مارتی مک فلای، دانش آموز 17 ساله دبیرستانی، به طور تصادفی در سفری در زمان دلورین که توسط دوست نزدیکش، دانشمند بدجنس داک براون، اختراع شده بود، 30 سال به گذشته فرستاده می شود.",
  },
  {
    id: 46,
    plot: "هنگامی که یک ژنرال رومی مورد خیانت قرار می گیرد و خانواده اش توسط پسر فاسد یک امپراتور به قتل می رسد، او به عنوان یک گلادیاتور به رم می آید تا انتقام بگیرد.",
  },
  {
    id: 51,
    plot: "پس از اینکه یک کشتی تجاری فضایی یک انتقال ناشناخته را به عنوان تماس پریشان درک کرد، فرود آنها بر روی ماه مبدا متوجه می شود که یکی از خدمه مورد حمله یک شکل زندگی مرموز قرار گرفته است. با ادامه سفر خود به زمین با بهبودی خدمه حمله شده و مرگ جانور، آنها به زودی متوجه می شوند که چرخه زندگی آن تازه شروع شده است.",
  },
  {
    id: 52,
    plot: "یک ژنرال دیوانه مسیری را به سوی هولوکاست هسته ای آغاز می کند که اتاق جنگی پر از سیاستمداران و ژنرال ها دیوانه وار سعی می کنند جلوی آن را بگیرند.",
  },
  {
    id: 54,
    plot: "دیکتاتور Adenoid Hynkel سعی می کند امپراتوری خود را گسترش دهد در حالی که یک آرایشگر یهودی فقیر سعی می کند از آزار و اذیت رژیم Hynkel جلوگیری کند.",
  },
  {
    id: 60,
    plot: "خانواده ای برای زمستان به هتلی منزوی می روند که در آن حضور شیطانی و معنوی پدر را تحت تأثیر خشونت قرار می دهد، در حالی که پسر روانی او پیشگویی های وحشتناکی از گذشته و آینده می بیند.",
  },
  {
    id: 64,
    plot: "در سفری برای یافتن درمانی برای نفرین تاتاریگامی، آشیتاکا خود را در میانه جنگ بین خدایان جنگل و تاتارا، مستعمره معدن، می بیند. در این کوئست او با سان، مونونوک هیمه نیز ملاقات می کند.",
  },
  {
    id: 73,
    plot: "پس از نجات هان سولو از کاخ جبا هات، شورشیان تلاش می کنند تا ستاره مرگ دوم را نابود کنند، در حالی که لوک تلاش می کند تا ویدر را از سمت تاریک نیرو بازگرداند.",
  },
  {
    id: 77,
    plot: "آملی دختری بی گناه و ساده لوح در پاریس است که احساس عدالت دارد. او تصمیم می گیرد به اطرافیانش کمک کند و در این راه عشق را کشف می کند.",
  },
  {
    id: 85,
    plot: "هنگامی که رابطه آنها تیره می شود، یک زن و شوهر تحت عملی قرار می گیرند تا یکدیگر را از خاطرات خود پاک کنند. اما تنها از طریق روند از دست دادن است که آنها کشف می کنند که باید با چه چیزی شروع کنند.",
  },
  {
    id: 86,
    plot: "اسباب‌بازی‌ها درست قبل از رفتن اندی به کالج، اشتباهاً به‌جای اتاق زیر شیروانی به یک مرکز مهدکودک تحویل داده می‌شوند، و این وظیفه وودی است که بقیه اسباب‌بازی‌ها را متقاعد کند که رها نشده‌اند و به خانه بازگردند.",
  },
  {
    id: 173,
    plot: "این اولین هفته زمستان در سال 1982 است. یک پایگاه تحقیقاتی آمریکایی توسط یک نیروی بیگانه استقبال می شود، که می تواند هر چیزی را که لمس کند جذب کند. این به اعضا بستگی دارد که زنده بمانند و مطمئن باشند که چه کسی انسان است و چه کسی یکی از چیزها شده است.",
  },
  {
    id: 224,
    plot: "همسر یک مدیر مدرسه بی رحم و معشوقه اش با هم توطئه می کنند تا او را بکشند، اما پس از انجام قتل، جسد او ناپدید می شود و اتفاقات عجیبی شروع به گریبان دو زن می کند.",
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
    genre: "fantasy",
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
    genre: "fantasy",
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
];

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


// film API
function getFilmsFromAPI(genreID, whereTo, slider) {
  const newFilms = [];
  const filmsData = [];
  const url = `https://moviesapi.ir/api/v1/genres/${genreID}/movies?page=1`;
  const options = {
    method: "GET",
  };

  (async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      newFilms.push(JSON.parse(result));
      newFilms.map((film) => {
        film.data.map((film) => {
          const { poster, title, imdb_rating, id, year } = film;
          return (whereTo.innerHTML += `
              <div class="film-card">
                <img src="${poster}" alt="" />
                <div class="film-details">
                  <div class="film-title">${title + " " + year}</div>
                  <div class="film-rating">
                    <span>${imdb_rating}</span>
                    <img src="assets/imdb.png" alt="" />
                  </div>
                  <a href="#" id="${id}">دانلود فیلم</a>
                </div>
              </div>
        `);
        });
      });

      if (slider) {
        sliderFunction(whereTo);
      }

      const downloadButtons = document.querySelectorAll(".film-details a");
      downloadButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          window.location.href = `details.html?id=${btn.id}`;
        });
      });
    } catch (error) {
      console.error(error);
    }
  })();
}
const urlParams = new URLSearchParams(window.location.search);
const filmId = urlParams.get("id");

function addNewFilms() {
  newFilmsArray.map((film) => {
    const { img, title, rating, id } = film;
    return (searchContainer.innerHTML += `
    <div class="film-card">
            <img src="${img}" alt="" />
            <div class="film-details">
              <div class="film-title">${title}</div>
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
  let genre;
  switch (genreNumber) {
    case "3":
      genre = "action";
      break;
    case "7":
      genre = "fantasy";
      break;
    case "9":
      genre = "comedy";
      break;
    case "17":
      genre = "horror";
      break;
  }

  let thisFilm = newFilmsArray.filter((film) => film.genre == genre);

  thisFilm.forEach((film) => {
    const { img, title, rating, id } = film;
    searchContainer.innerHTML += `
    <div class="film-card">
            <img src="${img}" alt="" />
            <div class="film-details">
              <div class="film-title">${title}</div>
              <div class="film-rating">
                <span>${rating}</span>
                <img src="assets/imdb.png" alt="" />
              </div>
              <a href="#" id="${id}">دانلود فیلم</a>
            </div>
            </div> `;
  });
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
// get all films from API without the slider
function getAllFilms(whereto) {
  getFilmsFromAPI(3, whereto);
  getFilmsFromAPI(7, whereto);
  getFilmsFromAPI(9, whereto);
  getFilmsFromAPI(17, whereto);
}
// ==================== FILTER YEAR ============================
function extractYear(year, genreID) {
  const newFilms = [];
  const filmsData = [];
  const url = `https://moviesapi.ir/api/v1/genres/${genreID}/movies?page=1`;
  const options = {
    method: "GET",
  };

  (async () => {
    const response = await fetch(url, options);
    const result = await response.text();
    newFilms.push(JSON.parse(result));
    newFilms.map((film) => {
      film.data.map((film) => {
        filmsData.push({
          title: film.title,
          img: film.poster,
          rating: film.imdb_rating,
          id: film.id,
          year: film.year,
        });
      });
    });
    let yearBefore1990 = filmsData.filter((film) => film.year < 1990);
    let year1990till2010 = filmsData.filter(
      (film) => film.year >= 1990 && film.year <= 2010
    );
    let year2011till2020 = filmsData.filter(
      (film) => film.year >= 2011 && film.year <= 2020
    );

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
    }

    array.map((film) => {
      const { img, title, rating, id, year } = film;
      searchContainer.innerHTML += `
<div class="film-card">
      <img src="${img}" alt="" />
      <div class="film-details">
        <div class="film-title">${title + " " + year}</div>
        <div class="film-rating">
          <span>${rating}</span>
          <img src="assets/imdb.png" alt="" />
        </div>
        <a href="#" id="${id}">دانلود فیلم</a>
      </div>
      </div>
`;

      const downloadButtons = document.querySelectorAll(".film-details a");
      downloadButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          window.location.href = `details.html?id=${btn.id}`;
        });
      });
    });
  })();
}
function extractYearNewFilms(year) {
  let year2011till2020 = newFilmsArray.filter(
    (film) => film.year >= 2011 && film.year <= 2020
  );
  let year2021 = newFilmsArray.filter((film) => film.year == 2021);
  let year2022 = newFilmsArray.filter((film) => film.year == 2022);
  let year2023 = newFilmsArray.filter((film) => film.year == 2023);

  let array;
  switch (year) {
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

  array.map((film) => {
    const { img, title, rating, id, year } = film;
    searchContainer.innerHTML += `
<div class="film-card">
    <img src="${img}" alt="" />
    <div class="film-details">
      <div class="film-title">${title + " " + year}</div>
      <div class="film-rating">
        <span>${rating}</span>
        <img src="assets/imdb.png" alt="" />
      </div>
      <a href="#" id="${id}">دانلود فیلم</a>
    </div>
    </div>
`;
    const downloadButtons = document.querySelectorAll(".film-details a");
    downloadButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location.href = `details.html?id=${btn.id}`;
      });
    });
  });
}
// ===================== SEARCH ALL FILMS ============================
const filmApiId = [];

filmPlotTranslation.map((film) => {
  filmApiId.push(film.id);
});

const allFilms = [...newFilmsArray, ...seriesData];

filmApiId.map((id) => {
  const url = `https://moviesapi.ir/api/v1/movies/${id}`;
  const options = {
    method: "GET",
  };
  (async () => {
    const response = await fetch(url, options);
    const result = await response.text();
    const film = JSON.parse(result);
    allFilms.push(film);
  })();
});

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
