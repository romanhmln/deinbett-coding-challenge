docker build -t test -f e2e.Dockerfile .
# Run tests
id=`docker run -dt test --env MAILOSAUR_API_KEY=dR7IKzPJUHfvK7oSqUEjUHe772eHg3LD,serverId=5fffqskt,subdomain=5fffqskt.mailosaur.net`
echo "Container start: ${id}"
docker wait ${id}
# Get reports from container
docker cp ${id}:/tests/reports reportsFromContainer
zip -r tests.zip reportsFromContainer
# Cleanup
rm -rf reportsFromContainer
docker rm ${id}