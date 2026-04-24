import React from 'react'
import './LegalLayout.css'

interface LegalLayoutProps {
  title: string
  date: string
  children: React.ReactNode
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, date, children }) => {
  return (
    <main className="legal-main">
      <div className="container">
        <div className="legal-content">
          <h1 className="legal-title">{title}</h1>
          <p className="legal-updated">
            <small>Última actualización: {date}</small>
          </p>
          {children}
        </div>
      </div>
    </main>
  )
}

export default LegalLayout
