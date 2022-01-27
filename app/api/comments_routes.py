from flask import Blueprint, request
from flask_login import current_user, login_required

from app.models import Video, db, Comment
from app.forms import AddCommentForm, EditCommentForm

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

@comments_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):

  comment = Comment.query.get(id)
  videoId = comment.videoId
  db.session.delete(comment)
  db.session.commit()
  
  comments = Comment.query.filter(Comment.videoId == videoId).all()
  comments = [item.to_dict() for item in comments]
  return{"comments": comments}


@comments_routes.route('/<int:id>/edit', methods=['PATCH'])
@login_required
def edit_comment(id):
  form = EditCommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  comment = Comment.query.get(id)
  videoId = comment.videoId

  if form.validate_on_submit():
    comment.comment = form.data['comment']

    db.session.commit()

    comments = Comment.query.filter(Comment.videoId == videoId).all()
    comments = [item.to_dict() for item in comments]
    return{"comments": comments}

  return {"message": "teehee failure sorry" }
