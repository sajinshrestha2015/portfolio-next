import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export const formattedDate = (date = new Date()) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  // Display time in the user's time zone

  const localizedTime = date.toLocaleString('en-US', {
    timeZone: userTimeZone,
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
    hour12: true
  })

  return localizedTime
}
