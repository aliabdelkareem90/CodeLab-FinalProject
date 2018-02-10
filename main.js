
var vueMessage  = new Vue({
    el: '#review',
    data: {},
    methods: {},
    created: function(){
        getData();
    }
})

function getData() {
    $.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts',
		method: 'GET',
		data: {},
		success: function(posts) {
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/users',
				method: 'GET',
				success: function(users) {

					fillData(posts, users)

				}
			})	
		},
		error: function(err) {
            console.log(err)
		}
	});
  
}

function fillData(posts, users) {
    for(var i = 0; i < posts.length; i++) {
        var card = ` 
                    <div class="card mb-2" style="width: 100%;">  
                        <div class="card-body">
                            <h5 class="card-title" style="color : #00f">${ posts[i].title }</h5>
                            <h6 class="card-subtitle mb-2 text-muted">@${users[posts[i].userId].username}</h6>
                            <span class="badge badge-pill badge-success">Rating: ${Math.floor(Math.random()*10)}/10</span>
                            <p class="card-text" style="font-size : 18px; color: #222">${ posts[i].body }</p>
                        </div>
                    </div>
                   `;

        $('#posts').append(card);
    }
}