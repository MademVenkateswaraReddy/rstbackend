const express = require('express')
const app = express()

const questions = [
    {
        question:"what is java1",
        slug:"how-to-install-java1",
        votes:4,
        views:20,
        tags:"java1, pip, query"
    },
    {
        question:"what is java2",
        slug:"how-to-install-java2",
        votes:4,
        views:20,
        tags:"java2, pip, query"
    },
    {
        question:"what is java3",
        slug:"how-to-install-java3",
        votes:4,
        views:20,
        tags:"java3, pip, query"
    }
]

const users = [
    {
        name:"Venki",
        followers:200,
        location:"JMD"
    },
    {
        name:"Teja",
        followers:200,
        location:"JMD"
    },
    {
        name:"Aswin",
        followers:200,
        location:"JMD"
    }
]

app.get('/',(req,res)=>{
    res.send("Home")
})

app.get('/questions',(req,res)=>{
    res.send(questions)    
})

app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug = req.params.slug
    questions.map(obj=>{
        if (obj.slug===slug){
            res.send(obj)
        }
        
    })

    res.send("Response not found")
})

app.get('/users',(req,res)=>{
    res.send(users)    
})
app.get('/tags',(req,res)=>{
    res.send("Tags")    
})

app.get('/jobs/companies',(req,res)=>{
    res.send("Companies")    
})

app.listen(2400, ()=>{
    console.log('Listening....')
})