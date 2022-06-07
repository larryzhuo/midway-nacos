import { createLightApp } from '@midwayjs/mock';
import * as custom from '../src';

describe('/test/index.test.ts', () => {
  it('test nameing', async () => {
    const app = await createLightApp('', {
      imports: [
        custom
      ]
    });

    const nacosNamingFactoryService = await app.getApplicationContext().getAsync(custom.NacosNamingFactoryService);
    const namingIns = nacosNamingFactoryService.get();

    let status = await namingIns.getServerStatus();
    expect(status === 'UP');
  });

  it('test config', async () => {
    const app = await createLightApp('', {
      imports: [
        custom
      ]
    });
    
    const nacosConfigFactoryService = await app.getApplicationContext().getAsync(custom.NacosConfigFactoryService);
    const configIns = nacosConfigFactoryService.get();

    await configIns.publishSingle('test', 'DEFAULT_GROUP', '测试');
    let content = await configIns.getConfig('test', 'DEFAULT_GROUP');
    expect(content === '测试');
  });
});
