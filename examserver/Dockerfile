# Build stage: Use Maven to compile and package the application
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Set working directory
WORKDIR /app

# Copy pom.xml and download dependencies (faster rebuilds)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Build the WAR file
RUN mvn clean package -DskipTests

# Runtime stage: Use official Tomcat base image
FROM tomcat:9.0.73-jdk17-temurin

# Remove default webapps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy the built WAR file from the build stage
COPY --from=build /app/target/examserver-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/examserver.war

# Expose Tomcat's default port
EXPOSE 8080

# Start Tomcat server
CMD ["catalina.sh", "run"]
