import React, { Component } from 'react';
import axios from 'axios';

export class Home extends Component {
    state = {
        posts : []
    }

    // function base componen
    // class base component

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            // console.log(res);
            this.setState({
                posts: res.data.slice(0, 10)
            })
            console.log(this.state)
        })
    }
    render() {
        const {posts} = this.state;
        const postList =post.length ? (
            posts.map (post => {
                return {
                    <div className="post card" key={post.id}> 
                        <img src="" alt="" />
                        <div className=" card-content">
                            <Link to="/">
                                <span className="card-title red-text">
                                {post.title}
                                </span>
                            </Link>
                        <p>{post.body}</p>
                        </div>
                    </div>
                }
            })
        ):(
            <div className="container center">No Post Yet</div>
        )
        return (
        <div className="container home">
            <h2>Homepage</h2> 
            {postList}
        </div>
    )
    }
    
}

export default Home
