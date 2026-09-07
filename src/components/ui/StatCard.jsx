/**
 * StatCard — a reusable metric card for the dashboard.
 *
 * Props:
 *   title      {string}    — label shown above the value
 *   value      {string}    — the main metric value
 *   icon       {ReactNode} — icon element rendered in the coloured circle
 *   color      {string}    — Tailwind bg-* class for the icon background
 *   trend      {string}    — optional trend text, e.g. "+12% this week"
 *   trendUp    {boolean}   — green if true, red if false, neutral if undefined
 */
export default function StatCard({ title, value, icon, color = 'bg-primary-100', trend, trendUp }) {
  const trendColor =
    trendUp === true  ? 'text-emerald-600' :
    trendUp === false ? 'text-red-500'     :
    'text-gray-500'

  return (
    <div className="card flex items-start gap-4">
      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${color}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-500">{title}</p>
        <p className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">{value}</p>
        {trend && (
          <p className={`mt-1 text-xs font-medium ${trendColor}`}>{trend}</p>
        )}
      </div>
    </div>
  )
}
