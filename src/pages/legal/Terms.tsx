import React from 'react'
import { LegalLayout } from '../../features/layout/components'
import { legalContent } from '../../data/legalContent'

export const Terms: React.FC = () => {
  const content = legalContent.terms
  
  return (
    <LegalLayout title={content.title} date={content.date}>
      <p>{content.intro}</p>
      {content.sections.map(section => (
        <div key={section.id}>
          <h2>{section.title}</h2>
          <p>
            {section.content}
            {section.email && <strong>{section.email}</strong>}
          </p>
        </div>
      ))}
    </LegalLayout>
  )
}

export default Terms
