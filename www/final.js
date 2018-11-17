var texts=document.querySelector("#texts");
var textr=document.querySelector("#textr");
var zash=document.querySelector("#zashifr");
var rassh=document.querySelector("#deshifr");
function cvet()
{
	var str="Security is an important thing.";
	var illustrs=document.querySelectorAll(".illustr");
	// console.log(illustrs);
	var i, j, k;
	for (i=0;i<illustrs.length-2;i++)
	{
		var yach=illustrs[i].querySelectorAll("td");
		for (j=0;j<yach.length;j++)
		{
			for (k=0;k<str.length;k++)
			{
				// console.log("|"+yach[j].innerText[0]+"|");
				if((yach[j].innerText=="	"))
					yach[j].style.backgroundColor="black";
			}
		}
		
	}
}
cvet();

function Create2DArray(rows) 
{ 
var arr = []; 
for (var i=0;i<rows;i++) 
{ 
arr[i] = []; 
} 
return arr; 
} 

function main() 
{ var z=0; 
	var str="Securityisanimportantthing";
var i;
var qwerty=""; 
var j; 
var SIZE = 6; 
var buf = texts.value; // матрица с зашифрованным текстом 
if(buf.length>36)
{
	alert("Размер превышен. Введите заново.");
	texts.value="";
	location.reload();
	buf="";
}
var grid=Create2DArray(SIZE); 
var grid1=Create2DArray(SIZE); 
grid =[ [0, 0, 0, 1, 0, 0], 
		[0, 0, 0, 0, 1, 0], 
		[0, 0, 0, 0, 0, 0], 
		[1, 0, 1, 0, 0, 0], 
		[0, 0, 1, 0, 0, 1], 
		[0, 0, 0, 0, 1, 1]]; // решетка Кардано 
// размер обоих матриц должен быть одинаковым 

// вывод зашифрованного сообщения 
//for (var i = 0; i < SIZE; i++) 
//cout « buf[i] « endl; 
//cout « endl; 

// прямой обход решетки 
// console.log("0"); 
console.log(buf);
for (i = 0; i < SIZE; i++) 
for (j = 0; j < SIZE; j++) 
if (grid[i][j] == 1) 
{

	grid1[i][j]=buf[z]; 
	z++;
} 
//console.log(grid1); 
//console.log(grid); 
for (j = 0; j < SIZE; j++) 
for (i = SIZE-1; i >=0; i--) 

{ 
// console.log(grid[i][j]); 
if (grid[i][j]!=0) 
{ grid1[j][SIZE-1-i]=buf[z]; 
z++;} 
} 

//console.log(grid1); 
// console.log(grid); 

for (i = SIZE-1; i >= 0; i--) 
for (j = SIZE-1; j >=0; j--) 
if (grid[i][j] != 0) 
{ grid1[SIZE-i-1][SIZE-j-1]=buf[z]; 
z++;} 
//console.log(grid); 
for (j = SIZE-1; j >= 0; j--) 
for (i = 0; i < SIZE; i++) 
if (grid[i][j] != 0) 
{ grid1[SIZE-1-j][i]=buf[z]; 
z++;} 
for (i = 0; i < SIZE; i++) 
for (j = 0; j < SIZE; j++) 
if(grid1[i][j]==undefined) 
{ 
// grid1[i][j]="й"; 
grid1[i][j]=str[Math.floor(Math.random() * (str.length-1 - 0)) + 0]; 
} 
// console.log(grid); 
var tabls=document.querySelectorAll(".illustr");
var tabl=tabls[tabls.length-2];
var tds=tabl.querySelectorAll("td");
// console.log(tds);
var k=0;
for (i = 0; i < SIZE; i++) 
	for (j = 0; j < SIZE; j++) 
	{
		tds[k].innerText=grid1[i][j];
		k++;
	}
// console.log(grid1);
for (i = 0; i < SIZE; i++) 
for (j = 0; j < SIZE; j++) 
 
{

	qwerty=qwerty+grid1[i][j];
}
var strok=document.querySelector(".strok"); 
strok.innerText=qwerty;
console.log(qwerty);}

zash.addEventListener("click", main);

function main2() 
{ var z=0;
var str="Securityisanimportantthing"; 
var i; 
var j; 
var SIZE = 6; 
var buf = textr.value;
if(buf.length>36)
{
	alert("Размер превышен. Введите заново.");
	texts.value="";
	location.reload();
	buf="";
}
var res=[];// матрица с зашифрованным текстом 
var grid=Create2DArray(SIZE); 
var grid1=Create2DArray(SIZE); 
grid =[ [0, 0, 0, 1, 0, 0], 
[0, 0, 0, 0, 1, 0], 
[0, 0, 0, 0, 0, 0], 
[1, 0, 1, 0, 0, 0], 
[0, 0, 1, 0, 0, 1], 
[0, 0, 0, 0, 1, 1]]; // решетка Кардано 
// размер обоих матриц должен быть одинаковым 

// вывод зашифрованного сообщения 
//for (var i = 0; i < SIZE; i++) 
//cout « buf[i] « endl; 
//cout « endl; 
for (i = 0; i < SIZE; i++) 
for (j = 0; j < SIZE; j++) 
{grid1[i][j]=buf[z]; 
z++}; 
for (i = 0; i < SIZE; i++) 
for (j = 0; j < SIZE; j++) 
if(grid1[i][j]==undefined) 
{ 
grid1[i][j]=str[Math.floor(Math.random() * (str.length-1 - 0)) + 0]; 
} 

// прямой обход решетки 
 console.log(grid1); 
for (i = 0; i < SIZE; i++) 
for (j = 0; j < SIZE; j++) 
if (grid[i][j] == 1) 
{ res.push(grid1[i][j]); 
} 
//console.log(grid1); 
//console.log(grid); 
for (j = 0; j < SIZE; j++) 
for (i = SIZE-1; i >=0; i--) 

{ 
// console.log(grid[i][j]); 
if (grid[i][j]==1) 
{ res.push(grid1[j][SIZE-1-i]); 
} 
} 

//console.log(grid1); 
// console.log(grid); 

for (i = SIZE-1; i >= 0; i--) 
for (j = SIZE-1; j >=0; j--) 
if (grid[i][j] == 1) 
{ res.push(grid1[SIZE-i-1][SIZE-j-1]); 
} 
console.log(grid); 
for (j = SIZE-1; j >= 0; j--) 
for (i = 0; i < SIZE; i++) 
if (grid[i][j] == 1) 
{ res.push(grid1[SIZE-1-j][i]); 
} 
/*for (i = 0; i < SIZE; i++) 
for (j = 0; j < SIZE; j++) 
if(grid1[i][j]==undefined) 
{ 
grid1[SIZE-1-j][i]="й"; 
} */
// console.log(grid); 
// console.log(grid1); 
// console.log(grid1); 
// console.log(res);
var tabls=document.querySelectorAll(".illustr");
var tabl=tabls[tabls.length-1];
var tds=tabl.querySelectorAll("td");
// console.log(tds);
var k=0;
for (i = 0; i < 36; i++) 
{
	if(buf[i]==undefined)
	{
		tds[k].innerText=str[Math.floor(Math.random() * (str.length-1 - 0)) + 0]
		k++;
	} else{
	tds[k].innerText=buf[i];
	k++;}

}
console.log(res);
var qaz=document.querySelector("#texts"); 
var pp=document.querySelector("#decode_cardano_result");
pp.innerText="";
var oi=qaz.value.length;

	for (i = 0; i < res.length; i++)
	{		
			pp.innerText=pp.innerText+res[i];
		if(oi!=0 && i==oi-1)
		{
			break;
		}
	}
} 

rassh.addEventListener("click", main2);