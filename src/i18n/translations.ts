export type Lang = 'en' | 'sv'

export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      customers: 'Customers',
      projects: 'Projects',
      cta: 'Get in touch',
    },
    header: {
      badge: '⚡ IT Consulting & Development',
      h1Part1: 'We build the technology',
      h1Part2: 'behind',
      h1Highlight: 'growing businesses',
      subtitle:
        'Devgroup delivers modern IT solutions — from web and mobile development to strategic consulting. We work closely with you from idea to launch.',
      ctaPrimary: 'Get in touch →',
      ctaSecondary: 'Learn more',
    },
    stats: {
      yearsValue: '10+',
      yearsLabel: 'Years Experience',
      fullstackValue: 'Full\u2011Stack',
      fullstackLabel: 'Frontend & Backend',
      clientsValue: '6+',
      clientsLabel: 'Clients Served',
      cicdValue: 'CI/CD',
      cicdLabel: 'Automated Delivery',
    },
    techStack: {
      eyebrow: 'Skills & Technology',
      title: 'A modern, full-stack toolkit',
    },
    services: {
      eyebrow: 'What we do',
      title: 'End-to-end IT expertise',
      subtitle: 'From first line of code to final deployment - and everything in between.',
      items: [
        {
          icon: '💻',
          title: 'Web Development',
          text: 'Modern React applications, reusable component libraries and design systems - from single-page apps to full-stack solutions built for scale and maintainability.',
        },
        {
          icon: '⚙️',
          title: 'Backend & APIs',
          text: 'Robust server-side systems with Kotlin/Spring Boot and Node.js (Fastify, Express). REST, SOAP and GraphQL APIs, containerised with Docker and run on Kubernetes and OpenShift.',
        },
        {
          icon: '🧭',
          title: 'IT Consulting',
          text: 'Strategic technology guidance to help your business make informed decisions on architecture, tooling, and team structure.',
        },
        {
          icon: '⚡',
          title: 'Agile Delivery',
          text: "Iterative, transparent delivery. You're always in the loop - integrated into every sprint and decision.",
        },
      ],
    },
    about: {
      eyebrow: 'Who we are',
      title: 'A development group built on passion & expertise',
      paragraphs: [
        "Founded by Marcus Ekstrom - a Civil Engineer in Computer Science from Mid Sweden University and a Partner at Kvadrat, Sweden's leading network of IT consultants. Marcus has also taught programming at university level.",
        "Every project ships with automated tests, CI/CD pipelines, and production-grade code using the same battle-tested stack powering Sweden's national infrastructure.",
      ],
      skills: [
        'TypeScript & React',
        'React Design Systems',
        'Kotlin & Spring Boot',
        'Docker & Kubernetes',
        'CI/CD pipelines',
        'Automated testing',
      ],
      cards: [
        {
          icon: '🤝',
          title: 'Client-first approach',
          description: "You're always integrated into our development process - no black boxes, no surprises.",
        },
        {
          icon: '🧪',
          title: 'Quality-first engineering',
          description:
            'Unit, integration and end-to-end tests, paired with automated CI/CD pipelines so every release is reliable.',
        },
        {
          icon: '🚀',
          title: 'Cloud & DevOps',
          description:
            'Docker, Kubernetes and OpenShift paired with CI/CD pipelines - containerised workloads deployed automatically on enterprise infrastructure.',
        },
      ],
    },
    customers: {
      eyebrow: 'Trusted by',
      title: 'Our customers',
      subtitle: 'Companies that chose to build with Devgroup',
    },
    caseStudy: {
      eyebrow: 'Featured case',
      title: "Rebuilding Sweden's mortgage deed system",
      body: "Since 2018, part of the team at Lantmäteriet replacing Sweden's national pantbrev (mortgage deed) system. Backend in Java/Kotlin + Spring Boot, frontend in React/TypeScript, GraphQL, CI/CD and automated testing from day one — running on Kubernetes & OpenShift. Zero-downtime migration of the infrastructure behind every property transaction in Sweden.",
      quote:
        'Kvadrat, through Marcus and Mikael, have been important in our digitalisation. The consultants have together with their colleagues delivered modern and stable solutions that make a significant difference for our operations. We value their competence and commitment to the project.',
      quoteAuthor: '— Lantmäteriet',
      linkText: 'Read the full case on kvadrat.se →',
      metaClient: 'Client',
      metaClientValue: 'Lantmäteriet',
      metaPeriod: 'Period',
      metaPeriodValue: '2018 →',
      metaStack: 'Stack',
      metaStackValue: 'Kotlin · React · GraphQL · Kubernetes',
    },
    projects: {
      eyebrow: 'Side projects',
      title: 'Things I build for fun',
      categories: [
        {
          label: 'Kvadrat',
          items: [
            {
              name: 'Shareflow',
              description: 'Stock trading & portfolio tracking app',
              href: 'https://shareflow.apps.devgroup.se/',
            },
            {
              name: 'Konsultpris kalkylator',
              description: 'Consultant rate calculator tool',
              href: 'https://konsultpris.devgroup.se/',
            },
          ],
        },
        {
          label: 'Path of Exile',
          items: [
            {
              name: 'Currency Flipper',
              description: 'Real-time currency arbitrage finder for PoE',
              href: 'https://poe-flip.apps.devgroup.se',
            },
            {
              name: "Watcher's Eye Finder",
              description: "Search and filter Watcher's Eye modifiers",
              href: 'https://poe-watchers.devgroup.se/',
            },
          ],
        },
      ],
    },
    cta: {
      title1: 'Ready to build',
      title2: 'something great?',
      subtitle: "Let's talk about how Devgroup can help take your idea from concept to production.",
      ctaPrimary: 'Start a conversation →',
      ctaSecondary: 'Or reach us directly at info@devgroup.se',
    },
    footer: {
      rights: 'All rights reserved.',
      credits: 'Logotype by Maria Skogen · Website by Marcus Ekström',
      github: 'GitHub',
      kvadrat: 'Kvadrat',
      contact: 'Contact',
    },
  },

  sv: {
    nav: {
      about: 'Om oss',
      services: 'Tjänster',
      customers: 'Kunder',
      projects: 'Projekt',
      cta: 'Kontakta oss',
    },
    header: {
      badge: '⚡ IT-konsulting & Utveckling',
      h1Part1: 'Vi bygger tekniken',
      h1Part2: 'bakom',
      h1Highlight: 'växande företag',
      subtitle:
        'Devgroup levererar moderna IT-lösningar — från webb- och mobilutveckling till strategisk rådgivning. Vi arbetar nära dig från idé till lansering.',
      ctaPrimary: 'Kontakta oss →',
      ctaSecondary: 'Läs mer',
    },
    stats: {
      yearsValue: '10+',
      yearsLabel: 'Års erfarenhet',
      fullstackValue: 'Full\u2011Stack',
      fullstackLabel: 'Frontend & Backend',
      clientsValue: '6+',
      clientsLabel: 'Nöjda kunder',
      cicdValue: 'CI/CD',
      cicdLabel: 'Automatiserad leverans',
    },
    techStack: {
      eyebrow: 'Kompetenser & Teknologi',
      title: 'En modern, fullstack-verktygslåda',
    },
    services: {
      eyebrow: 'Vad vi gör',
      title: 'Komplett IT-kompetens',
      subtitle: 'Från första kodraden till slutgiltig driftsättning — och allt däremellan.',
      items: [
        {
          icon: '💻',
          title: 'Webbutveckling',
          text: 'Moderna React-applikationer, återanvändbara komponentbibliotek och designsystem — från single-page-appar till fullstack-lösningar byggda för skalbarhet och underhållbarhet.',
        },
        {
          icon: '⚙️',
          title: 'Backend & API:er',
          text: 'Robusta serversystem med Kotlin/Spring Boot och Node.js (Fastify, Express). REST-, SOAP- och GraphQL-API:er, containeriserade med Docker och körda på Kubernetes och OpenShift.',
        },
        {
          icon: '🧭',
          title: 'IT-konsulting',
          text: 'Strategisk teknikrådgivning för att hjälpa ditt företag fatta välgrundade beslut om arkitektur, verktyg och teamstruktur.',
        },
        {
          icon: '⚡',
          title: 'Agil leverans',
          text: 'Iterativ, transparent leverans. Du är alltid i loopen — integrerad i varje sprint och beslut.',
        },
      ],
    },
    about: {
      eyebrow: 'Vilka vi är',
      title: 'En utvecklingsgrupp byggd på passion & expertis',
      paragraphs: [
        'Grundat av Marcus Ekström — Civilingenjör i datateknik från Mittuniversitetet och Partner på Kvadrat, Sveriges ledande nätverk av IT-konsulter. Marcus har även undervisat i programmering på universitetsnivå.',
        'Varje projekt levereras med automatiserade tester, CI/CD-pipelines och produktionsklar kod med samma beprövade stack som driver Sveriges nationella infrastruktur.',
      ],
      skills: [
        'TypeScript & React',
        'React-designsystem',
        'Kotlin & Spring Boot',
        'Docker & Kubernetes',
        'CI/CD-pipelines',
        'Automatiserad testning',
      ],
      cards: [
        {
          icon: '🤝',
          title: 'Kunden i centrum',
          description: 'Du är alltid integrerad i vår utvecklingsprocess — inga svarta lådor, inga överraskningar.',
        },
        {
          icon: '🧪',
          title: 'Kvalitet i fokus',
          description:
            'Enhetstester, integrationstester och end-to-end-tester, kombinerat med automatiserade CI/CD-pipelines så att varje release är tillförlitlig.',
        },
        {
          icon: '🚀',
          title: 'Moln & DevOps',
          description:
            'Docker, Kubernetes och OpenShift med CI/CD-pipelines — containeriserade workloads som driftsätts automatiskt på företagsinfrastruktur.',
        },
      ],
    },
    customers: {
      eyebrow: 'Betrodda av',
      title: 'Våra kunder',
      subtitle: 'Företag som valde att bygga med Devgroup',
    },
    caseStudy: {
      eyebrow: 'Kundcase',
      title: 'Vi bytte Sveriges pantbrevssystem',
      body: 'Sedan 2018 del av teamet på Lantmäteriet som ersatte Sveriges nationella pantbrevssystem. Backend i Java/Kotlin + Spring Boot, frontend i React/TypeScript, GraphQL, CI/CD och automatiserad testning från dag ett — drift på Kubernetes & OpenShift. Noll stillestånd under migrationen av infrastrukturen bakom varje fastighetsaffär i Sverige.',
      quote:
        'Kvadrat, genom Marcus och Mikael, har varit viktiga i vår digitalisering. Konsulterna har tillsammans med sina kollegor i teamet levererat moderna och stabila lösningar som gör stor skillnad för vår verksamhet. Vi uppskattar deras kompetens och engagemang i projektet.',
      quoteAuthor: '— Lantmäteriet',
      linkText: 'Läs hela kundcaset på kvadrat.se →',
      metaClient: 'Kund',
      metaClientValue: 'Lantmäteriet',
      metaPeriod: 'Period',
      metaPeriodValue: '2018 →',
      metaStack: 'Stack',
      metaStackValue: 'Kotlin · React · GraphQL · Kubernetes',
    },
    projects: {
      eyebrow: 'Sidoprojekt',
      title: 'Saker jag bygger på fritiden',
      categories: [
        {
          label: 'Kvadrat',
          items: [
            {
              name: 'Shareflow',
              description: 'App för aktiehandel och portföljöversikt',
              href: 'https://shareflow.apps.devgroup.se/',
            },
            {
              name: 'Konsultpris kalkylator',
              description: 'Kalkylator för konsultpriser',
              href: 'https://konsultpris.devgroup.se/',
            },
          ],
        },
        {
          label: 'Path of Exile',
          items: [
            {
              name: 'Currency Flipper',
              description: 'Realtids-arbitragefinnare för PoE-valutor',
              href: 'https://poe-flip.apps.devgroup.se',
            },
            {
              name: "Watcher's Eye Finder",
              description: "Sök och filtrera Watcher's Eye-modifiers",
              href: 'https://poe-watchers.devgroup.se/',
            },
          ],
        },
      ],
    },
    cta: {
      title1: 'Redo att bygga',
      title2: 'något riktigt bra?',
      subtitle: 'Låt oss prata om hur Devgroup kan hjälpa dig ta din idé från koncept till produktion.',
      ctaPrimary: 'Starta ett samtal →',
      ctaSecondary: 'Eller nå oss direkt på info@devgroup.se',
    },
    footer: {
      rights: 'Alla rättigheter förbehållna.',
      credits: 'Logotyp av Maria Skogen · Webbplats av Marcus Ekström',
      github: 'GitHub',
      kvadrat: 'Kvadrat',
      contact: 'Kontakt',
    },
  },
}

export type Translations = typeof translations.en
