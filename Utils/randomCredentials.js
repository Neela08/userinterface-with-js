class randomCredentials {
  generateRandomPassword(email, length) {
    const minLength = length;
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numerals = "0123456789";
    const cyrillicCharacters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

    const emailLetter = email[Math.floor(Math.random() * email.length)];

    const remainingLength = minLength - 1;
    const randomCharacters =
      uppercaseLetters +
      numerals +
      cyrillicCharacters +
      "abcdefghijklmnopqrstuvwxyz";

    let password = emailLetter;

    for (let i = 0; i < remainingLength; i++) {
      const randomIndex = Math.floor(Math.random() * randomCharacters.length);
      password += randomCharacters[randomIndex];
    }

    return password;
  }

  generateRandomString(length) {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomText = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters[randomIndex];
    }

    return randomText;
  }
}

module.exports = new randomCredentials();
