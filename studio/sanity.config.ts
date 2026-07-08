import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {UserIcon} from '@sanity/icons/User'
import {schemaTypes} from './schemas'

const singletonTypes = new Set(['siteProfile'])

export default defineConfig({
  name: 'default',
  title: 'PTAKK CMS',
  projectId: '3tqu1b7o',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Zawartość')
          .items([
            S.listItem()
              .title('Profil strony')
              .icon(UserIcon)
              .child(S.document().schemaType('siteProfile').documentId('siteProfile')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !singletonTypes.has(item.getId() ?? ''),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (previousActions, context) =>
      singletonTypes.has(context.schemaType)
        ? previousActions.filter(
            ({action}) => action !== 'delete' && action !== 'duplicate',
          )
        : previousActions,
  },
})
