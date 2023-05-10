import React from 'react'
import FlashMessage from 'react-flash-message'
const Alert = ({ type,heading,content }) => {
  if (!type) return null
  const colorClasses = {
    'success': 'bg-green-100 border-l-4 border-green-500 text-green-700',
    'warning': 'bg-orange-100 border-l-4 border-orange-500 text-orange-700',
    'error': 'bg-red-100 border-l-4 border-red-500 text-red-700',
  }
  const defaultHeading = {
    'success': 'Yay! ',
    'warning': 'Be Warned! ',
    'error': 'Holy smokes! ',
  }
  const defaultContent = {
    'success': 'That was successful.',
    'warning': 'Something not ideal might be happening.',
    'error': 'Something seriously bad happened.',
  }

  return (
    <FlashMessage duration={5000} persistOnHover={true} >
      <div class={`absolute bottom-16 ${colorClasses[type]} m-3 py-4 px-8 self-center`} role="alert">
        <p class="font-bold">{`${heading?heading:defaultHeading[type]}`}</p>
        <p>{`${content?content:defaultContent[type]}`}</p>
      </div>
    </FlashMessage>
  )
}

export default Alert;