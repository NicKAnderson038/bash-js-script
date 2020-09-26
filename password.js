#!/usr/bin/env node

const validPassword = 'secret' //This is our secret password...

console.log('Enter the password to continue: ')

process.stdin.setEncoding('utf8')

process.stdin.on('data', (chunk) => {
  const inputPassword = chunk.trim()

  if (inputPassword == validPassword) {
    console.log('You have access!')
  } else {
    console.log('Access Denied!')
  }

  process.exit()
})
