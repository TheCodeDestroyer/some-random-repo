# Some Random Repo

## Requirements

### Software
- [docker]()
- [docker compose]()

### ENV Variables

1. REDIS_PASSWORD - Used to set password of redis instance and to provide connection info for webserver 
2. REDIS_PORT - Used to set customize redis instance port and to provide connection info for webserver
3. REDIS_HOST - Used to provide connection info for webserver

Optional ENV variables:
1. WEB_SERVER_VERSION - This value will be returned when calling `/version` endpoint on the webserver

## Start Dev

To start dev environment run:
```sh
docker compose up
```

The webserver will be available on http://localhost:{3000 or $PORT you defined}

### Webserver

Webserver has 4 endpoints:

1. `/` - Prints and increments the timer whenever it is called (response type: HTML)
2. `/version` - Returns version set via WEB_SERVER_VERSION env variable
3. `/healthz` | `/readyz` | `/livez` - Returns HTTP status code 200 without content
4. `/metrics` - Returns metrics histogram data ready to be scraped by prometheus
