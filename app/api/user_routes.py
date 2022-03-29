from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Video

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/videos')
def user_vids(id):
    videos = Video.query.filter(Video.userId == id)
    videos = [video.to_dict() for video in videos]

    return {"videos": videos}
