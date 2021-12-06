function compute()
{
	var principal = document.getElementById("principal").value; <!-- here we are adding the variable "principal" that takes the value of input with the same name -->
	if (principal <= 0) 
		{
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		}
	<!-- if value of "principal" equal or less than 0 there will be warning about that-->

	else
		{
		var rate = document.getElementById("rate").value;
		var years = document.getElementById("years").value;
		var amount = principal * years * rate /100;
		var year = new Date().getFullYear()+parseInt(years);
		document.getElementById("result").innerHTML="<text>If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\></text>";
		}
	<!-- if everything is okay code is calculating the fuction and enters the answer-->

}
function updateRate() 
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval;
}
<!-- this function displays the value of the slider-->
        