from flask import Blueprint
from app.models import Video

videos_routes = Blueprint('videos', __name__)

@videos_routes.route('/')
def get_videos():
  videos = Video.query.all()
  videos = [ item.to_dict() for item in videos ]
  return {'videos': videos}
