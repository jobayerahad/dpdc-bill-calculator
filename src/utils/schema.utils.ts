import * as yup from 'yup'

const schema = yup.object().shape({
  prevUnit: yup
    .number()
    .required('Previous Unit Reading is required')
    .min(0, 'Previous Unit Reading cannot be less than 0'),
  currUnit: yup
    .number()
    .required('Current Unit Reading is required')
    .min(0, 'Current Unit Reading cannot be less than 0')
    .test(
      'greater-than-prev',
      'Current Unit Reading cannot be less than Previous Unit Reading',
      (value, { parent }) => {
        return value >= parent.prevUnit
      }
    )
})

export default schema
