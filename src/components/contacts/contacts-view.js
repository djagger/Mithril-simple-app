Contacts.view = function (ctrl) {

	var vm = Contacts.vm;

	var removeNote = function (idx) {
		if (vm.contacts().length >= 2) {
			return m('button.close', { onclick: ctrl.removeNote.curry(idx), type:'button' }, 'x');
		}
	}

	return m('.contacts', [

		vm.contacts().map(function (contact, idx) {

			return m('form.form-horizontal', { role:'form' }, [

				m('.row', [
					m('.col-md-4', [
						m('h3', "Note #" + (idx+1)),
					]),
					m('.col-md-1', [
						removeNote(idx),
					]),
				]),

				m('.form-group', [
					m('label.col-sm-1.control-label', "Name:"),
					m('.col-sm-3' + (ctrl.hasErrorOfLengthChar(contact.name()) ? '' : '.has-error'), [
						m('input[type=text].form-control', { value: contact.name(), onchange: m.withAttr('value', contact.name), placeholder: 'Your name (min 5 characters)' } ),
					]),
				]),

				m('.form-group', [
					m('label.col-sm-1.control-label', "Email:"),
					m('.col-sm-3' + (ctrl.hasErrorEmail(contact.email()) ? '' : '.has-error'), [
						m('input[type=text].form-control', { value: contact.email(), onchange: m.withAttr('value', contact.email), placeholder: 'Your email' } ),
					]),
				]),

			])
		}),

		m('a.btn.btn-primary.btn-sm', { onclick: ctrl.addNote, href:'#' }, 'Add new note')

	]);

};