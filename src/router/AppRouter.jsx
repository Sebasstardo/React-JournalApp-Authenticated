import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* cualquier inicio con auth entra aca */}
        <Route path='auth/*' element={<AuthRoutes/>}/>
        <Route path='/*' element={<JournalRoutes/>}/>        
    </Routes>
  )
}
