'use client'

import { useState } from 'react'
import { Grid } from '@mantine/core'

import UserInputs from './UserInputs'
import TariffTable from './Tariff'
import Bill from './Bill'
import Breakdown from './Breakdown'

const MainLayout = () => {
  const [totalUnits, setTotalUnits] = useState(0)

  return (
    <>
      <Grid gutter={{ base: 'md', md: 'lg' }}>
        <Grid.Col span={{ base: 12, sm: 7 }} order={{ sm: 1 }}>
          <UserInputs setTotalUnits={setTotalUnits} />
        </Grid.Col>

        {totalUnits > 0 && (
          <>
            <Grid.Col span={{ base: 12, sm: 7 }} order={{ sm: 3 }}>
              <Bill totalUnits={totalUnits} />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 5 }} order={{ sm: 4 }}>
              <Breakdown totalUnits={totalUnits} />
            </Grid.Col>
          </>
        )}

        <Grid.Col span={{ base: 12, sm: 5 }} order={{ sm: 2 }}>
          <TariffTable />
        </Grid.Col>
      </Grid>
    </>
  )
}

export default MainLayout
