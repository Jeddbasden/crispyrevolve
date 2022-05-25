from app.models import db, Video

def seed_videos():
  demo_video1 = Video(
    userId=1,
    title="Haikyu hype moment",
    videoUrl="https://www.youtube.com/watch?v=QArog-oWuDk",
    description="Final point of Karasuno vs Aoba Johsai, really long point with both teams fighting hard but Karasuno comes out on top! follow my twitch",
    imgUrl="https://i.ytimg.com/vi/8zYkNXMTESw/maxresdefault.jpg"
  )

  demo_video2 = Video(
    userId=1,
    title='Manipulation at its finest	',
    videoUrl='https://www.youtube.com/watch?v=wN2W8zpr7hc',
    description="eren convinces greisha to slaughter a family",
    imgUrl="https://i.ytimg.com/vi/y3DOWGm1X7M/maxresdefault.jpg"
  )

  demo_video4 = Video(
    userId=1,
    title= 'Nomad(Megalo Boxing) new season trailer',
    videoUrl='https://www.youtube.com/watch?v=kHBlVtrtjck',
    description="gearless joe is back!",
    imgUrl="https://cdn.epicstream.com/assets/uploads/newscover/1618504912maxresdefault_(5).jpg"
  )

  db.session.add(demo_video1)
  db.session.add(demo_video2)
  db.session.add(demo_video3)
  db.session.add(demo_video4)

  db.session.commit()


def undo_videos():
    db.session.execute('TRUNCATE videos RESTART IDENTITY CASCADE;')
    db.session.commit()
