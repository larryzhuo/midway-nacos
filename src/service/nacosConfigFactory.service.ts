import { ServiceFactory } from '@midwayjs/core';
import {
  Config,
  Init,
  Provide,
  Scope,
  ScopeEnum,
  Logger,
} from '@midwayjs/decorator';
import { NacosConfigClient } from 'nacos';

/**
 * nacos 配置中心client
 */
@Provide()
@Scope(ScopeEnum.Singleton)
export class NacosConfigFactoryService extends ServiceFactory<NacosConfigClient> {
  @Logger('coreLogger')
  logger;

  @Config('nacos.config')
  nacosConfig: any;

  getName(): string {
    return 'nacosNamingFactoryService';
  }

  @Init()
  async init() {
    await this.initClients(this.nacosConfig); //initClients循环调用createClient将生成的client存储到map中，ServiceFactory中实现
  }

  protected async createClient(config: any): Promise<NacosConfigClient> {
    if (!config) {
      throw new Error('config 空');
    }
    if (!config.logger) {
      config.logger = this.logger;
    }
    let client;
    try {
      this.logger.info(`NacosConfigClient初始化`);
      client = new NacosConfigClient(config);
      await client.ready();
      this.logger.info(`NacosConfigClient连接ready`);
    } catch (e) {
      this.logger.error(`NacosConfigClient连接异常`, e);
    }
    return client;
  }

  protected async destroyClient(client: NacosConfigClient) {}
}
