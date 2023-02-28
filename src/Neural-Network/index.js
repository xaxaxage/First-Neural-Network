const { input, expected } = require("../data/dataset.js")
const fs = require("fs")

class NeuralNetwork {
   constructor() {
      this.w1 = null
      this.w2 = null

      fs.readFile('./src/data/weights.txt', 'utf8', (err, data) => {
         if (err) {
            console.error(err);
            return;
         }
         const array = data.split(',')

         array[0] = Number(array[0])
         array[1] = Number(array[1])
         
         this.w1 = array[0]
         this.w2 = array[1]
      });
   }

   predict(x1, x2) {
      const result = this.w1 * x1 + this.w2 * x2
      return result
   }

   train(input, expected, epochs = 1000, learningRate = 0.00001) {
      for (let epoch = 1; epoch < epochs; epoch++) {
         for (let i = 0; i < input.length; i++) {
            const x1 = input[i][0]
            const x2 = input[i][1]
            
            const result = this.predict(x1, x2)

            let error = expected[i] - result

            error *= 0.00000000001
   
            this.w1 += x1 * error * learningRate
            this.w2 += x2 * error * learningRate
         }
      }

      const weights = `${this.w1},${this.w2}`

      fs.writeFileSync('./src/data/weights.txt', weights, err => {
         if (err) {
            console.error(err);
         }
      // file written successfully
      });
   }
}

const NN = new NeuralNetwork()

NN.train(input, expected, 15000000)

const result = NN.predict(2456254524, 32459082734)
console.log(result)