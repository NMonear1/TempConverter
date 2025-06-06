const convertToCelsius = (fahrenheit) => {
  let celsius = Math.round(((fahrenheit - 32) * 5) / 9);
  return celsius;
};

const describeTemperature = (fahrenheit) => {
  let celsius = convertToCelsius(fahrenheit);
  if (celsius < 0) {
    return "Very Cold";
  } else if (celsius < 20) {
    return "Cold";
  } else if (celsius < 30) {
    return "Warm";
  } else if (celsius < 40) {
    return "Hot";
  } else {
    return "Very Hot";
  }
};

let Temperature = prompt("*** Please enter a temp in Fahrenheit ***");
let fahrenheit = Number(Temperature);
let celsius = convertToCelsius(fahrenheit);
let description = describeTemperature(fahrenheit);
if (!fahrenheit) alert("Please enter a number");
else alert(`it is ${celsius} degrees Celsius outside. It is ${description}!`);
