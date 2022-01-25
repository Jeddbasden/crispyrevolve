from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, SubmitField
from wtforms.validators import DataRequired

class EditVideoForm(FlaskForm):
  title = StringField('title', validators=[DataRequired()])
  description = TextAreaField('description')
  imgUrl = StringField('imgUrl')
  submit = SubmitField('submit')
