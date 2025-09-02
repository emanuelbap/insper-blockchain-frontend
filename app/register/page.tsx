'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: name, email: email }),
      })

      if (response.ok) {
        alert('Registro realizado com sucesso!')
        router.push('/')
      } else {
        alert('Erro ao registrar')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Erro ao conectar com o servidor')
    }
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          Junte-se a nós
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={() => router.push('/')}>
              Voltar
            </Button>
            <Button type="submit" className="flex-1 text-white">
              Registrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}