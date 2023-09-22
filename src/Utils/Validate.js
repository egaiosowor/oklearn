export const usernameIsValid = (username) => {
    const regex = /^[a-zA-Z\s']{1,10}$/;

    return regex.test(username);
}
