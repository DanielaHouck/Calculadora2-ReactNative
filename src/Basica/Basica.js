import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    decimalToBinary,
    binaryToDecimal,
    decimalToOctal,
    octalToDecimal,
    decimalToHexadecimal,
    hexadecimalToDecimal,
  } from '../Aritmetica/Conversao';
  import { sin, cos, tan } from '../Trigonometrica/Trigonometria';

// initialState é usado para dar valor predeterminado à aplicação
export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
  };
  // handleNumber serve para devolver o valor da calculadora e tem 2 props: valor e estado.
  export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
      return { currentValue: `${value}` };
    }
  
    return {
      currentValue: `${state.currentValue}${value}`,
    };
  };
  
  const handleEqual = (state) => {
    const { currentValue, previousValue, operator } = state;
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = { operator: null, previousValue: null };
  
    switch (operator) {
      case "+":
        return {
          currentValue: `${previous + current}`,
          ...resetState,
        };
      case "-":
        return {
          currentValue: `${previous - current}`,
          ...resetState,
        };
      case "*":
        return {
          currentValue: `${previous * current}`,
          ...resetState,
        };
      case "/":
        return {
          currentValue: `${previous / current}`,
          ...resetState,
        };
      case "x^":
        return {
          currentValue: `${previous ** current}`,
          ...resetState,
        };

      default:
        return state;
    }
  };
  
  // calculator function
  const calculator = (type, value, state) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "clear":
        return initialState;
      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
      case "exponencial":
        return {
            currentValue: `${parseFloat(state.currentValue) ** 2}`,
        };  
      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        };
      case "operator":
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0",
        };
      case "equal":
        return handleEqual(state);
      default:
        return state;
    }
  };

  //calculadora 2
  const handleButtonPress = (text) => {
    switch (text) {
      case 'C':
        setValue('');
        break;
      case '=':
        try {
          const result = eval(value);
          setValue(result.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Bin':
        try {
          const decimalValue = eval(value);
          const binaryValue = decimalToBinary(decimalValue);
          setValue(binaryValue.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Oct':
        try {
          const decimalValue = eval(value);
          const octalValue = decimalToOctal(decimalValue);
          setValue(octalValue.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Hex':
        try {
          const decimalValue = eval(value);
          const hexadecimalValue = decimalToHexadecimal(decimalValue);
          setValue(hexadecimalValue.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Sin':
        try {
          const angle = eval(value);
          const result = sin(angle);
          setValue(result.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Cos':
        try {
          const angle = eval(value);
          const result = cos(angle);
          setValue(result.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      case 'Tan':
        try {
          const angle = eval(value);
          const result = tan(angle);
          setValue(result.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      default:
        setValue(value + text);
    }
  };
  
  export default calculator;
