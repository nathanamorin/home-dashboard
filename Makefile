ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

build:
	docker build -t home-dashboard .

run:
	docker run -p 8080:80 -v $(ROOT_DIR)/src:/usr/share/nginx/html --rm home-dashboard