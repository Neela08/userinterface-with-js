class randomCredentials {
  generateRandomPassword(email) {
    const length = 10; 

    const password = [];

    
    for (let i = 0; i < length * 0.7; i++) {
      const lowercaseLetter = String.fromCharCode(
        Math.floor(Math.random() * 26) + 97
      );
      password.push(lowercaseLetter);
    }


    for (let i = 0; i < length * 0.15; i++) {
      const uppercaseLetter = String.fromCharCode(
        Math.floor(Math.random() * 26) + 65
      );
      password.push(uppercaseLetter);
    }

    
    for (let i = 0; i < length * 0.1; i++) {
      const numeral = Math.floor(Math.random() * 10);
      password.push(numeral.toString());
    }

    
    const emailLetters = email.replace(/[^a-zA-Z]/g, "");
    if (emailLetters) {
      const emailLetterIndex = Math.floor(Math.random() * emailLetters.length);
      const emailLetter = emailLetters[emailLetterIndex];
      password.push(emailLetter);
    }

   
    for (let i = 0; i < length * 0.05; i++) {
      const cyrillicCharacter = String.fromCharCode(
        Math.floor(Math.random() * 33) + 1040
      );
      password.push(cyrillicCharacter);
    }

    
    for (let i = password.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [password[i], password[j]] = [password[j], password[i]];
    }

   
    return password.join("");
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
