import { NumberFormatter, Paper, Table } from '@mantine/core'

import { demandChargeInTaka } from '@config/rates.conf'
import { calculateBill, calculateBaseBill, calculateTotal, calculateVat } from '@utils/calculation.utils'

const Bill = ({ totalUnits }: { totalUnits: number }) => {
  const billForUnits = calculateBill(totalUnits)

  return (
    <Paper shadow="xs">
      <Table striped highlightOnHover>
        <Table.Tbody>
          <Table.Tr>
            <Table.Th>Date</Table.Th>
            <Table.Td>{new Date().toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'medium' })}</Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Unit Used</Table.Th>
            <Table.Td>
              <NumberFormatter value={totalUnits} thousandSeparator thousandsGroupStyle="lakh" />
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Used Unit Price</Table.Th>
            <Table.Td>
              <NumberFormatter
                suffix=" ৳"
                value={billForUnits}
                thousandSeparator
                thousandsGroupStyle="lakh"
                decimalScale={2}
                fixedDecimalScale
              />
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Demand Charge</Table.Th>
            <Table.Td>
              <NumberFormatter
                suffix=" ৳"
                value={demandChargeInTaka}
                thousandSeparator
                thousandsGroupStyle="lakh"
                decimalScale={2}
                fixedDecimalScale
              />
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Principal Price</Table.Th>
            <Table.Td>
              <NumberFormatter
                suffix=" ৳"
                value={calculateBaseBill(billForUnits)}
                thousandSeparator
                thousandsGroupStyle="lakh"
                decimalScale={2}
                fixedDecimalScale
              />
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>VAT</Table.Th>
            <Table.Td>
              <NumberFormatter
                suffix=" ৳"
                value={calculateVat(billForUnits)}
                thousandSeparator
                thousandsGroupStyle="lakh"
                decimalScale={2}
                fixedDecimalScale
              />
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Total Bill</Table.Th>
            <Table.Td>
              <NumberFormatter
                suffix=" ৳"
                value={calculateTotal(billForUnits)}
                thousandSeparator
                thousandsGroupStyle="lakh"
                decimalScale={2}
                fixedDecimalScale
              />
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </Paper>
  )
}

export default Bill
