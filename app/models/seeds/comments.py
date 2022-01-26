from app.models import db, Comment

def seed_comments():
    demoComment1 = Comment(
        userId=1, videoId=1, comment='this scene always gives me chills'  )
    demoComment2 = Comment(
        userId=2, videoId=1, comment='oikawa got robbed'  )
    demoComment3 = Comment(
        userId=2, videoId=1, comment='is it just me or is sugawara not the clutches ever?'  )

    db.session.add(demoComment1)
    db.session.add(demoComment2)
    db.session.add(demoComment3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
