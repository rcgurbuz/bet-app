/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([])

  const addAndRemoveBasket = (ratioCode, item, ratio) => {
    const existingBasket = basketItems?.find((x) => x?.C === item?.C)

    if (!existingBasket && existingBasket?.ratioCode !== ratioCode) {
      setBasketItems([...basketItems, { ...item, ratioCode, ratio }])
    } else if (existingBasket && existingBasket?.ratioCode !== ratioCode) {
      const updatedOdd = {
        ...item,
        ratioCode,
        ratio
      }
      setBasketItems([
        ...basketItems.filter((x) => x.C !== item?.C),
        updatedOdd
      ])
    } else if (existingBasket && existingBasket?.ratioCode === ratioCode) {
      setBasketItems((prev) => [...prev.filter((x) => x?.C !== item?.C)])
    }
  }

  const odds = basketItems?.map((x) => x.ratio)
  const totalRatio = odds?.reduce((current, total) => current * total, 1)

  return (
    <BasketContext.Provider
      value={{ basketItems, addAndRemoveBasket, totalRatio }}
    >
      {children}
    </BasketContext.Provider>
  )
}
