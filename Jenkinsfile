pipeline {
    agent any
    
    environment {
        NODE_ENV = 'dev'
        PORT    = '5000'
        CRONJOB_ARTICLE_TERM = '*/10 * * * *'
        MONGO_URI = 'mongodb://root:abc123@mongo:27017'
    }

    stages {
        stage('remove all') {
            steps {
                sh 'rm -rf ./*'
            }
        }
        stage('set nexus registry') {
            steps {
                sh 'npm config set registry http://localhost:8082/repository/npm-demo-group/'
            }
        }
        stage('pull code Client and build bundle') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'abaa8aa8-d138-4f1c-9bf2-1f8ac063481e', url: 'https://github.com/Caoquyen1913/articleClient.git']]])
                sh 'npm --loglevel info install && npm run build:dev'
                sh 'mkdir backup && cp -r dist/* backup/'
                
            }
        }
        stage('pull server') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'abaa8aa8-d138-4f1c-9bf2-1f8ac063481e', url: 'https://github.com/Caoquyen1913/articleSever.git']]])
                sh 'cp -r backup/* public/'
            }
        }
        stage('run project') {
            steps {
                
                sh 'npm --loglevel info install'
                sh 'npm start'
            }
        }
    }
}
