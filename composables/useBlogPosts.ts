// ~/composables/useBlogPosts.ts
export const useBlogPosts = () => {
    const { find, findOne, findAll } = useStrapi()

    const fetchAllPosts = async () => {
        const response = await find('nuxtsite-blog-posts', {
            populate: 'deep,5'
        })
        return response.data || []
    }

    const fetchPostBySlug = async (slug: string) => {
        try {
            const response = await findOne('nuxtsite-blog-posts', {
                filters: {slug: {$eq: slug}},
                populate: 'deep,5',
            })
            return response.data[0]
        } catch (error) {
            throw error
        }
    }

    const fetchPostsByTag = async (tag: string) => {
        try {
            const response = await find('nuxtsite-blog-posts', {
                filters: { tag: { $eq: tag} },
                populate: 'deep,3'
            })
            return response.data
        } catch (error) {
            throw error
        }
    }

    const fetchTags = async () => {
        try {
            const response = await find('nuxtsite-blog-posts', {
                fields: ['tag'], // Adjust this to match the tag field name
                populate: false // Don't populate other relations
            })
            // Extract unique tags
            const tags = response.data.map(post => post.attributes.tag)
            const uniqueTags = [...new Set(tags)]
            return uniqueTags
        } catch (error) {
            console.error('Error fetching tags:', error)
            throw error
        }
    }

    return {
        fetchAllPosts,
        fetchPostBySlug,
        fetchPostsByTag,
        fetchTags
    }
}