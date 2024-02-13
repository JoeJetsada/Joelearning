function toCelsius(fahrenheit)
{
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + "c";
}
function display(elementID, value)
{
    document.getElementById(elementID).innerHTML = "<i>"+value+"</i>"
}
function toFahrenheit(celsius)
{
    let value = (celsius * 9) / 5 + 32
    return value.toFixed(2) + "f";
}
function toCelsiusProgram(value)
{
    alert(toCelsius(value))
}
function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}
