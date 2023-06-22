#base image: linux alpine os with
FROM openjdk:8-jdk-alpine
#copy jar from local into docker image
COPY target/Climate_PE-0.0.1-SNAPSHOT.jar Climate_PE-0.0.1-SNAPSHOT.jar
#command line to run jar
ENTRYPOINT ["java","-jar","/Climate_PE-0.0.1-SNAPSHOT.jar"]