import React from 'react';
import {connect} from 'redux'
import Post from './Post'

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map((post, key)=> <Post key={key} post={post} />)}
        </div>
    );
};

/*
преобразование стора в удобный вид для компонента
*/ 
const mapStateToProps = state => {
    console.log(state);
    return {
        syncPost: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts);