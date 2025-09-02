"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, CheckCircle, Users, Zap, BookOpen } from "lucide-react"

export function JoinUsForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    year: "",
    interests: [] as string[],
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const interests = [
    "Bitcoin e Criptomoedas",
    "Ethereum e Smart Contracts",
    "DeFi (Finanças Descentralizadas)",
    "NFTs e Arte Digital",
    "DAOs e Governança",
    "Web3 e Metaverso",
    "Desenvolvimento Blockchain",
    "Pesquisa Acadêmica",
  ]

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-20 w-20 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Bem-vindo ao Blockchain Insper!</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Sua inscrição foi enviada com sucesso. Em breve você receberá um email com informações sobre como
                participar da nossa comunidade.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Acesso ao Discord</p>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Eventos Exclusivos</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Recursos Premium</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Junte-se a Nós</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Faça parte da maior comunidade acadêmica de blockchain do Brasil. Preencha o formulário abaixo e comece sua
            jornada conosco.
          </p>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <UserPlus className="h-6 w-6 mr-2" />
              Formulário de Inscrição
            </CardTitle>
            <p className="text-muted-foreground">
              Todas as informações são confidenciais e usadas apenas para personalizar sua experiência na comunidade.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="join-name">Nome Completo</Label>
                  <Input
                    id="join-name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="join-email">Email Acadêmico</Label>
                  <Input
                    id="join-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="course">Curso</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, course: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu curso" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engenharia</SelectItem>
                      <SelectItem value="economics">Economia</SelectItem>
                      <SelectItem value="business">Administração</SelectItem>
                      <SelectItem value="law">Direito</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Ano/Período</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, year: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu ano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1º Ano</SelectItem>
                      <SelectItem value="2">2º Ano</SelectItem>
                      <SelectItem value="3">3º Ano</SelectItem>
                      <SelectItem value="4">4º Ano</SelectItem>
                      <SelectItem value="graduate">Pós-graduação</SelectItem>
                      <SelectItem value="professional">Profissional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Áreas de Interesse (selecione todas que se aplicam)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <Label htmlFor={interest} className="text-sm">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, newsletter: checked as boolean }))}
                />
                <Label htmlFor="newsletter" className="text-sm">
                  Quero receber a newsletter semanal com novidades sobre blockchain
                </Label>
              </div>

              <Button type="submit" className="w-full text-[#DE5110] hover:bg-orange-700 text-white text-lg py-3">
                Inscrever-se na Comunidade
                <UserPlus className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao se inscrever, você concorda com nossos termos de uso e política de privacidade. Você pode cancelar
                sua participação a qualquer momento.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
