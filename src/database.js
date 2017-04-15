'use strict';

// lets initialize empty store here, our store will be an object.
const store = {};

// methods for storing and accessing the data.
const Databse = {

	// this will return the entire store.
	all() {
		return store;
	},

	// this will add new record in the store
	create( key, value ) {
		return store[key] = value;
	},

	// this will update existing record in store
	update( key, value ) {
		if ( typeof store[key] === 'object' ) {
			const updated = Object.assign( {}, store[key] || {}, value );
			return store[key] = updated;
		}
		return store[key] = value;
	},

	// this will either create or update a record in store
	save( key, value ) {
		if ( store[key] ) {
			return Databse.update(key, value);
		} else {
			return Databse.create(key, value);
		}
	},

	// this will find and return records based on the parameters provided.
	find( key ) {
		return store[key];
	},

	// this will delete a record from store.
	delete( key, path=null ) {
		if ( path ) {
			return delete store[key][path];
		}
		return delete store[key];
	},

};

// let's export our module.
module.exports = Databse;
