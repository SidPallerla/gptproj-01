const API_KEY = "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"
const searchBar = document.getElementById('#input');
const output = document.querySelector("#chat-container")


async function getMessage() {
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
    }
        
    body: JSON.stringify({
        model : "gpt-4",
        messages:[{role:'user', content: searchBar}],
        max_tokens: 100
    })

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions" , options)
        const data = await response.json()
        console.log(data)
        output.textContent = data.choices[0].message.content 
    } catch (error) {
        console.error()
    }
    
}
async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4-turbo",
            messages: [
                {
                    role: "user",
                    content: "Hi!"
                },
                {
                    role: "user",
                    content: "howdy!"
                }
        ]
        })
    })
    const data = await response.json()
    console.log(data)
}

searchBar.addEventListener('input', function(event) {
    const inputValue = event.target.value;
    console.log(inputValue); 
  });

fetchData()