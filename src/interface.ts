export interface IServiceBalancer {
  /**
   * 根据服务名称选择实例
   * @param serviceName 注册的服务名称
   * @param passingOnly 只返回通过健康检查的实例，默认为 true
   */
  select(serviceName: string, passingOnly?: boolean): any | never;
}

export interface INacosBalancer {
  /**
   * 根绝策略返回负载均衡器
   * @param strategy 负载均衡策略
   */
  getServiceBalancer(strategy?: string): IServiceBalancer;
}

export interface IClientConfig {
  client?: any;
  clients?: any;
}

export interface INacosConfig {
  registry?: IClientConfig;
  config?: IClientConfig;
}