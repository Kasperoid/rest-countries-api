type baseThemeType = {
    color: {
        light: colorThemeType
        dark: colorThemeType
    }
    text: {
        title: {
            h1: {
                min: number;
                max: number;
                weight: number
            }
            h2: {
                min: number;
                max: number;
                weight: number
            }
            h3: {
                min: number;
                max: number;
                weight: number
            }
        }
        main: {
            min: number;
            max: number;
            weight: number
        }
    }
}

type colorThemeType = {
    background: string;
    text: string;
    element: string;
    input: string;
}

export const baseTheme: baseThemeType = {
    color: {
        light: {
            background: 'hsl(0, 0%, 98%)',
            text: 'hsl(200, 15%, 8%)',
            element: 'hsl(0, 0%, 100%)',
            input: 'hsl(0, 0%, 52%)',
        },
        dark: {
            background: 'hsl(207, 26%, 17%)',
            text: 'hsl(0, 0%, 100%)',
            element: 'hsl(209, 23%, 22%)',
            input: 'hsl(0, 0%, 100%)',
        }
    },
    text: {
        title: {
            h1: {
                min: 16,
                max: 26,
                weight: 800
            },
            h2: {
                min: 14,
                max: 24,
                weight: 800
            },
            h3: {
                min: 12,
                max: 14,
                weight: 700
            }
        },
        main: {
            min: 12,
            max: 14,
            weight: 200
        }
    }
}