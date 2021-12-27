import { makeAutoObservable } from 'mobx'

interface IDoubles {
  withOneDouble: string
  withNoDoubles: string
}

export interface IStore {
  input: string
  withNoDoubles: string
  withOneDouble: string
  doubles: IDoubles
  setInput(value: string): void
}

const doubles = (string: string): IDoubles => {
  const doubles: Array<string> = []
  const elementsArray = string.split('\n').map((el) => el.trim())
  let noDoubles = [...elementsArray]

  elementsArray.forEach((el) => {
    if (doubles.every((doubleEl) => doubleEl.toLocaleLowerCase() !== el.toLocaleLowerCase())) {
      doubles.push(el)
    } else {
      noDoubles = noDoubles.filter((e) => e.toLocaleLowerCase() !== el.toLocaleLowerCase())
    }
  })

  const withOneDouble = doubles.join('\n')
  const withNoDoubles = noDoubles.join('\n')

  return {
    withOneDouble: withOneDouble,
    withNoDoubles: withNoDoubles,
  }
}

export class Store implements IStore {
  constructor() {
    makeAutoObservable(this)
  }

  input = ''

  get doubles(): IDoubles {
    return doubles(this.input)
  }
  get withNoDoubles(): string {
    return this.doubles.withNoDoubles
  }
  get withOneDouble(): string {
    return this.doubles.withOneDouble
  }

  setInput(value: string): void {
    this.input = value
  }
}
