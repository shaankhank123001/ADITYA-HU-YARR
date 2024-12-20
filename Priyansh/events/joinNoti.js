module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "CatalizCS", //fixing ken gusler
        description: "Notify bot or group member with random gif/photo/video",
        dependencies: {
                "fs-extra": "",
                "path": "",
                "pidusage": ""
        }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

        const path = join(__dirname, "cache", "joinGif");
        if (existsSync(path)) mkdirSync(path, { recursive: true });        

        const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
        const { join } = global.nodemodule["path"];
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                const fs = require("fs");
                return api.sendMessage("Hello Everyone 🙋🙋", event.threadID, () => api.sendMessage({body:`🌺 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🌺 CONNECTED«

==𝐎𝐰𝐧𝐞𝐫 ➻  🥀  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🥀
<------------------------>  
BOT CONNECTED SUCCESFU !!! 

APPROVAL ALLOW IN THIS GROUP!!!
<--------------------->

USE HELP TO SEE COMMAND 
\n\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}video7 (video songs)\n${global.config.PREFIX}music (audio songs)\n${global.config.PREFIX}help2 (command list)\n${global.config.PREFIX}info 
<<<<<---------------->>>>>
𝐊𝐢𝐬𝐢 𝐁𝐡𝐢 𝐓𝐚𝐇𝐚𝐫𝐚 𝐊𝐢 𝐇𝐞𝐥𝐩 𝐋𝐚𝐧𝐢 𝐇𝐨 𝐌𝐞𝐒𝐒𝐠 𝐊𝐚𝐑𝐞 𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮

< 𝐎𝐖𝐍𝐄𝐑 >:  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮

< 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 > : 

https://www.facebook.com/aadi.babu123

< 𝐘𝐎𝐔 𝐓𝐔𝐁𝐄  > : N/A

< 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 > : 

https://www.instagram.com/aadi_singh__143

< 𝐄𝐌𝐀𝐈𝐋 > : aadisingh5245@gmail.com 👍`, attachment: fs.createReadStream(__dirname + "/cache/DhFHY1LcrjWZwBRkMlrtOdHr7QOeiGFMZqBGa4AEErRO.mp4")} ,threadID));
        }
        else {
                try {
                        const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};
                        const path = join(__dirname, "cache", "joinGif");
                        const pathGif = join(path, `${threadID}.gif`);

                        var mentions = [], nameArray = [], memLength = [], i = 0;

                        for (id in event.logMessageData.addedParticipants) {
                                const userName = event.logMessageData.addedParticipants[id].fullName;
                                nameArray.push(userName);
                                mentions.push({ tag: userName, id });
                                memLength.push(participantIDs.length - i++);
                        }
                        memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐀𝐀𝐃𝐈 𝐁𝐀𝐁𝐔 𝐁𝐎𝐓\n\n──────────────────────\n\n𝐇𝐞𝐥𝐥𝐎 𝐁𝐚𝐁𝐮\n\n──────────────────────\n\n🆆🅴🅻🅻 🅲🅾🅼🅴\n\n────────────────────── [   {name} ]\n\n──────────────────────\n\n𝐌𝐲 𝐆𝐫𝐨𝐮𝐏\n\n{threadName}\n\n𝐇𝐚𝐩𝐩𝐘 𝐄𝐧𝐣𝐨𝐘\n\n──────────────────────\n\n𝐎𝐑 𝐓𝐔𝐌 𝐈𝐒 𝐆𝐫𝐨𝐮𝐏 𝐊𝐞  {soThanhVien} 𝐌𝐞𝐦𝐁𝐚𝐑 𝐇𝐨 𝐄𝐧𝐣𝐨𝐘 𝐊𝐚𝐑𝐨 𝐌𝐞𝐬𝐓𝐢 𝐊𝐚𝐑𝐨 [ # ]\n──────────────────────\n\n𝐎𝐰𝐧𝐞𝐑 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮\n──────────────────────" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{name}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);

                        if (existsSync(path)) mkdirSync(path, { recursive: true });

                        const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

                        if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
                        else if (randomPath.length != 0) {
                                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
                        }
                        else formPush = { body: msg, mentions }

                        return api.sendMessage(formPush, threadID);
                } catch (e) { return console.log(e) };
        }
                    }
