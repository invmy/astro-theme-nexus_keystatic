import { config, fields, collection } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";
import { createElement } from "react";

const networkImage = block({
  label: "Image URL",
  ContentView: ({ value }) =>
    createElement("div", { style: { textAlign: "center" } }, [
      createElement("img", {
        key: "img",
        src: value.src || "",
        style: { width: "50%", display: "inline-block" },
      }),
    ]),
  schema: {
    src: fields.url({
      label: "Image URL",
      validation: { isRequired: true },
    }),
    alt: fields.text({ label: "Image Alt" }),
  },
});

const horizontalGallery = block({
  label: "Horizontal Gallery",
  ContentView: ({ value }) =>
    createElement(
      "div",
      {
        style: {
          display: "flex",
          overflowX: "auto",
          gap: "10px",
          paddingBottom: "10px",
        },
      },
      value.images.map((image, index) =>
        createElement("img", {
          key: index,
          src: image.src || "",
          alt: image.alt,
          style: { height: "150px", borderRadius: "8px" },
        })
      )
    ),
  schema: {
    images: fields.array(
      fields.object({
        src: fields.url({
          label: "Image URL",
          validation: { isRequired: true },
        }),
        alt: fields.text({ label: "Image Alt" }),
      }),
      {
        label: "Images",
        itemLabel: (props) => props.fields.alt.value || "Image",
      }
    ),
  },
});

export default config({
  storage: {
    kind: "local",
    // kind: 'github',
    // repo: {
    //    owner: REPO_OWNER,
    //    name: REPO_NAME
    // }
  },
  ui: {
    brand: { name: "Nexus" },
  },
  collections: {
    blog: collection({
      label: "Blog",
      slugField: "title",
      path: "src/content/blog/*",
      entryLayout: "content",
      format: { contentField: "content" },
      columns: ["title", "date", "description"],
      schema: {
        date: fields.date({ label: "Event date" }),
        title: fields.slug({
          name: { label: "Title" },
          slug: {
            label: "SEO-friendly slug",
            description:
              "Mandatory use of ASCII path namesForce the use of ASCII path names: only allow a-z, A-Z, 0-9, - (hyphen), _ (underscore), . (dot, for extensions). Spaces, Chinese characters, and all other symbols are prohibited.",
          },
        }),
        description: fields.text({
          label: "description",
          multiline: true,
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tag",
          itemLabel: (props) => props.value,
        }),
        image: fields.image({
          label: "Image",
          directory: "src/assets/images",
          publicPath: "@/assets/images/",
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images",
              publicPath: "@/assets/images/",
            },
          },
          components: {
            networkImage,
            horizontalGallery,
          },
        }),
      },
    }),
    memo: collection({
      label: "Memo",
      slugField: "title",
      path: "src/content/memo/*",
      entryLayout: "content",
      format: { contentField: "content" },
      columns: ["title", "date"],
      schema: {
        date: fields.date({ label: "date" }),
        title: fields.slug({
          name: { label: "Title" },
          slug: {
            label: "SEO-friendly slug",
            description:
              "Mandatory use of ASCII path namesForce the use of ASCII path names: only allow a-z, A-Z, 0-9, - (hyphen), _ (underscore), . (dot, for extensions). Spaces, Chinese characters, and all other symbols are prohibited.",
          },
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        image: fields.ignored(),
        description: fields.ignored(),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images",
              publicPath: "@/assets/images/",
            },
          },
          components: {
            networkImage,
            horizontalGallery,
          },
        }),
      },
    }),
    page: collection({
      label: "Page",
      slugField: "title",
      path: "src/content/page/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title" },
          slug: {
            label: "Page slug",
            description:
              "Mandatory use of ASCII path namesForce the use of ASCII path names: only allow a-z, A-Z, 0-9, - (hyphen), _ (underscore), . (dot, for extensions). Spaces, Chinese characters, and all other symbols are prohibited.",
          },
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets",
              publicPath: "@/assets/",
            },
          },
          components: {
            networkImage,
            horizontalGallery,
          },
        }),
      },
    }),
  },
});
