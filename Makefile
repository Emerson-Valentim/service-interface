worker: redis bull

redis:
	docker-compose up -d redis

bull:
	docker-compose up -d bull

