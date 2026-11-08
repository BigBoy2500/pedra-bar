'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error ?? 'Erro ao entrar.')
        setLoading(false)
        return
      }
      router.replace('/admin')
      router.refresh()
    } catch {
      setError('Sem ligação ao servidor.')
      setLoading(false)
    }
  }

  return (
    <div className="container pt-40 pb-16">
      <form onSubmit={submit} className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-primary mb-1 text-center">Painel do Pedra Bar</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Área reservada aos donos.</p>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoFocus
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading || !password}
          className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? 'A entrar…' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}
