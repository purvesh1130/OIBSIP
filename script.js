function convertTemperature() {
    // Get user input
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;

    // Validate input
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Convert temperature
    let convertedTemperature;
    switch (unit) {
        case 'celsius':
            convertedTemperature = celsiusToOtherUnits(parseFloat(temperatureInput));
            break;
        case 'fahrenheit':
            convertedTemperature = fahrenheitToOtherUnits(parseFloat(temperatureInput));
            break;
        case 'kelvin':
            convertedTemperature = kelvinToOtherUnits(parseFloat(temperatureInput));
            break;
        default:
            alert('Invalid unit selected.');
            return;
    }

    // Display result
    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature}`;
}

function celsiusToOtherUnits(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    return `Fahrenheit: ${fahrenheit.toFixed(2)}°F, Kelvin: ${kelvin.toFixed(2)}K`;
}

function fahrenheitToOtherUnits(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    return `Celsius: ${celsius.toFixed(2)}°C, Kelvin: ${kelvin.toFixed(2)}K`;
}

function kelvinToOtherUnits(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    return `Celsius: ${celsius.toFixed(2)}°C, Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
}