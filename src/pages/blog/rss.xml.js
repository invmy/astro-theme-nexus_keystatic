import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from "@/site";
import { i18n } from "astro:config/server";
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';


const parser = new MarkdownIt();

export async function GET(context) {
    const blog = await getCollection('blog');

    const posts = blog.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    return rss({
        trailingSlash: false,

        title: siteConfig.title,

        description: siteConfig.description,

        site: context.site,

        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description || '',
            link: `/${post.collection}/${post.id}/`,

            content: sanitizeHtml(parser.render(post.body || ''), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }),
            ...post.data,
        })),

        customData: `<language>${i18n?.defaultLocale || 'zh-cn'}</language>`,
    });
}