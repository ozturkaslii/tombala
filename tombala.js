function randomNum(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MyTable()
{

// 7 satır 3 sütundan oluşan tablomuz için değişkenler tanımladık.
	var satirSayisi = 3;
	var stnSayisi = 7;
	document.write("<div class='row'>");
	document.write("<div style='padding-top:15px; padding-left:15px;'>");
	document.write("<div class='col-lg-4 col-md-6 col-sm-12 table-responsive'>")
	document.write("<table class='table table-bordered' style='width: 30%; height:18%'>");
	
	for(var i =1;i<=satirSayisi;i++ )
	{
	document.write("<tr class='idtr'>");
		for(var j=1;j<=stnSayisi;j++)
		{
			 
		//for içerisinde bu function'ı çağırdık ki her kare için random sayı üretebilelim.
			var y = randomNum(1, 20);

			if((i+j)%2 == 0)
			{
				document.write("<td class='data' bgcolor='aqua' style='opacity: 0.75;'>"+y+"</td>");
			}else
			{
				document.write("<td class='data' bgcolor='orange' style='opacity: 0.75;'>"+y+"</td>");
			}
		}
		document.write("</tr>");
	
	}
	document.write("</table>");
	document.write("</div>");
	document.write("</div>");
	document.write("</div>");


}
function severalTables()
{
	// Fonksiyonun her çağırılışında sayfayı temizlemek istedik.
	document.body.innerHTML = '';
	
	for(n=1; n<3;n++){
		
		MyTable(n);
		document.write("<br/>");		
	}
 document.write("<input type='button' id='btnm' value='Generate' onclick='sayiUret();'/>");
}

//Icerisine herhangi bir sayi alip background color degistirecek olan function.
// function getSayi(sayi)
// {	
	// var arr = [];
	// //Tum textleri array olarak tuttuk
	// arr =(document.body.innerText);
	// //white spaceleri temizleyip result array olusturduk
	// var result = arr.match(/\S+/g);

	// for(k=0;k<result.length; k++){
	// //Girilen sayiyla eslesen result'ı yakaladık
		// if(result[k] == sayi){
			// var myCell = document.getElementsByClassName("table");
			// var cellim = null
			// for(m=0; m<myCell.length;m++){
				// cellim = myCell[m];
				// document.getElementsByTagName("td")[k].style.backgroundColor ="red";
			// }
			// //myCell[k].innerHTML = result[k];
			// //myCell[k].bgColor = "red";
			// }
		
	// }
	
	
// }



//random sayı üretip tombalada bulan fonksiyon.

function sayiUret()
{
	
	
	var arr = [];
	// //Tum textleri array olarak tuttuk
	arr =(document.body.innerText);
	// //white spaceleri temizleyip result array olusturduk
	var result = arr.match(/\S+/g);
	var sayi = new Array();
	
	for(i=0; i< 10; i++)
	{
		rndSayi = randomNum(1, 20);
		sayi[i] = rndSayi;
		//document.write(" <b>"+sayi[i]+" - "+"</b>");
		for(k=0;k<result.length; k++){
		//Girilen sayiyla eslesen result'ı yakaladık
		 if(result[k] == sayi[i]){
			//$(".data").each(function(){
			var tdler = document.getElementsByTagName("td");
			if(tdler[k].bgColor != null && tdler[k].bgColor != 'red')
			{
				tdler[k].bgColor = 'red';
				
			}
			
		//$( '#btnm').click(function() {		
			//var fo = $('.data')[k].val();
				//fo.fadeOut(500);
			
				//fo.fadeIn(500);					
				
			//});
			
			//});
		
		}
		
			//console.log(sayi[i]);
	}
		
	}
	
	cinko();
	tombala();

}

function cinko()
{
	var rowlar = document.getElementsByTagName("tr");
	var hucreler = document.getElementsByTagName("td");
	
	for(i=0;i<rowlar.length;i++)
	{
		//yeniDizi olusturduk cunku her bir hucreyi kontrol edecegiz. ilk for icinde olusturma nedenimiz her bir row icin array'i sıfırlamak istememizden kaynaklanıyor. 
		var yeniDizi = [];
		for(j=0;j<rowlar[i].cells.length;j++)
		{
				//yeniDizi'miz sadece background colorları icinde tutuyor
			yeniDizi[j] = rowlar[i].cells[j].bgColor;
			//bir row 7 hucreden olusuyor, arrayimizin sadece 7 eleman tuttugundan emin olmak istedik.
			if(yeniDizi.length % 7 === 0)
			{
				if(yeniDizi.allValuesSame())
				{
					alert("Cinko !");
				}
			}			
			//console.log(rowlar[0].cells[2].bgColor);
		}
	}
	
	//return rowCount;
	
}

//Array'in tum elemanlari ayni mi (red mi) diye kontrol eden function.
Array.prototype.allValuesSame = function() {

    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0])
            return false;
    }

    return true;
}


function tombala()
{
	var tablo = document.getElementsByTagName("table");
	var rowlar = document.getElementsByTagName("tr");
	
	for(i=0; i<tablo.length; i++)
	{
		var yeniDizi1 = [];
		var yeniDizi2 = [];
		var yeniDizi3 = [];
		for(j=0;j<tablo[i].rows.length;j++)
		{
			
			for(k=0;k<rowlar[j].cells.length;k++)
			{
				console.log(tablo[i].rows[j].cells[k].bgColor);
				yeniDizi1[k] = tablo[i].rows[j].cells[k].bgColor;
				yeniDizi2[k] = tablo[i].rows[j+1].cells[k].bgColor;
				yeniDizi3[k] = tablo[i].rows[j+2].cells[k].bgColor;
			
				if(yeniDizi1.length % 7 === 0 && yeniDizi2.length % 7 === 0 && yeniDizi3.length % 7 === 0)
				{
					
						if(yeniDizi1.allValuesSame())
						{
							if(yeniDizi2.allValuesSame())
							{
								if(yeniDizi3.allValuesSame())
								{
									alert("Tombala !");
								}else{
									return;
								}
							}
							else
							{								
								return;
							}
							
						}else
						{
							return;
						}
					
					
				}
			}
			
		}
	}
	
}








