import React from 'react'
import { Toaster } from 'react-hot-toast'
import { AppRouter } from './router/AppRouter'

export const EcommerceApp = () => {
  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  )
}
