import { TextAttributes } from "@opentui/core"
import { useTheme } from "../context/theme"

// IWWA: wordmark simples "IWWA CODE" — "IWWA" suave + "CODE" em destaque (bold),
// no lugar do pixel-art half-block do upstream. Sempre renderiza; diff mínimo.
export function Logo() {
  const { theme } = useTheme()
  return (
    <box flexDirection="row" gap={1}>
      <text fg={theme.textMuted} selectable={false}>{"IWWA"}</text>
      <text fg={theme.text} attributes={TextAttributes.BOLD} selectable={false}>{"CODE"}</text>
    </box>
  )
}
