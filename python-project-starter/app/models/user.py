from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profileImg = db.Column(db.String(255), nullable=True)
    backgroundImg = db.Column(db.String(255), nullable=True)

    videos = db.relationship('Video', back_populates='users')
    polls = db.relationship('Poll', back_populates='users')
    likes = db.relationship('Like', back_populates='users')
    answeredPolls = db.relationship('AnsweredPoll', back_populates='users')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profileImg': self.profileImg,
            'backgroundImg': self.backgroundImg
        }
