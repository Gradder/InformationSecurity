let alpha = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

function crypt(key, phrase) {

    if (key.length > 16)
        return null;
    key = key.toUpperCase().trim();
    phrase = phrase.toUpperCase().replace("Ё", "Е");
    let newAlpha = alpha + '';
    for (let i = 0; i < key.length; i++)
        newAlpha = newAlpha.replace(key.charAt(i) + '', '');

    console.log("cr: "+ key + "\n" + newAlpha);
    for (let i = 0; i < phrase.length; i++) {
        let pos = key.indexOf(phrase.charAt(i) + '');
        if (pos > -1) {
            phrase = phrase.replaceAt(i, newAlpha.charAt(pos) + '');
        }else{
            let pos = newAlpha.indexOf(phrase.charAt(i) + '');
            if(pos>-1)
                phrase = phrase.replaceAt(i, key.charAt(pos) + '');
        }
    }
    return phrase;
}


$(document).ready(function (e) {

    document.getElementById("decrypt").disabled = true;
    document.getElementById("crypt").disabled = true;

    $("#key").keyup(function (e) {
        e.target.value = e.target.value.replace(/[^а-яё]/ig, '');
        if (e.target.value.length > 16)
            e.target.value = e.target.value.substr(0, 16);
        e.target.value = Array.from(new Set(e.target.value)).join('');
        $("#counter").html(e.target.value.length + "/16")
        if (e.target.value.length == 16) {
            document.getElementById("crypt").disabled = false;
            document.getElementById("decrypt").disabled = false;

        }
        else {
            document.getElementById("crypt").disabled = true;
            document.getElementById("decrypt").disabled = true;

        }

    })


    $("#crypt").click(function () {
            $("#result").val(crypt($("#key").val(), $("#phrase").val()))
    })
    $("#decrypt").click(function () {
        $("#phrase").val(crypt($("#key").val(), $("#result").val()))
    })
});
