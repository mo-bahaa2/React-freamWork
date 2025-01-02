import React from 'react'
import error from '../Error/error.module.css'

export default function Error() {
  return <>
  <div class={`container ${error.minVh}`}>
    <h1 >404</h1>
    <h2 >Page Not Found</h2>
    <p >The page that you are looking for doesn't exist or another error occurred.</p>

    </div>
  </>
}
