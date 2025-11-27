import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usersAPI } from '../../api/endPoints';
import LoadingSpinner from '../../components/loader/loadingSpinner';
import Pagination from '../../components/pagination/pagination';
import { usePaginatedSearch } from '../../hooks/usePaginatedSearch';
import { fetchUsersFailure, fetchUsersStart, fetchUsersSuccess } from '../../redux/slices/usersSlice';
import './users.scss';

const Users = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { users, isLoading, error } = useSelector((state) => state.users);

  const {
    currentPage,
    setCurrentPage,
    searchTerm,
    setSearchTerm,
    filteredData,
    totalPages,
    totalItems,
  } = usePaginatedSearch(users, 5);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        dispatch(fetchUsersStart());
        const response = await usersAPI.getUsers();
        dispatch(fetchUsersSuccess(response.data));
      } catch (error) {
        dispatch(fetchUsersFailure('Failed to fetch users. Please try again.'));
      }
    };

    if (users.length === 0) {
      fetchUsers();
    }
  }, [dispatch, users?.length]);

  const handleRowClick = (userId) => {
    Navigate(`/users/${userId}`);
  };

  return (
    <div className="users-page">
      <div className="users-header">
        <h1>Users Management</h1>
        <p>Manage and view all system users</p>
      </div>

      <div className="users-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="search-input"
          />
        </div>
      </div>
      {isLoading ? 
        <LoadingSpinner width={40} height={40}/>
        :
        <>
          <div className="users-table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((user) => (
                  <tr 
                    key={user.id} 
                    className="users-table__row"
                    onClick={() => handleRowClick(user.id)}
                  >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredData.length === 0 && !isLoading && (
              <div className="no-data">
                <p>No users found matching your search criteria.</p>
              </div>
            )}
          </div>
          {totalPages > 1 && (
            <div className="users-pagination">
              <div className="pagination-info">
                Showing {filteredData.length} of {totalItems} users
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>}
    </div>
  );
};

export default Users;