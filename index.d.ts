export * from './dist/index';
import { INacosConfig } from './dist/interface';

declare module '@midwayjs/core/dist/interface' {
  interface MidwayConfig {
    nacos?:ServiceFactoryConfigOption<INacosConfig>
  }
}
