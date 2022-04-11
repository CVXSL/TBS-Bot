const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.14")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('update001')
        .setDescription('Update #001'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #001')
        .setDescription('**April 6, 2022**\n\n> Hello,\n> We\'ve released our first game update for The Backrooms: Survival. This update mainly fixes lots of bugs reported within the first week by our players. We aim to iron out bugs and polish the game first to build a smoother, more solid foundation before shifting our focus to new content.\n\n-Fixed lighting bug on the "Hedge maze" theme floor\n-Fixed lanterns/candles not lighting up the ground, but walls only\n-Main menu/UI sounds can be adjusted individually with their own sound slider\n-Candles and Lanterns last slightly longer and are slightly brighter\n-Fixed candle item floating above the ground\n-Fixed graphical glitches with some wall graffiti\n-Inventory controls are shown on the inventory top corner as there has been some confusion\n-Fixed "store/remove" showing on some items as these were scrapped functions (replaced by drop) and shouldn\'t have been showing\n-Fixed a bug where you could pick up items through the walls/obstacles etc\n-Fixed water leaks still appearing in levels with no ceiling\n-Small keys are now easier to pick up as collecting them has been quite buggy\n-Fixed a bug where the players head can be seen when crouching and looking up\n-Fixed caffeine pill not disappearing from inventory when used\n-Drinking ceiling leak increases the "Fluids Drank" statistic on the game over report\n-Fixed clown entity texture appearing all white on some GPUs\n-Fixed a bug preventing you from dropping sanity pills\n-Fixed a bug where the telephone continues to play the phone ringing clip once picked up\n-Fixed a bug where the circus ambiance music continues to play on death when returning to the main menu\n-Fixed some text typos\n-Fixed a saving bug that could sometimes occur corrupting quicksaves and preventing you from leaving to the main menu\n-cave level theme is slightly brighter as it was far too dark in some levels\n-Settings are saved and reloaded\n-Other smaller fixes (graphical glitches, stuttering, etc)')
        // .setDescription('*We do not have any change logs available!*')
        .setFooter(`Update: ${update} ${updateInfo}`)
        interaction.reply({ embeds: [embed] })
    }
};