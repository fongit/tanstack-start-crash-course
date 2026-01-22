// export const copyToClipboard = async (url: string) => {
//     await navigator.clipboard.writeText(url)
// }

import { createClientOnlyFn } from '@tanstack/react-start'
import { toast } from 'sonner'

export const copyToClipboard = createClientOnlyFn(async (url: string) => {
  await navigator.clipboard.writeText(url)
  toast.success('Copied to clipboard!')
  return
})
