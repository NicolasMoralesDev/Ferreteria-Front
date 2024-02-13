import { createContext, useState } from 'react';


export const PaginationContext = createContext(); 


export const PaginationProvider = ({children}) => {

    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(1);
    const [product, setProduct] = useState([{}]);

  return (
    <PaginationContext.Provider value={{page, setPage, total, setTotal, product, setProduct}}>
    {children}
   </PaginationContext.Provider>
  )
}

