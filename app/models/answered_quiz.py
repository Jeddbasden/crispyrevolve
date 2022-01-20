from .db import db

class AnsweredQuiz(db.Model):
  __tablename__ = 'answered_quizzes'

  id = db.Column(db.Integer, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  quizId = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)
  score = db.Column(db.String(10), nullable=False)

  user = db.relationship('User', back_populates='answered_quizzes')
  quiz = db.relationship('Quiz', back_populates='answered_quizzes')

  def to_dict(self):
    return {
        'id': self.id,
        'userId': self.userId,
        'quizId': self.quizId,
        'score': self.score
    }
