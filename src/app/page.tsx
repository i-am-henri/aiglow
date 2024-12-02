"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { redirect } from "next/navigation"
import { toast } from "sonner"

export default function Home() {
  const start = async (e: FormData) => {
    const register = await authClient.signUp.email({
      email: e.get("email") as string,
      password: e.get("password") as string,
      name: e.get("username") as string,
    }, {
      onRequest: (ctx) => {
        toast.loading("Du wirst angemeldet...")
      },
      onSuccess: (ctx) => {
        redirect("/dashboard")
      },
      onError: (ctx) => {
        toast.info("Fehler bei erneuter Regestirerung, du wirst nun eingeloggt.")
      },
    });
    // could not register user, log in instead
    const login = await authClient.signIn.username({
      password: e.get("password") as string,
      username: e.get("username") as string,
    }, {
      onRequest: (ctx) => {
        toast.loading("Du wirst eingeloggt...")
      },
      onSuccess: (ctx) => {
        redirect("/dashboard")
      },
      onError: (ctx) => {
        toast.error("Fehler beim Einloggen, bitte überprüfe deine Eingaben.")
      },
    });

  }
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-32">
      <Card className="md:w-[40%]">
        <CardHeader>
          <CardTitle>Aiglow - erstelle deine Lernzettel mit KI</CardTitle>
          <CardDescription>Aiglow ist ein komplett gratis und öffentliches Programm zum erstellen von Lernzettel für die Schule und Uni. Lade dabei ganz bequem deinen Inhalt hoch, beantworte einige Verständnisfragen und lasse dir mit KI deinen Lernzettel erstellen.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <h2 className="text-lg text-medium">
            Regestriere dich oder logge dich ein:
          </h2>
          <form action={start} className="space-y-3">
            <Input name="username" placeholder="Benutzername" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Passwort" />
            <div className="flex flex-col gap-2">
              <Button>Fortfahren</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-muted-foreground">Hey, wenn du noch kein Konto hast, ist das kein Problem. Du kannst mit dem Button "Fortfahren" auch ein neues Konto erstellen. Du stimmst der <Link href="/datenschutz" className="underline text-secondary-foreground">Datenschutzbestimmungen</Link> und den <Link className="underline text-secondary-foreground" href="/nutzungsbedingungen">Nutzungsbedingungen</Link> zu.</p>
        </CardFooter>
      </Card>
    </div>
  )
}