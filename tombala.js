function randomNum(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MyTable()
{
// Fonksiyonun her çağırılışında sayfayı temizlemek istedik.


// 7 satır 3 sütundan oluşan tablomuz için değişkenler tanımladık.
	var satirSayisi = 3;
	var stnSayisi = 7;
	document.write("<div style='overflow-x:auto;'>");
	document.write("<table class='tablo' border='1' width='600' height='200'>");
	
	for(var i =1;i<=satirSayisi;i++ )
	{
	document.write("<tr>");
		for(var j=1;j<=stnSayisi;j++)
		{
			 
		//for içerisinde bu function'ı çağırdık ki her kare için random sayı üretebilelim.
			var y = randomNum(1, 99);

			if((i+j)%2 == 0)
			{
				document.write("<td bgcolor='aqua' style='opacity: 0.75;'>"+y+"</td>");
			}else
			{
				document.write("<td bgcolor='orange' style='opacity: 0.75;'>"+y+"</td>");
			}
		}
		document.write("</tr>");
	
	}
	document.write("</table>");
	document.write("</div>");

}
function severalTables()
{
	document.body.innerHTML = '';
	for(n=1; n<7;n++){
		document.write("<div class='container'><div class='row'><div class='col-lg-4'>")
		MyTable(n);
		document.write("<br/>");
		document.write("</div></div></div>");
	}
}

//Icerisine herhangi bir sayi alip background color degistirecek olan function.
function getSayi(sayi)
{	
	var arr = [];
	//Tum textleri array olarak tuttuk
	arr =(document.body.innerText);
	//white spaceleri temizleyip result array olusturduk
	var result = arr.match(/\S+/g);

	for(k=0;k<result.length; k++){
	//Girilen sayiyla eslesen result'ı yakaladık
		if(result[k] == sayi){
			var myCell = document.getElementsByClassName("tablo");
			var cellim = null
			for(m=0; m<myCell.length;m++){
				cellim = myCell[m];
				document.getElementsByTagName("td")[k].style.backgroundColor ="red";
			}
			//myCell[k].innerHTML = result[k];
			//myCell[k].bgColor = "red";
			}
		
	}
	
	
}









