pipeline { 
  agent any

  environment {

    EMAIL_BODY = 

        """

        <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>

        <p>

        View console output at 

        "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"

        </p> 

        <p><i>(Build log is attached.)</i></p>

        """

    EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

    // EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

    EMAIL_RECEPIENT = 'info@leucommunications.co.ke'


    SLACK_SUCCESS = """ 

      BUILD SUCCESS!

      Build No# :  ${env.BUILD_NUMBER}

      App Url: https://gitau-gallery.herokuapp.com/

    """

  }  
  tools { 
    nodejs "nodejs"
  }
  stages { 
    stage('clone repository') {
      steps { 
        git 'https://github.com/dnduta/devops-ip1'
      }
    }
    stage('Build the project - install dependencies') {
      steps { 
        sh 'npm install'
      }
    }
    stage('Tests') {        
        steps { 
            sh 'npm test'
        }
    }
    stage('Deploy to Heroku') {
        steps {
            withCredentials([usernameColonPassword(credentialsId: 'heroku-login', variable: 'HEROKU_CREDENTIALS' )]){
                sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/gitau-gallery.git master -f'
            }
        }
    } 
    
  }

  post {
    success {
      slackSend color: "good", message: SLACK_SUCCESS    
    }
    failure {
        emailext attachLog: true, 
        body: EMAIL_BODY,
        subject: EMAIL_SUBJECT_FAILURE,
        to: EMAIL_RECEPIENT
    }
  }

}
