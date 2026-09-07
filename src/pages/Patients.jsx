import PageHeader from '../components/ui/PageHeader'

export default function Patients() {
  return (
    <div>
      <PageHeader
        title="Patients"
        subtitle="Manage patient records, medical history, and more."
        action={
          <button className="btn-primary" disabled>
            + New Patient
          </button>
        }
      />
      <div className="card flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl">🏥</p>
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Patient module coming soon</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Connect Supabase and build out the patients table to populate this page.
        </p>
      </div>
    </div>
  )
}
