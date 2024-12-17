import { NumberFormatter, Paper, Table } from '@mantine/core'

import tariffRates, { TariffRate } from '@config/rates.conf'
import { calculateBill, calculateBillBreakdown } from '@utils/calculation.utils'

const Breakdown = ({ totalUnits }: { totalUnits: number }) => (
  <Paper shadow="xs">
    <Table striped highlightOnHover>
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
              ({from} to {to}) units X{' '}
              <NumberFormatter
                value={tariffRates[index].rate}
                thousandSeparator
                thousandsGroupStyle="lakh"
                suffix=" ৳"
              />
            </Table.Td>

            <Table.Td>
              <NumberFormatter
                suffix=" ৳"
                value={rate}
                thousandSeparator
                thousandsGroupStyle="lakh"
                decimalScale={2}
                fixedDecimalScale
              />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>

      <Table.Tfoot>
        <Table.Tr>
          <Table.Th>Total</Table.Th>
          <Table.Th>
            <NumberFormatter
              suffix=" ৳"
              value={calculateBill(totalUnits)}
              thousandSeparator
              thousandsGroupStyle="lakh"
              decimalScale={2}
              fixedDecimalScale
            />
          </Table.Th>
        </Table.Tr>
      </Table.Tfoot>
    </Table>
  </Paper>
)

export default Breakdown
