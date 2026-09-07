import PageHeader from '../components/ui/PageHeader'

export default function Lab() {
  return (
    <div>
      <PageHeader title="Lab & Tests" subtitle="Diagnostic tests and lab results." />
      <div className="card flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl">🔬</p>
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Lab module coming soon</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Request tests, track samples, and view results from this module.
        </p>
      </div>
    </div>
  )
}
