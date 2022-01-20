from .db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  videoId = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)
  comment = db.Column(db.String(255), nullable=False)

  user = db.relationship('User', back_populates='comments')
  video = db.relationship('Video', back_populates='comments')

  def to_dict(self):
    return {
      'id': self.id,
      'userId': self.userId,
      'videoId': self.videoId,
      'comment': self.comment
    }
