// Pangam is a sentence which contains alteast every lettere of the alphabet.
function determinePangram(pangram) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i=0; i < alphabet.length; i++){
        if( !pangram.includes(alphabet[i]))return false
    }
    return true
}

console.log(determinePangram('a b c d e f g h i j k l m n o p q r s t u v w x y z'));