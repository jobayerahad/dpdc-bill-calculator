export const formatAmount = (amount: number): string => {
  return (
    new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount) + ' BDT'
  )
}
