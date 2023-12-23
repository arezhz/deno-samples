setTimeout(() =>  {
    const encoder = new TextEncoder();
    const messageText = encoder.encode('hello world, this is my first deno app.')

    Deno.writeFile('hello-world.txt',messageText).then(()=> {
        console.log('done!');
        
    })
},2000)