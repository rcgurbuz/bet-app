import Styled from 'styled-components'

export const BulletinWrapper = Styled.div`
  padding: 10px;
  margin:10px auto;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  max-width: 80vw;
`

export const Table = Styled.div`
  width:100%;
  text-align: center;
  padding: 10px 0;
`

export const TableWrapper = Styled.div` 
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 4fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const TableHeadItem = Styled.div` 
  font-size:12px;
  text-align:center;
  background: #fc0;
  padding:12px;
  margin-bottom: 10px;
  font-weight: bold
`

export const TableItem = Styled.div` 
  border: 1px solid gray;
  font-size:12px;
  text-align:center;
  background: #7d9fa4;
  color:#efefef
`

export const TableItemRatio = Styled.div` 
  border: 1px solid gray;
  cursor: pointer;
  font-size:12px;
  text-align:center;
  background: ${({ isSelected }) => (isSelected ? '#fc0' : '')}

`

export const TableHead = Styled.div``
