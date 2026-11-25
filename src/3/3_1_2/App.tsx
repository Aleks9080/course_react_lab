// 3_1_2 Profile editor
/*
В проекте приведена форма, реализованная на чистом JavaScript.

Эта форма переключается между двумя режимами: в режиме редактирования вы видите вводимые данные, а в режиме просмотра - только результат. Метка кнопки меняется между "Редактировать" и "Сохранить" в зависимости от того, в каком режиме вы находитесь. Когда вы изменяете вводимые данные, приветственное сообщение внизу обновляется в режиме реального времени.

Ваша задача - реализовать это на React. Для вашего удобства разметка уже была преобразована в JSX, но вам нужно будет сделать так, чтобы она показывала и скрывала входы, как это делает оригинал.

Убедитесь, что она также обновляет текст внизу!
*/

import { useState } from 'react';

export default function EditProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');

    return (
        <form>
            <label>
                First name: <b>{firstName}</b>
                {isEditing && (
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                )}
            </label>
            <label>
                Last name: <b>{lastName}</b>
                {isEditing && (
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                )}
            </label>
            <button type="button" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
            <p>
                <i>Hello, {firstName} {lastName}!</i>
            </p>
        </form>
    );
}
