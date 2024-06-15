Primero levantar la base de datos con: docker compose up
Luego: npm run start

---

PRODUCCION

Para entrar a la instancia de AWS

ssh -i EC2-economy-safe-backend-ssh.pem ubuntu@economysafe.com

Para correr el backend en la instancia de AWS

1. levantar los contenedores con: docker compose up -d
2. correr la app con: nohup npm run start:prod &

Nota! El comando nohup ... & es para que no se cierre el backend luego de desconectarnos de ssh

Nota! para poder entrar a mongo-ex para poder hacer cambios en la base de datos hay que
abrir el puerto 8090 en la instancia EC2 de AWS y luego entrar con:
http://economysafe.com:8090/ desde nuestro navegador.
