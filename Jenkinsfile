#!/usr/bin/env groovy

pipeline {

    agent any
    
    tools {nodejs "buptis-node"}

    stages {
    stage('checkout') {
        steps {
        notifyBuild('STARTED')
        checkout scm
        }
    }

    stage('check node') {
        steps {
        sh "node -v"
        }
    }

    stage('install') {
        steps {
             
        sh "npm install"
        sh "npm audit fix"
            
        }
    }

    stage('build') {
        steps {
            sh "npm run build"
            notifyBuild('SUCCESSFUL')
        }
    }

    }

    post {
    failure {
      notifyBuild('FAILURE')
    }

    }

   
}

def notifyBuild(String buildStatus) {
    // Default values
    def colorName = 'RED'
    def colorCode = '#FF0000'
    def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
    def summary = "${subject} (${env.BUILD_URL})"
    def details = """<p>STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
    <p>Check console output at "<a href="${env.BUILD_URL}">${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>"</p>"""

    // Override default values based on build status
    if (buildStatus == 'STARTED') {
        color = 'YELLOW'
        colorCode = '#FFFF00'
    } else if (buildStatus == 'SUCCESSFUL') {
        color = 'GREEN'
        colorCode = '#00FF00'
    } else {
        color = 'RED'
        colorCode = '#FF0000'
    }

    // Send notifications
    slackSend(color: colorCode, message: summary)
}

