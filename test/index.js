'use strict';

const Database = require('../src/database');
const chai = require('chai');
const expect = chai.expect;

const store = Database.all();

// let's make sure all of these methods exists/are defined in our module object.
describe('Database', () => {

	it( "should have 'all' method", () => {
		expect(Database).to.include.keys('all');
	});

	it( "should have 'create' method", () => {
		expect(Database).to.include.keys('create');
	});

	it( "should have 'update' method", () => {
		expect(Database).to.include.keys('update');
	});

	it( "should have 'save' method", () => {
		expect(Database).to.include.keys('save');
	});

	it( "should have 'find' method", () => {
		expect(Database).to.include.keys('find');
	});

	it( "should have 'delete' method", () => {
		expect(Database).to.include.keys('delete');
	});

});


describe('Database.all', () => {

	it( 'should be an object', () => {
		expect(store).to.be.an('object');
	});

	it( 'should be empty when initialized', () => {
		expect(store).to.deep.equal({});
	});

});


describe('Database.create', () => {

	it( "should add a key 'name' in store", () => {
		Database.create('name','John Doe');
		expect(store).to.include.keys('name');
	});

});


describe('Database.update', () => {

	it( "should update the value of the key 'name' in store", () => {
		const value = Database.update('name', 'Johnny Bravo');
		expect(value).not.to.be.null;
	});

	it( "key 'name' show match the updated value", () => {
		const value = Database.find('name');
		expect(value).to.not.equal('John Doe');
		expect(value).to.equal('Johnny Bravo');
	});

});


describe('Database.save', () => {

	it( "should add a key 'email' in store", () => {
		Database.save('email','john.doe@gmail.com');
		expect(store).to.include.keys('email');
	});

	it( "should update the value of the key 'name' in store", () => {
		const value = Database.save('name', 'Jane Smith');
		expect(value).to.not.equal('Johnny Bravo');
		expect(value).to.equal('Jane Smith');
	});

});


describe('Database.find', () => {

	it( "should return the value of key 'name' from store", () => {
		const value = Database.find('name');
		expect(value).not.to.be.null;
	});

	it( "should be equal to the value that was set", () => {
		const value = Database.find('name');
		expect(value).to.be.a('string');
		expect(value).to.equal('Jane Smith');
	});

});


describe('Database.delete', () => {

	it( "should delete the key 'name' from store", () => {
		const value = Database.delete('name');
		expect(store).to.not.include.keys('name');
	});

	it( "the value of deleted key 'name' should be undefined", () => {
		const value = Database.find('name');
		expect(value).to.be.an('undefined');
	});

});

