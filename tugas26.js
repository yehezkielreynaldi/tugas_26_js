function cekFinite() {
    let deretBilangan = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

    let cek = isFinite([deretBilangan]);

    for (let i = 0; i < deretBilangan.length; i++) {
        if (cek === false) {
            console.log(`Angka ${deretBilangan[i]} NOT Infinity.`);
        } else {
            console.log(`Angka ${deretBilangan[i]} is Infinity.`);
        }

    }

}
cekFinite();