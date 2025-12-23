import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
      nodes: {
            document: {
                  ...nodes.document,
                  render: null,
            },
            heading: {
                  ...nodes.heading,
                  render: component('./src/components/markdoc/Heading.astro'),
            },
            image: {
                  ...nodes.image,
                  render: component('./src/components/markdoc/MarkdocImage.astro'),
            },

            link: {
                  ...nodes.link,
                  render: component('./src/components/markdoc/Link.astro'),
            },
      },
      extends: [
            shiki({
                  theme: 'material-theme-darker',
                  wrap: true,
                  langs: [],
            }),
      ],
});