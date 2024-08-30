
.PHONY: up stop

up:
	docker compose up -d

stop:
	docker compose stop	

clean:
	docker compose down -v

nestcli: 
	docker run --rm -ti \
	-v ./:/bg \
	-w /bg \
	node:lts node nest/node_modules/@nestjs/cli/bin/nest.js $(filter-out $@,$(MAKECMDGOALS))

npm: 
	docker run --rm -ti \
	-v ./:/bg \
	-w /bg \
	node:lts npm $(filter-out $@,$(MAKECMDGOALS))

installback: 
	docker run --rm -ti \
	-v ./nest:/bg \
	-w /bg \
	node:lts npm uninstall mysql

runback: 
	docker run --rm --tty \
	-v ./nest:/bg \
	-w /bg \
	-p "8082:3000" \
	node:lts npm run start:dev	

%:
	@:
