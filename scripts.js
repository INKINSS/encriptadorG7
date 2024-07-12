document.getElementById('textEncrypted').innerHTML = 'vaya... parece que no tienes un mensaje secreto aún'


const encryptedText = () => {
    let textInput = document.getElementById('textInput').value
    let textEncrypted = ''

    for (let i = 0; i < textInput.length; i++) {
        switch(textInput[i]) {
            case 'a':
                textEncrypted += 'timso'
                break;
            case 'e': 
            textEncrypted += 'gtria'
                break; 
            case 'i':
                textEncrypted += 'zumbv'
                break;
            case 'o':
                textEncrypted += 'ximbo'
                break;
            case 'u':
                textEncrypted += 'mibor'
                break;
            default:
                textEncrypted += textInput[i]
        }
    }
    
    document.getElementById('textEncrypted').innerHTML = textEncrypted
}

const decryptedText = () => {
    let textInput = document.getElementById('textInput').value
    let textDecrypted = ''

    for (let i = 0; i < textInput.length; ) {
        if (textInput.substring(i, i + 5) === 'timso') {
            textDecrypted += 'a'
            i += 5
        } else if (textInput.substring(i, i + 5) === 'gtria') {
            textDecrypted += 'e'
            i += 5
        } else if (textInput.substring(i, i + 5) === 'zumbv') {
            textDecrypted += 'i'
            i += 5
        } else if (textInput.substring(i, i + 5) === 'ximbo') {
            textDecrypted += 'o'
            i += 5
        } else if (textInput.substring(i, i + 5) === 'mibor') {
            textDecrypted += 'u'
            i += 5
        } else {
            textDecrypted += textInput[i]
            i++
        }
    }
    
    document.getElementById('textEncrypted').innerHTML = textDecrypted
}

async function copyTextToDesencrypted() {
    let textToCopy = document.getElementById('textEncrypted').textContent;
    let textInput = document.getElementById('textInput')
    let buttonCopy = document.getElementById('buttonCopy')
    try {
      await navigator.clipboard.writeText(textToCopy);
      buttonCopy.innerHTML = 'copiado'
      setTimeout(() => {
        buttonCopy.innerHTML = 'copiar'
      }, 1500)
      textInput.value = ''
      textInput.focus()
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }
  

  const cleanTextEncrypted = () => {
    document.getElementById('textEncrypted').innerHTML = 'vaya... parece que no tienes un mensaje secreto aún'
    let textInput = document.getElementById('textInput')
    textInput.value = ''
    textInput.focus()
  }