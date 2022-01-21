from app.models import db, Poll

def seed_polls():
  demo_poll1 = Poll(
    userId=1,
    videoId=1,
    question='who wins the rematch?',
    choiceOne='Karasuno',
    choiceTwo='Aoba Johsai',
    totalVoted=3
  )

  demo_poll2 = Poll(
    userId=2,
    videoId=1,
    question='who had the best save?',
    choiceOne='Tanaka',
    choiceTwo='Oikawa',
    choiceThree='Suguwara',
    choiceFour='The Mad Dog',
    totalVoted=2
  )

  db.session.add(demo_poll1)
  db.session.add(demo_poll2)
  db.session.commit()


def undo_polls():
  db.session.execute('TRUNCATE polls RESTART IDENTITY CASCADE;')
  db.session.commit()
