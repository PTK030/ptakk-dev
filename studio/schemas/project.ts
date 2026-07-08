import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projekt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł projektu',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      description: 'Np. AI / EdTech'
    }),
    defineField({
      name: 'description',
      title: 'Krótki opis',
      type: 'text',
      description: 'Pojawia się na kafelku w sekcji Projektów.'
    }),
    defineField({
      name: 'longDescription',
      title: 'Długi opis',
      type: 'text',
      description: 'Pojawia się na podstronie detali projektu.'
    }),
    defineField({
      name: 'features',
      title: 'Kluczowe funkcje (Features)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Lista cech projektu (bullet points)'
    }),
    defineField({
      name: 'tech',
      title: 'Technologie',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Lista tagów technologii (np. React, Tailwind)'
    }),
    defineField({
      name: 'preview',
      title: 'Link do podglądu (Live)',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'Link do kodu (GitHub)',
      type: 'url',
    }),
    defineField({
      name: 'imageClass',
      title: 'Klasa CSS dla obrazka (opcjonalnie)',
      type: 'string',
    }),
    defineField({
      name: 'sliderImages',
      title: 'Zdjęcia do slidera',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
})
