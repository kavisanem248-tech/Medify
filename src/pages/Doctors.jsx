import PageHeader from '../components/ui/PageHeader'

export default function Doctors() {
  return (
    <div>
      <PageHeader
        title="Doctors"
        subtitle="Manage physician and specialist profiles."
        action={
          <button className="btn-primary" disabled>
            + Add Doctor
          </button>
        }
      />
      <div className="card flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl">👨‍⚕️</p>
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Doctors module coming soon</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Doctor profiles, specialisations, and availability will live here.
        </p>
      </div>
    </div>
  )
}
