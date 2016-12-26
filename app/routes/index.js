import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.get('store').getProducts();
	},
	store : Ember.inject.service()
});
