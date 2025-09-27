// server.js (versión actualizada y más segura)
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/proxy', async (req, res) => {
    // Este es el enlace público de las TVs de Argentina
        const IPTV_URL = 'http://tv14s.xyz:8080/get.php?username=71700855&password=71700855&type=m3u_plus';
        

            try {
                    console.log('Petición recibida. Buscando lista pública de canales...');
                            const response = await fetch(IPTV_URL);
                                    const data = await response.text();
                                            console.log('Respuesta recibida. Enviando al cliente.');
                                                    
                                                            res.send(data);

                                                                } catch (error) {
                                                                        console.error('Error en el proxy:', error);
                                                                                res.status(500).send('Error al contactar al servidor de la lista de canales.');
                                                                                    }
                                                                                    });

                                                                                    app.listen(PORT, () => {
                                                                                        console.log(`Servidor proxy ejecutándose en el puerto ${PORT}`);
                                                                                        });
                                                                                        