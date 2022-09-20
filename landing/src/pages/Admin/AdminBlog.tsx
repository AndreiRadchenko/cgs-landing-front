import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import AdminBlogMainContent from "../../components/Admin/Global/AdminBlogMainContent";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "react-query";

import * as Styled from "../../styles/AdminPage";
import BlogForm from "../../components/Admin/Global/Blog/BlogForm";

const AdminBlog = () => {
  const { data } = useQuery(queryKeys.validToken, () =>
    validTokenGlobal.validToken()
  );
  return data ? (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <BlogForm />
      <AdminBlogMainContent />
    </Styled.AdminWrapper>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminBlog;
