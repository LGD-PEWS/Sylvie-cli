// 通过 axios 处理请求
const axios = require("axios");

const config = require("../config.json");

axios.interceptors.response.use((res) => {
  return res.data;
});

/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get(`https://gitlab.com/api/v4/groups/67258308/projects`);
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称/id
 * @returns Promise
 */
async function getTagList(repo) {
  return axios.get(
    `https://gitlab.com/api/v4/projects/${repo}/repository/tags?private_token=${config.token}`
  );
}

module.exports = {
  getRepoList,
  getTagList,
};
