import { Table } from '@mantine/core'
import tariffRates, { TariffRate } from '@config/rates.conf'

const TariffTable = () => (
  <Table striped highlightOnHover withTableBorder withColumnBorders>
    <Table.Thead>
      <Table.Tr>
        <Table.Th>Unit Range</Table.Th>
        <Table.Th>Unit Per Price</Table.Th>
      </Table.Tr>
    </Table.Thead>

    <Table.Tbody>
      {tariffRates.map(({ from, to, rate }: TariffRate, index: number) => (
        <Table.Tr key={index}>
          <Table.Td>
            {from} unit(s) {to ? `to ${to} unit(s)` : 'and above'}
          </Table.Td>

          <Table.Td>{rate} BDT</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  </Table>
)

export default TariffTable
