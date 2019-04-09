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
let choice1 = a;
let choice2 = b;
let choice3 = c;
let choice4 = d;
let choice5 = e;
let choice6 = f;
let choice7 = g;
let choice8 = h;
let choice9 = i;
let choice10 = j;
let choice11 = k;
let choice12 = l;
let choice13 = m;
let choice14 = n;
let choice15 = o;
let choice16 = p;
let choice17 = q;
let choice18 = r;
let choice19 = s;
let choice20 = t;
let choice21 = u;
let choice22 = v;
let choice23 = w;
let choice24 = x;
let choice25 = y;
let choice26 = z;
let choice27 = ab;
let choice28 = ac;
let choice29 = ad;
let choice30 = ae;
let choice31 = af;
let choice32 = ag;
let choice33 = ah;
let choice34 = ai;
let choice35 = aj;
let choice36 = ak;
let choice37 = al;
let choice38 = am;
let choice39 = an;
let choice40 = ao;

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
