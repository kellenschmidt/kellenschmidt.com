# kellenschmidt.com

docker create \
      --name=reverse-proxy \
      --cap-add=NET_ADMIN \
      --network kellen \
      -e PUID=1000 \
      -e PGID=1000 \
      -e TZ=America/Chicago \
      -e URL=kellenforthe.win \
      -e SUBDOMAINS=api,www,pma \
      -e VALIDATION=http \
      -e STAGING=false \
      -p 443:443 \
      -p 80:80 \
      -v /home/kellenschmidt31/reverse-proxy:/config \
      --restart unless-stopped \
      linuxserver/letsencrypt
    docker start reverse-proxy

docker run -d --env-file ~/mysql-login.txt --network kellen --name slimphp-api --rm kellenschmidt/slimphp-api

location ^~ /api {
    proxy_pass http://slimphp-api;
    include /config/nginx/proxy.conf;
}
