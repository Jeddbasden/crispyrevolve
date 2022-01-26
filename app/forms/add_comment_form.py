from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class AddCommentForm(FlaskForm):
  comment = StringField('comment', validators=[DataRequired()] )
