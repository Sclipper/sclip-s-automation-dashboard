import { apiUrl } from '@/config'

type AutomationService = {
  url: string
  method: string
  data?: Object
}

const automationService = ({ url, method, data }: AutomationService) =>
  fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiUrl}`,
    },
  }).then((res) => res.json())

export default automationService
