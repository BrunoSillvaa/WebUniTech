import { createContext, useState } from 'react';

export const CurrentPageContext = createContext<CurrentPageContextData>({} as CurrentPageContextData)

interface CurrentPageContextData {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export function CurrentPageProvider({children}: any) {
  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
      {children}
    </CurrentPageContext.Provider>
  )
}