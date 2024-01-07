'use client'

import * as React from 'react'

import { Box, Checkbox, Stack, Text } from '@chakra-ui/react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import { results } from './TotoResults.model'
import { countNumbersInDataset, formatCounts } from './TotoResults.controller'

const groupData = (years: number[]) => {
  const data = []
  for (const year of years) {
    data.push(...results[year])
  }
  return data
}

function TotoResultsPage() {
  const [year, setYear] = React.useState([2023])
  const data = countNumbersInDataset(groupData(year))
  console.log('data', data)
  const formattedData = formatCounts(data)
  console.log('formattedData', formattedData)

  return (
    <Box sx={{ width: '100vw', height: '25rem' }}>
      <Text>Избери година / години</Text>
      <Stack spacing={5} direction="row">
        {Object.keys(results).map((resultYear) => (
          <Checkbox
            isChecked={year.includes(+resultYear)}
            key={resultYear}
            colorScheme="green"
            onChange={(e) => {
              if (e.target.checked) {
                setYear([...year, +resultYear])
              } else {
                setYear(year.filter((y) => y !== +resultYear))
              }
            }}
          >
            {resultYear}
          </Checkbox>
        ))}
      </Stack>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Изтеглено пъти"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default TotoResultsPage
