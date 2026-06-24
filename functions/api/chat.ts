// ============================================================
// Cloudflare Pages Function — Chat proxy
// Holds the API key server-side so it never reaches the browser.
// Forwards the request body verbatim to the upstream chat API.
//
// Set these in Cloudflare Pages → Settings → Environment Variables
// (NO "PUBLIC_" prefix — these must stay server-side):
//   API_URL   the upstream API base, e.g. https://api.callfirst.co.uk
//   API_KEY   the secret bearer token
// ============================================================

interface Env {
  API_URL: string
  API_KEY: string
}

export async function onRequestPost(context: {
  request: Request
  env: Env
}): Promise<Response> {
  const { request, env } = context

  if (!env.API_URL || !env.API_KEY) {
    return new Response(JSON.stringify({ error: 'Server not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const body = await request.text()

  const upstream = await fetch(`${env.API_URL}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.API_KEY}`,
    },
    body,
  })

  return new Response(upstream.body, {
    status: upstream.status,
    headers: { 'Content-Type': 'application/json' },
  })
}
