import {UserIcon} from '@sanity/icons/User'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteProfile',
  title: 'Profil strony',
  type: 'document',
  icon: UserIcon,
  initialValue: {
    techStack: ['Next.js', 'Astro', 'Django', 'Node.js', 'UI/UX Design'],
    experienceTitle: 'Doświadczenie.',
    experienceSubtitle:
      'Droga od pierwszych linii kodu po architekturę złożonych aplikacji.',
    experience: [
      {
        _type: 'experienceItem',
        _key: 'current',
        period: 'Obecnie',
        role: 'Senior Full-Stack Developer',
        company: 'Niezależny Kontraktor',
        description:
          'Projektowanie i wdrażanie zaawansowanych aplikacji internetowych typu SaaS. Główny nacisk na wydajność i architekturę zorientowaną na użytkownika.',
      },
      {
        _type: 'experienceItem',
        _key: '2023',
        period: '2023',
        role: 'Frontend Architect',
        company: 'Startup technologiczny',
        description:
          'Kierowanie zespołem odpowiedzialnym za migrację rozbudowanej platformy e-commerce oraz wdrożenie systemu Design Tokens.',
      },
      {
        _type: 'experienceItem',
        _key: '2021',
        period: '2021',
        role: 'Mid Web Developer',
        company: 'Agencja interaktywna',
        description:
          'Tworzenie interaktywnych stron z użyciem WebGL i GSAP oraz współpraca z designerami nad płynnymi interfejsami.',
      },
      {
        _type: 'experienceItem',
        _key: '2019',
        period: '2019',
        role: 'Junior Developer',
        company: 'Software House',
        description:
          'Rozwój narzędzi CMS opartych o React, budowa interfejsów administracyjnych i nauka pisania testowalnego kodu.',
      },
    ],
  },
  fields: [
    defineField({
      name: 'techStack',
      title: 'Tech stack',
      description: 'Wspólna lista technologii używana na Home i O mnie.',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1).unique(),
    }),
    defineField({
      name: 'experienceTitle',
      title: 'Tytuł sekcji doświadczenia',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'experienceSubtitle',
      title: 'Podtytuł sekcji doświadczenia',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Doświadczenie',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'experienceItem',
          title: 'Pozycja doświadczenia',
          type: 'object',
          fields: [
            defineField({
              name: 'period',
              title: 'Okres',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Rola',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'company',
              title: 'Firma / organizacja',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Opis',
              type: 'text',
              rows: 4,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'role',
              subtitle: 'period',
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Profil strony',
      subtitle: 'Tech stack i doświadczenie',
    }),
  },
})
