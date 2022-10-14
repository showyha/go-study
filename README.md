# 動かし方

```shell
docker compose build
docker compose up -d

# go起動
docker compose exec go bash
migrate -source file://db/migrations -database "mysql://$MYSQL_DSN" up
air
```
