import { Table } from '@mantine/core'

import { demandChargeInTaka } from '@config/rates.conf'
import { calculateBill, calculateBaseBill, calculateTotal, calculateVat } from '@utils/calculation.utils'
import { formatDateTime } from '@utils/dates.utils'
import { formatAmount } from '@utils/formatter.utls'

type BillProps = {
  totalUnits: number
}

const Bill = ({ totalUnits }: BillProps) => {
  const billForUnits = calculateBill(totalUnits)

  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Td>{formatDateTime(new Date())}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Unit Used</Table.Th>
          <Table.Td>{totalUnits}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Used Unit Price</Table.Th>
          <Table.Td>{formatAmount(billForUnits)}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Demand Charge</Table.Th>
          <Table.Td>{formatAmount(demandChargeInTaka)}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Principal Price</Table.Th>
          <Table.Td>{formatAmount(calculateBaseBill(billForUnits))}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>VAT</Table.Th>
          <Table.Td>{formatAmount(calculateVat(billForUnits))}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total Bill</Table.Th>
          <Table.Td>{formatAmount(calculateTotal(billForUnits))}</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  )
}

export default Bill
