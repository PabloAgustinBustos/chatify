import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect"

export const arcjetProtection = async(req, res, next) => {
  try {
    // Arcjet toma una decisión en base a las reglas establecidas
    const decision = await aj.protect(req)

    // Dará el mensaje correspondiente a la denegación de la request
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ message: 'Rate limit exceeded. Please, try again later.' })
      } else if (decision.reason.isBot()) {
        return res.status(403).json({ message: 'Bot acces denied.' })
      } else {
        return res.status(403).json({ message: 'Access denied by security policy' })
      }
    }

    // Detecta si el bot trató de simular un humano
    if (decision.results.some(isSpoofedBot)) {
      return res.status(403).json({
        error: 'Spoofed bot detected',
        message: 'Malicious bot activity detected.'
      })
    }

    console.log("todo ok")
    next()
  } catch(e) {
    console.log("Arcjet protection Error", e)
    next()
  }
}