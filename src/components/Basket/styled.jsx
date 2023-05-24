import Styled from 'styled-components'

export const BasketWrapper = Styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 40vh;
  padding: 10px;
  background: #fc0;
  border-radius:5px;
  @media (max-width: 1440px) {
    width: 50vh;
  }
`

export const BasketItemsWrapper = Styled.div`
    max-height: 20vh;
    overflow-y: auto
`

export const BasketItem = Styled.div`
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    background: white;
    border-radius:5px;
    font-size:14px;
`

export const ItemRatio = Styled.span`
   font-weight: bold
   font-size:24px
`

export const TotalBasket = Styled.div`
    font-weight: 600;
    padding: 10px;
    font-size:14px;
`

export const BasketTitleWrapper = Styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 4fr 1fr;
`

export const BasketTitle = Styled.div`
    font-weight: 600;
    padding: 10px;
    font-size:14px;
`
