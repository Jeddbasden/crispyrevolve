from .db import db

class Video(db.Model):
  __tablename__ = 'videos'

  id = db.Column(db.Integer, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  title = db.Column(db.String(150), nullable=False)
  videoUrl = db.Column(db.String(250), nullable=False)
  description = db.Column(db.String(500), nullable=True)
  imgUrl = db.Column(db.String(250), nullable=True)

  user = db.relationship('User', back_populates='videos')

  def to_dict(self):
    return {
        'id': self.id,
        'userId': self.userId,
        'title': self.title,
        'videoUrl': self.videoUrl,
        'description': self.description,
        'imgUrl': self.imgUrl
    }
