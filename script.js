function pingsut() {
    var pilihan = document.getElementById("pilihan").value;


    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = document.getElementById("hasil");

    var has = '';
    if (pilihan == comp) {
        hasil.innerHTML = 'Kamu memilih ' + pilihan + ' dan komputer memilih ' + comp + '\nMaka hasilnya adalah SERI';
    } else if (pilihan == 'gajah') {
        has = (comp == 'orang') ? 'KALAH' : 'MENANG';
        hasil.innerHTML = 'Kamu memilih ' + pilihan + ' dan komputer memilih ' + comp + '\nMaka hasilnya adalah ' + has;

    } else if (pilihan == 'orang') {
        has = (comp == 'gajah') ? 'KALAH' : 'MENANG';
        hasil.innerHTML = 'Kamu memilih ' + pilihan + ' dan komputer memilih ' + comp + '\nMaka hasilnya adalah ' + has;

    } else if (pilihan == 'semut') {
        has = (comp == 'orang') ? 'KALAH' : 'MENANG';
        hasil.innerHTML = 'Kamu memilih ' + pilihan + ' dan komputer memilih ' + comp + '\nMaka hasilnya adalah ' + has;

    } else {
        has = 'Masukkan pilihan yg benar !';
        hasil.innerHTML = has;
    }




}