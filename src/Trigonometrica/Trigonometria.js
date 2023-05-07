const degreesToRadians = (degrees) => {
    return (degrees * Math.PI) / 180;
  };
  
  const sin = (degrees) => {
    return Math.sin(degreesToRadians(degrees)).toFixed(6);
  };
  
  const cos = (degrees) => {
    return Math.cos(degreesToRadians(degrees)).toFixed(6);
  };
  
  const tan = (degrees) => {
    return Math.tan(degreesToRadians(degrees)).toFixed(6);
  };
  
  export { sin, cos, tan };