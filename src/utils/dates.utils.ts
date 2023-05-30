import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)

// Utility function to format the date based on the format string
const format = (date: string | Date, formatString: string): string => (date ? dayjs(date).format(formatString) : '')

export const formatDate = (date: string | Date): string => format(date, 'Do MMMM, YYYY')
export const formatMonthYear = (date: string | Date): string => format(date, 'MMMM, YYYY')
export const formatDateTime = (date: string | Date): string => format(date, 'Do MMMM YYYY, hh:mm A')
