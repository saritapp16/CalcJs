var arithSign = false;
var cifra = "0";
var acumulado = "0";


function writeOneInField(value)
{
	avoidZero("txtScreen2");
	
	if (arithSign == "")
	{	
		cifra += value;
		acumulado = cifra;
		document.getElementById("txtScreen2").value = Number(cifra);
	}
	else
	{
		cifra += value;
		document.getElementById("txtScreen2").value += value;		
	}
}


//This function avoids to write multiple zeros in the left side of a number
function avoidZero(_element){
	
	if(document.getElementById(_element).value == "0"){
			document.getElementById(_element).value = "";
	}
}

function avoid_repeted_arithsign(formula){
	var index1 = formula.length-1;
	var index2 = formula.length;
	var has_sign = true;
	if (["+","-","*","/"].indexOf(formula.slice(index1, index2)) != -1){
		has_sign = false;
	}
	return has_sign;
}

function replace_arith_sign(formula, new_arith_sign){
	var new_formula;
	if(formula.length>0){
		new_formula = formula.substring(0, formula.length - 1) + new_arith_sign; 
	}
	return new_formula;
}



function sum(){

	if(arithSign != ""){
		do_math();
	}
	console.log(acumulado);
	
	arithSign = "+";
	//do_math();
	cifra = "";
	if (avoid_repeted_arithsign(document.getElementById("txtScreen2").value)){
		document.getElementById("txtScreen2").value = document.getElementById("txtScreen2").value + arithSign;
	}
	else{
		document.getElementById("txtScreen2").value = replace_arith_sign(document.getElementById("txtScreen2").value, arithSign);
	}
}

function rest(){
	
	if(arithSign != ""){
		do_math();
	}
	console.log(acumulado);
	arithSign = "-";
	cifra = "";
	if (avoid_repeted_arithsign(document.getElementById("txtScreen2").value)){
		document.getElementById("txtScreen2").value = document.getElementById("txtScreen2").value + arithSign;
	}
	else{
		document.getElementById("txtScreen2").value = replace_arith_sign(document.getElementById("txtScreen2").value, arithSign);
	}

}

function mult(){
	
	if(arithSign != ""){
		do_math();
	}
	console.log(acumulado);
	arithSign = "*";
	cifra = "";
	if (avoid_repeted_arithsign(document.getElementById("txtScreen2").value)){
		document.getElementById("txtScreen2").value = document.getElementById("txtScreen2").value + arithSign;
	}
	else{
		document.getElementById("txtScreen2").value = replace_arith_sign(document.getElementById("txtScreen2").value, arithSign);
	}
}

function div(){
	
	if(arithSign != ""){
		do_math();
	}
	console.log(acumulado);
	arithSign = "/";
	cifra = "";
	if (avoid_repeted_arithsign(document.getElementById("txtScreen2").value)){
		document.getElementById("txtScreen2").value = document.getElementById("txtScreen2").value + arithSign;
	}
	else{
		document.getElementById("txtScreen2").value = replace_arith_sign(document.getElementById("txtScreen2").value, arithSign);
	}
}

function showResult(){
	
	do_math();
	document.getElementById("txtScreen2").value = acumulado;
	cifra = "0";
	arithSign = "";
}

function do_math(){
	if(arithSign == "+"){
		acumulado = Number(cifra)+Number(acumulado);
	}
	else if(arithSign == "-"){
		acumulado = Number(acumulado) - Number(cifra);
	}
	else if(arithSign == "*"){
		acumulado = Number(acumulado) * Number(cifra);
	}
	else if(arithSign == "/"){
		acumulado = Number(acumulado) / Number(cifra);
	}
}

function clearScreen(){
	
	cifra = "";
	acumulado = "";
	arithSign = "";

	document.getElementById("txtScreen2").value = "0";
}


