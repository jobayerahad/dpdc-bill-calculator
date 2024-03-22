'use client'

import { ReactNode } from 'react'
import {
  ActionIcon,
  Container,
  Group,
  Image,
  Title,
  useComputedColorScheme,
  useMantineColorScheme
} from '@mantine/core'
import { BsMoon as DarkIcon, BsSun as LightIcon } from 'react-icons/bs'

const Structure = ({ children }: { children: ReactNode }) => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })

  return (
    <Container mt="lg">
      <Group justify="center" mb="md">
        <Image src="/images/dpdc.png" alt="" height={60} width="auto" />

        <Title order={2} ta="center">
          Dhaka Power Distribution Company Limited
        </Title>
      </Group>

      <ActionIcon
        variant="light"
        aria-label="color-theme"
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        pos="fixed"
        top="1rem"
        right="1rem"
      >
        {computedColorScheme === 'light' ? <DarkIcon /> : <LightIcon />}
      </ActionIcon>

      {children}
    </Container>
  )
}

export default Structure
