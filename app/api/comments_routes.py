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


@comments_routes.route('/add', methods=["POST"])
@login_required
def add_comments():
  form = AddCommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  videoId = form.data['videoId']
  id = current_user.id

  if form.validate_on_submit():
    newCommment = Comment(
      userId=id,
      comment=form.data['comment'],
      videoId=form.data['videoId']
    )

    db.session.add(newCommment)
    db.session.commit()

    comments = Comment.query.filter(Comment.videoId == videoId).all()
    comments = [item.to_dict() for item in comments]
    return{'comments': comments}
