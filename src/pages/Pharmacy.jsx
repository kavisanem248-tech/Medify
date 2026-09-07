import PageHeader from '../components/ui/PageHeader'

export default function Pharmacy() {
  return (
    <div>
      <PageHeader title="Pharmacy" subtitle="Medicines, inventory, and dispensing." />
      <div className="card flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl">💊</p>
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Pharmacy module coming soon</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Track medicine stock, prescriptions, and dispensing records.
        </p>
      </div>
    </div>
  )
}
