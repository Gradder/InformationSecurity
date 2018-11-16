var table=document.querySelector("table");
var yach=document.querySelectorAll("td");
var A=Create2DArray(8), i, j, k=0;
var massiv = [[1, 2, 3, 4, 13, 9, 5, 1],
 [5, 6, 7, 8, 14, 10, 6, 2],
 [9, 10, 11, 12, 15, 11, 7, 3],
 [13, 14, 15, 16, 16, 12, 8, 4],
 [4, 8, 12, 16, 16, 15, 14, 13],
 [3, 7, 11, 15, 12, 11, 10, 9],
 [2, 6, 10, 14, 8, 7, 6, 5],
 [1, 5, 9, 13, 4, 3, 2, 1]];
for(i=0;i<8;i++)
	for(j=0;j<8;j++)
	{
		A[i][j]=parseInt(yach[k].innerText);
		k++;
	}

function Create2DArray(rows)
{
  	var arr = [];
  	for (var i=0;i<rows;i++) 
  	{
		arr[i] = [];
  	}
  	return arr;
}

function rand14()
{
	var min=0, max=4;
	var r=Math.floor(Math.random() * (max - min)) + min;
	return r;
}

function razb(n)
{
	var x=[];
	for(i=0;i<yach.length;i++)
		if(parseInt(yach[i].innerText)==n)
			x.push(i);
	return x;
}
var randmas=[];
for(i=0;i<16;i++)
	randmas[i]=rand14();
//console.log(randmas);
var w=1;
var B1=razb(w); yach[B1[randmas[w-1]]].style.backgroundColor="white"; w++;
var B2=razb(w); yach[B2[randmas[w-1]]].style.backgroundColor="white"; w++;
var B3=razb(w); yach[B3[randmas[w-1]]].style.backgroundColor="white"; w++;
var B4=razb(w); yach[B4[randmas[w-1]]].style.backgroundColor="white"; w++;
var B5=razb(w); yach[B5[randmas[w-1]]].style.backgroundColor="white"; w++;
var B6=razb(w); yach[B6[randmas[w-1]]].style.backgroundColor="white"; w++;
var B7=razb(w); yach[B7[randmas[w-1]]].style.backgroundColor="white"; w++;
var B8=razb(w); yach[B8[randmas[w-1]]].style.backgroundColor="white"; w++;
var B9=razb(w); yach[B9[randmas[w-1]]].style.backgroundColor="white"; w++;
var B10=razb(w); yach[B10[randmas[w-1]]].style.backgroundColor="white"; w++;
var B11=razb(w); yach[B11[randmas[w-1]]].style.backgroundColor="white"; w++;
var B12=razb(w); yach[B12[randmas[w-1]]].style.backgroundColor="white"; w++;
var B13=razb(w); yach[B13[randmas[w-1]]].style.backgroundColor="white"; w++;
var B14=razb(w); yach[B14[randmas[w-1]]].style.backgroundColor="white"; w++;
var B15=razb(w); yach[B15[randmas[w-1]]].style.backgroundColor="white"; w++;
var B16=razb(w); yach[B16[randmas[w-1]]].style.backgroundColor="white"; 
//console.log(B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11, B12, B13, B14, B15, B16);
var p1 = document.createElement('span');
var p2 = document.createElement('span');
var p3 = document.createElement('span');
var p4 = document.createElement('span');
p1.innerText="Оригинал";
p2.innerText="90°";
p3.innerText="180°";
p4.innerText="270°";
p1.className="p1";
p2.className="p2";
p3.className="p3";
p4.className="p4";
p1.style.left="100px";
p2.style.left="380px";
p3.style.left="620px";
p4.style.left="870px";
var table90 = document.createElement('table');
table90.innerHTML=table.innerHTML;
table90.style.transform="rotate(90deg)";
table90.className="table90";
var table180 = document.createElement('table');
table180.innerHTML=table.innerHTML;
table180.style.transform="rotate(180deg)";
table180.className="table180";
var table270 = document.createElement('table');
table270.innerHTML=table.innerHTML;
table270.style.transform="rotate(270deg)";
table270.className="table270";
//console.log(table90);
document.body.appendChild(p1);
document.body.appendChild(table90);
document.body.appendChild(p2);
document.body.appendChild(table180);
document.body.appendChild(p3);
document.body.appendChild(table270);
document.body.appendChild(p4);