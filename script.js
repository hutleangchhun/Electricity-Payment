function Calculate(){
	var id = document.getElementById("CusID").value;
	var name = document.getElementById("CusName").value;
	var old_value = document.getElementById("CusOld").value;
	var new_value = document.getElementById("CusNew").value;
				
	var usage = new_value - old_value;
	var value = " Kwh";
	//calculate Total
	var price;
	var amount;
	var total;
	if(usage <= 50){
		price = "500";
		total = price*usage;
	}else if(usage > 50 && usage <= 100){
		price = "1000";
		total = price*usage;
	}else if(usage > 100 && usage <= 150){
		price = "1500";
		total = price*usage;
	}else if(usage > 150 && usage <= 200){
		price = "2000";
		total = price*usage;
	}else{
		price = "2500";
		total = price*usage;
	}
	document.getElementById("showID").innerHTML = id;
	document.getElementById("showName").innerHTML = name;
	document.getElementById("showOld").innerHTML = old_value + value;
	document.getElementById("showNew").innerHTML = new_value + value;
	document.getElementById("showUsage").innerHTML = usage + value;
	document.getElementById("showPrice").innerHTML = price + " ៛/Kwh";
	document.getElementById("showTotal").innerHTML = total + " ៛";
}
function btnreset(){
	document.getElementById().reset(); 
}