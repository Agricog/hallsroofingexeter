// ============================================================
// Cloudflare Pages Function — Lead proxy
// Same model as chat.ts: API_URL, API_KEY and CLIENT_ID live
// server-side. The browser sends only the lead data and the
// conversation log; this function injects the credentials and
// client id, then forwards server-to-server to the upstream API.
//
// Set these in Cloudflare Pages → Settings → Variables and secrets
// (NO "PUBLIC_" / "VITE_" prefix):
//   API_URL     upstream base, e.g. https://callfirst-api-production.up.railway.app
//   API_KEY     the secret bearer token   (mark as Secret)
//   CLIENT_ID   this client's id          (mark as Secret)
// ============================================================

interface Env {
  API_URL: string
  API_KEY: string
  CLIENT_ID: string
}

export async function onRequestPost(context: {
  request: Request
  env: Env
}): Promise<Response> {
  const { request, env } = context

  if (!env.API_URL || !env.API_KEY || !env.CLIENT_ID) {
    return new Response(
      JSON.stringify({ error: 'Server not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }

  let incoming: Record<string, unknown> = {}
  try {
    incoming = await request.json()
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Inject clientId server-side; forward lead + conversationLog as sent.
  const payload = {
    clientId: env.CLIENT_ID,
    lead: incoming.lead ?? {},
    conversationLog: incoming.conversationLog ?? [],
  }

  const upstream = await fetch(`${env.API_URL}/api/lead`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.API_KEY}`,
    },
    body: JSON.stringify(payload),
  })

  const text = await upstream.text()
  return new Response(text, {
    status: upstream.status,
    headers: { 'Content-Type': 'application/json' },
  })
}
