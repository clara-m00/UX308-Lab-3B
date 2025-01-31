import { windspeedDescription } from "../windspeedDescription.js";

describe("test windspeedDescription", function() {
    it("test windspeed of 5mph ", function() {
      let windspeed = 5;
      let description = windspeedDescription(windspeed);
      expect(description).toBe("Wind felt on face; leaves rustle; vanes begin to move");
    });

    it("test windspeed of 27mph ", function() {
        let windspeed = 27;
        let description = windspeedDescription(windspeed);
        expect(description).toBe("Large branches of trees in motion; whistling heard in wires");
      });

  });