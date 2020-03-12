const router = require('express').Router();
const axios = require('axios');

router.post("/github/create", (req, res)=> {
    let token = req.body.token;
    
    axios({
        method: 'post',
        url: `https://api.github.com/user/repos`,
        headers: {
            "Authorization": `token ${token}`
        },
        data: {
            "name": req.body.data1,
            "private": false,
            "auto_init": true
        }
    }).then((resp)=> {
        console.log(resp);
        
        res.send(`Success: ${req.body.data1} created`);
    }).catch((err) => {
        console.log(err);
        res.status(400).send("Error")
    })
});

router.post("/github/invit", (req, res)=> {
    let token = req.body.token;
    axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
            "Authorization": `token ${token}`
        },
    }).then((resp)=> {
        let murl = `https://api.github.com/repos/${resp.data.login}/${req.body.data1}/collaborators/${req.body.data2}`;
        axios({
            method: 'put',
            url: murl,
            headers: {
                "Authorization": `token ${token}`
            }
        })
        .then((resp)=>{
            console.log(resp);
            res.send(`Success: ${req.body.data2} invited to ${req.body.data1}`);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).send("Error")
            
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send("Error")
    })
});

router.post("/github/kick", (req, res)=> {
    let token = req.body.token;
    axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
            "Authorization": `token ${token}`
        },
    }).then((resp)=> {
        let murl = `https://api.github.com/repos/${resp.data.login}/${req.body.repo}/collaborators/${req.body.user}`;
        axios({
            method: 'delete',
            url: murl,
            headers: {
                "Authorization": `token ${token}`
            }
        })
        .then((resp)=>{
            console.log(resp);
            res.send(`Success: ${req.body.user} kicked of ${req.body.repo}`);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).send("Error")
            
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send("Error")
    })
});

router.post("/github/delete", (req, res)=> {
    let token = req.body.token;
    axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
            "Authorization": `token ${token}`
        },
    }).then((resp)=> {
        let murl = `https://api.github.com/repos/${resp.data.login}/${req.body.repo}`;
        axios({
            method: 'delete',
            url: murl,
            headers: {
                "Authorization": `token ${token}`
            }
        })
        .then((resp)=>{
            console.log(resp);
            res.send(`Success: ${req.body.repo} deleted`);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).send("Error")
            
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send("Error")
    })
});

router.post("/github/transfer", (req, res)=> {
    let token = req.body.token;
    axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
            "Authorization": `token ${token}`
        },
    }).then((resp)=> {
        let murl = `https://api.github.com/repos/${resp.data.login}/${req.body.repo}/transfer`;
        axios({
            method: 'post',
            url: murl,
            headers: {
                "Authorization": `token ${token}`
            },
            data: {
                "new_owner": req.body.user
            }
        })
        .then((resp)=>{
            console.log(resp);
            res.send(`Success: ${req.body.repo} deleted`);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).send("Error")
            
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send("Error")
    })
});


module.exports = router;
