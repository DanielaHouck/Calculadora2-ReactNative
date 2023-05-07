const decimalToBinary = (decimal) => {
    return (decimal >>> 0).toString(2);
  };
  
  const binaryToDecimal = (binary) => {
    return parseInt(binary, 2);
  };
  
  const decimalToOctal = (decimal) => {
    return (decimal >>> 0).toString(8);
  };
  
  const octalToDecimal = (octal) => {
    return parseInt(octal, 8);
  };
  
  const decimalToHexadecimal = (decimal) => {
    return (decimal >>> 0).toString(16).toUpperCase();
  };
  
  const hexadecimalToDecimal = (hexadecimal) => {
    return parseInt(hexadecimal, 16);
  };
  
  export { decimalToBinary, binaryToDecimal, decimalToOctal, octalToDecimal, decimalToHexadecimal, hexadecimalToDecimal };