function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

if (isIOS()) {
    alert("Funktionalität der Website auf diesem Gerät beeinträchtigt!\n---------------------\n\nAufgrund von einigen seltsamen Einschränkungen von Apple wird das automatische Wiedergeben von Inhalten blockiert. Damit kann die Torhymne nicht automatisch wiedergegeben werden, was leidert die Kernfunktion dieser Website trifft.\nDu kannst es dennoch gerne versuchen, allerdings empfehle ich folgendes:\n\nBitte besuche diese Website erneut auf einem nicht-iOS Gerät oder auf einem PC!");
}