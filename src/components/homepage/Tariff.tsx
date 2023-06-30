import { Table } from '@mantine/core'
import tariffRates, { TariffRate } from '@config/rates.conf'

const TariffTable = () => (
  <Table striped highlightOnHover withBorder withColumnBorders>
    <thead>
      <tr>
        <th>Unit Range</th>
        <th>Unit Per Price</th>
      </tr>
    </thead>

    <tbody>
      {tariffRates.map(({ from, to, rate }: TariffRate, index: number) => (
        <tr key={index}>
          <td>
            {from} unit(s) {to ? `to ${to} unit(s)` : 'and above'}
          </td>

          <td>{rate} BDT</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default TariffTable
