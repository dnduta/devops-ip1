pipeline { 
  agent any
  tools { 
    // gradle "Gradle-6"
    nodejs "nodejs"
  }
  stages { 
    stage('clone repository') {
      steps { 
        git 'https://github.com/dnduta/devops-ip1'
      }
    }
    stage('Build the project: install dependencies') {
      steps { 
        sh 'npm install'
      }
    }
    stage('Tests') {
        tools {
            nodejs "nodejs"
        }
        steps { 
            // sh 'npm install'
            sh 'npm test'
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
