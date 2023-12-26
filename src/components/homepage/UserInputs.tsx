import { Button, NumberInput, Paper, SimpleGrid, Text } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { CiCalculator2 as CalculationIcon } from 'react-icons/ci'
import { BiReset as ResetIcon } from 'react-icons/bi'

import schema from '@utils/schema.utils'

type FormValues = {
  prevUnit: number
  currUnit: number
}

type UserInputsProps = {
  setTotalUnits: (units: number) => void
}

const UserInputs = ({ setTotalUnits }: UserInputsProps) => {
  const { onSubmit, getInputProps, reset } = useForm<FormValues>({
    validate: yupResolver(schema),
    initialValues: {
      prevUnit: 0,
      currUnit: 0
    }
  })

  const submitHandler = ({ prevUnit, currUnit }: FormValues) => setTotalUnits(currUnit - prevUnit)
  const resetHandler = () => {
    setTotalUnits(0)
    reset()
  }

  return (
    <Paper>
      <Text color="dimmed" size="sm" mb="md">
        Tariff: LT-A
      </Text>

      <form onSubmit={onSubmit(submitHandler)}>
        <SimpleGrid>
          <NumberInput label="Previous Unit Reading" hideControls required {...getInputProps('prevUnit')} />

          <NumberInput label="Current Unit Reading" hideControls required {...getInputProps('currUnit')} />

          <SimpleGrid cols={2} mt="xs">
            <Button type="submit" variant="gradient" leftSection={<CalculationIcon size={18} />}>
              Calculate
            </Button>

            <Button variant="outline" leftSection={<ResetIcon size={18} />} onClick={resetHandler}>
              Reset
            </Button>
          </SimpleGrid>
        </SimpleGrid>
      </form>
    </Paper>
  )
}

export default UserInputs
