echo "cleaning target folder..."
rm -rf /var/www/html/*
echo "copying new build..."
cp dist/client/* /var/www/html/
echo "copy favicon..."
cp favicon.ico /var/www/html/
