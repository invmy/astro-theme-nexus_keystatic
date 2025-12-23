

export const siteConfig = {
    author: 'Nexus',
    title: 'Astro-Theme-Nexus',
    description: 'A minimalist blog sharing the intersection of technology, creativity, and everyday reflections. Built with Astro v5 and Tailwind v4, pursuing a clean, readable design.',
    headerNav: [
        { label: 'Memo', href: '/memo' },
        { label: 'Blog', href: '/blog' },
        { label: 'Archive', href: '/archive' },

    ],
    // https://icon-sets.iconify.design/mdi/
    social: [
        { label: 'GitHub', href: 'https://github.com/', icon: 'mdi:github' },
        { label: 'Twitter', href: 'https://twitter.com/', icon: 'mdi:twitter' },
        { label: 'Youtube', href: 'https://youtube.com/', icon: 'mdi:youtube' },
        { label: 'Apple', href: 'https://apple.com/', icon: 'mdi:apple' },

    ],
    footerNav: [
        { label: 'About', href: '/about' },
        { label: 'Tags', href: '/tag' },
        { label: 'Search', href: '/search' },
    ],
};