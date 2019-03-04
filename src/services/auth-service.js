export const authService = (name, pass) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === predefinedName && pass === predefinedPassword) {
                resolve();
                return;
            }
            reject();
        }, 500)
    });

const predefinedName = 'user';
const predefinedPassword = 'password';
