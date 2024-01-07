/* eslint-disable no-restricted-syntax */
export function countNumbersInDataset(dataset: number[][]): Record<number, number> {
  function* flatten(array: number[][]): Generator<number, void, unknown> {
    for (const subarray of array) {
      yield* subarray
    }
  }

  const numberCounts: Record<number, number> = {}

  for (const number of flatten(dataset)) {
    numberCounts[number] = (numberCounts[number] || 0) + 1
  }

  return numberCounts
}

export function formatCounts(
  dataCounts: Record<number, number>
): { name: string; times: number }[] {
  const formattedData: { name: string; times: number }[] = []

  for (const number in dataCounts) {
    formattedData.push({
      name: number.toString(),
      'Изтеглено пъти': dataCounts[number],
    })
  }

  return formattedData
}
