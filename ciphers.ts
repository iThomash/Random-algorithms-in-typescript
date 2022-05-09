const alphabet: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function caesarCipher(pass: string, offset: number = 3): string {
    let hash: string = "";
    for (let i = 0; i < pass.length; i++) {
        hash += alphabet[(alphabet.indexOf(pass[i]) + offset) % alphabet.length];
    }
    return hash;
}

function monoalphabeticCipher(pass: string): string {
    const key: string = "k3yb04rd";
    let newAlphabet: string = "";
    let hash = "";
    newAlphabet = [...new Set(key.split(""))].join(""); //Get only unique letters
    for (let i = 0; i < alphabet.length; i++) {
        if (!newAlphabet.includes(alphabet[i])) newAlphabet += alphabet[i];
    }
    for (let i = 0; i < pass.length; i++) {
        hash += newAlphabet[alphabet.indexOf(pass[i])];
    }
    return hash;
}

function polyalphabeticCipher(pass: string): string {
    let hash: string = "";
    const key: string = "k3yb04rd";
    for (let i = 0; i < pass.length; i++) {
        let currentAlphabet: string = alphabet.slice(alphabet.indexOf(key[i%key.length])) + alphabet.slice(0, alphabet.indexOf(key[i%key.length]));
        hash += currentAlphabet[alphabet.indexOf(pass[i])];
    }
    return hash;
}

export { caesarCipher, monoalphabeticCipher, polyalphabeticCipher } 