new Vue({
    el: '#app', // Selecciona el elemento con id "app" donde se montará la instancia de Vue.
    data: {
        name: '',
        email: '',
        message: '',
        confirmationMessage: ''
    },
    methods: {
         // Método para desplazar suavemente la vista hacia la sección de contacto.
        scrollToContact() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        },
        scrollToCaracteristicas() {
            document.getElementById('caracteristicas').scrollIntoView({ behavior: 'smooth' });
        },
        
        // Método asíncrono para enviar el formulario de contacto.
        async sendForm() {
            try {
                // Realiza una petición POST al servidor con los datos del formulario.
                const response = await fetch('http://localhost:3000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.name,
                        email: this.email,
                        message: this.message
                    })
                });
                // Verifica si la respuesta fue exitosa
                if (response.ok) {
                    this.confirmationMessage = 'Gracias por tu mensaje!';
                    this.name = '';
                    this.email = '';
                    this.message = '';
                } else {
                    this.confirmationMessage = 'Error al enviar tu mensaje. Inténtalo de nuevo.';
                }
            } catch (error) {
                this.confirmationMessage = 'Error de red. Inténtalo de nuevo.';
            }
        }
    }
});
