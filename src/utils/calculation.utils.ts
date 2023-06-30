import tariffRates, { TariffRate, demandChargeInTaka, vatRateInPercent } from '../config/rates.conf'

export const calculateBill = (totalUnits: number): number => {
  let unitsUsed = totalUnits
  let totalBill = 0

  for (let i = 0; i < tariffRates.length; i++) {
    const { from, to = totalUnits, rate } = tariffRates[i]

    if (unitsUsed > 0) {
      const unitsInRange = Math.min(unitsUsed, to - from + 1)
      totalBill += unitsInRange * rate
      unitsUsed -= unitsInRange
    }
  }

  return totalBill
}

export const calculateBillBreakdown = (totalUnits: number): TariffRate[] => {
  let unitsUsed = totalUnits
  const breakdown: TariffRate[] = []

  for (let i = 0; i < tariffRates.length; i++) {
    const { from, to = totalUnits, rate } = tariffRates[i]

    if (unitsUsed > 0) {
      const unitsInRange = Math.min(unitsUsed, to - from + 1)
      const amount = parseFloat((unitsInRange * rate).toFixed(2))

      breakdown.push({
        from,
        to: from + unitsInRange - 1,
        rate: amount
      })

      unitsUsed -= unitsInRange
    }
  }

  return breakdown
}

export const calculateBaseBill = (bill: number): number => bill + demandChargeInTaka

export const calculateVat = (bill: number): number => (bill + demandChargeInTaka) * (vatRateInPercent / 100)

export const calculateTotal = (bill: number): number => calculateBaseBill(bill) + calculateVat(bill)
