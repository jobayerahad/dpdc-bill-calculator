import { Table } from '@mantine/core'

import tariffRates, { TariffRate } from '@config/rates.conf'
import { calculateBill, calculateBillBreakdown } from '@utils/calculation.utils'
import { formatAmount } from '@utils/formatter.utls'

type BreakdownProps = {
  totalUnits: number
}

const Breakdown = ({ totalUnits }: BreakdownProps) => (
  <Table striped highlightOnHover withTableBorder withColumnBorders>
    <Table.Thead>
      <Table.Tr>
        <Table.Th>Unit Calculation</Table.Th>
        <Table.Th>Total Cost</Table.Th>
      </Table.Tr>
    </Table.Thead>

    <Table.Tbody>
      {calculateBillBreakdown(totalUnits).map(({ from, to = totalUnits, rate }: TariffRate, index) => (
        <Table.Tr key={index}>
          <Table.Td>
            ({from} to {to}) units X {tariffRates[index].rate} BDT
          </Table.Td>
          <Table.Td>{rate} BDT</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>

    <Table.Tfoot>
      <Table.Tr>
        <Table.Th>Total</Table.Th>
        <Table.Th>{formatAmount(calculateBill(totalUnits))}</Table.Th>
      </Table.Tr>
    </Table.Tfoot>
  </Table>
)

export default Breakdown
