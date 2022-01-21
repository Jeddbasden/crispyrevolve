from .db import db 

class Poll(db.Model):
  __tablename__ = 'polls'

  id = db.Column(db.Integer, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  videoId = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)
  question = db.Column(db.String(255), nullable=False)
  choiceOne = db.Column(db.String(255), nullable=False)
  choiceTwo = db.Column(db.String(255), nullable=False)
  choiceThree = db.Column(db.String(255), nullable=True)
  choiceFour = db.Column(db.String(255), nullable=True)
  totalVoted = db.Column(db.Integer, nullable=False)


  user = db.relationship('User', back_populates='polls')
  video = db.relationship('Video', back_populates='polls')
  answered_polls = db.relationship('AnsweredPoll', back_populates='poll')

  def to_dict(self):
    return {
        'id': self.id,
        'userId': self.userId,
        'videoId': self.videoId,
        'question': self.question,
        'choiceOne': self.choiceOne,
        'choiceTwo': self.choiceTwo,
        'choiceThree': self.choiceThree,
        'choiceFour': self.choiceFour,
        'totalVoted': self.totalVoted
    }
