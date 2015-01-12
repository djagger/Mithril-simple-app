Contacts.controller = function () {

	var vm = Contacts.vm;
	var ctrl = this;

	ctrl.hasErrorOfLengthChar = function (name) {
		return name.length > 4;
	};

	ctrl.hasErrorEmail = function (email) {
		/*
			Функция проверки формата адреса e-mail.
			Возвращает true, если адрес соответствует формату, false - в противном случае.

			Правила формирования имени домена:
				Название домена должно состоять более чем из одного символа, начинаться и заканчиваться буквой
				латинского алфавита или цифрой. Промежуточными символами могут быть буквы латинского алфавита,
				цифры или дефис. (Примечание: Минимальная длина доменного имени для зон SU, BIZ, INFO и DE принята
				равной  3 символа)

			Правила формирования названии доменной зоны:
				Имя доменной зоны должно состоять из букв латинского алфавита. Количество символов должно
				быть от 2 до 6 включительно
				(примеры доменных зон: 3 символа - info, 4 символа - travel, 6 символов - museum).
		*/
		var validEmailPattern = /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,6}$/i;
		return validEmailPattern.test(email);
	};

	ctrl.addNote = function () {
		var newNote = new Contacts.model();
		vm.contacts().push(newNote);
	};

	ctrl.removeNote = function (idx) {
		vm.contacts().splice(idx, 1);
	};

};