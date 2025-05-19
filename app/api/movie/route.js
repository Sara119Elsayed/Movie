import movie from '@/data/data.json'


export  function GET(req)
{
    return new Response(JSON.stringify(movie),{
        status:200
    })

}

export  async function POST(req)
{

    const newmovie = await req.json()
   
    movie.push({...newmovie,id:movie.length+1})
    
    return new Response(JSON.stringify(movie),{
        status:"200"
    })

}