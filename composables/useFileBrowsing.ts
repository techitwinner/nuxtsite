import { ref, onMounted } from 'vue';

export function useFetch(url: string) {
    const data = ref([]);
    const error = ref(null);
    const isLoading = ref(true);

    const fetchData = async () => {
        isLoading.value = true;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            data.value = await response.json();
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(() => {
        fetchData();
    });

    return { data, error, isLoading };
}
