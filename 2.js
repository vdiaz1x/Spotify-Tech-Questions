// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 
// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

// test strings
let str1 = "4[ab]"
let str2 = "2[b3[a]]"

// function
function decodeString(s){
  // grabbing the indexes of the brackets
  // finding the innermost brackets so that the function can work
  // recursively from inside out
  // the index for the first bracket has 1 added to it to exclude
  // it from the the substring function
  const firstB = s.lastIndexOf("[")+1
  const lastB = s.indexOf("]")

  // index for the multiplier, index will be 2 before the first letter of substring
  const multiIndex = firstB-2

  // the actual multiplier for the decoding
  const multiplier = s[multiIndex]
  
  // the substring in between the brackets
  let sub=  s.substring(firstB, lastB)
  // the substring multiplied by the multiplier
  let decode = sub.repeat(multiplier)

  // this makes a new string consisting of the old string up to
  // the first bracket exclusive, the decoded string,
  // and from after the last bracket to the end of the old string
  let newS = s.slice(0,multiIndex) + decode + s.slice(lastB+1, s.length)

  // recursion- if the string contains no more brackets, return the new string
  // otherwise, call the function again until there are no more brackets
  return newS.includes("[") && newS.includes("]") ? decodeString(newS): newS
}

decodeString(str1)
decodeString(str2)
