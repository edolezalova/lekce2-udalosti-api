// tady je místo pro náš program

// leccos jsou jen moje poznámky, abych to chápala i příště, až to otevřu ;-), ale někde mám otázky, kde bych byla vděčná za navedení
// mám tam spoustu testovacích věcí navíc, na kterých jsem se to učila a nechci to mazat, abych věděla, jak na to 


// jak změnit prvek webu napřímo: nejřív ho vyberu pomocí proměnné z CSS, pak tuto proměnnou upravím jak potřebuju
let nadpis = document.querySelector("h1");
//??co kdybych chtěla vybrat všechny h1, nejen ten první?? 
nadpis.classList.add("zluty");

let  testovaciNadpis = document.querySelector("#testovaciNadpis")
testovaciNadpis.style.fontSize="20px";
testovaciNadpis.innerHTML = "přímá změna nadpisu v js";

let testovaciTlacitko = document.querySelector("#testovaciTlacitko");
testovaciTlacitko.innerHTML = "Další tlačítko";

//jak změnit prvek webu pomocí funkce: nejjednodušší varianta - jen pomocí js - na definovanou proměnnou připojím listener, který v parametrech říká, co se musí stát a jaká funkce se vykoná. Funkci pak musím definovat.
testovaciTlacitko.addEventListener("click", zmenaNadpisu)
function zmenaNadpisu (event) {
    testovaciNadpis.innerHTML="Nový testovací nadpis";  
}

testovaciTlacitko.addEventListener("click", zmenaTridy)
function zmenaTridy (event) {
    testovaciNadpis.classList.toggle("testovaciTrida");
}

let body = document.querySelector("body");
body.addEventListener("keydown", vypisKlavesu);
function vypisKlavesu (event) {
    console.log(event.key);
    if (event.key==="Enter") {
        alert("děkuji za potvrzení");
    }
}

let odstavec = document.querySelector("p");
let tlacitko = document.querySelector("#tlacitkoZcervenej");
tlacitko.addEventListener("click",zcervenej);
function zcervenej (event) {
   odstavec.classList.toggle("cerveny");
}

//stejnou funkci pak můžu použít i jinde
let jesteJednoTlacitko = document.querySelector("#jesteJednoTlacitko");
jesteJednoTlacitko.addEventListener ("click", zcervenej);

let tlacitkoVetsi = document.querySelector("#tlacitkoVetsi");
tlacitkoVetsi.addEventListener("click", vetsiPismo);
function vetsiPismo (event) {
    odstavec.style.fontSize="larger";
}
// ??zvětšila jsem jen jednorázově - nepřišla jsem na to jak přidat při každém kliknutí 1px?? jak ho přičítat? zkoušela jsem různě, i přes css třídu, snažila jsem se to najít v dokumentaci, jestli  by se něco nenašlo, pak mě napadlo to udělat nějakým cyklem, ale nepřišla jsem na to...


// u všech níže uvedených variant nevýhoda 1) že se pracujeme nejen v js, ale i v html
// a 2) v html lze přiřadit pouze 1 funkci k danému prvku, ne více, zatímco v js můžu kolik chci

// trochu složitější varianta pro jednoduché funkce: funkci definuju v js a pak připojím k danému prvku do html: když nepracuju s žádným předem definovaným prvkem, nedávám nic do parametrů funkce
function testovaciFunkce () {
    console.log ("baf");
}


//o fous složitější varianta, když chci měnit konkrétní prvek - nejdřív funkci definuju v js, při definici v js v jejím rámci definuju proměnnou, tj. co se bude měnit.
// pak funkci připojím k danému prvku do html (k tomu se kterým se musí něco stát, aby se funkce vykonala), kde taky definuju, co přesně se s tím prvkem musí stát, aby se funkce vykonala. 
function zezelenej () {
    let testovaciOdstavec = document.querySelector("#testovaciOdstavec");
    testovaciOdstavec.style.color="green";
    testovaciOdstavec.style.backgroundColor="white";
}

// nejsložitější varianta - musím definovat funkci a v html dopsat k prvku funkci s event
// pokud mám proměnnou předem definovanou, musím při definici funkce používat target

//??tahle varianta ovlivňuje jenom ten prvek v html, u kterého je funkce volaná? resp. ať to zkouším, jak chci, nedokážu tímhle způsobem dosáhnout toho, aby stisk tlačítka ovlivnil něco jiného než samotné tlačítko(třeba odstavec)??

function ztucni(odstavec) {
    odstavec.target.classList.toggle("ztucni");
}


//ovládíní audiosouboru
let tlacitkoPlay = document.querySelector ("#play");
let audioSoubor = document.querySelector ("#audioSoubor");
tlacitkoPlay.addEventListener ("click", prehraj);
function prehraj (event) {
    audioSoubor.play ();
}

let tlacitkoPause = document.querySelector ("#pause");
tlacitkoPause.addEventListener ("click", pauzniTo);
function pauzniTo (event) {
    audioSoubor.pause ();
}

let tlacitkoMute = document.querySelector ("#mute");
tlacitkoMute.addEventListener ("click", ztisTo);
function ztisTo (event) {
    audioSoubor.volume="0";
}

let tlacitkoNaPolovic = document.querySelector ("#naPolovic");
tlacitkoNaPolovic.addEventListener ("click", zeslabTo);
function zeslabTo (event) {
    audioSoubor.volume="0.5";
}

let tlacitkoNaMax = document.querySelector ("#naMax");
tlacitkoNaMax.addEventListener ("click", zesilTo);
function zesilTo (event) {
    audioSoubor.volume="1";
}

let tlacitkoReload=document.querySelector("#reload");
tlacitkoReload.addEventListener("click", pustoToZnovu);
function pustoToZnovu (event) {
    audioSoubor.currentTime="0";
    audioSoubor.play ();
}

