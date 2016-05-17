function randomNum(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//table'lar her tusa bastıgımda tek bir tablo olmuyor ve sayılar değişmiyor sayıların değişmesi ve birden fazla table olmaması lazım
function MyTable()
{

// 7 satır 3 sütundan oluşan tablomuz için değişkenler tanımladık.
	var satirSayisi = 3;
	var stnSayisi = 7;
	
	document.write("<table border='1' width='600' height='200'>");
	
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
				document.write("<td bgcolor='orange'>"+y+"</td>");
			}
		}
		document.write("</tr>");
	
	}
	document.write("</table>");

}
