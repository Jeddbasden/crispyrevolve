from flask import Blueprint, request
from flask_login import current_user, login_required


from app.models import Video, db
from app.forms import AddVideoForm, EditVideoForm

videos_routes = Blueprint('videos', __name__)

@videos_routes.route('/', methods=['GET'])
def get_videos():
  videos = Video.query.all()
  videos = [ item.to_dict() for item in videos ]
  return {'videos': videos}


@videos_routes.route('/', methods=['POST'])
@login_required
def add_video():
  form = AddVideoForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  user = current_user

  id = user.id

  if form.validate_on_submit():
    video = Video(
      userId = id,
      title=form.data['title'],
      videoUrl=form.data['videoUrl'],
      description=form.data['description'],
      imgUrl=form.data['imgUrl']
    )

    db.session.add(video)
    db.session.commit()
    return video.to_dict()
  return form.errors


@videos_routes.route('/', methods=['DELETE'])
@login_required
def delete_video():
  data = request.json['video']
  id = data['id']

  video = Video.query.get(id)
  db.session.delete(video)
  db.session.commit()
  
  return{'message': "success"}


@videos_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_video(id):
  form = EditVideoForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  video = Video.query.get(id)
  print("!!!! VIDEO !!!", video.to_dict())

  if form.validate_on_submit():
    video.title = form.data['title']
    video.imgUrl = form.data['imgUrl']
    video.description = form.data['description']
    
    db.session.commit()
    print("!!!! VIDEO !!!", video)
    return video.to_dict()

  return form.errors



  return {"message": "teehee"}
