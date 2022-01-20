from .db import db

class Like(db.Model):
  __tablename__ = 'likes'

  id = db.Column(db.Integer, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  videoId = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)
  
  user = db.relationship('User', back_populates='likes')
  video = db.relationship('Video', back_populates='likes')

  def to_dict(self):
    return {
        'id': self.id,
        'userId': self.userId,
        'videoId': self.videoId
    }
