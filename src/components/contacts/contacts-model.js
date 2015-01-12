Contacts = {};

Contacts.model = function () {

	this.name  = m.prop('');
	this.email = m.prop('');

};

Contacts.vm = {
	contacts: m.prop( [new Contacts.model()] ),
};