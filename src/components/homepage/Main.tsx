'use client'

import { useState } from 'react'
import { Container, Grid } from '@mantine/core'

import UserInputs from './UserInputs'
import TariffTable from './Tariff'
import Bill from './Bill'
import Breakdown from './Breakdown'

const MainLayout = () => {
  const [totalUnits, setTotalUnits] = useState(0)

  return (
    <Container mt="xl">
      <Grid gutter="xl">
        <Grid.Col sm={7} orderSm={1}>
          <UserInputs setTotalUnits={setTotalUnits} />
        </Grid.Col>

        {totalUnits > 0 && (
          <>
            <Grid.Col sm={7} orderSm={3}>
              <Bill totalUnits={totalUnits} />
            </Grid.Col>

            <Grid.Col sm={5} orderSm={4}>
              <Breakdown totalUnits={totalUnits} />
            </Grid.Col>
          </>
        )}

        <Grid.Col sm={5} orderSm={2}>
          <TariffTable />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default MainLayout
