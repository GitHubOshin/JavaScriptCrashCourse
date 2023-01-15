/**
 * * CONDITIONS
 *
 * *  Equal                    ===
 * *  Not equal                !==
 * *  Greater than             >
 * *  Less than                <
 * *  Greater than or equal    >=
 * *  Less than or equal       <=
 *
 * *  And     &&
 * *  Or      ||
 * *  Not     !
 */

const age = 25
if (age > 18) {
  console.log('Age is more than 18')
} else {
  console.log('Age is less than 18 or equal to 18')
}

let password = 'abc'

if (password === '') {
  console.log('Password is required')
} else if (password.length >= 8 && password.length <= 12) {
  console.log('Password is valid')
} else {
  console.log('Password is invalid')
}
