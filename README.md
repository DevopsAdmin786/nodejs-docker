docker build -t nodejsapp .
docker run -d --name nodejsapp_container -p 3000:3000 <image-ID> 
