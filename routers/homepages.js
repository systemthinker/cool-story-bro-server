const { Router } = require("express");
const Homepages = require("../models").homepage
const Story = require("../models").story
const router = new Router();





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

module.exports = router;