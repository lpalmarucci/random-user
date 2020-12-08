import React from 'react';

class Posts extends React.Component{
    render(){
        const id = this.props.match.params;
        console.log("ID", id);
        return(
            <h1>Pagina dei post</h1>
        );
    }
}
  
export default Posts;