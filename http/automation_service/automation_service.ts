'use client'

import { apiAccessKey, apiUrl } from '@/config'

type AutomationService = {
  url: string
  method: string
  data?: Object
}
// You may need to reserach how to makre reqests in next
const automationService = ({ url, method, data }: AutomationService) =>
  fetch(`${apiUrl}/${url}`, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiAccessKey}`,
    },
  }).then((res) => res.json())

export default automationService
