const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents })
const { MessageButton } = require("discord.js")
client.login('')

const prefix = 'lk!';

client.on("ready", () => {
    console.clear()
    console.log(`awdawdawdawdawdawdawdawdawdawdawdawd`)
})

client.on("messageCreate", message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.content.startsWith(prefix + 'font')){
        message.delete()
        let font_company = args[1];
        let font_name = args[2];
        let font_weight = args[3];

        if(!font_company) return message.channel.send(`${message.author}, Please enter font company name (aaa / fm).`).then((sent) => {setTimeout(() => {sent.delete()}, 5000)});

        if(font_company != 'aaa' && font_company != 'fm') return message.channel.send(`${message.author}, You choose wrong font company, try again.`).then((sent) => {setTimeout(() => {sent.delete()}, 5000)});

        if(!font_name) return message.channel.send(`${message.author}, Please enter font style.`).then((sent) => {setTimeout(() => {sent.delete()}, 5000)});

        if(!font_weight) return message.channel.send(`${message.author}, Please enter font weight.`).then((sent) => {setTimeout(() => {sent.delete()}, 5000)});

        const embed1 = new Discord.MessageEmbed()
        embed1.setColor("#0000ff")
        embed1.setAuthor(`Font Stoler System`)
        embed1.setDescription(`We steel the font for you`)
        embed1.setFooter(`we steel font for you at`)
        embed1.setTimestamp()
        embed1.addFields(
            { name: 'Font Company', value: `${font_company}`, inline: true},
            { name: 'Font Style', value: `${font_name}`, inline: true},
            { name: 'Font Weight', value: `${font_weight}`, inline: true},
        )

        if(font_company == 'aaa'){
            const button = new Discord.MessageActionRow().addComponents([
                new MessageButton()
                    .setURL(`https://alefalefalef.co.il/wp-content/fonts/${font_name}/${font_name}-${font_weight}-aaa.woff2`)
                    .setStyle("LINK")
                    .setLabel("Click To Download The Font")
            ])
            message.channel.send({ embeds: [embed1], components: [button] })
        } else if(font_company == 'fm'){
            const button = new Discord.MessageActionRow().addComponents([
                new MessageButton()
                    .setURL(`https://fontimonim.co.il/wp-content/fonts/${font_name}/${font_name}-${font_weight}-fm.woff2`)
                    .setStyle("LINK")
                    .setLabel("Click To Download The Font")
            ])
            message.channel.send({ embeds: [embed1], components: [button] })
        }
    }
})