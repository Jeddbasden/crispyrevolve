from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profileImg='https://i.pinimg.com/originals/0f/32/77/0f3277946d3ef6c932ddd1dd3bd2b03e.jpg', backgroundImg='https://images4.alphacoders.com/115/thumb-1920-115716.jpg')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', profileImg='https://i.pinimg.com/originals/c0/f6/24/c0f624b83f0f21a109215cd5b91718cf.jpg', backgroundImg='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LJClr6jtFhiISD7fdyviLwHaFj%26pid%3DApi&f=1')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', profileImg='https://i.pinimg.com/originals/e8/1b/4e/e81b4ee6f7de47b027c10ef5d3c37416.jpg', backgroundImg='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FweHHZzQIykR-eb3d_WHZgHaFj%26pi')
    noProfile = User(
        username='jared', email='jared@aa.io', password='password', profileImg='https://static.vecteezy.com/system/resources/previews/000/573/503/original/vector-sign-of-user-icon.jpg', backgroundImg='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tE_V9bky0Z8wMIvLMxRY4AHaEK%26pid%3DApi&f=1')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(noProfile)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
