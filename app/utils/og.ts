import logoSvg from '~/assets/icons/logo.svg?raw'

export const ogLogo = `data:image/svg+xml;utf8,${encodeURIComponent(logoSvg.replace(/currentColor/g, '#818cf8'))}`

export function ogClamp(text: string, max: number): string {
  return text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`
}
