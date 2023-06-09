/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { TableItem, TableWrapper, TableHead, TableItemRatio } from './styled';
import { FixedSizeList as List } from 'react-window';
import { odds } from '../../utils/index';
import useBasket from '../../hooks/useBasket';
import { titleArray } from '../../constants';

const TBody = ({ data }) => {
	const { addAndRemoveBasket, basketItems } = useBasket();

	const handleAddAndRemoveBasket = (ratioCode, item, ratio) => {
		addAndRemoveBasket(ratioCode, item, ratio);
	};

	const ListItem = ({ index, style }) => {
		const item = data[index];
		const selectedRatioCode = basketItems?.find(x => x?.C === item?.C)?.ratioCode;

		const r1 = item?.OCG['1']?.OC['0'];
		const rX = item?.OCG['1']?.OC['1'];
		const r25 = item?.OCG['5']?.OC['25'];
		const r26 = item?.OCG['5']?.OC['26'];
		const r1X = item?.OCG['2']?.OC['3'];
		const r12 = item?.OCG['2']?.OC['4'];
		const rX2 = item?.OCG['2']?.OC['5'];

		return (
			<TableHead style={style}>
				<TableWrapper>
					<TableItem>{`${item?.D} ${item?.LN}`}</TableItem>

					{titleArray?.map(item => (
						<TableItemRatio key={item?.value}>{item?.label}</TableItemRatio>
					))}
				</TableWrapper>

				<TableWrapper>
					<TableItemRatio>{item?.N}</TableItemRatio>
					<TableItemRatio />
					<TableItemRatio>{item?.OCG['1']?.MBS}</TableItemRatio>
					<TableItemRatio $isSelected={odds.odd1 === selectedRatioCode} onClick={() => handleAddAndRemoveBasket(odds.odd1, item, +r1?.O)}>
						{r1?.O}
					</TableItemRatio>
					<TableItemRatio $isSelected={odds.oddX === selectedRatioCode} onClick={() => handleAddAndRemoveBasket(odds.oddX, item, +rX?.O)}>
						{rX?.O}
					</TableItemRatio>
					<TableItemRatio />
					<TableItemRatio $isSelected={odds.oddAlt === selectedRatioCode} onClick={() => handleAddAndRemoveBasket(odds.oddAlt, item, +r25?.O)}>
						{r25?.O}
					</TableItemRatio>
					<TableItemRatio $isSelected={odds.oddUst === selectedRatioCode} onClick={() => handleAddAndRemoveBasket(odds.oddUst, item, +r26?.O)}>
						{r26?.O}
					</TableItemRatio>
					<TableItemRatio />
					<TableItemRatio />
					<TableItemRatio />
					<TableItemRatio />
					<TableItemRatio />
					<TableItemRatio $isSelected={odds.odd1X === selectedRatioCode} onClick={() => handleAddAndRemoveBasket(odds.odd1X, item, +r1X?.O)}>
						{r1X?.O}
					</TableItemRatio>
					<TableItemRatio $isSelected={odds.odd12 === selectedRatioCode} onClick={() => handleAddAndRemoveBasket(odds.odd12, item, +r12?.O)}>
						{r12?.O}
					</TableItemRatio>
					<TableItemRatio $isSelected={odds.oddX2 === selectedRatioCode} onClick={() => handleAddAndRemoveBasket(odds.oddX2, item, +rX2?.O)}>
						{rX2?.O}
					</TableItemRatio>
					<TableItemRatio />
					<TableItemRatio />
					<TableItemRatio>{Object.keys(item?.OCG)?.length}</TableItemRatio>
				</TableWrapper>
			</TableHead>
		);
	};

	return (
		<List height={window.innerHeight - 120} width={'100%'} itemSize={60} itemCount={data.length}>
			{ListItem}
		</List>
	);
};

export default TBody;
