import PageHeader from '../components/ui/PageHeader'

export default function Billing() {
  return (
    <div>
      <PageHeader title="Billing" subtitle="Invoices, payments, and financial records." />
      <div className="card flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl">💳</p>
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Billing module coming soon</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Generate invoices, record payments, and manage financial summaries.
        </p>
      </div>
    </div>
  )
}
