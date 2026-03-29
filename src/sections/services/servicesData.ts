export interface ServiceItem {
  icon: string
  title: string
  text: string
}

export const servicesData: ServiceItem[] = [
  {
    icon: "💻",
    title: "Web Development",
    text: "Modern React applications, reusable component libraries and design systems - from single-page apps to full-stack solutions built for scale and maintainability.",
  },
  {
    icon: "⚙️",
    title: "Backend & APIs",
    text: "Robust server-side systems with Kotlin/Spring Boot and Node.js (Fastify, Express). REST, SOAP and GraphQL APIs, containerised with Docker and run on Kubernetes and OpenShift.",
  },
  {
    icon: "🧭",
    title: "IT Consulting",
    text: "Strategic technology guidance to help your business make informed decisions on architecture, tooling, and team structure.",
  },
  {
    icon: "⚡",
    title: "Agile Delivery",
    text: "Iterative, transparent delivery. You're always in the loop - integrated into every sprint and decision.",
  },
]
