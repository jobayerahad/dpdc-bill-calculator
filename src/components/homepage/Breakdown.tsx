import { Table } from '@mantine/core'

import tariffRates, { TariffRate } from '@config/rates.conf'
import { calculateBill, calculateBillBreakdown } from '@utils/calculation.utils'
import { formatAmount } from '@utils/formatter.utls'

type BreakdownProps = {
  totalUnits: number
}

const Breakdown = ({ totalUnits }: BreakdownProps) => (
  <Table striped highlightOnHover withBorder withColumnBorders>
    <thead>
      <tr>
        <th>Unit Calculation</th>
        <th>Total Cost</th>
      </tr>
    </thead>

    <tbody>
      {calculateBillBreakdown(totalUnits).map(({ from, to = totalUnits, rate }: TariffRate, index) => (
        <tr key={index}>
          <td>
            ({from} to {to}) units X {tariffRates[index].rate} BDT
          </td>
          <td>{rate} BDT</td>
        </tr>
      ))}
    </tbody>

    <tfoot>
      <tr>
        <th>Total</th>
        <th>{formatAmount(calculateBill(totalUnits))}</th>
      </tr>
    </tfoot>
  </Table>
)

export default Breakdown
