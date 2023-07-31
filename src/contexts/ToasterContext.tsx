'use client'

import { Toaster } from 'react-hot-toast'

export function ToasterContext() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 5000,
      }}
    />
  )
}
