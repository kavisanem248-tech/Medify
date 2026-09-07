/**
 * Badge — small status pill.
 *
 * Props:
 *   label   {string}
 *   variant {string} — 'success' | 'warning' | 'danger' | 'info' | 'neutral'
 */
const variants = {
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100   text-amber-700',
  danger:  'bg-red-100     text-red-700',
  info:    'bg-blue-100    text-blue-700',
  neutral: 'bg-gray-100    text-gray-700',
}

export default function Badge({ label, variant = 'neutral' }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant] ?? variants.neutral}`}>
      {label}
    </span>
  )
}
