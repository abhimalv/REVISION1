echo "pull the latest code from git"
git pull 

echo "install dependencies"
npm run install 

echo "build the project"
npm run build   

rm -rf /var/www/html/*
cp -r dist/* /var/www/html/


echo "restart the server"
systemctl reload nginx 

echo "deployment completed"