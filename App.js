import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState, handleButtonPress } from "./src/Basica/Basica";

// create class component of App
export default class App extends Component {
  state = initialState;

  // handle tap method - te como objetivo proporcionar valores de estado e chamar os arquivos util e calculator.
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  // render method
  render() {
    return (
      <View style={styles.container}>
        {/* Status bae here */}
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          {/* Do create componentRow */}
          <Row>
            <Button
              text="C"
              theme="secondaryC"
              onPress={() => this.HandleTap("clear")}
            />

            <Button
              text="x²"
              theme="secondary"
              onPress={() => this.HandleTap("exponencial")}
            />

            <Button
              text="x^"
              theme="secondary"
              onPress={() => this.HandleTap("operator", "x^")}
            />

            <Button
              text="/"
              theme="accent"
              onPress={() => this.HandleTap("operator", "/")}
            />
          </Row>

          {/* Number */}
          <Row>
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button text="8" onPress={() => this.HandleTap("number", 8)} />
            <Button text="9" onPress={() => this.HandleTap("number", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.HandleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.HandleTap("number", 4)} />
            <Button text="5" onPress={() => this.HandleTap("number", 5)} />
            <Button text="6" onPress={() => this.HandleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.HandleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.HandleTap("number", 1)} />
            <Button text="2" onPress={() => this.HandleTap("number", 2)} />
            <Button text="3" onPress={() => this.HandleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.HandleTap("operator", "+")}
            />
          </Row>

          <Row>
          <Button
              text="+/-"
              onPress={() => this.HandleTap("posneg")}
            />
            <Button text="0" onPress={() => this.HandleTap("number", 0)} />
            <Button text="." onPress={() => this.HandleTap("number", ".")} />
            <Button
              text="="
              theme="primary"
              onPress={() => this.HandleTap("equal", "=")}
            />
          </Row>

          <Row>
            <Button text="Bin" onPress={() => handleButtonPress('Bin')} />
            <Button text="Oct" onPress={() => handleButtonPress('Oct')} />
            <Button text="Hex" onPress={() => handleButtonPress('Hex')} />
            <Button text="Sen" onPress={() => handleButtonPress('Sin')} />
            <Button text="Cos" onPress={() => handleButtonPress('Cos')} />
            <Button text="Tan" onPress={() => handleButtonPress('Tan')} />
          </Row>
          
        </SafeAreaView>
      </View>
    );
  }
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});