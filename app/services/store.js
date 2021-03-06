import Ember from 'ember';
import LineItem from 'project/models/line-item';
import Order from 'project/models/order';
import Product from 'project/models/product';

const products = [
	Product.create({title : 'Tent', price : 10, description : 'can be used for a camp', imageUrl : '../images/tent.png'}),
	Product.create({title : 'Box', price : 5, description : 'can be used for packing', imageUrl : '../images/box.png'}),
	Product.create({title : 'Nails', price : 2, description : 'can be used for repairing', imageUrl : '../images/nails.png'}),
	Product.create({title : 'Torch Light', price : 15 , description : 'can be used at night', imageUrl : '../images/torch-light.png'})
];

const orders =[
	 Order.create({
 		id: '1', 
		name: 'first order',
		items: [
				LineItem.create({product: products[0], quantity: 1 }),
				LineItem.create({product: products[1], quantity: 3 }),
				LineItem.create({product: products[2], quantity: 10 }),
				LineItem.create({product: products[3], quantity: 2 })	
			   ]
		}),
	 Order.create({
 		id: '2', 
		name: 'second order',
		items: [
				LineItem.create({product: products[1], quantity: 1 }),
				LineItem.create({product: products[3], quantity: 3 }),
				LineItem.create({product: products[0], quantity: 10 }),
				LineItem.create({product: products[2], quantity: 2 })	
			   ]
		}),
	 Order.create({
 		id: '3', 
		name: 'third order',
		items: [
				LineItem.create({product: products[2], quantity: 4 }),
				LineItem.create({product: products[1], quantity: 3 }),
				LineItem.create({product: products[0], quantity: 11}),
				LineItem.create({product: products[3], quantity: 5 })	
			   ]
		})
	 ];
var OrderId = 4;
export default Ember.Service.extend({
	getOrderById(id){
		const orders = this.getOrders();
		return orders.findBy('id' ,id);
	},

	getProducts(){
		return products;
	},
	getOrders(){
		return orders;
	},
	newOrder(){
		return Order.create({
			 items : products.map((product) => {
			 	return LineItem.create({
			 		product: product
			 	});
		 	})
		});
	},
	saveOrder(order){
		OrderId = OrderId + 1;
		order.set('id', OrderId);
		orders.pushObject(order);
	}
});
