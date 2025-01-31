import { convertKelvinToFahrenheit } from "../convertKelvinToFahrenheit.js";

describe("test convertKelvinToFahrenheit", function() {
    it("test 1 kelvin", function() {
      let kelvin = 1;
      let fahrenheit = convertKelvinToFahrenheit(kelvin);
      expect(fahrenheit.toFixed(2)).toBe("-457.87");
    });

    it("test -30 kelvin", function() {
      let kelvin = -30;
      let fahrenheit = convertKelvinToFahrenheit(kelvin);
      expect(fahrenheit.toFixed(2)).toBe("-513.67");
    });

  });
  
  