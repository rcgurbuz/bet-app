/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { titleArray } from '../../constants';
import { TableHeadItem, TableWrapper } from './styled';

const Thead = ({ data }) => {
	return (
		<TableWrapper style={{ marginRight: '5px' }}>
			<TableHeadItem>Event Count: {data?.length}</TableHeadItem>

			{titleArray?.map(item => (
				<TableHeadItem key={item?.value}>{item?.label}</TableHeadItem>
			))}
		</TableWrapper>
	);
};

export default Thead;
