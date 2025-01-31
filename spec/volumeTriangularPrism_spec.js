import { volumeTriangularPrism } from "../volumeTriangularPrism.js";

describe("test volumeTriangularPrism", function() {
    it("test baselength of 5cm and a length of 14cm", function() {
      let baselength = 5;
      let length = 14;
      let volume = volumeTriangularPrism(baselength, length);
      expect(volume.toFixed(2)).toBe("151.55");
    });

    it("test baselength of 10cm and a length of 35cm", function() {
        let baselength = 10;
        let length = 35;
        let volume = volumeTriangularPrism(baselength, length);
        expect(volume.toFixed(2)).toBe("1515.54");
      });

  });