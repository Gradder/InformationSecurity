function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function squareToTable() {
    var firstStr = '<tr><td></td>';
    for (i = 0; i < square.length; i++) {
        square[i] = '<tr><td>' + String(i) + '</td><td>' + square[i].join('</td><td>') + '</td></tr>';
        firstStr += '<td>' + String(i) + '</td>';
    }
    
    square = '<table>' + firstStr + '</tr>' + square.join('') + '</table>';
}

function msgToTable() {
    var first = [],sec = [];
    if (keyLen > 10) {
        for (var i = 0; i < msg.length; i++) {
            first.push('<td>' + msg[i][0] + '</td>');
            sec.push('<td>' + msg[i][1] + '</td>');
        }
        msg = '<table><tr>' + first.join('') + '</tr><tr>' + sec.join('') + '</tr></table>';
    }
    else {
        for (var i = 0; i < msg.length; i += 2) {
            first.push('<td>' + msg[i] + '</td>');
            sec.push('<td>' + msg[i + 1] + '</td>');
        }
        msg = '<table><tr>' + first.join('') + '</tr><tr>' + sec.join('') + '</tr></table>';
    }
}

function hide(mode) {
    var key = ['resultTextLabel','resultText','resultKeyLabel','resultKey','resultSqareLabel','resultSquare','resultOutLabel','resultOut']
    for (var i = 0; i < key.length; i++) {
        if (mode)
            key[i] = 'D' + key[i];
        document.getElementById(key[i]).innerHTML = '';
    }
    if (mode)
        document.getElementById('DhideMe').innerHTML = 'Дешифруйте сообщение чтобы увидеть результат';
    else
        document.getElementById('hideMe').innerHTML = 'Зашифруйте сообщение чтобы увидеть результат';
    alert('Один из символов не найден в квадрате. \nИзмените ключ');
}

function show(mode) {
    var dic = {
        'resultTextLabel': 'Оригинальный текст',
        'DresultTextLabel': 'Зашифрованный текст',
        'resultText': msg,
        'DresultText': msg,
        'resultKeyLabel': 'Ключ',
        'DresultKeyLabel': 'Ключ',
        'resultKey': keyWord,
        'DresultKey': keyWord,
        'resultSqareLabel': 'Квадрат',
        'resultSquare': square,
        'DresultSqareLabel': 'Квадрат',
        'DresultSquare': square,
        'resultOutLabel': 'Зашифрованный текст',
        'resultOut': outmsg,
        'DresultOutLabel': 'Расшифрованный текст',
        'DresultOut': outmsg,
    };
    
    var key = ['resultTextLabel','resultText','resultKeyLabel','resultKey','resultSqareLabel','resultSquare','resultOutLabel','resultOut'];
    
    for (var i = 0; i < key.length; i++) {
        if(mode)
            key[i] = 'D' + key[i];
        document.getElementById(key[i]).innerHTML = dic[key[i]];
    }
    
    var id = 'hideMe';
    
    if (mode)
        id = 'D' + id;
    document.getElementById(id).innerHTML = '';
}

function encrypt() {
    msg = document.getElementById('text').value.replace(/[^а-яА-ЯёЁ]/g,"").toUpperCase();
    var buf;
    outmsg = '';
    for (var i = 0; i < msg.length; i++) {
        buf = [];
        for (var j = 0; j < keyLen; j++)
            for (var k = 0; k < keyLen; k++) {
                if (square[j][k] == msg[i])
                    if(keyLen <=10)
                        buf.push(String(j) + String(k))
                    else
                        buf.push(String(j) + '/' + String(k) + ' ')
            }
        if (buf.length != 0)
            outmsg += buf[randomInteger(0,buf.length-1)];
        else {
            hide(0);            
            return 0;
        }
    }
    
    squareToTable();
    show(0);
}

function decrypt() {
    msg = document.getElementById('Dtext').value.replace(/[^\d\/ ]/g,"").toUpperCase();
    outmsg = '';
    if (keyLen > 10) {
        msg = msg.split(' ');
        for (var i = 0; i < msg.length; i++) {
            msg[i] = msg[i].split('/');
            for (var j = 0; j < 2; j++) {
                msg[i][j] = parseInt(msg[i][j]);
                if (msg[i][j] > keyLen) {
                    hide(1);
                    return 0;
                }
            }
            outmsg += square[msg[i][0]][msg[i][1]];
        }
    }
    else {
        msg = msg.split('');
        if (msg.length%2 == 1) {
            hide(1);
            return 0;
        }
        for (var i = 0; i < msg.length; i += 2) {
            if (parseInt(msg[i]) > keyLen || parseInt(msg[i + 1]) > keyLen) {
                hide(1);
                return 0;
            }
            outmsg += square[parseInt(msg[i])][parseInt(msg[i + 1])];
        }
    }
    squareToTable();
    msgToTable();
    show(1);
}


function makeSquare(mode) {
    //Оставляет только буквы из ключа в верхнем регистре
    var id = 'key';
    if (mode)
        id = 'D' + id;
	keyWord = document.getElementById(id).value.replace(/[^а-яА-ЯёЁ]/g,"").toUpperCase();

	keyLen = keyWord.length;
	square = [];
    var dig;
    
	for (var i = 0; i < keyLen; i++) {
        square[i] = [];
		square[i][0] = keyWord[i];
		for (var j = 1; j < keyLen; j++) {
			dig = (keyWord.charCodeAt(i) + j);
            if (dig > 'Я'.charCodeAt(0))
                dig -= 32;
			square[i][j] = String.fromCharCode(dig);
		}
	}
	console.log(square);
    if (mode)
        decrypt();
    else
        encrypt();
}
var msg;
var outmsg;
var keyWord;
var keyLen;
var square;
