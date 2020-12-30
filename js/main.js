'use strict';

(function($){
	$(document).ready(function() {
		
		const SUITS = [
			'spade',
			'club',
			'heart',
			'diamond'
		];
		const CARDS_LIST = [
			{
				value: '6',
				suit: SUITS[0]
			},
			{
				value: '6',
				suit: SUITS[1]
			},
			{
				value: '6',
				suit: SUITS[2]
			},
			{
				value: '6',
				suit: SUITS[3]
			},
			{
				value: '7',
				suit: SUITS[0]
			},
			{
				value: '7',
				suit: SUITS[1]
			},
			{
				value: '7',
				suit: SUITS[2]
			},
			{
				value: '7',
				suit: SUITS[3]
			},
			{
				value: '8',
				suit: SUITS[0]
			},
			{
				value: '8',
				suit: SUITS[1]
			},
			{
				value: '8',
				suit: SUITS[2]
			},
			{
				value: '8',
				suit: SUITS[3]
			},
			{
				value: '9',
				suit: SUITS[0]
			},
			{
				value: '9',
				suit: SUITS[1]
			},
			{
				value: '9',
				suit: SUITS[2]
			},
			{
				value: '9',
				suit: SUITS[3]
			},
			{
				value: '10',
				suit: SUITS[0]
			},
			{
				value: '10',
				suit: SUITS[1]
			},
			{
				value: '10',
				suit: SUITS[2]
			},
			{
				value: '10',
				suit: SUITS[3]
			},
			{
				value: 'J',
				suit: SUITS[0]
			},
			{
				value: 'J',
				suit: SUITS[1]
			},
			{
				value: 'J',
				suit: SUITS[2]
			},
			{
				value: 'J',
				suit: SUITS[3]
			},
			{
				value: 'Q',
				suit: SUITS[0]
			},
			{
				value: 'Q',
				suit: SUITS[1]
			},
			{
				value: 'Q',
				suit: SUITS[2]
			},
			{
				value: 'Q',
				suit: SUITS[3]
			},
			{
				value: 'K',
				suit: SUITS[0]
			},
			{
				value: 'K',
				suit: SUITS[1]
			},
			{
				value: 'K',
				suit: SUITS[2]
			},
			{
				value: 'K',
				suit: SUITS[3]
			},
			{
				value: 'A',
				suit: SUITS[0]
			},
			{
				value: 'A',
				suit: SUITS[1]
			},
			{
				value: 'A',
				suit: SUITS[2]
			},
			{
				value: 'A',
				suit: SUITS[3]
			}
		];
		const CARD = $(`<div class="card">
							<div class="card__inner">
								<div class="card__front"></div>
								<div class="card__back">
									<p class="card__value"></p>
								</div>
							</div>
						</div>`);

		$.each(CARDS_LIST, (i, card) => {
			let cardWrapper = CARD.clone(),
				cardBack = cardWrapper.find('.card__back'),
				cardValue = cardWrapper.find('.card__value');

			cardValue.text(card.value);
			cardValue.attr('data-title', card.value);
			cardBack.addClass(card.suit);

			$('body').append(cardWrapper);
		});
	});
})(jQuery);
