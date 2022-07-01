fetch('https://api.github.com/users/jamesthomasbester/repos')
    .then(response => response.json())
    .then(result => {
        result.forEach( element => {
            console.log(element)
            $('#body').append(`
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${element.name}</h5>
                                <p class="card-text">${element.html_url}</p>
                                <p class="card-text"><small class="text-muted">${element.updated_at}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        })
    })