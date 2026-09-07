import PageHeader from '../components/ui/PageHeader'

export default function Settings() {
  return (
    <div>
      <PageHeader title="Settings" subtitle="System configuration and preferences." />
      <div className="card flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl">⚙️</p>
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Settings coming soon</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Configure hospital details, user roles, integrations, and preferences here.
        </p>
      </div>
    </div>
  )
}
