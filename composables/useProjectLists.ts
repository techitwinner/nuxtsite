export const useProjectLists = () => {
    const { find, findOne } = useStrapi()

    const fetchAllProjects = async () => {
        const response = await find('nuxtsite-blog-posts', {
            populate: 'deep,4'
        })
        return response.data || []
    }

    return {
        fetchAllProjects
    }
}