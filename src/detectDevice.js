function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function isPhone() {
    return window.innerWidth <= 768;
}

function checkDevicetype() {
    if (isPhone() && !isIOS()) {
        alert("Funktionalität der Website auf diesem Gerät beeinträchtigt!\n---------------------\n\nAufgrund von einigen seltsamen Einschränkungen von Apple wird das automatische Wiedergeben von Inhalten blockiert. Damit kann die Torhymne nicht automatisch wiedergegeben werden, was leidert die Kernfunktion dieser Website trifft.\nDu kannst es dennoch gerne versuchen, allerdings empfehle ich folgendes:\n\n---------------------\nBitte besuche diese Website erneut auf einem kompatiblen Gerät; am Besten einem PC!\n---------------------\n\nAn der Lösung des Problems wird bereits gearbeitet!");
    } else if (isIOS()) {
        alert("Funktionalität der Website auf diesem Gerät beeinträchtigt!\n---------------------\n\nAufgrund von einigen seltsamen Einschränkungen von Apple wird das automatische Wiedergeben von Inhalten blockiert. Damit kann die Torhymne nicht automatisch wiedergegeben werden, was leidert die Kernfunktion dieser Website trifft.\nDu kannst es dennoch gerne versuchen, allerdings empfehle ich folgendes:\n\n---------------------\nBitte besuche diese Website erneut auf einem nicht-iOS Gerät; am Besten auf einem PC!\n---------------------\n\nAn der Lösung des Problems wird bereits gearbeitet!");
    }
}

document.addEventListener('DOMContentLoaded', checkDevicetype);
