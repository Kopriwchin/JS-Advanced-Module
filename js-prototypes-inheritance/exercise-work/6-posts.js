class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    toString() {
        return `Post: ${this.title}\nContent: ${this.content}`;
    }
}

class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
        super(title, content);
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = [];
    }

    addComment(comment) {-
        this.comments.push(comment);
    }

    toString() {
        let output = `${super.toString()}\nRating: ${this.likes - this.dislikes}`;

        if (this.comments.length > 0) {
            output += `\nComments:`;
            this.comments.forEach(c => {
                output += `\n * ${c}`
            });

            return output;
        } else {
            return output;
        }
    }
}

class BlogPost extends Post {
    constructor(title, content, views) {
        super(title, content);
        this.views = Number(views);
    }

    view() {
        this.views++;
        return this;
    }

    toString() {
        return `${super.toString()}\nViews: ${this.views}`
    }
}

let post = new Post("Post", "Content");

// console.log(post.content); // Post
// console.log(post.title); // Content

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment('wowwowowowo');
console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * wowwowowowo

let blgPost = new BlogPost('aaa', 'contentwe', 500);
blgPost.view().view().view();
console.log(blgPost.toString());

// Post: aaa
// Content: contentwe
// Views: 503