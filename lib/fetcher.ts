export async function fetcher<T = unknown>(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init)
  return response.json() as Promise<T>
}
