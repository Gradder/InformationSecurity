var text;
var shift;
main();
function main(){
	text = document.getElementById("originalword");
	shift = document.getElementById("key");
}
function CesarClicked(Coding){
	if(Coding==true){
		text = document.getElementById("originalword");
		shift = document.getElementById("key");
	}else{
		text = document.getElementById("originalword4");
		shift = document.getElementById("key5");
		//shift*=(-1);
	}
	var code="";
	if(Coding==true){
		document.getElementById("hide_me").innerHTML = "";
		document.getElementById("litoreia_result1_header").innerHTML = "Оригинальный текст:";
		document.getElementById("litoreia_result1_header").style.width = "27%";
		document.getElementById("originalword1").innerHTML = text.value;
		document.getElementById("originalword1").style.width = "65%";
	  	document.getElementById("litoreia_result2_header").innerHTML = "Сдвиг:";
	  	document.getElementById("key1").innerHTML = shift.value;
		document.getElementById("litoreia_result3_header").innerHTML = "Зашифрованный текст:";
		document.getElementById("litoreia_result3_header").style.width = "27%";
	}
	var tvaluet = text.value;
	if((shift.value*1) != 0){
		for(var char in tvaluet){
			var ContainFlag = false;
			if(((tvaluet.charCodeAt(char*1)*1)>1071)&&((tvaluet.charCodeAt(char*1)*1)<1104)){
				var a = tvaluet.charCodeAt(char*1)*1;
				code += ChangeSymbol(1072,1103,a,Coding);
				ContainFlag = true;
			}
			if(((tvaluet.charCodeAt(char*1)*1)>1039)&&((tvaluet.charCodeAt(char*1)*1)<1072)){
				var a = tvaluet.charCodeAt(char*1)*1;
				code += ChangeSymbol(1040,1071,a,Coding);
				ContainFlag = true;
			}
			if(((text.value.charCodeAt(char*1)*1)>96)&&((tvaluet.charCodeAt(char*1)*1)<123)){
				var a = tvaluet.charCodeAt(char*1)*1;
				code += ChangeSymbol(97,122,a,Coding);
				ContainFlag = true;
			}
			if(((tvaluet.charCodeAt(char*1)*1)>64)&&((tvaluet.charCodeAt(char*1)*1)<91)){
				var a = text.value.charCodeAt(char*1)*1;
				code += ChangeSymbol(65,90,a,Coding);
				ContainFlag = true;
			}
			if(((tvaluet.charCodeAt(char*1)*1)>47)&&((tvaluet.charCodeAt(char*1)*1)<58)){
				var a = tvaluet.charCodeAt(char*1)*1;
				code += ChangeSymbol(48,57,a,Coding);
				ContainFlag = true;
			}
			if(ContainFlag == false){
				code += tvaluet[char];
			}
		
		}

	}
	if(Coding != false){
		document.getElementById("code1").innerHTML = code;
		document.getElementById("code1").style.width = "65%";
		document.getElementById("code1").CodeShift = shift.value*1;
	}else{
		document.getElementById("litoreia_result5_header").innerHTML = "Оригинальный текст:";
		document.getElementById("litoreia_result5_header").style.width = "27%";
		document.getElementById("originalword3").innerHTML = code;
		document.getElementById("originalword3").style.width = "65%";
		//document.getElementById("originalword3").CodeShift = shift.value*1;
	}
}
function ChangeSymbol(LowPos,UpPos,SymCode, code){
	var NShift = shift.value*1;
	if(code==true){
		if(NShift+SymCode > UpPos){
			NShift = (SymCode+NShift)-UpPos;
			SymCode = LowPos+NShift-1;
		}else{
			SymCode += NShift;
		}
	}else{
		if(SymCode-NShift < LowPos){
			NShift = (LowPos-(SymCode-NShift));
			SymCode = UpPos-NShift+1;
		}else{
			SymCode -= NShift;
		}
	}
	return String.fromCharCode(SymCode);
}