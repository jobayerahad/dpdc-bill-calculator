// Define the type for a single tariff rate.
export type TariffRate = {
  readonly from: number
  readonly to?: number
  readonly rate: number
}

// Array of tariff rates defined as ranges with specific rates.
/**
const tariffRates: readonly TariffRate[] = [
  { from: 1, to: 75, rate: 4.85 },
  { from: 76, to: 200, rate: 6.63 },
  { from: 201, to: 300, rate: 6.95 },
  { from: 301, to: 400, rate: 7.34 },
  { from: 401, to: 600, rate: 11.51 },
  { from: 601, rate: 13.26 }
]
 */

const tariffRates: readonly TariffRate[] = [
  { from: 1, to: 75, rate: 5.26 },
  { from: 76, to: 200, rate: 7.2 },
  { from: 201, to: 300, rate: 7.59 },
  { from: 301, to: 400, rate: 8.02 },
  { from: 401, to: 600, rate: 12.67 },
  { from: 601, rate: 14.61 }
]

// Constant for the demand charge
export const demandChargeInTaka: number = 175

// VAT rate in percent
export const vatRateInPercent: number = 5

export default tariffRates
