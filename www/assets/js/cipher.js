var vowel = new String('аеёиоуыэюя'); // Гласные буквы
var voiced = new String('бвгджзлмнрхцчшщ'); // Звонкие и шипящие согласные
var deaf = new String('кпстф'); // Глухие согласные
var brief = new String('й'); // Й
var other = new String('ьъ'); // Другие
var cons = new String('бвгджзйклмнпрстфхцчшщ'); // Все согласные


function decipher_litoreia_divide() {

  var coded_text = document.getElementById("litoreia_coded_text_divide").value;
  var divided_coded_text = getSeparatedString(coded_text);

  var decoded_text = "";
  for (i = 0; i < divided_coded_text.length; i++) {
    if (divided_coded_text[i] === " ") {
      i++;
    }

    if (i % 2 != 0) {
      decoded_text += divided_coded_text[i];
    }
  }

  document.getElementById("decode_litoreia_result").innerHTML = decoded_text;
}


function cipher_litoreia_divide() {
  var key = document.getElementById("litoreia_key_divide").value;
  var text = document.getElementById("litoreia_text_divide").value;
  key = key.toLowerCase();
  text = text.toLowerCase();
  var divided_text = getSeparatedString(text);
  var divided_key = getSeparatedString(key);
  var cipher = "";
  var cipher_with_separator = "";

  for (i = 0; i < divided_text.length; i++) {
    var key_index = (i + 1) % divided_key.length;
    if (i === 0) {
      cipher += divided_key[0];
    }
    cipher += divided_text[i] + divided_key[key_index];
  }

  for (i = 0; i < divided_text.length; i++) {
    var key_index = (i + 1) % divided_key.length;
    if (i === 0) {
      cipher_with_separator += divided_key[0];
    }
    cipher_with_separator += "-" + divided_text[i] + "-" + divided_key[key_index];
  }

  document.getElementById("hide_me").innerHTML = "";

  document.getElementById("litoreia_result1_header").innerHTML = "Сообщение:";
  document.getElementById("litoreia_result2_header").innerHTML = "Ключ:";
  document.getElementById("litoreia_result3_header").innerHTML = "Собираем:";
  document.getElementById("litoreia_result4_header").innerHTML = "Итоговый шифр:";

  document.getElementById("litoreia_result1").innerHTML = divided_text.join("-");
  document.getElementById("litoreia_result2").innerHTML = divided_key.join("-");
  document.getElementById("litoreia_result3").innerHTML = cipher_with_separator;
  document.getElementById("litoreia_result4").innerHTML = cipher;

  // Валидация правильности введенной строки
}

function validateString(s) {
  // Поленился делать :)
  return s;
} // function validateString (s)
// Есть ли в строке гласные?
function isNotLastSep(remainStr) {
  var is = false;
  for (var i = 0; i < remainStr.length; i++) {
    if (vowel.indexOf(remainStr.substr(i, 1)) != -1) {
      is = true;
      break;
    }
  } // for (var i = 0; i < remainStr - 1; i++)
  return is;
} // function isLastSep (remainStr)
// Собственно функция разбиения слова на слоги

function getSeparatedString(s) {
  // Добавляем слог в массив и начинаем новый слог
  function addSep() {
    sepArr.push(tmpS);
    tmpS = '';
  } // function addSep ()
  s = validateString(s);
  var tmpL = new String(); // Текущий символ
  var tmpS = new String(); // Текущий слог
  var sepArr = new Array(); // Массив слогов
  for (var i = 0; i < s.length; i++) {
    tmpL = s.substr(i, 1);
    tmpS += tmpL;
    // Проверка на признаки конца слогов
    // если буква равна 'й' и она не первая и не последняя и это не последний слог
    if (
      (i != 0) &&
      (i != s.length - 1) &&
      (brief.indexOf(tmpL) != -1) &&
      (isNotLastSep(s.substr(i + 1, s.length - i + 1)))
    ) {
      addSep();
      continue;
    }
    // если текущая гласная и следующая тоже гласная
    if (
      (i < s.length - 1) &&
      (vowel.indexOf(tmpL) != -1) &&
      (vowel.indexOf(s.substr(i + 1, 1)) != -1)
    ) {
      addSep();
      continue;
    }
    // если текущая гласная, следующая согласная, а после неё гласная
    if (
      (i < s.length - 2) &&
      (vowel.indexOf(tmpL) != -1) &&
      (cons.indexOf(s.substr(i + 1, 1)) != -1) &&
      (vowel.indexOf(s.substr(i + 2, 1)) != -1)
    ) {
      addSep();
      continue;
    }
    // если текущая гласная, следующая глухая согласная, а после согласная и это не последний слог
    if (
      (i < s.length - 2) &&
      (vowel.indexOf(tmpL) != -1) &&
      (deaf.indexOf(s.substr(i + 1, 1)) != -1) &&
      (cons.indexOf(s.substr(i + 2, 1)) != -1) &&
      (isNotLastSep(s.substr(i + 1, s.length - i + 1)))
    ) {
      addSep();
      continue;
    }
    // если текущая звонкая или шипящая согласная, перед ней гласная, следующая не гласная и не другая, и это не последний слог
    if (
      (i > 0) &&
      (i < s.length - 1) &&
      (voiced.indexOf(tmpL) != -1) &&
      (vowel.indexOf(s.substr(i - 1, 1)) != -1) &&
      (vowel.indexOf(s.substr(i + 1, 1)) == -1) &&
      (other.indexOf(s.substr(i + 1, 1)) == -1) &&
      (isNotLastSep(s.substr(i + 1, s.length - i + 1)))
    ) {
      addSep();
      continue;
    }
    // если текущая другая, а следующая не гласная если это первый слог
    if (
      (i < s.length - 1) &&
      (other.indexOf(tmpL) != -1) &&
      ((vowel.indexOf(s.substr(i + 1, 1)) == -1) ||
        (isNotLastSep(s.substr(0, i))))
    ) {
      addSep();
      continue;
    }
  } // for (var i = 0; i < s.length; i++)
  sepArr.push(tmpS);
  // return sepArr.join('-');
  return sepArr;
} // function getSeparatedString (s)