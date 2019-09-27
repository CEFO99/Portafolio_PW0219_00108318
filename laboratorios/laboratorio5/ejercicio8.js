function binario(dec) {
    var bin = [];
    var divi = dec;
    var coci = 0;
    while (divi >= 2) {
        coci = divi % 2;
        bin.push(coci);
        divi = (divi - coci) / 2;
    }
    bin.push(divi);
    bin.reverse();
    console.log(bin.join(""));
}

binario(21);