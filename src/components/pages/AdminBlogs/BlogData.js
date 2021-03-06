import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BlogData extends Component {
  state = {
    like: 1,
    comment: '',
  };
  Like = () => {
    console.log('liking');
    if (this.state.like == 1) {
      this.setState({
        like: -1,
      });
    } else {
      this.setState({
        like: 1,
      });
    }
  };
  imgStyle = () => {
    return {
      minWidth: '60%',
      maxWidth: '60% ',
    };
  };
  blogStyle = () => {
    return {
      textAlign: 'center',
      width: '90%',
      backgroundColor: 'white',
      paddingTop: '10px',
      marginTop: '20px',
    };
  };
  render() {
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    }
    const {
      title,
      body,
      imgUrl,
      comments,
      likes,
      created,
      lastUpdated,
    } = this.props.blog;
    return (
      <div className="container-fluid" style={this.blogStyle()}>
        <Link to="/admin/">
          <button
            className="btn btn-info"
            style={{ float: 'right', marginLeft: '15px' }}
            onClick={this.props.delete}>
            <i class="fas fa-trash"></i>
          </button>
        </Link>
        <Link to="/admin/editBlog">
          <button
            className="btn btn-secondary"
            style={{ float: 'right', marginLeft: '15px' }}>
            <i class="far fa-edit"></i>
          </button>
        </Link>
        <div className="container-fluid">
          <h1 className="display-4" style={{ textAlign: 'center' }}>
            {title}
          </h1>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img src={imgUrl} style={this.imgStyle()} alt="No Pic" />
          </div>
          <pre
            style={{
              maxWidth: '100%',
              overflowWrap: 'break-word',
              overflow: 'hidden',
              whiteSpace: 'pre-wrap',
            }}>
            {body}
          </pre>
          <div>
            <i class="far fa-thumbs-up"></i>
            {likes}
            <p>Created on:{created}</p>
            <div>
              {lastUpdated != '' ? (
                <p>Last Updated on {lastUpdated}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
        <div style={{ marginLeft: '30px' }}>
          <h1>Comments:</h1>
          <div style={{ paddingBottom: '20px', marginBottom: '20px' }}>
            {comments.map((number, i) => (
              <div
                style={{
                  padding: '25px',
                  marginBottom: '30px',
                  border: '2px solid black',
                  textAlign: 'left',
                }}>
                <p style={{ display: 'inline' }}>{number}</p>
                <button
                  style={{ float: 'right' }}
                  onClick={this.props.comment.bind(this, i + 1)}>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogData;
