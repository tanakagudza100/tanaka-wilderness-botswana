"use server"

import {redirect} from "next/navigation"

export async function signIn() {
    redirect("/api/auth/login")
}

export async function signOut() {
    redirect("/api/auth/logout")
}