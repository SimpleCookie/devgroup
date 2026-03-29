import React from "react"

interface Props {
  title: string
  children: React.ReactNode
}

export const Section = ({ title, children }: Props) => {
  return <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="font-bold text-4xl mb-3" style={{ color: '#1a1a2e' }}>{title}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  </section>
}
