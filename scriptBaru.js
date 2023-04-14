function pilih(pilihan) {
    // Memilih acak pilihan komputer
    let pilihanKomputer = Math.random();
    if (pilihanKomputer < 0.34) {
        pilihanKomputer = "gajah";
    } else if (pilihanKomputer <= 0.67) {
        pilihanKomputer = "orang";
    } else {
        pilihanKomputer = "semut";
    }

    // Menentukan hasil
    let hasil = "";
    if (pilihan == pilihanKomputer) {
        hasil = "SERI!";
    } else if (pilihan == "gajah") {
        hasil = pilihanKomputer == "orang" ? "MENANG!" : "KALAH!";
    } else if (pilihan == "orang") {
        hasil = pilihanKomputer == "semut" ? "MENANG!" : "KALAH!";
    } else if (pilihan == "semut") {
        hasil = pilihanKomputer == "gajah" ? "MENANG!" : "KALAH!";
    }

    // Menampilkan hasil
    const result = document.getElementById("result");
    result.innerHTML = "Kamu memilih " + pilihan.toUpperCase() + "<br>" +
        "Komputer memilih " + pilihanKomputer.toUpperCase() + "<br><br>" +
        "Hasilnya kamu " + hasil;


    //     const result = document.getElementById("result");
    //     result.innerHTML = `
    //     Kamu memilih <strong>${pilihan}</strong><br>
    //     Komputer memilih <strong>${pilihanKomputer}</strong><br><br>
    //     Hasilnya kamu <strong>${hasil}</strong>
    //   `;
}


