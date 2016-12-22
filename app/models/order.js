import Ember from 'ember';

export default Ember.Object.extend({
	itemPrices : Ember.computed.mapBy('items','cost'),
	totalCost : Ember.computed.sum('itemPrices')
});
