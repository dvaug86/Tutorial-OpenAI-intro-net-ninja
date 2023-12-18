const openai = require('../config/openaiConfig')

const generateMeta = async (title) => {
    const description = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'user',
                content: `Come up with a description for a YouTube video called ${title}`
            }
        ],
        //tokens are letters, characters, spaces, etc
        max_tokens: 100
    })

    console.log(description.data.choices[0].message)
}

module.exports = { generateMeta }