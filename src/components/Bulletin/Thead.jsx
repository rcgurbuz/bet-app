/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { TableHeadItem, TableWrapper } from './styled'

const Thead = ({ data }) => {
  return (
    <TableWrapper style={{ marginRight: '5px' }}>
      <TableHeadItem>Event Count: {data?.length}</TableHeadItem>
      <TableHeadItem>Yorumlar</TableHeadItem>
      <TableHeadItem></TableHeadItem>
      <TableHeadItem>1</TableHeadItem>
      <TableHeadItem>x</TableHeadItem>
      <TableHeadItem>2</TableHeadItem>
      <TableHeadItem>Alt</TableHeadItem>
      <TableHeadItem>Üst</TableHeadItem>
      <TableHeadItem>H1</TableHeadItem>
      <TableHeadItem>1</TableHeadItem>
      <TableHeadItem>x</TableHeadItem>
      <TableHeadItem>2</TableHeadItem>
      <TableHeadItem>H2</TableHeadItem>
      <TableHeadItem>1-X</TableHeadItem>
      <TableHeadItem>1-2</TableHeadItem>
      <TableHeadItem>X-2</TableHeadItem>
      <TableHeadItem>Var</TableHeadItem>
      <TableHeadItem>Yok</TableHeadItem>
      <TableHeadItem>+99</TableHeadItem>
    </TableWrapper>
  )
}

export default Thead
