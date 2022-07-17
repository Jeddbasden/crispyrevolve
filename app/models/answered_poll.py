# from .db import db

# class AnsweredPoll(db.Model):
#   __tablename__ = 'answered_polls'

#   id = db.Column(db.Integer, primary_key=True)
#   userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#   pollId = db.Column(db.Integer, db.ForeignKey('polls.id'), nullable=False)
#   selection = db.Column(db.String(255), nullable=False)

#   user = db.relationship('User', back_populates='answered_polls')
#   poll = db.relationship('Poll', back_populates='answered_polls')

#   def to_dict(self):
#     return {
#         'id': self.id,
#         'userId': self.userId,
#         'pollId': self.pollId,
#         'selection': self.selection
#     }
