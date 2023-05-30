'use client'

import { Table } from '@mantine/core'
import { calculateBill, calculateBaseBill, calculateTotal, calculateVat } from '@/utils/calculation.utils'
import { formatDateTime } from '@/utils/dates.utils'
import { demandChargeInTaka } from '@/config/rates.conf'
import { formatAmount } from '@/utils/formatter.utls'

type BillProps = {
  totalUnits: number
}

const Bill = ({ totalUnits }: BillProps) => {
  const billForUnits = calculateBill(totalUnits)

  return (
    <Table striped highlightOnHover withBorder withColumnBorders mt="xl">
      <tbody>
        <tr>
          <th>Date</th>
          <td>{formatDateTime(new Date())}</td>
        </tr>

        <tr>
          <th>Unit Used</th>
          <td>{totalUnits}</td>
        </tr>

        <tr>
          <th>Used Unit Price</th>
          <td>{formatAmount(billForUnits)}</td>
        </tr>

        <tr>
          <th>Demand Charge</th>
          <td>{formatAmount(demandChargeInTaka)}</td>
        </tr>

        <tr>
          <th>Principal Price</th>
          <td>{formatAmount(calculateBaseBill(billForUnits))}</td>
        </tr>

        <tr>
          <th>VAT</th>
          <td>{formatAmount(calculateVat(billForUnits))}</td>
        </tr>

        <tr>
          <th>Total Bill</th>
          <td>{formatAmount(calculateTotal(billForUnits))}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Bill
