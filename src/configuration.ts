import * as DefaultConfig from './config/config.default';
import {
  Configuration,
} from '@midwayjs/decorator';


@Configuration({
  namespace: 'nacos',
  importConfigs: [
    {
      default: DefaultConfig,
    },
  ],
})
export class NacosConfiguration {

  async onReady() {
    // TODO something
    //进行服务注册

  }
}
