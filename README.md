<h1 align="center"><b>My first Neural Network</b></h1>

# Weights

**Right weights have to be 1, 1**

***Weights after training are close to 1***

***Final weights are equals to 1.0000000000000022, 0.9999999999999909***

# Network

<h3>Returning a sum of 2 numbers with a tiny error equals to 0.000...</h3>

**Contains 3 nodes**

**input nodes - 2**<br>
**output nodes - 1**

```javascript
const NN = new NeuralNetwork()

NN.train(input, expected, epochs, learningRate)

const result = NN.predict(15, 10)
console.log(result) // 24.999... or 25.000...
```