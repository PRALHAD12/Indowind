# Indowind

A open source multipurpose Discord bot with 100+ commands including Fun, Games, Moderation, Search, Levelling, Utility, and more.

**Made by Pralhad**

---

## Features

- Prefix commands & Slash commands
- MongoDB database integration
- XP & Levelling system with rank cards
- Welcome system
- Chat bot
- Anti-crash handler
- HTTP uptime server on port 8080

---

## Requirements

- Node.js `18.x`
- MongoDB URI
- Discord Bot Token

---

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in the values:
   ```env
   TOKEN=your_bot_token
   MONGO=your_mongodb_uri
   OWNERID=your_discord_user_id
   PREFIX=!!
   ```
4. Start the bot:
   ```bash
   npm start
   ```

---

## Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the bot |
| `npm run dev` | Start with nodemon (auto-restart) |
| `npm run shard` | Start with sharding |
| `npm run format` | Format code with Prettier |

---

## Commands

### ⚙️ Config
| Command | Description |
|---------|-------------|
| `prefix` | Set a custom prefix for the server |
| `resetPrefix` | Reset prefix to default |

### 😅 Fun
| Command | Aliases | Description |
|---------|---------|-------------|
| `8ball` | — | Ask a question and get a magic 8ball answer |
| `anime` | `anime-search`, `search-anime` | Search anime details from MyAnimeList |
| `doublestruck` | — | Convert text to doublestruck font |
| `drake` | — | Generate a Drake meme |
| `hug` | — | Hug a user |
| `kiss` | — | Kiss a user |
| `manga` | — | Search manga details |
| `meems` | — | Get a random meme |
| `pat` | — | Pat a user |
| `pika` | — | Generate a Pikachu meme |
| `pooh` | — | Generate a Pooh meme |
| `tweet` | — | Generate a fake tweet |

### 🎮 Games
| Command | Aliases | Description |
|---------|---------|-------------|
| `akinator` | `aki` | Play Akinator |
| `fishingTogether` | — | Start a Fishing Together activity |
| `snake` | — | Play Snake game |

### 📫 Guild
| Command | Description |
|---------|-------------|
| `channelInfo` | Get info about a channel |
| `clearMessage` | Bulk delete messages |
| `emojis` | List server emojis |
| `nukeChannel` | Nuke a channel |
| `roleInfo` | Get info about a role |
| `serverInfo` | Get server information |

### ℹ️ Info
| Command | Aliases | Description |
|---------|---------|-------------|
| `botStatus` | — | View bot status and stats |
| `help` | `h` | Show help menu with all categories |
| `invite` | — | Get bot invite link |
| `ownerInfo` | — | View bot owner info |
| `ping` | — | Check bot latency |
| `uptime` | — | Check bot uptime |

### ⏫ Levelling
| Command | Description |
|---------|-------------|
| `rank` | View your XP rank card |
| `leaderboard` | View server XP leaderboard |

### ⚒️ Moderation
| Command | Aliases | Description |
|---------|---------|-------------|
| `ban` | `bonk` | Ban a member from the server |
| `kick` | — | Kick a member from the server |
| `lockdown` | — | Lock a channel |
| `slowmode` | — | Set slowmode on a channel |
| `unban` | — | Unban a user |

### 👑 Owner
| Command | Description |
|---------|-------------|
| `eval` | Evaluate JavaScript code |
| `restart` | Restart the bot |
| `terminal` | Run terminal commands |

### 🔍 Search
| Command | Aliases | Description |
|---------|---------|-------------|
| `anime-search` | — | Search anime info |
| `covid` | — | Get COVID-19 stats |
| `github` | `gh` | Get GitHub user info |
| `maps` | — | Search Google Maps |
| `npm` | — | Search npm packages |
| `urban-dictionary` | — | Search Urban Dictionary |
| `weather` | — | Get weather info |
| `wikipedia` | — | Search Wikipedia |
| `youtube-search` | — | Search YouTube videos |

### 👤 User
| Command | Description |
|---------|-------------|
| `avatar` | Get a user's avatar |
| `banner` | Get a user's banner |
| `check-perms` | Check a user's permissions |
| `userinfo` | Get detailed user info |

### 📀 Utility
| Command | Aliases | Description |
|---------|---------|-------------|
| `chat` | `cht` | Chat with the bot (AI chatbot) |
| `emojify` | — | Convert text to emojis |
| `remindme` | — | Set a reminder |
| `say` | — | Make the bot say something |
| `sourcebin` | — | Upload code to Sourcebin |
| `youtube-together` | — | Start a YouTube Together activity |

### 👋 Welcoming
| Command | Description |
|---------|-------------|
| `setChannel` | Set the welcome channel |
| `checkChannel` | Check the current welcome channel |
| `removeChannel` | Remove the welcome channel |

### 🔧 Developer
| Command | Description |
|---------|-------------|
| `report` | Report a bug |
| `suggest` | Suggest a feature |
| `support` | Get support server link |

---

## Slash Commands

All major commands are also available as slash commands (`/command`), including:
- Config: `set-prefix`, `reset-prefix`
- Fun: `8ball`, `anime`, `drake`, `hug`, `kiss`, `tweet`, and more
- Moderation: `ban`, `kick`, `lockdown`, `slowmode`, `unban`
- Search: `github`, `weather`, `wikipedia`, `urban-dictionary`, `maps`
- User: `avatar`, `banner`, `userinfo`, `check-perms`
- Utility: `emojify`, `remindme`, `say`, `translate`
- Levelling: `rank`, `leaderboard`
- Welcoming: `setChannel`, `checkChannel`, `removeChannel`
- Context Menus: `get-avatar`, `get-content`

---

## Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| `discord.js` | 13.14.0 | Discord API wrapper |
| `mongoose` | 6.9.0 | MongoDB ODM |
| `canvacord` | 5.4.8 | Rank card generation |
| `discord-xp` | 1.1.16 | XP & levelling system |
| `discord-together` | 1.3.31 | Discord activities |
| `axios` | 0.27.2 | HTTP requests |
| `node-fetch` | 2.6.9 | HTTP requests |
| `moment` | 2.29.4 | Date formatting |
| `ms` | 2.1.3 | Time parsing |
| `colors` | 1.4.0 | Console colors |
| `dotenv` | 16.0.3 | Environment variables |

---

invite bot to your server
## License

MIT
