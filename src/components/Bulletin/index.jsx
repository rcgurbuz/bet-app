/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { BulletinWrapper, Table } from './styled';
import Thead from './Thead';
import TBody from './TBody';
import useBets from '../../hooks/useBets';

const Bulletin = () => {
	const data = useBets();

	return (
		<BulletinWrapper>
			<Table>
				<Thead data={data} />
				<TBody data={data} />
			</Table>
		</BulletinWrapper>
	);
};

export default Bulletin;
