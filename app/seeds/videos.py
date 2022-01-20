from app.models import db, Video

def seed_videos():
  demo_video1 = Video(
    userId=1,
    title="Haikyu hype moment",
    videoUrl="https://www.youtube.com/watch?v=QArog-oWuDk",
    description="Final point of Karasuno vs Aoba Johsai, really long point wiht both teams fighting hard but karasuno comes out on top! follow my twitch",
    imgUrl="https://i.ytimg.com/vi/8zYkNXMTESw/maxresdefault.jpg"
  )

  demo_video2 = Video(
    userId=1,
    title='Luffy punches Celestial Dragon',
    videoUrl='https://www.youtube.com/watch?v=8ot2QJuJNxI',
    imgUrl="https://i.ytimg.com/vi/kMU6ZJf1lcY/maxresdefault.jpg"
  )

  demo_video3 = Video(
    userId=1,
    title="Rengoku Ninth Form",
    videoUrl="https://www.youtube.com/watch?v=Z3Ziz9jQc8Q",
    description=" Rengoku uses his 9th breathing form and pops off",
    imgUrl="https://i.ytimg.com/vi/_vwZeGV3deI/maxresdefault.jpg"
  )

  demo_video4 = Video(
    userId=1,
    title= 'Nomad(Megalo Boxing) new season trailer',
    videoUrl='https://www.youtube.com/watch?v=kHBlVtrtjck',
    description="gearless joe is back!"
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
