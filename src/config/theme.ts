import { createTheme } from '@mantine/core'

export const theme = createTheme({
  defaultRadius: 'md',
  cursorType: 'pointer',
  autoContrast: true,
  luminanceThreshold: 0.45,

  white: '#FDFDFD',
  black: '#28282B',

  fontFamily: 'var(--font-work-sans)',

  headings: {
    fontFamily: 'var(--font-lora)'
  },

  components: {
    Anchor: {
      defaultProps: {
        c: 'blue',
        size: 'sm'
      }
    },
    ActionIcon: {
      defaultProps: {
        variant: 'gradient'
      }
    },
    Button: {
      defaultProps: {
        variant: 'gradient'
      }
    }
  }
})
