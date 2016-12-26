import Ember from 'ember';

export default Ember.Component.extend({
	percentage : Ember.computed ('itemPrice', 'orderPrice', function(){
		return Math.round((this.get('itemPrice') / this.get('orderPrice') * 100)*100)/100;
	})
});
