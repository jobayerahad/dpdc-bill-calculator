import tariffRates, { demandChargeInTaka, vatRateInPercent } from '../config/rates.conf'

export const calculateBill = (totalUnits: number): number => {
  if (totalUnits <= 50) return totalUnits * 4.35

  const totalBill = tariffRates.reduce((bill, { from, to = totalUnits, rate }) => {
    if (totalUnits >= from) {
      const units = Math.min(totalUnits, to) - from
      return bill + units * rate
    }

    return bill
  }, 0)

  return totalBill
}

export const calculateBaseBill = (bill: number): number => bill + demandChargeInTaka

export const calculateVat = (bill: number): number => (bill + demandChargeInTaka) * (vatRateInPercent / 100)

export const calculateTotal = (bill: number): number => calculateBaseBill(bill) + calculateVat(bill)
