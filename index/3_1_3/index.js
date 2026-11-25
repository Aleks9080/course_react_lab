// Состояние
const state = {
    isEditing: false,
    firstName: 'Jane',
    lastName: 'Jacobs',
};

// Элементы DOM
const form = document.getElementById('form');
const editButton = document.getElementById('editButton');
const firstNameInput = document.getElementById('firstNameInput');
const firstNameText = document.getElementById('firstNameText');
const lastNameInput = document.getElementById('lastNameInput');
const lastNameText = document.getElementById('lastNameText');
const helloText = document.getElementById('helloText');

// Функция рендеринга UI на основе текущего состояния
function render() {
    if (state.isEditing) {
        // Режим редактирования
        editButton.textContent = 'Сохранить';
        firstNameText.style.display = 'none';
        lastNameText.style.display = 'none';
        firstNameInput.style.display = '';
        lastNameInput.style.display = '';
        firstNameInput.value = state.firstName;
        lastNameInput.value = state.lastName;
    } else {
        // Режим просмотра
        editButton.textContent = 'Редактировать';
        firstNameInput.style.display = 'none';
        lastNameInput.style.display = 'none';
        firstNameText.style.display = '';
        lastNameText.style.display = '';
        firstNameText.textContent = state.firstName;
        lastNameText.textContent = state.lastName;
    }
    helloText.textContent = 'Привет, ' + state.firstName + ' ' + state.lastName + '!';
}

// Обработчик отправки формы
function handleFormSubmit(e) {
    e.preventDefault();
    state.isEditing = !state.isEditing;
    render();
}

// Обработчик изменения имени
function handleFirstNameChange() {
    state.firstName = firstNameInput.value;
    render();
}

// Обработчик изменения фамилии
function handleLastNameChange() {
    state.lastName = lastNameInput.value;
    render();
}

// Подписка на события
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;

// Первичный рендер
render();
