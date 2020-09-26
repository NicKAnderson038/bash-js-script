#!/usr/bin/env node

console.log('enter a list of number between 1 and 100, separated by space')

process.stdin.setEncoding('utf8')

process.stdin.on('data', function (chunk) {
  const input = chunk.trim().split(' ')

  for (index in input) {
    const n = input[index]

    if (isNaN(n)) {
      console.log(`${n} is not a number!`)
    } else if (n < 1) {
      console.log(`${n} is less than 1!`)
    } else if (n > 100) {
      console.log(`${n} is greater than 100!`)
    } else {
      console.log(`${n} is valid!`)
    }
  }

  process.exit()
})
