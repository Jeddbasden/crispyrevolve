from flask import Blueprint, request
from flask_login import current_user, login_required


from app.models import Video, db
from app.forms import AddVideoForm

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
