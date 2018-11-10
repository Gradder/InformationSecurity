 var mat_trig = 0;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {


    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function cipher_permutation_divide() {
	var textAreaValue = premutation_text_divide.value;
	var NumOfChar = [];
	var Key=[];
	var matrix = [];
	var usedCharaterCount = 0;

	for (let i = 0; i < premutation_text_divide.value.length; i++) {
		matrix[i] = premutation_text_divide.value[i];
		NumOfChar[i] = i;
	}
	Key=NumOfChar;

	/*document.getElementById("premutation_result31").innerHTML = "";
	for(let i=0;i<Key.length;i++)
		document.getElementById("premutation_result31").innerHTML += Key[i] + '|';*/

	var newTable = document.getElementById("premutation_result_table");
  	var newRow = newTable.rows[0];
  	newRow.style ="border: 1px grey solid;padding: 5px !important";
	for (var i = 0; i < mat_trig; i++) {
  		newRow.deleteCell(mat_trig-i);
  	}

	for(let i=0;i<Key.length;i++)
	{
		var newCell = newRow.insertCell(i+1);
  		newCell.style ="border: 1px grey solid;padding: 5px !important";
  		newCell.innerHTML = Key[i];
	}

	arr = shuffle(NumOfChar);

	criptedMsg = [];
	for (let i = 0; i < NumOfChar.length; i++) {
		criptedMsg[i] = matrix[arr[i]];
	}

	document.getElementById("hide_me").innerHTML = "";

  	document.getElementById("premutation_result1_header").innerHTML = "Сообщение:";
  	document.getElementById("premutation_result2_header").innerHTML = "Таблица перестановок:";
  	document.getElementById("premutation_result4_header").innerHTML = "Итоговый шифр:";
  	document.getElementById("premutation_result3_header").innerHTML = "Переставленные позиции:";
  	document.getElementById("premutation_result31_header").innerHTML = "Изначальные позиции:";
  	document.getElementById("premutation_result_table").style.display = "initial";
	document.getElementById("premutation_result1").innerHTML = textAreaValue;
  	
  	//document.getElementById("premutation_result3").innerHTML = "";
  	
  	var newTable = document.getElementById("premutation_result_table");
  	var newRow = newTable.rows[1];
  	for (var i = 0; i < mat_trig; i++) {
  		newRow.deleteCell(mat_trig - i);
  	}
  	mat_trig = arr.length;
  	newRow.style ="border: 1px grey solid;padding: 5px !important";


  	for(let i=0;i<arr.length;i++) {
  		//document.getElementById("premutation_result3").innerHTML += arr[i]; //Научиться пихать в разные ячейки таблицы.
  		var newCell = newRow.insertCell(i+1);
  		newCell.style ="border: 1px grey solid;padding: 5px !important";
  		newCell.innerHTML = arr[i];
  	}
  	document.getElementById("premutation_result4").innerHTML = "";
  	for (var i = 0; i < criptedMsg.length; i++) {
  		document.getElementById("premutation_result4").innerHTML += criptedMsg[i];
  	}

	//output.value = criptedMsg + " ";
	//numoutput.value = arr + " ";


}

function decipher_premutation_divide() {
	var matrix = premutation_coded_text_divide.value;;
	var keyMatrix = premutation_key_divide.value;
	var arr = [];

	if(premutation_coded_text_divide.value.length==premutation_key_divide.value.length) {

		for(let i=0;i<premutation_coded_text_divide.value.length;i++) {
			arr[parseInt(keyMatrix[i])] = matrix[i];
		}
		document.getElementById("decode_premutation_result").innerHTML = "";
		for(let i=0;i<arr.length;i++)
		{

			document.getElementById("decode_premutation_result").innerHTML += arr[i];
		}
	}
	
	else {
		alert("ОШИБКА! Длинна зашифрованного сообщения несоответствует длинне ключа.");
	}
}