import PageHeader from '../components/ui/PageHeader'
import StatCard from '../components/ui/StatCard'
import { IconPatients, IconCalendar, IconDoctors, IconBilling } from '../components/icons/NavIcons'

/** Quick-action card shown in the "Get Started" section */
function QuickAction({ title, description, icon, color }) {
  return (
    <div className={`card flex gap-4 border-l-4 ${color}`}>
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="mt-0.5 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

/** Module status pill used in the roadmap list */
function ModuleRow({ label, status }) {
  const colors = {
    ready:       'bg-emerald-100 text-emerald-700',
    'in-build':  'bg-blue-100   text-blue-700',
    planned:     'bg-gray-100   text-gray-500',
  }
  return (
    <li className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-50">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${colors[status]}`}>
        {status === 'ready' ? 'Ready' : status === 'in-build' ? 'In build' : 'Planned'}
      </span>
    </li>
  )
}

export default function Dashboard() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div>
      <PageHeader
        title="Welcome to MediFy"
        subtitle={today}
      />

      {/* ── Hero welcome banner ─────────────────────────────────────── */}
      <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 px-8 py-8 text-white shadow-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-200">
          Smart Hospital Management Platform
        </p>
        <h2 className="mt-2 text-3xl font-bold">MediFy is ready.</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-100">
          Your workspace is set up and connected to the tech stack. Start building
          modules — patients, appointments, billing, pharmacy, and more — directly
          on top of this foundation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">React 18</span>
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">Vite</span>
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">Tailwind CSS</span>
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">Supabase</span>
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">React Router v6</span>
        </div>
      </div>

      {/* ── Stat cards ─────────────────────────────────────────────── */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Patients"
          value="—"
          icon={<IconPatients />}
          color="bg-blue-100 text-blue-600"
        />
        <StatCard
          title="Today's Appointments"
          value="—"
          icon={<IconCalendar />}
          color="bg-violet-100 text-violet-600"
        />
        <StatCard
          title="Active Doctors"
          value="—"
          icon={<IconDoctors />}
          color="bg-emerald-100 text-emerald-600"
        />
        <StatCard
          title="Pending Bills"
          value="—"
          icon={<IconBilling />}
          color="bg-amber-100 text-amber-600"
        />
      </div>

      {/* ── Bottom two-column section ───────────────────────────────── */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Quick actions */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <QuickAction
              icon={<IconPatients />}
              title="Register a Patient"
              description="Add a new patient record to the system."
              color="border-blue-500"
            />
            <QuickAction
              icon={<IconCalendar />}
              title="Book an Appointment"
              description="Schedule a patient visit with a doctor."
              color="border-violet-500"
            />
            <QuickAction
              icon={<IconDoctors />}
              title="Add a Doctor"
              description="Onboard a new physician or specialist."
              color="border-emerald-500"
            />
            <QuickAction
              icon={<IconBilling />}
              title="Create an Invoice"
              description="Generate a billing record for a visit."
              color="border-amber-500"
            />
          </div>
        </div>

        {/* Module roadmap */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Module Roadmap
          </h3>
          <div className="card p-2">
            <ul className="divide-y divide-gray-100">
              <ModuleRow label="Project Structure & Dashboard" status="ready" />
              <ModuleRow label="Patient Management"            status="planned" />
              <ModuleRow label="Appointment Scheduling"        status="planned" />
              <ModuleRow label="Doctor Profiles"               status="planned" />
              <ModuleRow label="Departments"                   status="planned" />
              <ModuleRow label="Pharmacy & Inventory"          status="planned" />
              <ModuleRow label="Lab & Diagnostics"             status="planned" />
              <ModuleRow label="Billing & Invoicing"           status="planned" />
              <ModuleRow label="User Auth & Roles"             status="planned" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
