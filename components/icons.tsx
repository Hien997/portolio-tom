import { cn } from '@/lib/utils'

export function Github({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('', className)}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.49-1.54 6.49-6.95a7.002 7.002 0 00-2.05-5.05C13.27.67 12.9-.23 12.24-.87c-.5-.6-1.35-.7-2.05-.35-.65.35-1 .95-1.4 1.45-.4.5-.8.7-1.2.7-.4 0-.8-.2-1.2-.5-.4-.3-.9-.5-1.4-.4-.5.1-1 .4-1.4.8-.4.4-.7.9-.9 1.5-.2.6-.2 1.3 0 1.9.2.6.5 1.1.9 1.5.4.4.9.6 1.4.5.5-.1.9-.4 1.2-.8.3-.4.5-.9.5-1.4 0-.5-.2-1-.5-1.4-.3-.4-.8-.6-1.4-.5-.6.1-1 .5-1.4.9-.4.4-.7.9-.9 1.5-.2.6-.2 1.3 0 1.9.2.6.5 1.1.9 1.5.4.4.9.6 1.4.5.5-.1.9-.4 1.2-.8.3-.4.5-.9.5-1.4 0-.5-.2-1-.5-1.4-.3-.4-.8-.6-1.4-.5-.6.1-1 .5-1.4.9-.4.4-.7.9-.9 1.5-.2.6-.2 1.3 0 1.9.2.6.5 1.1.9 1.5.4.4.9.6 1.4.5.5-.1.9-.4 1.2-.8.3-.4.5-.9.5-1.4 0-.5-.2-1-.5-1.4-.3-.4-.8-.6-1.4-.5-.6.1-1 .5-1.4.9-.4.4-.7.9-.9 1.5-.2.6-.2 1.3 0 1.9z" />
    </svg>
  )
}

export function LinkedIn({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('', className)}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Mail({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('', className)}
    >
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

export function ArrowDown({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('', className)}
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  )
}

export function MenuIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('', className)}
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export function XIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('', className)}
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}