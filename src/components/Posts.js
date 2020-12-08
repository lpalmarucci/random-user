import React from 'react';
import '../css/Posts.css'

class Posts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            idUser : this.props.match.params.id,
            posts : []
        };
        console.log("state", this.state);
    }

    componentDidMount(){
        console.log(this.state.idUser);
        if(this.state.idUser){
            console.log("ramo if", this.state);
            fetch("https://jsonplaceholder.typicode.com/posts?userId=" + this.state.idUser)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.setState({
                        posts : res,
                        desc : "ramo if"
                    });
            });
        } else{
            console.log("ramo else", this.state);
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.setState({
                        posts : res,
                        desc : "ramo else"
                    });
            });
        }
        
    }

    render(){
        return(
            <div>
                <h1>Pagina dei posts</h1>
                <h3>{this.state.desc}</h3>
                <div>
                    {this.state.posts.map((post,index) => (
                        <div id="card" key={index}>
                            <div className="card-flex-wrapper">
                                <div className="card-flex-image">
                                {/* qui ci dovrebbe essere il tag img <img src={this.props.imgSrc} alt="img placeholder" /> */}
                                </div>
                                <div className="card-flex-content">
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            
        );
    }
}
  
export default Posts;