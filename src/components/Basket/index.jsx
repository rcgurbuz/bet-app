/* eslint-disable react/react-in-jsx-scope */
import { BasketWrapper, BasketItem, BasketTitleWrapper, TotalBasket, BasketTitle, BasketItemsWrapper } from './styled';
import { BasketContext } from '../../context/BasketContext';
import { useContext } from 'react';

const Basket = () => {
	const { basketItems, totalRatio } = useContext(BasketContext);

	return (
		<BasketWrapper>
			<BasketTitleWrapper>
				<BasketTitle>Kuponum</BasketTitle> <BasketTitle>Maç: {basketItems?.length}</BasketTitle>
			</BasketTitleWrapper>

			<BasketItemsWrapper>
				{basketItems.map(item => (
					<BasketItem key={item.C}>
						<div>
							<b>Kod:</b> {item.C} <b>Maç:</b> {item.N} <b>Oran:</b> {item.ratio}
						</div>
					</BasketItem>
				))}
			</BasketItemsWrapper>

			<TotalBasket> Toplam Tutar: {totalRatio?.toFixed(2)} </TotalBasket>
		</BasketWrapper>
	);
};

export default Basket;
