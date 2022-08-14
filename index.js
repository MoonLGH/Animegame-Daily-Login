import fetch from "node-fetch"
import "dotenv/config"

const cookie = process.env.cookies
const actid = 'e202102251931481';
async function gett(){
    let url = "https://sg-hk4e-api.hoyolab.com/event/sol/sign"
    let res = await fetch(url,{
        method: 'POST',
        headers: {
            'Cookie': cookie
        },
        body: JSON.stringify({"act_id":actid})
    })

    console.log((await res.json()))
    console.log("CLAIMED",(await checkReward()).name)
    console.log("ON",(await checkReward()).created_at)
}

async function checkReward(){
    let res = await fetch(`https://hk4e-api-os.mihoyo.com/event/sol/award?current_page=1&lang=en-us&page_size=10&act_id=${actid}`, {
        headers: {
            'Cookie': cookie
        }
    })
    const reward = await res.json()
    return reward.data.list[0]
}

gett()