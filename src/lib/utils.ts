import { i18n } from "astro:config/server";
export function formatDate(date: Date) {
    return Intl.DateTimeFormat(i18n?.defaultLocale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(date)
}