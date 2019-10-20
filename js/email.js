function sendEmail(nome, assunto, email, mensagem){
    const data = { 
        "from": nome,
        "to": email,
        "subject": assunto,
        "text": mensagem
    }
    return fetch("https://fiap-sender.herokuapp.com/email/send",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        
}