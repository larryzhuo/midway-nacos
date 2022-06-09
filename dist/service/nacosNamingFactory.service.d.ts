import { ServiceFactory } from '@midwayjs/core';
import { NacosNamingClient } from 'nacos';
/**
 * nacos 服务注册client
 */
export declare class NacosNamingFactoryService extends ServiceFactory<NacosNamingClient> {
    logger: any;
    nacosRegistry: any;
    getName(): string;
    init(): Promise<void>;
    protected createClient(config: any): Promise<NacosNamingClient>;
    protected destroyClient(client: NacosNamingClient): Promise<void>;
}
