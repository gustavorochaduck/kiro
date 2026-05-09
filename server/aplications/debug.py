def ceasar_encrypt(text, shift=20):
    encrypted_text = ""
    for char in text:
        if char.isalpha():  # Check if character is an alphabet
            offset = ord('A') if char.isupper() else ord('a')
            encrypted_char = chr((ord(char) + shift - offset) % 26 + offset)
            encrypted_text += encrypted_char
        else:
            # Non-alphabetic characters are added as is, without adding newline character here
            encrypted_text += char
    return encrypted_text

def ceasar_decrypt(encrypted_text, shift=20):
    decrypted_text = ""
    for char in encrypted_text:
        if char.isalpha():  # Check if character is an alphabet
            offset = ord('A') if char.isupper() else ord('a')
            decrypted_char = chr((ord(char) - shift - offset) % 26 + offset)
            decrypted_text += decrypted_char
        else:
            # Non-alphabetic characters are added as is, without adding newline character here
            decrypted_text += char
    return decrypted_text.strip()  # Remove any extra whitespace if present at the end due to
print(ceasar_encrypt("hello"))
print(ceasar_decrypt(ceasar_encrypt("hallo")))