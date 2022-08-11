function blockExample(str) {
    let p = "profits";
    if(str) {
        p = p.toUpperCase();
        str = str.toUpperCase();
        let p = str.indexOf("x");
        if (p != -1) {
            str.substring(0, p);
            console.log(str);
        }
    }
    return p + str;
}

blockExample("myString");