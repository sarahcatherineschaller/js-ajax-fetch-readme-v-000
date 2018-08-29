const app = "I don't do much.";

const token = '1648cf0960eefd1d07761cc0ba5eabb929c1e2db'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
