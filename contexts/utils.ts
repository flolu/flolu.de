import {createContext} from 'react'

export type Setter<T> = (value: T) => void
export type Getter<T> = () => T

export function createContextHack<T>() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createContext<T>({} as any)
}
