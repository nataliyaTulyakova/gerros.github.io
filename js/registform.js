// Отримуємо посилання на необхідні DOM-елементи
const modal = document.getElementById('regModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const form = document.getElementById('regForm');
// Змінна для зберігання кнопки, яка викликала модальне вікно
let lastActiveElement;
// Отримуємо елементи паролів та блоку помилки
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
// Відкриття модального вікна за допомогою вбудованого методу showModal()
openBtn.addEventListener('click', () => {
    lastActiveElement = document.activeElement; // Запам'ятовуємо кнопку "Зареєструватися"
    modal.showModal();
    // Фокус автоматично впаде на інпут з атрибутом autofocus
});
// Функція для закриття з поверненням фокусу
function closeModalWindow() {
    modal.close();
    // Повертаємо фокус назад на кнопку, щоб користувач клавіатури не загубився на сторінці
    if (lastActiveElement) {
        lastActiveElement.focus();
    }
}
// Закриття вікна при натисканні на кнопку "хрестик"
// closeBtn.addEventListener('click', () => {
//     modal.close();
// });
closeBtn.addEventListener('click', closeModalWindow);
// Закриття вікна при кліку на область поза формою (на ::backdrop)
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalWindow();
    }
})


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalWindow();
    }
});
// Обробка відправки форми реєстрації
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігаємо стандартному перезавантаженню сторінки
    // Отримуємо дані з полів форми
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Дані реєстрації надіслано:', data);
    // Імітація успішного запиту: очищуємо форму та закриваємо модалку
    alert(`Користувач ${data.username} успішно зареєстрований!`);
    form.reset();
    // modal.close();
    closeModalWindow();
});

function validatePasswords() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    // Якщо поле підтвердження ще порожнє, не показуємо помилку завчасно
    if (!confirmPassword) {
        passwordError.textContent = '';
        confirmPasswordInput.setCustomValidity('');
        return;
    }
    if (password !== confirmPassword) {
        passwordError.textContent = 'Паролі не збігаються!';
        // Вбудований метод HTML5, який блокує submit форми та показує помилку браузера
        confirmPasswordInput.setCustomValidity('Паролі повинні збігатися.');
    } else {
        passwordError.textContent = '';// Очищаємо помилку, тепер форма валідна
        confirmPasswordInput.setCustomValidity('');
    }
}
/* Додаємо слухач подій input на обидва поля паролів.
// Метод setCustomValidity('') робить поле валідним, а setCustomValidity('текст') — позначає його як
помилкове та блокує відправку форми браузером. */
// Запускаємо перевірку щоразу, коли користувач щось друкує в будь-якому з полів
passwordInput.addEventListener('input', validatePasswords);
confirmPasswordInput.addEventListener('input', validatePasswords);
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function () {
        // Знаходимо потрібний інпут за допомогою id, вказаного в data-target
        const targetId = this.dataset.target;
        const passwordInput = document.getElementById(targetId);
        const eyeclosedIcon = button.querySelector('svg.eye-closed');
        const eyeopenIcon = button.querySelector("svg.eye-open");

        if (passwordInput.type === 'password') {

            passwordInput.type = 'text';
            // Змінюємо іконку на заплющені очі
            //this.textContent = '🙈'; 
        }
        else {
            passwordInput.type = 'password';
            //     // Повертаємо відкриті очі
            //     //this.textContent = '👁️'; 
        }
        eyeclosedIcon.classList.toggle('hidden');
        eyeopenIcon.classList.toggle('hidden');
    });
});
