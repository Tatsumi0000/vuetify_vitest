.PHONY: setup test

setup:
	docker compose build ; \
	docker compose run --rm vue /bin/bash -c "npm install" 

test:
	docker compose run --rm vue /bin/bash -c "npm run test"