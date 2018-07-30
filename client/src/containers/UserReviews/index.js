import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserReviews } from '../../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

class UserPosts extends Component {
    componentWillMount() {
        this.props.dispatch(getUserReviews(this.props.users.login.id));
    }

    showUserPosts = ({ userPosts }) => (
        userPosts 
        ? userPosts.map(item => (
                <tr key={item._id}>
                    <td><Link to={
                        `/user/edit-post/${item._id}`
                    }>
                        {item.title}
                    </Link></td>
                    <td>{item.author}</td>
                    <td>
                        {moment(item.createAt).format("MM/DD/YY")}
                    </td>
                </tr>
            ))
        : null
    )

    render() {
        const { users } = this.props;

        return (
            <div className="user_posts">
                <h4>Your reviews:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(users)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserPosts);