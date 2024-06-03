import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

type Operator = '+' | '-' | '*' | '/'

export function Atividade07() {
  const [displayValue, setDisplayValue] = useState<string>('0')
  const [operator, setOperator] = useState<Operator | null>(null)
  const [firstValue, setFirstValue] = useState<number | null>(null)
  const [secondValue, setSecondValue] = useState<number | null>(null)
  const [waitingForSecondValue, setWaitingForSecondValue] = useState<boolean>(false)

  const handleTap = (type: 'number' | 'operator' | 'equal' | 'clear', value?: string) => {
    switch (type) {
      case 'number':
        if (waitingForSecondValue) {
          setDisplayValue(value!)
          setSecondValue(parseFloat(value!))
          setWaitingForSecondValue(false)
        } else {
          const newValue = displayValue === '0' ? value! : displayValue + value!
          setDisplayValue(newValue);
          if (operator) {
            setSecondValue(parseFloat(newValue.split(operator)[1]))
          } else {
            setFirstValue(parseFloat(newValue))
          }
        }
        break
      case 'operator':
        if (firstValue !== null) {
          setOperator(value as Operator)
          setDisplayValue(`${displayValue} ${value}`)
          setWaitingForSecondValue(true)
        }
        break
      case 'equal':
        if (operator && firstValue !== null && secondValue !== null) {
          let result: number
          switch (operator) {
            case '+':
              result = firstValue + secondValue
              break
            case '-':
              result = firstValue - secondValue
              break
            case '*':
              result = firstValue * secondValue
              break
            case '/':
              result = firstValue / secondValue
              break
            default:
              return
          }
          setDisplayValue(`${result}`)
          setOperator(null)
          setFirstValue(null)
          setSecondValue(null)
          setWaitingForSecondValue(false)
        }
        break
      case 'clear':
        setDisplayValue('0')
        setOperator(null)
        setFirstValue(null)
        setSecondValue(null)
        setWaitingForSecondValue(false)
        break
    }
  }

  const renderButton = (type: 'number' | 'operator' | 'equal' | 'clear', value: string) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleTap(type, value)}
      key={value}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.row}>
        {renderButton('clear', 'C')}
        {renderButton('operator', '/')}
        {renderButton('operator', '*')}
        {renderButton('operator', '-')}
      </View>
      <View style={styles.row}>
        {renderButton('number', '7')}
        {renderButton('number', '8')}
        {renderButton('number', '9')}
        {renderButton('operator', '+')}
      </View>
      <View style={styles.row}>
        {renderButton('number', '4')}
        {renderButton('number', '5')}
        {renderButton('number', '6')}
      </View>
      <View style={styles.row}>
        {renderButton('number', '1')}
        {renderButton('number', '2')}
        {renderButton('number', '3')}
      </View>
      <View style={styles.row}>
        {renderButton('number', '0')}
        {renderButton('equal', '=')}
      </View>
    </View>
  )
}
