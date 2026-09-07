import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { NAV_ITEMS, APP_NAME } from '../lib/constants'
import {
  IconDashboard, IconPatients, IconCalendar, IconDoctors,
  IconBuilding, IconPharmacy, IconLab, IconBilling, IconSettings,
  IconMenu, IconBell, IconHospital,
} from '../components/icons/NavIcons'

/** Map constant icon keys → components */
const ICON_MAP = {
  dashboard: <IconDashboard />,
  patients:  <IconPatients />,
  calendar:  <IconCalendar />,
  doctors:   <IconDoctors />,
  building:  <IconBuilding />,
  pharmacy:  <IconPharmacy />,
  lab:       <IconLab />,
  billing:   <IconBilling />,
  settings:  <IconSettings />,
}

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* ── Sidebar ─────────────────────────────────────────────────── */}
      <aside
        className={`
          flex flex-col border-r border-gray-200 bg-white transition-all duration-300
          ${sidebarOpen ? 'w-64' : 'w-16'}
        `}
      >
        {/* Logo */}
        <div className="flex h-16 flex-shrink-0 items-center gap-3 border-b border-gray-200 px-4">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
            <IconHospital />
          </div>
          {sidebarOpen && (
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              {APP_NAME}
            </span>
          )}
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="space-y-1" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`
                  }
                  title={!sidebarOpen ? item.label : undefined}
                >
                  <span className="flex-shrink-0">{ICON_MAP[item.icon]}</span>
                  {sidebarOpen && (
                    <span className="truncate">{item.label}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Version footer */}
        {sidebarOpen && (
          <div className="border-t border-gray-200 px-4 py-3 text-xs text-gray-400">
            MediFy v0.1.0
          </div>
        )}
      </aside>

      {/* ── Main area ───────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle sidebar"
          >
            <IconMenu />
          </button>

          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <button
              className="relative rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Notifications"
            >
              <IconBell />
            </button>

            {/* User avatar placeholder */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
