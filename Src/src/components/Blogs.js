import React, { Component } from 'react';
import '../stylesheets/Blogs.css';

export class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('/blogs')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    blogs: json,
                })
            });
    }

    render() {

        var {isLoaded, blogs } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {

        return(
            <div className="Blog">

                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <div className="blogTitle">{blog.title} <br/></div>
                            <div className="blogText">{blog.blog_text} <br/> </div>
                            <div className="blogCreated">Created: {blog.created.substring(0, 10)} <br/> </div>
                            <div><br/><br/></div>
                        </li>
                    ))}
                </ul>

            </div>
        );
        }
    }
}