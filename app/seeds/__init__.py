from flask.cli import AppGroup
from .users import seed_users, undo_users
from .videos import seed_videos, undo_videos
from .polls import seed_polls, undo_polls

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_videos()
    seed_polls()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_videos()
    undo_polls()
    # Add other undo functions here
