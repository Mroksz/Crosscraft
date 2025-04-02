
function loginDiscord() {
    
    alert('Iniciando sesión en Discord...');
    document.getElementById('user-photo').style.display = 'block';
    document.getElementById('user-photo').src = 'https://cdn.discordapp.com/avatars/YOUR_USER_ID/YOUR_AVATAR.png'; // Sustituye por la URL del avatar de usuario
}


function showJavaDetails() {
    document.getElementById('java-info').style.display = 'block';
    document.getElementById('bedrock-info').style.display = 'none';
}


function showBedrockDetails() {
    document.getElementById('bedrock-info').style.display = 'block';
    document.getElementById('java-info').style.display = 'none';
}


function copyToClipboard(data) {
    const textarea = document.createElement('textarea');
    textarea.value = data;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Datos copiados: ' + data);
}


function joinSupportServer() {
    window.open('https://discord.gg/YOUR_SUPPORT_SERVER_LINK'); 
}


function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 7}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.innerHTML = '❄';
        document.getElementById('snow').appendChild(snowflake);
    }
}

// Llamar a la función para crear nieve
createSnowflakes();
