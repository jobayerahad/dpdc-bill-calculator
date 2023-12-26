'use client'

import { Button, Container } from '@mantine/core'
import { BiReset as ResetIcon } from 'react-icons/bi'

import ErrorMsg from '@components/common/ErrorMsg'

type ErrorProps = {
  error: Error
  reset: () => void
}

const GlobalError = ({ error, reset }: ErrorProps) => (
  <html>
    <body>
      <Container>
        <ErrorMsg error={error} />

        <Button variant="outline" onClick={() => reset()} leftSection={<ResetIcon size="1.05rem" />}>
          Try again
        </Button>
      </Container>
    </body>
  </html>
)

export default GlobalError
