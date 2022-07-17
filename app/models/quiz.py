# from .db import db

# class Quiz(db.Model):
#   __tablename__ = 'quizzes'

#   id = db.Column(db.Integer, primary_key=True)
#   userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#   videoId = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)
#   questionOne = db.Column(db.String(255), nullable=False)
#   answerOne = db.Column(db.String(255), nullable=False)
#   questionTwo = db.Column(db.String(255), nullable=False)
#   answerTwo = db.Column(db.String(255), nullable=False)
#   questionThree = db.Column(db.String(255), nullable=False)
#   answerThree = db.Column(db.String(255), nullable=False)
#   questionFour = db.Column(db.String(255), nullable=False)
#   answerFour = db.Column(db.String(255), nullable=False)
  
#   user = db.relationship('User', back_populates='quizzes')
#   video = db.relationship('Video', back_populates='quizzes')
#   answered_quizzes = db.relationship('AnsweredQuiz', back_populates='quiz')

#   def to_dict(self):
#     return {
#       'id': self.id,
#       'userId': self.userId,
#       'videoId': self.videoId,
#       'questionOne' : self.questionOne,
#       'answerOne' : self.answerOne,
#       'questionTwo' : self.questionTwo,
#       'answerTwo' : self.answerTwo,
#       'questionThree' : self.questionThree,
#       'answerThree' : self.answerThree,
#       'questionFour' : self.questionFour,
#       'answerFour' : self.answerFour
#     }
