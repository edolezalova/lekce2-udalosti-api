// tady je místo pro náš program

let nadpis = document.querySelector("h1");

nadpis.classList.toggle("zluty");

function zmenaNadpisu (nadpis) {
    nadpis.innerHTML="Nový nadpis";
}

let odstavec = document.querySelector("p")[0];

function ztucni(odstavec) {
    console.log ("baf");
    odstavec.target.style.fontWeight="bold";
}

function zcervenej (nadpis) {
    nadpis.target.style.color="red";
}