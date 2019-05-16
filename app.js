const express = require('express');
const fs = require('fs');
const app = express();

//empty question arrays
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
    //question 1
    let data1 = {
        choice1: a,
        choice2: b,
        choice3: c,
        choice4: d
    };
    
    res.send(data1); 
    if (req.body.question1 == "a") {
        choice1 += 1;
        function average1() {
            let average1 = ((choice1) / (choice2 + choice3 + choice4)) * 100 + "%";
        }
    }
    
    if (req.body.question1 == "b") {
        choice2 += 1;
        function average2() {
            let average2 = ((choice2) / (choice1 + choice3 + choice4)) * 100 + "%";
        }
    }
    
    if (req.body.question1 == "c") {
        choice3 += 1;
        function average3() {
            let average3 = ((choice3) / (choice2 + choice1 + choice4)) * 100 + "%";
        }
    }
    
    if (req.body.question1 == "d") {
        choice4 += 1;
        function average4() {
            let average4 = ((choice4) / (choice2 + choice3 + choice1)) * 100 + "%";
        }
    }
    
    //writeFile for question 1
    fs.writeFile('questionOne.json', JSON.stringify(answer), (err) => {
        console.log(answer);
        console.warn(err);
        console.log(questionOne.json);
    });
    
    console.log(req.body.question1);
    
    //question 2
    let data2 = {
        choice5: e,
        choice6: f,
        choice7: g,
        choice8: h
    };
    
    res.send(data2); 
    if (req.body.question2 == "e") {
        choice5 += 1;
        function average5() {
            let average5 = ((choice5) / (choice6 + choice7 + choice8)) * 100 + "%";
        }
    }
    
    if (req.body.question2 == "f") {
        choice6 += 1;
        function average6() {
            let average6 = ((choice6) / (choice5 + choice7 + choice8)) * 100 + "%";
        }
    }
    
    if (req.body.question2 == "g") {
        choice7 += 1;
        function average7() {
            let average7 = ((choice7) / (choice6 + choice5 + choice8)) * 100 + "%";
        }
    }
    
    if (req.body.question2 == "h") {
        choice8 += 1;
        function average8() {
            let average8 = ((choice8) / (choice6 + choice7 + choice5)) * 100 + "%";
        }
    }
    
    //writeFile for question 2
    fs.writeFile('questionTwo.json', JSON.stringify(answer), (err) => {
        console.log(answer);
        console.warn(err);
        console.log(questionTwo.json);
     });
    
    console.log(req.body.question2);
    
    //question 3
    let data3 = {
        choice9: i,
        choice10: j,
        choice11: k,
        choice12: l
    };
    
    res.send(data3); 
    if (req.body.question3 == "i") {
        choice9 += 1;
        function average9() {
            let average9 = ((choice9) / (choice10 + choice11 + choice12)) * 100 + "%";
        }
    }
    
    if (req.body.question3 == "j") {
        choice10 += 1;
        function average10() {
            let average10 = ((choice10) / (choice9 + choice11 + choice12)) * 100 + "%";
        }
    }
    
    if (req.body.question3 == "k") {
        choice11 += 1;
        function average11() {
            let average11 = ((choice11) / (choice10 + choice9 + choice12)) * 100 + "%";
        }
    }
    
    if (req.body.question3 == "l") {
        choice12 += 1;
        function average12() {
            let average12 = ((choice12) / (choice10 + choice11 + choice9)) * 100 + "%";
        }
    }
    
    //writeFile for question 3
    fs.writeFile('questionThree.json', JSON.stringify(answer), (err) => {
        console.log(answer);
        console.warn(err);
        console.log(questionThree.json);
    });
    
    console.log(req.body.question3);
    
    //question 4
    let data4 = {
        choice13: m,
        choice14: n,
        choice15: o,
        choice16: p
    };
    
    res.send(data4); 
    if (req.body.question4 == "m") {
        choice13 += 1;
        function average13() {
            let average13 = ((choice13) / (choice14 + choice15 + choice16)) * 100 + "%";
        }
    }
    
    if (req.body.question4 == "n") {
        choice14 += 1;
        function average14() {
            let average14 = ((choice14) / (choice13 + choice15 + choice16)) * 100 + "%";
        }
    }
    
    if (req.body.question4 == "o") {
        choice15 += 1;
        function average15() {
            let average15 = ((choice15) / (choice14 + choice13 + choice16)) * 100 + "%";
        }
    }
    
    if (req.body.question4 == "p") {
        choice16 += 1;
        function average16() {
            let average16 = ((choice16) / (choice14 + choice15 + choice13)) * 100 + "%";
        }
    }
    
    //writeFile for question 4
    fs.writeFile('questionFour.json', JSON.stringify(answer), (err) => {
        console.log(answer);
        console.warn(err);
        console.log(questionFour.json);
    });
    
    console.log(req.body.question4);
    
    //question 5
    let data5 = {
        choice17: q,
        choice18: r,
        choice19: s,
        choice20: t
    };
    
    res.send(data5); 
    if (req.body.question5 == "q") {
        choice17 += 1;
        function average17() {
            let average17 = ((choice17) / (choice18 + choice19 + choice20)) * 100 + "%";
        }
    }
    
    if (req.body.question5 == "r") {
        choice18 += 1;
        function average18() {
            let average18 = ((choice18) / (choice17 + choice19 + choice20)) * 100 + "%";
        }
    }
    
    if (req.body.question5 == "s") {
        choice19 += 1;
        function average19() {
            let average19 = ((choice19) / (choice18 + choice17 + choice20)) * 100 + "%";
        }
    }
    
    if (req.body.question5 == "t") {
        choice20 += 1;
        function average20() {
            let average20 = ((choice20) / (choice18 + choice19 + choice17)) * 100 + "%";
        }
    }
    
    //writeFile for question 5
    fs.writeFile('questionFive.json', JSON.stringify(answer), (err) => {
        console.log(answer);
        console.warn(err);
        console.log(questionFive.json);
    });
    
    console.log(req.body.question5);
    
    //question 6
    let data6 = {
        choice21: u,
        choice22: v,
        choice23: w,
        choice24: x
    };
    
    res.send(data6); 
    if (req.body.question6 == "u") {
        choice21 += 1;
        function average21() {
            let average21 = ((choice21) / (choice22 + choice23 + choice24)) * 100 + "%";
        }
    }
    
    if (req.body.question6 == "v") {
        choice22 += 1;
        function average22() {
            let average22 = ((choice22) / (choice21 + choice23 + choice24)) * 100 + "%";
        }
    }
    
    if (req.body.question6 == "w") {
        choice23 += 1;
        function average23() {
            let average23 = ((choice23) / (choice22 + choice21 + choice24)) * 100 + "%";
        }
    }
    
    if (req.body.question6 == "x") {
        choice24 += 1;
        function average24() {
            let average24 = ((choice24) / (choice22 + choice23 + choice21)) * 100 + "%";
        }
    }
    
    //writeFile for question 6
    fs.writeFile('questionSix.json', JSON.stringify(answer), (err) => {
        console.log(answer);
        console.warn(err);
        console.log(questionSix.json);
    });
    
    console.log(req.body.question6);
    
    //question 7
    let data7 = {
        choice25: y,
        choice26: z,
        choice27: ab,
        choice28: ac
    };
    
    res.send(data7); 
    if (req.body.question7 == "y") {
        choice25 += 1;
        function average25() {
            let average25 = ((choice25) / (choice26 + choice27 + choice28)) * 100 + "%";
        }
    }
    
    if (req.body.question7 == "z") {
        choice26 += 1;
        function average26() {
            let average26 = ((choice26) / (choice25 + choice27 + choice28)) * 100 + "%";
        }
    }
    
    if (req.body.question7 == "ab") {
        choice27 += 1;
        function average27() {
            let average27 = ((choice27) / (choice26 + choice25 + choice28)) * 100 + "%";
        }
    }
    
    if (req.body.question7 == "ac") {
        choice28 += 1;
        function average28() {
            let average28 = ((choice28) / (choice26 + choice27 + choice25)) * 100 + "%";
        }
    }
    
    //writeFile for question 7
    fs.writeFile('questionSeven.json', JSON.stringify(answer), (err) => {
        console.log(answer);
        console.warn(err);
        console.log(questionSeven.json);
    });
    
    console.log(req.body.question7);
    
    //question 8
    let data8 = {
        choice29: ad,
        choice30: ae,
        choice31: af,
        choice32: ag
    };
    
    res.send(data8); 
    if (req.body.question8 == "ad") {
        choice29 += 1;
        function average29() {
            let average29 = ((choice29) / (choice30 + choice31 + choice32)) * 100 + "%";
        }
    }
    
    if (req.body.question8 == "ae") {
        choice30 += 1;
        function average30() {
            let average30 = ((choice30) / (choice29 + choice31 + choice32)) * 100 + "%";
        }
    }
    
    if (req.body.question8 == "af") {
        choice31 += 1;
        function average31() {
            let average31 = ((choice31) / (choice30 + choice29 + choice32)) * 100 + "%";
        }
    }
    
    if (req.body.question8 == "ag") {
        choice32 += 1;
        function average32() {
            let average32 = ((choice32) / (choice30 + choice31 + choice29)) * 100 + "%";
        }
    }
    
    //writeFile for question 8
    fs.writeFile('questionEight.json', JSON.stringify(answer), (err) => {
        console.log(answer);
        console.warn(err);
        console.log(questionEight.json);
    });
    
    console.log(req.body.question8);
    
    //question 9
    let data9 = {
        choice33: ah,
        choice34: ai,
        choice35: aj,
        choice36: ak
    };
    
    res.send(data9); 
    if (req.body.question9 == "ah") {
        choice33 += 1;
        function average33() {
            let average33 = ((choice33) / (choice34 + choice35 + choice36)) * 100 + "%";
        }
    }
    
    if (req.body.question9 == "ai") {
        choice34 += 1;
        function average34() {
            let average34 = ((choice34) / (choice33 + choice35 + choice36)) * 100 + "%";
        }
    }
    
    if (req.body.question9 == "aj") {
        choice35 += 1;
        function average35() {
            let average35 = ((choice35) / (choice34 + choice33 + choice36)) * 100 + "%";
        }
    }
    
    if (req.body.question9 == "ak") {
        choice36 += 1;
        function average36() {
            let average36 = ((choice36) / (choice34 + choice35 + choice33)) * 100 + "%";
        }
    }
    
    //writeFile for question 9
    fs.writeFile('questionNine.json', JSON.stringify(answer), (err) => {
        console.log(answer);
        console.warn(err);
        console.log(questionNine.json);
    });
    
    console.log(req.body.question9);
    
    //question 10
    let data10 = {
        choice37: al,
        choice38: am,
        choice39: an,
        choice40: ao
    };
    
    res.send(data10); 
    if (req.body.question10 == "al") {
        choice37 += 1;
        function average37() {
            let average37 = ((choice37) / (choice38 + choice39 + choice40)) * 100 + "%";
        }
    }
    
    if (req.body.question10 == "am") {
        choice38 += 1;
        function average38() {
            let average38 = ((choice38) / (choice37 + choice39 + choice40)) * 100 + "%";
        }
    }
    
    if (req.body.question10 == "an") {
        choice39 += 1;
        function average39() {
            let average39 = ((choice39) / (choice38 + choice37 + choice40)) * 100 + "%";
        }
    }
    
    if (req.body.question10 == "ao") {
        choice40 += 1;
        function average40() {
            let average40 = ((choice40) / (choice38 + choice39 + choice37)) * 100 + "%";
        }
    }
    
    //writeFile for question 10
    fs.writeFile('questionTen.json', JSON.stringify(answer), (err) => {
        console.log(answer);
        console.warn(err);
        console.log(questionTen.json);
    });
    
    console.log(req.body.question10);
});
    
app.listen(3000, () => {
    console.log('Server started...');
});
