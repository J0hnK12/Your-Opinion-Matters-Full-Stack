const express = require('express');
const fs = require('fs');
const app = express();

//question empty arrays
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

//all the choices
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

//readfile
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
    
    res.send(data1); 
    if (req.body.question1 == "a") {
        choice1 += 1;
        //((choice1) / (choice2 + choice3 + choice4)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question1 == "b") {
        choice2 += 1;
        //((choice2) / (choice1 + choice3 + choice4)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question1 == "c") {
        choice3 += 1;
        //((choice3) / (choice2 + choice1 + choice4)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question1 == "d") {
        choice4 += 1;
        //((choice4) / (choice2 + choice3 + choice1)) * 100
        //get the percentage to show up after the user clicks the button
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
    
    res.send(data2); 
    if (req.body.question2 == "e") {
        choice5 += 1;
        //((choice5) / (choice6 + choice7 + choice8)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question2 == "f") {
        choice6 += 1;
        //((choice6) / (choice5 + choice7 + choice8)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question2 == "g") {
        choice7 += 1;
        //((choice7) / (choice6 + choice5 + choice8)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question2 == "h") {
        choice8 += 1;
        //((choice8) / (choice6 + choice7 + choice5)) * 100
        //get the percentage to show up after the user clicks the button
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
    
    res.send(data3); 
    if (req.body.question3 == "i") {
        choice9 += 1;
        //((choice9) / (choice10 + choice11 + choice12)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question3 == "j") {
        choice10 += 1;
        //((choice10) / (choice9 + choice11 + choice12)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question3 == "k") {
        choice11 += 1;
        //((choice11) / (choice10 + choice9 + choice12)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question3 == "l") {
        choice12 += 1;
        //((choice12) / (choice10 + choice11 + choice9)) * 100
        //get the percentage to show up after the user clicks the button
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
    
    res.send(data4); 
    if (req.body.question4 == "m") {
        choice13 += 1;
        //((choice13) / (choice14 + choice15 + choice16)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question4 == "n") {
        choice14 += 1;
        //((choice14) / (choice13 + choice15 + choice16)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question4 == "o") {
        choice15 += 1;
        //((choice15) / (choice14 + choice13 + choice16)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question4 == "p") {
        choice16 += 1;
        //((choice16) / (choice14 + choice15 + choice13)) * 100
        //get the percentage to show up after the user clicks the button
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
    
    res.send(data5); 
    if (req.body.question5 == "q") {
        choice17 += 1;
        //((choice17) / (choice18 + choice19 + choice20)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question5 == "r") {
        choice18 += 1;
        //((choice18) / (choice17 + choice19 + choice20)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question5 == "s") {
        choice19 += 1;
        //((choice19) / (choice18 + choice17 + choice20)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question5 == "t") {
        choice20 += 1;
        //((choice20) / (choice18 + choice19 + choice17)) * 100
        //get the percentage to show up after the user clicks the button
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
    
    res.send(data6); 
    if (req.body.question6 == "u") {
        choice21 += 1;
        //((choice21) / (choice22 + choice23 + choice24)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question6 == "v") {
        choice22 += 1;
        //((choice22) / (choice21 + choice23 + choice24)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question6 == "w") {
        choice23 += 1;
        //((choice23) / (choice22 + choice21 + choice24)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question6 == "x") {
        choice24 += 1;
        //((choice24) / (choice22 + choice23 + choice21)) * 100
        //get the percentage to show up after the user clicks the button
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
    
    res.send(data7); 
    if (req.body.question7 == "y") {
        choice25 += 1;
        //((choice25) / (choice26 + choice27 + choice28)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question7 == "z") {
        choice26 += 1;
        //((choice26) / (choice25 + choice27 + choice28)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question7 == "ab") {
        choice27 += 1;
        //((choice27) / (choice26 + choice25 + choice28)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question7 == "ac") {
        choice28 += 1;
        //((choice28) / (choice26 + choice27 + choice25)) * 100
        //get the percentage to show up after the user clicks the button
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
    
    res.send(data8); 
    if (req.body.question8 == "ad") {
        choice29 += 1;
        //((choice29) / (choice30 + choice31 + choice32)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question8 == "ae") {
        choice30 += 1;
        //((choice30) / (choice29 + choice31 + choice32)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question8 == "af") {
        choice31 += 1;
        //((choice31) / (choice30 + choice29 + choice32)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question8 == "ag") {
        choice32 += 1;
        //((choice32) / (choice30 + choice31 + choice29)) * 100
        //get the percentage to show up after the user clicks the button
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
    
    res.send(data9); 
    if (req.body.question9 == "ah") {
        choice33 += 1;
        //((choice33) / (choice34 + choice35 + choice36)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question9 == "ai") {
        choice34 += 1;
        //((choice34) / (choice33 + choice35 + choice36)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question9 == "aj") {
        choice35 += 1;
        //((choice35) / (choice34 + choice33 + choice36)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question9 == "ak") {
        choice36 += 1;
        //((choice36) / (choice34 + choice35 + choice33)) * 100
        //get the percentage to show up after the user clicks the button
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
    
    res.send(data10); 
    if (req.body.question10 == "al") {
        choice37 += 1;
        //((choice37) / (choice38 + choice39 + choice40)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question10 == "am") {
        choice38 += 1;
        //((choice38) / (choice37 + choice39 + choice40)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question10 == "an") {
        choice39 += 1;
        //((choice39) / (choice38 + choice37 + choice40)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    if (req.body.question10 == "ao") {
        choice40 += 1;
        //((choice40) / (choice38 + choice39 + choice37)) * 100
        //get the percentage to show up after the user clicks the button
    }
    
    console.log(req.body.question10);
});
    
app.listen(3000, () => {
    console.log('Server started...');
});
