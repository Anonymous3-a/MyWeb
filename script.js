function genpnames() {
    var firstsec = [
        "Do",
        "Fi",
        "Fe",
        "Ko",
        "Lu",
        "Ma",
        "Me",
        "Mi",
        "Ni"
    ]
    var secondsec = [
        "la",
        "ra",
        "ta",
        "sa",
        "ka",
        "la",
        "ra",
        "ta",
        "sa",
        "ka"
    ]
    var thirdsec = [
        "n",
        "r",
        "t",
        "s",
        "k",
        "l",
        "r",
        "t",
        "s",
        "k"
    ]

    var name = firstsec[Math.floor(Math.random() * firstsec.length)] + secondsec[Math.floor(Math.random() * secondsec.length)] + thirdsec[Math.floor(Math.random() * thirdsec.length)];
    document.getElementById("names").textContent = name;
}

function gencnames() {
    var firstcsec = [
        "Ir",
        "Ar",
        "Or",
        "Su",
        "Ra",
        "Sa",
        "Ka",
        "St",
        "Li",
        "Sta",
        "Clo"
    ]
    var secondcsec = [
        "rt",
        "do",
        "dol",
        "fil",
        "fir",
        "pho",
        "ph",
        "phir",
        "siv",
        "fi",
        "si",
        "sir",
        "dog",
        "dolg"
    ]
    var thirdcsec = [
        "s",
        "d",
        "f",
        "p",
        "ph",
    ]

    var cname = firstcsec[Math.floor(Math.random() * firstcsec.length)] + secondcsec[Math.floor(Math.random() * secondcsec.length)] + thirdcsec[Math.floor(Math.random() * thirdcsec.length)];
    document.getElementById("cnames").textContent = cname;
}

function playMusic() {
    var dummy = new Audio();
    dummy.src = "dummy.mp3";
    dummy.play();
}

function stopMusic() {
    document.write("Still working on it ;)");
}