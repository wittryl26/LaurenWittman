import { draftMode } from "next/headers"

export function GET() {
  draftMode().enable()
  return new Response("Draft mode enabled")
}
