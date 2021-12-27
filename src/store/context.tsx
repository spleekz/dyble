import React, { createContext, useContext } from 'react'
import { Store, IStore } from './store'

export const StoreContext = createContext<IStore>(new Store())

export const StoreProvider: React.FC = ({ children }) => {
  return <StoreContext.Provider value={new Store()}>{children}</StoreContext.Provider>
}

export const useStore = (): IStore => useContext(StoreContext)
