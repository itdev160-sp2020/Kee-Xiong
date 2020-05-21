$(function() { 
    var data = [ 
        {
            id: 1, 
            title: 'Time', 
            body: "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.", 
            author: "Master Oogway, Kung Fu Panda"
        }, 
        {
            id: 2, 
            title: 'Life', 
            body: "If you love life, don’t waste time, for time is what life is made up of.",
            author: "Bruce Lee"

        }, 
        {
            id: 3, 
            title: 'Goals', 
            body: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.", 
            author: "Confucius"
        }, 
        { 
            id: 4, 
            title: 'Plans', 
            body: "Plan for what it is difficult while it is easy, do what is great while it is small.", 
            author: "Sun Tzu"
        }, 
        {
            id: 5, 
            title: 'Teach',
            body: "The greatest teacher, failure is.", 
            author: "Yoda"
        }

        
    
    ];
    var $nav = $('#nav-container'); 
    var $intro = $('#intro'); 
    var $posts = $('#post-container'); 

    function initPosts() { 
        for (let i = 0; i < data.length; i++) { 
            var postId = 'post-' + data[i].id, 
                $post = $('<section class = "post"></section>'), 
                $title = $('<h2 class = "title"></h2>'), 
                $body = $('<blockquote></blockquote>'), 
                $author = $('<span class="author"></span>'),
                $navItem = $('<li></li>'); 

            $title.text(data[i].title); 
            $body.text(data[i].body); 
            $author.text(data[i].author); 

            $navItem.attr('id', data[i].id); 
            $navItem.text(data[i].title); 

            $post.attr('id', postId); 
            $post.append($title); 
            $post.append($body); 
            $post.append($author); 

            $posts.append($post); 
            $nav.append($navItem); 

            $navItem.on('click', function(){ 
                var id = $(this).attr('id'); 
                $posts.children().hide(); 
                $posts.find('#post-' + id).fadeIn(); 
            }); 

            $posts.children('.post').hide(); 
            $intro.fadeIn(1000); 
        }
    }
    initPosts(); 

}); 