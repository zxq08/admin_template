
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  visitor: {
    token: 'visitor-token'
  },
  zxq: {
    token: 'zxq-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  'visitor-token': {
    roles: ['visitor'],
    introduction: 'I am an Visitor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Visitor'
  },
  'zxq-token': {
    roles: ['admin'],
    introduction: 'I must be administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'I am ZXQ'
  }
}

module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  // check user exist
  {
    url: '/vue-admin-template/user/isuser\.*',
    type: 'get',
    response: config => {
      const username  = config.query
      const isuser = ['admin', 'editor', 'visitor', 'zxq'].indexOf(username[0]) >= 0
      // mock error
      if (!isuser) {
        return {
          code: 60203,
          message: ''
        }
      }
      return {
        code: 20000,
        data: isuser
      }
    }
  },

  // get all users
  {
    url: '/vue-admin-template/user/getAllUsers',
    type: 'get',
    response: config => {
      let usersArr = []
      for (var i in users) {
        var name = i.split("-token")[0]
        usersArr.push(
          {
            name,
            roles: users[i].roles[0],
            introduction: users[i].introduction,
            avatar: users[i].avatar,
            name: users[i].name
          }
        )
      }
      return {
        code: 20000,
        data: usersArr
      }
    }
  }
]
