const express = require('express');
const fs = require('fs');
const app = express();

//readFile
let questionOne = [];
let questionTwo = [];
let questionThree = [];
let questionFour = [];
let questionFive = [];
let questionSix = [];
let questionSeven = [];
let questionEight = [];
let questionNine = [];
let questionTen = [];

fs.readFile('questionOne.json', async (err, data) => {
    events = await JSON.parse(data); 
});

fs.readFile('questionTwo.json', async (err, data) => {
    students = await JSON.parse(data);
});

fs.readFile('questionThree.json', async (err, data) => {
    events = await JSON.parse(data); 
});

fs.readFile('questionFour.json', async (err, data) => {
    students = await JSON.parse(data);
});

fs.readFile('questionFive.json', async (err, data) => {
    events = await JSON.parse(data); 
});

fs.readFile('questionSix.json', async (err, data) => {
    students = await JSON.parse(data);
});

fs.readFile('questionSeven.json', async (err, data) => {
    events = await JSON.parse(data); 
});

fs.readFile('questionEight.json', async (err, data) => {
    students = await JSON.parse(data);
});

fs.readFile('questionNine.json', async (err, data) => {
    events = await JSON.parse(data); 
});

fs.readFile('questionTen.json', async (err, data) => {
    students = await JSON.parse(data);
});

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Your Opinion Matters!');
});

app.post('/answer', (req, res) => {
    //have method calculate the average
    //have the method put the average into a percentage
    //show the percentage to the user
    let data1 = {
        a: a,
        b: b,
        c: c,
        d: d
    };
    
    res.send(data); 
    if (req.body.question1 == "a") {
        a += 1;
    }
    
    if (req.body.question1 == "b") {
        b += 1;
    }
    
    if (req.body.question1 == "c") {
        c += 1;
    }
    
    if (req.body.question1 == "d") {
        d += 1;
    }
    
    console.log(req.body.question1);
    
    //have method calculate the average
    //have the method put the average into a percentage
    //show the percentage to the user
    let data2 = {
        e: e,
        f: f,
        g: g,
        h: h
    };
    
    res.send(data); 
    if (req.body.question2 == "e") {
        e += 1;
    }
    
    if (req.body.question2 == "f") {
        f += 1;
    }
    
    if (req.body.question2 == "g") {
        g += 1;
    }
    
    if (req.body.question2 == "h") {
        h += 1;
    }
    
    console.log(req.body.question2);
    
    //have method calculate the average
    //have the method put the average into a percentage
    //show the percentage to the user
    let data3 = {
        i: i,
        j: j,
        k: k,
        l: l
    };
    
    res.send(data); 
    if (req.body.question3 == "i") {
        i += 1;
    }
    
    if (req.body.question3 == "j") {
        j += 1;
    }
    
    if (req.body.question3 == "k") {
        k += 1;
    }
    
    if (req.body.question3 == "l") {
        l += 1;
    }
    
    console.log(req.body.question3);
    
    //have method calculate the average
    //have the method put the average into a percentage
    //show the percentage to the user
    let data4 = {
        m: m,
        n: n,
        o: o,
        p: p
    };
    
    res.send(data); 
    if (req.body.question4 == "m") {
        m += 1;
    }
    
    if (req.body.question4 == "n") {
        n += 1;
    }
    
    if (req.body.question4 == "o") {
        o += 1;
    }
    
    if (req.body.question4 == "p") {
        p += 1;
    }
    
    console.log(req.body.question4);
    
    //have method calculate the average
    //have the method put the average into a percentage
    //show the percentage to the user
    let data5 = {
        q: q,
        r: r,
        s: s,
        t: t
    };
    
    res.send(data); 
    if (req.body.question5 == "q") {
        q += 1;
    }
    
    if (req.body.question5 == "r") {
        r += 1;
    }
    
    if (req.body.question5 == "s") {
        s += 1;
    }
    
    if (req.body.question5 == "t") {
        t += 1;
    }
    
    console.log(req.body.question5);
    
    //have method calculate the average
    //have the method put the average into a percentage
    //show the percentage to the user
    let data6 = {
        u: u,
        v: v,
        w: w,
        x: x
    };
    
    res.send(data); 
    if (req.body.question6 == "u") {
        u += 1;
    }
    
    if (req.body.question6 == "v") {
        v += 1;
    }
    
    if (req.body.question6 == "w") {
        w += 1;
    }
    
    if (req.body.question6 == "x") {
        x += 1;
    }
    
    console.log(req.body.question6);
    
    //have method calculate the average
    //have the method put the average into a percentage
    //show the percentage to the user
    let data7 = {
        y: y,
        z: z,
        ab: ab,
        ac: ac
    };
    
    res.send(data); 
    if (req.body.question7 == "y") {
        y += 1;
    }
    
    if (req.body.question7 == "z") {
        z += 1;
    }
    
    if (req.body.question7 == "ab") {
        ab += 1;
    }
    
    if (req.body.question7 == "ac") {
        ac += 1;
    }
    
    console.log(req.body.question7);
    
    //have method calculate the average
    //have the method put the average into a percentage
    //show the percentage to the user
    let data8 = {
        ad: ad,
        ae: ae,
        af: af,
        ag: ag
    };
    
    res.send(data); 
    if (req.body.question8 == "ad") {
        ad += 1;
    }
    
    if (req.body.question8 == "ae") {
        ae += 1;
    }
    
    if (req.body.question8 == "af") {
        af += 1;
    }
    
    if (req.body.question8 == "ag") {
        ag += 1;
    }
    
    console.log(req.body.question8);
    
    //have method calculate the average
    //have the method put the average into a percentage
    //show the percentage to the user
    let data9 = {
        ah: ah,
        ai: ai,
        aj: aj,
        ak: ak
    };
    
    res.send(data); 
    if (req.body.question9 == "ah") {
        ah += 1;
    }
    
    if (req.body.question9 == "ai") {
        ai += 1;
    }
    
    if (req.body.question9 == "aj") {
        aj += 1;
    }
    
    if (req.body.question9 == "ak") {
        ak += 1;
    }
    
    console.log(req.body.question9);
    
    //have method calculate the average
    //have the method put the average into a percentage
    //show the percentage to the user
    let data10 = {
        al: al,
        am: am,
        an: an,
        ao: ao
    };
    
    res.send(data); 
    if (req.body.question10 == "al") {
        al += 1;
    }
    
    if (req.body.question10 == "am") {
        am += 1;
    }
    
    if (req.body.question10 == "an") {
        an += 1;
    }
    
    if (req.body.question10 == "ao") {
        ao += 1;
    }
    
    console.log(req.body.question10);
});
    
app.listen(3000, () => {
    console.log('Server started...');
});
