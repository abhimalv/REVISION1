echo "pull the latest code from git"
git pull origin master

echo "install dependencies"
npm install     

echo "build the project"
npm run build   

echo "restart the server"
npm run restart

echo "deployment completed"