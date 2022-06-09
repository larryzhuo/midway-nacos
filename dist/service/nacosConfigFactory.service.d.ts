import { ServiceFactory } from '@midwayjs/core';
import { NacosConfigClient } from 'nacos';
/**
 * nacos 配置中心client
 */
export declare class NacosConfigFactoryService extends ServiceFactory<NacosConfigClient> {
    logger: any;
    nacosConfig: any;
    getName(): string;
    init(): Promise<void>;
    protected createClient(config: any): Promise<NacosConfigClient>;
    protected destroyClient(client: NacosConfigClient): Promise<void>;
}
