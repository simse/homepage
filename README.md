# Homepage
[![Build and release Docker image](https://github.com/simse/homepage/actions/workflows/release.yml/badge.svg)](https://github.com/simse/homepage/actions/workflows/release.yml)

A self-hosted homepage for your browser with search, quick links and in the _future_ widgets.

## Installation

**Docker (recommended)**

```bash
docker run -p 3000:3000 -e CONFIG_FILE=/config.yml -v /home/simon/config.yml:/config.yml ghcr.io/simse/homepage:main
```

**From source**
```bash
git clone git@github.com:simse/homepage.git
cd homepage
export CONFIG_FILE=/home/simon/config.yml
yarn
yarn start
````

## Configuration
Here is a sample config file:
```yaml
general:
  locale: en-US
  title: Sorensen Cloud

search:
  enabled: true
  provider: duckduckgo

links:
  - name: Radarr
    url: http://radarr.internal.sorensen.cloud
    image: radarr
  - name: Sonarr
    url: http://sonarr.internal.sorensen.cloud
    image: sonarr
  - name: CouchPotato
    url: http://couchpotato.internal.sorensen.cloud
    image: http://couchpota.to/media/images/full.png
```



## Contributing
Pull requests are welcome. For all changes please open a discussion. For bug fixes it is sufficient to open an issue.

Please make sure to update tests as appropriate.

## License
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)