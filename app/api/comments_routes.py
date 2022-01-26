from flask import Blueprint, request
from flask_login import current_user, login_required

from app.models import Video, db, Comment
from app.forms import AddCommentForm

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/<int:videoId>')
def get_comments(videoId):
  comments = Comment.query.filter(Comment.videoId == videoId).all()
  comments = [item.to_dict() for item in comments]
  return{'comments': comments}
