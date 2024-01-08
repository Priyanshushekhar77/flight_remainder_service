/
## REMAINDER SERVICE(Task to send emails and  notifications)
  -> A user will get email after booking a ticket 
  -> Also a user will get email before 24 hour of boarding pass.
## TABLE
  ->npx sequelize init
  ->npx sequelize db:create
  -> npx sequelize model:generate --name NotificationTicket --attributes subject:string,content:string,recepientEmail:string,status:enum,notificationTime:date
  -> npx sequelize db:migrate
/