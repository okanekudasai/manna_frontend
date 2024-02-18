sudo mv -f /home/ubuntu/deploy_front/favicon.ico /usr/share/nginx/html/
sudo mv -f /home/ubuntu/deploy_front/index.html /usr/share/nginx/html/
rsync -a /home/ubuntu/deploy_front/assets/ /usr/share/nginx/html/
rm -rf /home/ubuntu/deploy_front/assets/