
function start() {

    let res_msg = document.createElement('div');
    res_msg.innerHTML = "Hello myself Animade Bot, How can I help you?";
    res_msg.setAttribute("class", "left");

    document.getElementById('msg-area').appendChild(res_msg);

}


document.getElementById("send").addEventListener("click", async (e) =>
{
    e.preventDefault();
    var req = document.getElementById('text').value;

    if (req == undefined || req == "") {
        console.log("Connection Error");
    } else {
        let res = "";

        await axios.get('https://api.monkedev.com/fun/chat?msg=${req}').then(data => {
            res = JSON.stringify(data.data.response)
            console.log(res);
        })

        let msg_req = document.createElement('div');
        let msg_res = document.createElement('div');

        let Con1 = document.createElement('div');
        let Con2 = document.createElement('div');

        Con1.setAttribute("class", "msgCon1");
        Con2.setAttribute("class", "msgCon2");

        msg_req.innerHTML = req;
        msg_res.innerHTML = res;

        msg_req.setAttribute("class", "right");
        msg_res.setAttribute("class", "left");

        let message = document.getElementById('msg-area');

        message.appendChild(Con1);
        message.appendChild(Con2);

        Con1.appendChild(msg_req);
        Con2.appendChild(msg_res);

        document.getElementById('text').value = "";

    }
});