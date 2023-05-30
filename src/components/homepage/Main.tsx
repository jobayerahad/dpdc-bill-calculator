'use client'

import { useState } from 'react'
import { Container, Grid } from '@mantine/core'

import UserInputs from './UserInputs'
import TariffTable from './Tariff'
import Bill from './Bill'

const MainLayout = () => {
  const [totalUnits, setTotalUnits] = useState(0)

  return (
    <Container mt="xl">
      <Grid gutter="xl">
        <Grid.Col span={7}>
          <UserInputs setTotalUnits={setTotalUnits} />
        </Grid.Col>

        <Grid.Col span={5}>
          <TariffTable />
        </Grid.Col>
      </Grid>

      {totalUnits > 0 && <Bill totalUnits={totalUnits} />}
    </Container>
  )
}

export default MainLayout
