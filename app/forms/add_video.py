from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired

class AddVideoForm(FlaskForm):
  title = StringField('Title', validators=[DataRequired()])
  videoUrl = StringField('VideoUrl', validators=[DataRequired()])
  description = TextAreaField('Description')
  imgUrl = StringField('ImgUrl')
