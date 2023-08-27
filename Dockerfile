FROM node:latest
COPY index.html /home/node
COPY index.js /home/node
WORKDIR /home/node
EXPOSE 8080
ENTRYPOINT [ "/usr/local/bin/node",  "index.js" ]