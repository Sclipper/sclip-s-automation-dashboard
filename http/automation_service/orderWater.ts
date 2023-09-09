import automationService from './automation_service'

const orderWater = (amount: number): Promise<string> =>
  automationService({
    url: `email/orderWater/${amount}`,
    method: 'GET',
  })

export default orderWater
