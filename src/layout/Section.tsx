import React from "react"

interface Props {
  title: string
  children: React.ReactNode
}

export const Section = ({ title, children }: Props) => {
  return <section className="py-6">
    <h2 className="font-bold text-center py-6">{title}</h2>
    {children}
  </section>
}
