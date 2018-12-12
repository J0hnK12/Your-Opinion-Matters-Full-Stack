const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Your Opinion Matters!');
});

app.post('/answer', (req, res) => {
    let data = {
        a: a,
        b: b,
        c: c,
        d: d,
        e: e,
        f: f,
        g: g,
        h: h,
        i: i,
        j: j,
        k: k,
        l: l,
        m: m,
        n: n,
        o: o,
        p: p,
        q: q,
        r: r,
        s: s,
        t: t,
        u: u,
        v: v,
        w: w,
        x: x,
        y: y,
        z: z,
        ab: ab,
        ac: ac,
        ad: ad,
        ae: ae,
        af: af,
        ag: ag,
        ah: ah,
        ai: ai,
        aj: aj,
        ak: ak,
        al: al,
        am: am,
        an: an,
        ao: ao
    };
    
    res.send(data); //Send all the votes that everyone voted for and show them to the user
    //Question 1
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
    
    //Question 2
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
    
    //Question 3
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
    
    //Question 4
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
    
    //Question 5
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
    
    //Question 6
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
    
    //Question 7
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
    
    //Question 8
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
    
    //Question 9
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
    
    //Question 10
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
    
    console.log(req.body.question1);
    //console.log(`IP Address: ${req.ip}`);
    
    console.log(req.body.question2);
    //console.log(`IP Address: ${req.ip}`);
    
    console.log(req.body.question3);
    //console.log(`IP Address: ${req.ip}`);
    
    console.log(req.body.question4);
    //console.log(`IP Address: ${req.ip}`);
    
    console.log(req.body.question5);
    //console.log(`IP Address: ${req.ip}`);
    
    console.log(req.body.question6);
    //console.log(`IP Address: ${req.ip}`);
    
    console.log(req.body.question7);
    //console.log(`IP Address: ${req.ip}`);
    
    console.log(req.body.question8);
    //console.log(`IP Address: ${req.ip}`);
    
    console.log(req.body.question9);
    //console.log(`IP Address: ${req.ip}`);
    
    console.log(req.body.question10);
    //console.log(`IP Address: ${req.ip}`);
});

app.listen(3000, () => {
    console.log('Server started...');
});