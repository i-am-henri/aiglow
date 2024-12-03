"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { redirect } from "next/navigation"
import { toast } from "sonner"

export default function Home() {
  const login = async (e: FormData) => {
    const login = await authClient.signIn.email({
      password: e.get("password") as string,
      email: e.get("email") as string,
    }, {
      onRequest: (ctx) => {
        toast.loading("Du wirst angemeldet...")
      },
      onSuccess: (ctx) => {
        redirect("/dashboard")
      },
      onError: (ctx) => {
        toast.info("Fehler beim Einloggen, bitte regestriere dich zuerst.")
      },
    });
  }
  const register = async (e: FormData) => {
    const register = await authClient.signUp.email({
      email: e.get("email") as string,
      password: e.get("password") as string,
      name: e.get("username") as string,
    }, {
      onRequest: (ctx) => {
        toast.loading("Du wirst regestriert...")
      },
      onSuccess: (ctx) => {
        redirect("/dashboard")
      },
      onError: (ctx) => {
        toast.info(`Fehler beim Regestrieren, bitte logge dich ein. Fehler: ${ctx.error.message}`)
      },
    });
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-32">
      <Card className="mx-10 sm:w-[60%] md:w-[40%] ">
        <CardHeader>
          <CardTitle>Aiglow - erstelle deine Lernzettel mit KI</CardTitle>
          <CardDescription>Aiglow ist ein komplett gratis und öffentliches Programm zum erstellen von Lernzettel für die Schule und Uni. Lade dabei ganz bequem deinen Inhalt hoch, beantworte einige Verständnisfragen und lasse dir mit KI deinen Lernzettel erstellen.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <h2 className="text-lg text-medium">
            Regestriere dich oder logge dich ein:
          </h2>
          <Tabs defaultValue="login">
            <TabsList>
              <TabsTrigger value="login">Einloggen</TabsTrigger>
              <TabsTrigger value="register">Regestrieren</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form action={login} className="space-y-3">
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Passwort" />
                <div className="flex items-center justify-between flex-col md:flex-row gap-2">
                  <Button type="submit" className="w-full">Einloggen</Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form action={register} className="space-y-3">
                <Input name="username" placeholder="Benutzername" />
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Passwort" />
                <div className="flex items-center justify-between flex-col md:flex-row gap-2">
                  <Button type="submit" className="w-full">Regestrieren</Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>

        </CardContent>
        <CardFooter>
          <p className="text-muted-foreground">Hey, wenn du noch kein Konto hast, ist das kein Problem. Du kannst mit dem Button "Fortfahren" auch ein neues Konto erstellen. Du stimmst der <Link href="/datenschutz" className="underline text-secondary-foreground">Datenschutzbestimmungen</Link> und den <Link className="underline text-secondary-foreground" href="/nutzungsbedingungen">Nutzungsbedingungen</Link> zu.</p>
        </CardFooter>
      </Card>
    </div>
  )
}