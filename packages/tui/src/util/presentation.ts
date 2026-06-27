const reset = "\x1b[0m"
const bold = "\x1b[1m"
const dim = "\x1b[90m"

// IWWA: wordmark texto "IWWA CODE" ("IWWA" suave + "CODE" em destaque), no lugar
// do pixel-art half-block do upstream — mesma filosofia do component Logo(); diff mínimo.
function wordmark(pad = "") {
  return [`${pad}${dim}IWWA${reset} ${bold}CODE${reset}`]
}

export function sessionEpilogue(input: { title: string; sessionID?: string }) {
  const weak = (text: string) => `${dim}${text.padEnd(10, " ")}${reset}`
  return [
    ...wordmark("  "),
    "",
    `  ${weak("Session")}${bold}${input.title}${reset}`,
    `  ${weak("Continue")}${bold}iwwacode -s ${input.sessionID}${reset}`,
    "",
  ].join("\n")
}
