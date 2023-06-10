FROM cypress/included:11.2.0

COPY . /tests

WORKDIR /tests

RUN npm i
ENTRYPOINT ["/bin/sh", "entrypoint.sh"]