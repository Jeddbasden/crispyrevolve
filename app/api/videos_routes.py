from flask import Blueprint
from flask_login import current_user, login_required

from app.models import Video
from app.forms import AddVideoForm

videos_routes = Blueprint('videos', __name__)

@videos_routes.route('/', methods=['GET'])
def get_videos():
  videos = Video.query.all()
  videos = [ item.to_dict() for item in videos ]
  return {'videos': videos}


@videos_routes.route('/add', methods=['POST'])
@login_required
def add_video():
  form = AddVideoForm()
  form['csrf_token'].date = request.cookies['csrf_token']
  user = session.get('user')
  print("!!!!!! USER !!!!!!", user)
  id = user.id
  print("!!!!!! USERID !!!!!!", id)
  # if form.validate_on_submit():
  #   video = Video(
  #     userId = 
  #     title=form.data['title']
  #     title=form.data['title']
  #     title=form.data['title']
  #     title=form.data['title']
  #   )
  
  return {'videos': videos}
