import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './userDetails.scss';
import { usersAPI } from '../../api/endPoints';
import {
  clearCurrentUser,
  fetchUserDetailsFailure,
  fetchUserDetailsStart,
  fetchUserDetailsSuccess
} from '../../redux/slices/usersSlice';
import UserInfo from '../../components/userInfo/userInfo';
import UserPosts from '../../components/userPosts/userPosts';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, userPosts, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        dispatch(fetchUserDetailsStart());
        
        const [userResponse, postsResponse] = await Promise.all([
          usersAPI.getUser(id),
          usersAPI.getUserPosts(id)
        ]);

        dispatch(fetchUserDetailsSuccess({
          user: userResponse.data,
          posts: postsResponse.data
        }));
      } catch (error) {
        dispatch(fetchUserDetailsFailure('Failed to fetch user details. Please try again.'));
      }
    };

    fetchUserDetails();

    return () => {
      dispatch(clearCurrentUser());
    };
  }, [id, dispatch]);

  if (!currentUser) return <div>User not found</div>;

  return (
    <div className="user-details">
      <div className="user-details__header">
        <button 
          className="back-btn"
          onClick={() => navigate('/dashboard/users')}
        >
          ← Back to Users
        </button>
        <h1>User Details</h1>
      </div>

      <div className="user-details__content">
        <UserInfo user={currentUser} />
        <UserPosts posts={userPosts} />
      </div>
    </div>
  );
};

export default UserDetails;
