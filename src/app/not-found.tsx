'use client'

import Link from 'next/link'
import { Container, Image, Title, Text, Button, SimpleGrid, Stack } from '@mantine/core'

const NotFound = () => (
  <Container mih="100vh" display="flex" style={{ alignItems: 'center' }}>
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 10, sm: 'xl' }}>
      <Stack justify="center" gap="md">
        <Title size={24}>Page Not Found</Title>

        <Text c="dimmed" size="sm" ta="justify">
          Unfortunately, the page you are trying to open does not exist You may have mistyped the address or The page
          has been moved to another URL.
        </Text>

        <Button component={Link} href="/" size="md" fw={400}>
          Return to Homepage
        </Button>
      </Stack>

      <Image src="/404.png" alt="404" />
    </SimpleGrid>
  </Container>
)

export default NotFound
