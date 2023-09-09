import { useState } from 'react'
import { isAxiosError } from 'axios'

interface useError {
  error: string | null
  handleError: (error: unknown) => void
  clearError: () => void
}

export function useError(): useError {
  const [error, setError] = useState<string | null>(null)

  const handleError = (error: unknown) => {
    if (
      isAxiosError(error) &&
      error.response?.status === 401 &&
      error.response.data.message === 'Invalid credentials'
    ) {
      setError('Email e senha incorretos')
    } else {
      setError(
        'Algo deu errado ao processar sua requisição, tente novamente mais tarde!'
      )
    }
  }

  const clearError = () => {
    setError(null)
  }

  return {
    error,
    handleError,
    clearError
  }
}
