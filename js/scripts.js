// Nav Bar Data

const navArabic = [
    "الصفحة الرئيسية",
    "معلومات عنا",
    "الصفحات",
    "المشاريع",
    "مقالات",
    "تواصل معنا"
]


let heroArabic = [
    "نـــحن نــهتم بعـــملك",
    "غريب عجيب إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد. نعم ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور م",
    "معلومات عنا"
]


let serviceArabic = [
    "لورم ایپسوم متن ساختی",
    "غريب عجيب إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد. نعم ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن ي"
]

let recentProjArabic = [
    "احدث المشاريع"
];

let blogArabic = [
    "من المقالات"
];

let blogGalleryArabic = [
    "عنوان المقال",
    "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد. نعم ومن هنا",
    "اخر تعديل 4 دقائق فائته"
]

let touchArabic = [
    "إذا كنت النص العربى زيادة عدد الفقرات كما تريد. نعم ومن هنا",
    "تواصل معنا"
]

let footerAboutArabic = [
    "معلومات عنا",
    "ريب عجيب إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد. نعم ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن ي"

]

let footerLinksArabic = [
    "روابط",
    "الموقع الرئيسى",
    "زيادة عدد الفقرات",
    "الشكل كاملاً،دور مولد النص",
    "أكبر من الفقرات يتيح لك",
    "نعم ومن هنا"
]

let footerMediaArabic = [
    "الاخبار والصور",
    "نعم ومن هنا",
    "أكبر من الفقرات يتيح لك",
    "الشكل كاملاً،دور مولد النص",
    "الموقع الرئيسى",
    "زيادة عدد الفقرات"
]

let footerTouchArabic = [
    "تواصل معنا",
    " عدد الفقرات كما تريد. نعم ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى",
    "84 Street, City, State 24813",
    "+00 (123) 456 78 90",
    "info@yourcompany.com"

]

// tabs page
let tabsArabic = [
    "المشاريع",
    "الصفحة الرئيسية",
    "تواصل معنا"
]

let formArabic = [
    "تواصل معنا",
    "الاسم الاول",
    "الاسم الاخير",
    "البريد الالكترونى",
    "الموقع الشخصى",
    "اكتب الرسالة هنا",
    "ارسال"
]


let arBtn = document.getElementById("ar");
let enBtn = document.getElementById("en");

let navLikns = Array.from(document.getElementsByClassName("nav-link"));

let heroText = Array.from(document.getElementsByClassName("hero-trans"));

let serviceText = Array.from(document.getElementsByClassName("service-trans"));

let recentText = Array.from(document.getElementsByClassName("recent-trans"));

let blogText = Array.from(document.getElementsByClassName("blog-trans"));

let blogGalleryText = Array.from(document.getElementsByClassName("blog-gallery-trans"));

let touchText = Array.from(document.getElementsByClassName("touch-trans"));

let aboutFooterText = Array.from(document.getElementsByClassName("footer-about-trans"));

let linksFooterText = Array.from(document.getElementsByClassName("footer-links-trans"));

let mediaFooterText = Array.from(document.getElementsByClassName("footer-media-trans"));

let touchFooterText = Array.from(document.getElementsByClassName("footer-touch-trans"));

let footerLis = Array.from(document.getElementsByClassName("footer-li"));

let footerTouchDivs = Array.from(document.getElementsByClassName("footer-touch-div"));

// directions
let mainFooter = document.getElementById("main-footer");
let getInTouch = document.getElementById("get-in-touch");
let formContainer = document.getElementById("form-container");

// contact page
let contactPage = (document.getElementById("contact-page"));
console.log(contactPage);
let tabsText = Array.from(document.getElementsByClassName("tabs-trans"));

let formText = Array.from(document.getElementsByClassName("form-trans"));

// Arabic Translation
if (window.location.hash === "#ar") {

    // directions
    getInTouch.setAttribute("dir", "rtl");
    mainFooter.setAttribute("dir", "rtl");

    if (contactPage) {
        formContainer.classList.add("text-right");
    }
    // NavBar
    for (let i = 0; i < navLikns.length; i++) {
        navLikns[i].innerText = navArabic[i];
        navLikns[i].style.fontFamily = "Changa, sans-serif"
    }
    // Hero
    for (let i = 0; i < heroText.length; i++) {
        heroText[i].innerText = heroArabic[i];
        heroText[i].style.fontFamily = "Changa, sans-serif";
    }
    // Services
    for (let i = 0; i < serviceText.length; i++) {
        if (i % 2 === 0) {
            serviceText[i].innerText = serviceArabic[0];
            serviceText[i].style.fontFamily = "Changa, sans-serif";
        } else {
            serviceText[i].innerText = serviceArabic[1];
            serviceText[i].style.fontFamily = "Changa, sans-serif";
        }
    }
    // Recent Projects
    for (let i = 0; i < recentText.length; i++) {
        recentText[i].innerText = recentProjArabic[i];
        recentText[i].style.fontFamily = "Changa, sans-serif";
        recentText[i].classList.add("text-right");
        recentText[i].classList.remove("recent-header");
        recentText[i].classList.add("recent-header-ar");
    }
    // From Blog
    for (let i = 0; i < blogText.length; i++) {
        blogText[i].innerText = blogArabic[i];
        blogText[i].style.fontFamily = "Changa, sans-serif";
        blogText[i].classList.add("text-right");
        blogText[i].classList.remove("blog-header");
        blogText[i].classList.add("blog-header-ar");
    }
    // Blog Gallery
    for (let i = 0; i < blogGalleryText.length; i++) {
        if (i % 3 === 0) {
            blogGalleryText[i].innerText = blogGalleryArabic[0];
            blogGalleryText[i].style.fontFamily = "Changa, sans-serif";
        } if (i === 1 || i === 4 || i === 7 || i === 10 || i === 13 || i === 16) {
            blogGalleryText[i].innerText = blogGalleryArabic[1];
            blogGalleryText[i].style.fontFamily = "Changa, sans-serif";
        } if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14 || i === 17) {
            blogGalleryText[i].innerText = blogGalleryArabic[2];
            blogGalleryText[i].style.fontFamily = "Changa, sans-serif";
        }
    }

    // Get In Touch
    for (let i = 0; i < touchText.length; i++) {
        touchText[i].innerText = touchArabic[i];
        touchText[i].style.fontFamily = "Changa, sans-serif";

    }

    // Footer About
    for (let i = 0; i < aboutFooterText.length; i++) {
        aboutFooterText[i].innerText = footerAboutArabic[i];
        aboutFooterText[i].style.fontFamily = "Changa, sans-serif";
        aboutFooterText[i].classList.add("text-right")

    }

    // Footer Links
    for (let i = 0; i < linksFooterText.length; i++) {
        linksFooterText[i].innerText = footerLinksArabic[i];
        linksFooterText[i].style.fontFamily = "Changa, sans-serif";
        linksFooterText[i].classList.add("text-right");

    }

    // Footer Media
    for (let i = 0; i < mediaFooterText.length; i++) {
        mediaFooterText[i].innerText = footerMediaArabic[i];
        mediaFooterText[i].style.fontFamily = "Changa, sans-serif";
        mediaFooterText[i].classList.add("text-right");

    }
    // Footer Touch
    for (let i = 0; i < touchFooterText.length; i++) {
        touchFooterText[i].innerText = footerTouchArabic[i];
        touchFooterText[i].style.fontFamily = "Changa, sans-serif";
        touchFooterText[0].classList.add("text-right");
        touchFooterText[1].classList.add("text-right");
    }
    // Footer Lis
    for (let i = 0; i < footerLis.length; i++) {
        footerLis[i].classList.add("text-right");
    }

    // Footer Touch Divs
    for (let i = 0; i < footerTouchDivs.length; i++) {
        footerTouchDivs[i].classList.add("text-right");
    }

    // contact page

    if (contactPage) {
        // Tabs
        for (let i = 0; i < tabsText.length; i++) {
            tabsText[i].innerText = tabsArabic[i];
            tabsText[i].style.fontFamily = "Changa, sans-serif";

        }

        // Form
        for (let i = 0; i < formText.length; i++) {
            debugger
            formText[i].innerText = formArabic[i];
            formText[i].setAttribute("placeholder", formArabic[i]);
            formText[0].removeAttribute("placeholder");
            formText[i].style.fontFamily = "Changa, sans-serif";

            formText[i].classList.add("text-right");
            formText[0].classList.remove("form-header");
            formText[0].classList.add("form-header-ar");

        }
    }
}


// Reloading
arBtn.onclick = () => {
    setInterval(() => {
        location.reload(true);
    }, 10);
}

enBtn.onclick = () => {
    setInterval(() => {
        location.reload(true);
    }, 10);
}


// function showPosition(position) {
//     var latlon = position.coords.latitude + "," + position.coords.longitude;

//     var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";

//     document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
// }

// showPosition(position);





