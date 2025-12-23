import { getCollection, type CollectionEntry } from 'astro:content'

export async function getAllBlogs(): Promise<CollectionEntry<'blog'>[]> {
    const data = await getCollection('blog')
    return data.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export async function getAllMemos(): Promise<CollectionEntry<'memo'>[]> {
    const data = await getCollection('memo')
    return data.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export async function getAllBlogTags(): Promise<Map<string, number>> {
    const data = await getAllBlogs()
    return data.reduce((acc, post) => {
        post.data.tags?.forEach((tag) => {
            acc.set(tag, (acc.get(tag) || 0) + 1)
        })
        return acc
    }, new Map<string, number>())
}

export async function getSortedBlogTags(): Promise<
    { tag: string; count: number }[]
> {
    const tagCounts = await getAllBlogTags()
    return [...tagCounts.entries()]
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => {
            const countDiff = b.count - a.count
            return countDiff !== 0 ? countDiff : a.tag.localeCompare(b.tag)
        })
}

export async function getAllMemoTags(): Promise<Map<string, number>> {
    const data = await getAllMemos()
    return data.reduce((acc, post) => {
        post.data.tags?.forEach((tag) => {
            acc.set(tag, (acc.get(tag) || 0) + 1)
        })
        return acc
    }, new Map<string, number>())
}


export async function getSortedMemoTags(): Promise<
    { tag: string; count: number }[]
> {
    const tagCounts = await getAllMemoTags()
    return [...tagCounts.entries()]
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => {
            const countDiff = b.count - a.count
            return countDiff !== 0 ? countDiff : a.tag.localeCompare(b.tag)
        })
}