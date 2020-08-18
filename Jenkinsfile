pipeline { 
  agent any
  tools { 
    gradle "Gradle-6"
  }
  stages { 
    stage('clone repository') {
      steps { 
        git 'https://github.com/dnduta/devops-ip1'
      }
    }
    stage('Build the project') {
      steps { 
        sh 'gradle build'
      }
    }
    stage('Tests') {
      steps { 
        sh 'npm run test'
      }
    }
    stage('Deploy to Heroku') {
        steps {
            withCredentials([usernameColonPassword(credentialsId: 'heroku-login', variable: 'HEROKU_CREDENTIALS' )]){
                sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/gitau-gallery.git master'
            }
        }
    } 
    
  }
}
