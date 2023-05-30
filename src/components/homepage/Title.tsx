'use client'

import { Container, Group, Image, Title } from '@mantine/core'

const HomepageTitle = () => (
  <Container mt="lg">
    <Group position="center">
      <Image src="/images/dpdc.png" alt="" height={60} width="auto" />
      <Title order={2}>Dhaka Power Distribution Company Limited</Title>
    </Group>
  </Container>
)

export default HomepageTitle
