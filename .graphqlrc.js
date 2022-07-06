require('@next/env').loadEnvConfig('.');

module.exports = {
  schema: {
    'https://graphql.datocms.com': {
      headers: {
        Authorization: process.env.NEXT_CMS_DATOCMS_API_TOKEN
      }
    }
  },
  documents: 'graphql/**/*.gql',
  extensions: {
    codegen: {
      overwrite: true,
      generates: {
        'lib/graphql.ts': {
          plugins: ['typescript', 'typescript-graphql-request', 'typescript-operations'],
          config: {
            dedupeFragments: true,
            pureMagicComment: true,
            exportFragmentSpreadSubTypes: true,
            namingConvention: 'keep'
          }
        }
      }
    }
  }
};
