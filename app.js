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
let choice1 = 0;        //a
let choice2 = 0;        //b
let choice3 = 0;        //c
let choice4 = 0;        //d
let choice5 = 0;        //e
let choice6 = 0;        //f
let choice7 = 0;        //g
let choice8 = 0;        //h
let choice9 = 0;        //i
let choice10 = 0;       //j
let choice11 = 0;       //k
let choice12 = 0;       //l
let choice13 = 0;       //m
let choice14 = 0;       //n
let choice15 = 0;       //o
let choice16 = 0;       //p
let choice17 = 0;       //q
let choice18 = 0;       //r
let choice19 = 0;       //s
let choice20 = 0;       //t
let choice21 = 0;       //u
let choice22 = 0;       //v
let choice23 = 0;       //w
let choice24 = 0;       //x
let choice25 = 0;       //y
let choice26 = 0;       //z
let choice27 = 0;       //ab
let choice28 = 0;       //ac
let choice29 = 0;       //ad
let choice30 = 0;       //ae
let choice31 = 0;       //af
let choice32 = 0;       //ag
let choice33 = 0;       //ah
let choice34 = 0;       //ai
let choice35 = 0;       //aj
let choice36 = 0;       //ak
let choice37 = 0;       //al
let choice38 = 0;       //am
let choice39 = 0;       //an
let choice40 = 0;       //ao

fs.readFile('questionOne.json', async (err, data) => {
    questionOne = await JSON.parse(data); 
});

fs.readFile('questionTwo.json', async (err, data) => {
    questionTwo = await JSON.parse(data);
});

fs.readFile('questionThree.json', async (err, data) => {
    questionThree = await JSON.parse(data); 
});

fs.readFile('questionFour.json', async (err, data) => {
    questionFour = await JSON.parse(data);
});

fs.readFile('questionFive.json', async (err, data) => {
    questionFive = await JSON.parse(data); 
});

fs.readFile('questionSix.json', async (err, data) => {
    questionSix = await JSON.parse(data);
});

fs.readFile('questionSeven.json', async (err, data) => {
    questionSeven = await JSON.parse(data); 
});

fs.readFile('questionEight.json', async (err, data) => {
    questionEight = await JSON.parse(data);
});

fs.readFile('questionNine.json', async (err, data) => {
    questionNine = await JSON.parse(data); 
});

fs.readFile('questionTen.json', async (err, data) => {
    questionTen = await JSON.parse(data);
});

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Your Opinion Matters!');
});

app.post('/answer', (req, res) => {
    //if a == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if b == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if c == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if d == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    let data1 = {
        a: a,
        b: b,
        c: c,
        d: d
    };
    
    res.send(data); 
    if (req.body.question1 == "a") {
        choice1 += 1;
    }
    
    if (req.body.question1 == "b") {
        choice2 += 1;
    }
    
    if (req.body.question1 == "c") {
        choice3 += 1;
    }
    
    if (req.body.question1 == "d") {
        choice4 += 1;
    }
    
    console.log(req.body.question1);
    
    //if e == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if f == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if g == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if h == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    let data2 = {
        e: e,
        f: f,
        g: g,
        h: h
    };
    
    res.send(data); 
    if (req.body.question2 == "e") {
        choice5 += 1;;
    }
    
    if (req.body.question2 == "f") {
        choice6 += 1;;
    }
    
    if (req.body.question2 == "g") {
        choice7 += 1;;
    }
    
    if (req.body.question2 == "h") {
        choice8 += 1;;
    }
    
    console.log(req.body.question2);
    
    //if i == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if j == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if k == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if l == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    let data3 = {
        i: i,
        j: j,
        k: k,
        l: l
    };
    
    res.send(data); 
    if (req.body.question3 == "i") {
        choice9 += 1;
    }
    
    if (req.body.question3 == "j") {
        choice10 += 1;
    }
    
    if (req.body.question3 == "k") {
        choice11 += 1;
    }
    
    if (req.body.question3 == "l") {
        choice12 += 1;
    }
    
    console.log(req.body.question3);
    
    //if m == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if n == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if o == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if p == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    let data4 = {
        m: m,
        n: n,
        o: o,
        p: p
    };
    
    res.send(data); 
    if (req.body.question4 == "m") {
        choice13 += 1;
    }
    
    if (req.body.question4 == "n") {
        choice14 += 1;
    }
    
    if (req.body.question4 == "o") {
        choice15 += 1;
    }
    
    if (req.body.question4 == "p") {
        choice16 += 1;
    }
    
    console.log(req.body.question4);
    
    //if q == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if r == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if s == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if t == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    let data5 = {
        q: q,
        r: r,
        s: s,
        t: t
    };
    
    res.send(data); 
    if (req.body.question5 == "q") {
        choice17 += 1;
    }
    
    if (req.body.question5 == "r") {
        choice18 += 1;
    }
    
    if (req.body.question5 == "s") {
        choice19 += 1;
    }
    
    if (req.body.question5 == "t") {
        choice20 += 1;
    }
    
    console.log(req.body.question5);
    
    //if u == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if v == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if w == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if x == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    let data6 = {
        u: u,
        v: v,
        w: w,
        x: x
    };
    
    res.send(data); 
    if (req.body.question6 == "u") {
        choice21 += 1;
    }
    
    if (req.body.question6 == "v") {
        choice22 += 1;
    }
    
    if (req.body.question6 == "w") {
        choice23 += 1;
    }
    
    if (req.body.question6 == "x") {
        choice24 += 1;
    }
    
    console.log(req.body.question6);
    
    //if y == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if z == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if ab == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if ac == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    let data7 = {
        y: y,
        z: z,
        ab: ab,
        ac: ac
    };
    
    res.send(data); 
    if (req.body.question7 == "y") {
        choice25 += 1;
    }
    
    if (req.body.question7 == "z") {
        choice26 += 1;
    }
    
    if (req.body.question7 == "ab") {
        choice27 += 1;
    }
    
    if (req.body.question7 == "ac") {
        choice28 += 1;
    }
    
    console.log(req.body.question7);
    
    //if ad == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if ae == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if af == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if ag == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    let data8 = {
        ad: ad,
        ae: ae,
        af: af,
        ag: ag
    };
    
    res.send(data); 
    if (req.body.question8 == "ad") {
        choice29 += 1;
    }
    
    if (req.body.question8 == "ae") {
        choice30 += 1;
    }
    
    if (req.body.question8 == "af") {
        choice31 += 1;
    }
    
    if (req.body.question8 == "ag") {
        choice32 += 1;
    }
    
    console.log(req.body.question8);
    
    //if ah == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if ai == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if aj == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if ak == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    let data9 = {
        ah: ah,
        ai: ai,
        aj: aj,
        ak: ak
    };
    
    res.send(data); 
    if (req.body.question9 == "ah") {
        choice33 += 1;
    }
    
    if (req.body.question9 == "ai") {
        choice34 += 1;
    }
    
    if (req.body.question9 == "aj") {
        choice35 += 1;
    }
    
    if (req.body.question9 == "ak") {
        choice36 += 1;
    }
    
    console.log(req.body.question9);
    
    //if al == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if am == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if an == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    //if ao == true, then take that number and divide it by the sum of the three other choices and then multiply that number by 100
    let data10 = {
        al: al,
        am: am,
        an: an,
        ao: ao
    };
    
    res.send(data); 
    if (req.body.question10 == "al") {
        choice37 += 1;
    }
    
    if (req.body.question10 == "am") {
        choice38 += 1;
    }
    
    if (req.body.question10 == "an") {
        choice39 += 1;
    }
    
    if (req.body.question10 == "ao") {
        choice40 += 1;
    }
    
    console.log(req.body.question10);
});
    
app.listen(3000, () => {
    console.log('Server started...');
});
