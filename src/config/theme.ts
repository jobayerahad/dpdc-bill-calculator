import { MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
  defaultRadius: 'md',

  fontFamily: 'var(--font-work-sans)',

  headings: {
    fontFamily: 'var(--font-lora)'
  },

  components: {
    Button: {
      defaultProps: {
        variant: 'gradient'
      }
    }
  }
}
