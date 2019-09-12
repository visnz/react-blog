FROM node
RUN git clone https://github.com/visnz/react-blog 
WORKDIR react-blog
# RUN git checkout dev
RUN npm install
RUN node src/posts/MDDataGenerator.js src/posts/
RUN npm run build

FROM nginx:alpine
ENV BLOG_NAME=react-blog
WORKDIR /$BLOG_NAME
COPY --from=0 /$BLOG_NAME/build /$BLOG_NAME
RUN echo "user root;events{}http{include /etc/nginx/mime.types;server{listen 80;location / {root /$BLOG_NAME/;}}}" > /etc/nginx/nginx.conf
EXPOSE 80