import {
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text
} from "@chakra-ui/react"

export type GroupMembersParameters = {
    onChange: (value: number) => void
    value: number
}

export default function GroupMembers({ onChange, value = 100 }: GroupMembersParameters) {
    return (
        <Flex gap="3" align="center">
            <Text fontWeight="bold" whiteSpace="nowrap">
                Group members:
            </Text>

            <NumberInput size={"sm"} width="100%" min={1} step={100} value={value} onChange={(_v, v) => onChange(v)}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Flex>
    )
}
