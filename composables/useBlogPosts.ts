export const useBlogPosts = () => {
    const { find, findOne } = useStrapi()

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
            console.error('Error fetching blog post:', error)
            throw error

        }
    }

    return {
        fetchAllPosts,
        fetchPostBySlug
    }
}