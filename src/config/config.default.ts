export const nacos = {
  'registry': {     //注册中心
    client: {     //单实例 https://midwayjs.org/en/docs/service_factory#%E5%8D%95%E4%B8%AA%E5%AE%9E%E4%BE%8B
      serverList: '127.0.0.1:8848', // replace to real nacos serverList
      namespace: 'public',
    }
  },
  'config': {     //配置中心
    client: {
      serverAddr: '127.0.0.1:8848',
    }
  }
};
