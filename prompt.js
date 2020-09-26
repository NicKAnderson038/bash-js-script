#!/usr/bin/env node

const prompt = require('prompt')

prompt.start()

prompt.get(['name', 'age'], (err, result) => {
  if (err) throw err

  let sayAge = ''

  if (result.age == 100) {
    sayAge = 'You are already 100 years old!'
  } else if (result.age < 100) {
    sayAge = `You will be 100 in ${100 - result.age} years!`
  } else {
    sayAge = `You turned 100 ${result.age - 100} years ago!`
  }

  console.log(`Hello ${result.name} ${sayAge}`)
})
