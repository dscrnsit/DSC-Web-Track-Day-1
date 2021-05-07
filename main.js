function addFunc()
{
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    console.log(sum);
    document.getElementById("res").innerHTML = sum;
}

function subtFunc()
{
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    console.log(sum);
    document.getElementById("res").innerHTML = sum;
}