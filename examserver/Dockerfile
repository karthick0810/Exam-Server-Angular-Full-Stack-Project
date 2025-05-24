# Use official Tomcat base image (Tomcat 9 with JDK 17)
FROM tomcat:9.0.73-jdk17-temurin

# Remove default webapps to keep container clean
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy your WAR file to Tomcat webapps directory
COPY target/examserver.war /usr/local/tomcat/webapps/ROOT.war

# Expose Tomcat default port
EXPOSE 8080

# Start Tomcat server
CMD ["catalina.sh", "run"]
