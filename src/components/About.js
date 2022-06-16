import React from 'react'

export default function About(props) {
  return (
    <h3 className={`bg-${props.arr[0]} text-${props.arr[1]} vh-100 text-center py-5 px-5`}  >
      Free software Text Analyzer allows you to convert text to UPPERCASE or lowercase,copy or cut text and remove unnecessary
      spacing in text.It also counts the number of words and number of characters.
    </h3>
  )
}
