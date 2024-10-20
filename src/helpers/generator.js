class GeneratorHelper {
  constructor() {}

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
      const randomHex = (Math.random() * 16) | 0; // Generate a random number from 0 to 15 (hexadecimal)
      return (char === "x" ? randomHex : (randomHex & 3) | 8).toString(16); // Convert the random number to a hexadecimal character
    });
  }
}

const generatorHelper = new GeneratorHelper();
export default generatorHelper;
