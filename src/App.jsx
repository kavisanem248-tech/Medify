import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard    from './pages/Dashboard'
import Patients     from './pages/Patients'
import Appointments from './pages/Appointments'
import Doctors      from './pages/Doctors'
import Departments  from './pages/Departments'
import Pharmacy     from './pages/Pharmacy'
import Lab          from './pages/Lab'
import Billing      from './pages/Billing'
import Settings     from './pages/Settings'
import NotFound     from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index            element={<Dashboard />}    />
          <Route path="patients"     element={<Patients />}     />
          <Route path="appointments" element={<Appointments />} />
          <Route path="doctors"      element={<Doctors />}      />
          <Route path="departments"  element={<Departments />}  />
          <Route path="pharmacy"     element={<Pharmacy />}     />
          <Route path="lab"          element={<Lab />}          />
          <Route path="billing"      element={<Billing />}      />
          <Route path="settings"     element={<Settings />}     />
          <Route path="*"            element={<NotFound />}     />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
