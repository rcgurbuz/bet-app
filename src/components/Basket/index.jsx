/* eslint-disable react/react-in-jsx-scope */
import { BasketWrapper, BasketItem, BasketTitleWrapper, TotalBasket, BasketTitle, BasketItemsWrapper } from './styled';
import useBasket from '../../hooks/useBasket';

const Basket = () => {
	const { basketItems, totalRatio } = useBasket();

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

			{basketItems?.length > 0 && <TotalBasket> Toplam Tutar: {totalRatio?.toFixed(2)} </TotalBasket>}
		</BasketWrapper>
	);
};

export default Basket;
