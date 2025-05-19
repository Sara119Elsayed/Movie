import movie from "@/data/data.json"

export async function GET(req,{params})
{

const par = await params;

console.log(params);

const {id} = par

const moviefound = movie.find(m => m.id===id)


return new Response(JSON.stringify(moviefound),{
    status:200
})

}


export async function DELETE(req,{params})
{

    const par = await params;

    const {id} = par

    const movieDelete = movie.filter(m => m.id!==id)


    return new Response(JSON.stringify(movieDelete),{
        status:200
    })

}



export async function PUT(req, { params }) {

  const { id } = params;

  const updatedData = await req.json();
  
  const index = movie.findIndex((m) => m.id === id);

  if (index === -1) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
    });
  }

  movie[index] = { ...movie[index], ...updatedData };

  return new Response(JSON.stringify(movie[index]), {
    status: 200,
  });
}
