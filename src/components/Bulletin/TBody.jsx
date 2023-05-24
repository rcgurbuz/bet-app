/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { TableItem, TableWrapper, TableHead, TableItemRatio } from './styled'
import { FixedSizeList as List } from 'react-window'
import { BasketContext } from '../../context/BasketContext'
import { odds } from '../../utils/index'

const TBody = ({ data }) => {
  const { addAndRemoveBasket, basketItems } = useContext(BasketContext)
  
  const handleaddAndRemoveBasket = (ratioCode, item, ratio) => {
    addAndRemoveBasket(ratioCode, item, ratio)
  }

  const ListItem = ({ index, style }) => {
    const item = data[index]
    const selectedRatioCode = basketItems?.find(
      (x) => x?.C === item?.C
    )?.ratioCode

    const r1 = item?.OCG['1']?.OC['0']
    const rX = item?.OCG['1']?.OC['1']
    const r2 = item?.OCG['1']?.OC['2']
    const r25 = item?.OCG['5']?.OC['25']
    const r26 = item?.OCG['5']?.OC['26']
    const r1X = item?.OCG['2']?.OC['3']
    const r12 = item?.OCG['2']?.OC['4']
    const rX2 = item?.OCG['2']?.OC['5']

    return (
      <TableHead style={style}>
        <TableWrapper>
          <TableItem>{`${item?.D} ${item?.LN}`}</TableItem>
          <TableItem>Yorumlar</TableItem>
          <TableItem>{item?.OCG[item]?.MBS}</TableItem>
          <TableItem>{r1?.N}</TableItem>
          <TableItem>{rX?.N}</TableItem>
          <TableItem>{r2?.N}</TableItem>
          <TableItem>{r25?.N}</TableItem>
          <TableItem>{r26?.N}</TableItem>
          <TableItem>H1</TableItem>
          <TableItem>1</TableItem>
          <TableItem>x</TableItem>
          <TableItem>2</TableItem>
          <TableItem>H2</TableItem>
          <TableItem>{r1X?.N}</TableItem>
          <TableItem>{r12?.N}</TableItem>
          <TableItem>{rX2?.N}</TableItem>
          <TableItem>VAR</TableItem>
          <TableItem>YOK</TableItem>
          <TableItem>+99</TableItem>
        </TableWrapper>

        <TableWrapper>
          <TableItemRatio>{item?.N}</TableItemRatio>
          <TableItemRatio />
          <TableItemRatio>{item?.OCG['1']?.MBS}</TableItemRatio>
          <TableItemRatio
            isSelected={odds.odd1 === selectedRatioCode}
            onClick={() => handleaddAndRemoveBasket(odds.odd1, item, +r1?.O)}
          >
            {r1?.O}
          </TableItemRatio>
          <TableItemRatio
            isSelected={odds.oddX === selectedRatioCode}
            onClick={() => handleaddAndRemoveBasket(odds.oddX, item, +rX?.O)}
          >
            {rX?.O}
          </TableItemRatio>
          <TableItemRatio />
          <TableItemRatio
            isSelected={odds.oddAlt === selectedRatioCode}
            onClick={() => handleaddAndRemoveBasket(odds.oddAlt, item, +r25?.O)}
          >
            {r25?.O}
          </TableItemRatio>
          <TableItemRatio
            isSelected={odds.oddUst === selectedRatioCode}
            onClick={() => handleaddAndRemoveBasket(odds.oddUst, item, +r26?.O)}
          >
            {r26?.O}
          </TableItemRatio>
          <TableItemRatio />
          <TableItemRatio />
          <TableItemRatio />
          <TableItemRatio />
          <TableItemRatio />
          <TableItemRatio
            isSelected={odds.odd1X === selectedRatioCode}
            onClick={() => handleaddAndRemoveBasket(odds.odd1X, item, +r1X?.O)}
          >
            {r1X?.O}
          </TableItemRatio>
          <TableItemRatio
            isSelected={odds.odd12 === selectedRatioCode}
            onClick={() => handleaddAndRemoveBasket(odds.odd12, item, +r12?.O)}
          >
            {r12?.O}
          </TableItemRatio>
          <TableItemRatio
            isSelected={odds.oddX2 === selectedRatioCode}
            onClick={() => handleaddAndRemoveBasket(odds.oddX2, item, +rX2?.O)}
          >
            {rX2?.O}
          </TableItemRatio>
          <TableItemRatio />
          <TableItemRatio />
          <TableItemRatio>{Object.keys(item?.OCG)?.length}</TableItemRatio>
        </TableWrapper>
      </TableHead>
    )
  }

  return (
    <List
      height={window.innerHeight - 120}
      width={'100%'}
      itemSize={60}
      itemCount={data.length}
    >
      {ListItem}
    </List>
  )
}

export default TBody
