// composables/useTheme.ts
import { ref, watch, onMounted } from 'vue'

const themes = ['system', 'light', 'dark'] as const
type Theme = typeof themes[number]

const currentTheme = ref<Theme>('system')

export function useTheme() {
    const colorMode = useColorMode()
    const getSystemTheme = (): 'light' | 'dark' => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = (theme: Theme) => {
        const htmlElement = document.documentElement
        let effectiveTheme = theme === 'system' ? getSystemTheme() : theme

        // Set the theme attribute for daisyUI
        htmlElement.setAttribute('data-theme', effectiveTheme === 'light' ? 'light' : 'dark')
        htmlElement.classList.toggle('dark', effectiveTheme === 'dark')

        // Update localStorage and currentTheme
        localStorage.setItem('theme', theme)
        currentTheme.value = theme
    }

    const cycleTheme = () => {
        const currentIndex = themes.indexOf(currentTheme.value)
        const nextIndex = (currentIndex + 1) % themes.length
        colorMode.preference = themes[nextIndex]
        setTheme(themes[nextIndex])
    }

    watch(() => currentTheme.value, (newTheme) => {
        setTheme(newTheme)
    })

    onMounted(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null
        if (storedTheme && themes.includes(storedTheme)) {
            setTheme(storedTheme)
        } else {
            setTheme('system')
        }

        // Listen for changes in the system theme
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', () => {
            if (currentTheme.value === 'system') {
                setTheme('system')
            }
        })
    })

    return {
        currentTheme,
        cycleTheme,
        setTheme,
    }
}
