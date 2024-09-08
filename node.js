console.log("Hello, World!");
const validator = require('validator')

const validateEmail = (email) => {
    return validator.isEmail(email)
}

console.log('is yuliapelia19@gmail.com a valid email? ', validateEmail('yuliapelia19@gmail.com'));z

console.log('is yuliapelia19 a valid email? ', validateEmail('yuliapelia19'));

//! ls - показати які файли і папки
//! clear - очистити термінал або ctrl+l
//! ls -l - показати всі файли
//! ls -la - показати разом з прихованими файлами
//! cd - навгаціяпо папкам
//! cd D: - виходить на диск D
//! touch - створює новий файл
//! mv - переіменовує файл
//! rm - видаляє файли
//! rm -rf ./HW/ - видаляє папку
//! mkdir - створює нову папку

//? Основні команди
//? npm init - ініціалізує npm в проекті і створює файл package.json
//? npm install - встановлює всі залежності, перелічені в package.json
//? npm list --depth=0 - виведе в терміналі список локально встановлених пакетів з номерами їх версій, без залежностей
//? npm install [package-name] - встановить пакет локально у папку node_modules
//? npm uninstall [package-name] - видалить пакет, встановлений локально і оновить package.json
//? npm start і npm test - запустить скрипт start або test, розташований в package.json
//? npm run [custom-script] - запустить кастомний скрипт, розташований в package.json
//? npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
//? npm update - оновить всі пакети до максимально дозволеної версії

    