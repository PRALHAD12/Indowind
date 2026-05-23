const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'Pralhad~',
    description: '',
    emoji: '👑',
    userperm: ['ADMINISTRATOR'],
    botperm: [' ADMINISTRATOR'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const owner = client.users.cache.get(process.env.OWNERID);
        const embed1 = new MessageEmbed()
            .setTitle(`👑 Owner Info`)
            .setThumbnail(owner.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: 'Name', value: Process.env.OWNERNAME },
                { name: 'Discord tag', value: Process.env.OWNERTAG },
                { name: 'Working on', value: 'Bot development, Maintenance, Code Reviewers' },
                { name: 'Server', value: '[Join Now](https://dsc.gg/uoaio)' }
            )
            .setColor(owner.hexAccentColor);
        message.channel.send({ embeds: [embed1] });
    },
};
