import PageHeader from '../components/ui/PageHeader'

export default function Departments() {
  return (
    <div>
      <PageHeader title="Departments" subtitle="Hospital departments and units." />
      <div className="card flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl">🏢</p>
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Departments module coming soon</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Organise hospital departments and assign staff here.
        </p>
      </div>
    </div>
  )
}
