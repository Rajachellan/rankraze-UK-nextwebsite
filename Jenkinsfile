pipeline {
    agent any
 
    environment {
        DOCKER_IMAGE     = "rankraze-nextjs"
        IMAGE_TAG        = "1.0.2"
        CONTAINER_NAME   = "rankraze-nextjs-container"
        APP_PORT         = "3000"
 
        HOST_UPLOADS     = "/home/rankraze/uploads"
        HOST_LOGS        = "/home/rankraze/logs"
        HOST_CONFIG      = "/home/rankraze/config"
 
        DOCKER_HUB_USER  = "rankraze"
    }
 
    stages {
 
        stage('Checkout Code') {
            steps {
                git branch: 'sri3',
                    credentialsId: 'github-creds',
                    url: 'https://github.com/Rajachellan/RankrazeNextJsWebsite.git'
            }
        }
 
        stage('Install Dependencies & Build Next.js') {
            steps {
                sh '''
                npm ci
                npm run build
                '''
            }
        }
 
        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }
 
        stage('Build & Push Docker Image') {
            steps {
                sh '''
                docker build -t $DOCKER_IMAGE:$IMAGE_TAG .
 
                docker tag $DOCKER_IMAGE:$IMAGE_TAG $DOCKER_HUB_USER/$DOCKER_IMAGE:$IMAGE_TAG
                docker tag $DOCKER_IMAGE:$IMAGE_TAG $DOCKER_HUB_USER/$DOCKER_IMAGE:latest
 
                docker push $DOCKER_HUB_USER/$DOCKER_IMAGE:$IMAGE_TAG
                docker push $DOCKER_HUB_USER/$DOCKER_IMAGE:latest
                '''
            }
        }
 
        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }
 
        stage('Run New Container (with .env)') {
            steps {
                withCredentials([
                    file(credentialsId: 'rankraze-nextjs-env', variable: 'ENV_FILE')
                ]) {
                    sh '''
                    docker run -d --name $CONTAINER_NAME \
                    --restart always \
                    --env-file $ENV_FILE \
                    -p $APP_PORT:3000 \
                    -v $HOST_UPLOADS:/app/uploads \
                    -v $HOST_LOGS:/app/logs \
                    -v $HOST_CONFIG:/app/config \
                    $DOCKER_HUB_USER/$DOCKER_IMAGE:$IMAGE_TAG
                    '''
                }
            }
        }
    }
 
    post {
        success {
            echo "✅ Deployment Successful!"
            echo "🌍 App running on http://SERVER_IP:$APP_PORT"
        }
        failure {
            echo "❌ Deployment Failed! Check Jenkins logs."
        }
        always {
            sh 'docker logout || true'
        }
    }
}
 