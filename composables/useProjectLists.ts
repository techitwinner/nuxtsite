export const useProjectLists = () => {
    const { find } = useStrapi()

    const fetchAllProjects = async () => {
        const response = await find('nuxtsite-project-lists', {
            populate: 'deep,6'
        })
        return response.data || []
    }

    return {
        fetchAllProjects
    }
}