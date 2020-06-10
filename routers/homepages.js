const { Router } = require("express");
const Homepages = require("../models").homepage
const Story = require("../models").story
const router = new Router();
const authMiddleware = require("../auth/middleware");





router.get('/homepages/:id', async(req, res)=>{
    const id = req.params.id;
    console.log('id is',id)
    
    if(!id){
        res.status(400).send('no homepage found')
    }
    
  
    const detailPage = await Homepages.findByPk(id, {
       include: [Story],
       
       order: [[Story,"createdAt", "DESC"]]
       
       
    })

    console.log('detailspage', detailPage.stories.map(s =>s.get({plain:true})))
    // const story = await Story.findAll().map(s=>s.get({plain:true}))
    // console.log('story', story)
    
    if(!detailPage) {
        console.log('finding err')
        res.status(400).send('no homepage found')
    }
    res.status(200).send(detailPage)
    
  }
  )

router.get('/homepages', async(req, res)=>{
    const pages = await Homepages.findAll()
    console.log('pages', pages)
    try{
    
    console.log('pages', pages)
    res.status(200).send(pages.map(p=>p))
    } catch(e){
        res.status(400).send(`error: ${e.message}`)
    }

}
) 


router.post('/myhomepage/', async(req, res, next)=>{
    const id = req.body.id;
    console.log('id is',id)
    
    if(!id){
        res.status(400).send('no homepage found')
    }
    
    
  
    const detailPage = await Homepages.findByPk(id, {
       include: [Story],
       
       order: [[Story,"createdAt", "DESC"]]
       
       
    })

   
    
    if(!detailPage) {
        console.log('finding err')
        res.status(400).send('no homepage found')
    }
    res.status(200).send(detailPage)
    
  }
  )

router.patch('/myhomepage/', async(req, res, next)=>{
    const id = req.body.id;
    console.log('id patch is',id)
    console.log('body is ', req.body)
    
    if(!id){
        res.status(400).send('please login first to edit your page')
    }
    
    
  
    const detailPage = await Homepages.findByPk(id)

    detailPage.title = req.body.title;
    detailPage.description = req.body.description;
    detailPage.backgroundColor = req.body.backgroundColor
    detailPage.color = req.body.color;

    await detailPage.save();




   
    
    if(!detailPage) {
        console.log('finding err')
        res.status(400).send('no homepage found')
    }

    res.status(200).send(detailPage)
    
  }
  )  

module.exports = router;