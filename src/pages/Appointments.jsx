import PageHeader from '../components/ui/PageHeader'

export default function Appointments() {
  return (
    <div>
      <PageHeader
        title="Appointments"
        subtitle="Schedule and manage patient visits."
        action={
          <button className="btn-primary" disabled>
            + New Appointment
          </button>
        }
      />
      <div className="card flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl">📅</p>
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Appointments module coming soon</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Build the scheduling calendar and link it to doctors and patients.
        </p>
      </div>
    </div>
  )
}
