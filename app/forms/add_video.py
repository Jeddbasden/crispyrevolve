from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired

class AddVideoForm(FlaskForm):
  title = StringField('title', validators=[DataRequired()])
  videoUrl = StringField('videoUrl', validators=[DataRequired()])
  description = TextAreaField('description')
  imgUrl = StringField('imgUrl')
