import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		createOrder (order){
			this.get('store').saveOrder(order);
			this.transitionTo('orders.order', order);
		}
	},
	model (params) {
		const store = this.get('store');
		return store.newOrder();
	},
	store: Ember.inject.service()
});
