/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { BulletinWrapper, Table } from './styled';
import Thead from './Thead';
import TBody from './TBody';

const Bulletin = ({ data }) => {
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
