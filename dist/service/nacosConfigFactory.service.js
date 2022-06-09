"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NacosConfigFactoryService = void 0;
const core_1 = require("@midwayjs/core");
const decorator_1 = require("@midwayjs/decorator");
const nacos_1 = require("nacos");
/**
 * nacos 配置中心client
 */
let NacosConfigFactoryService = class NacosConfigFactoryService extends core_1.ServiceFactory {
    getName() {
        return "nacosNamingFactoryService";
    }
    async init() {
        await this.initClients(this.nacosConfig); //initClients循环调用createClient将生成的client存储到map中，ServiceFactory中实现
    }
    async createClient(config) {
        if (!config) {
            throw new Error('config 空');
        }
        if (!config.logger) {
            config.logger = console;
        }
        let client;
        try {
            this.logger.info(`NacosConfigClient初始化`);
            client = new nacos_1.NacosConfigClient(config);
            await client.ready();
            this.logger.info(`NacosConfigClient连接ready`);
        }
        catch (e) {
            this.logger.error(`NacosConfigClient连接异常`, e);
        }
        return client;
    }
    async destroyClient(client) {
    }
};
__decorate([
    decorator_1.Logger('coreLogger'),
    __metadata("design:type", Object)
], NacosConfigFactoryService.prototype, "logger", void 0);
__decorate([
    decorator_1.Config('nacos.config'),
    __metadata("design:type", Object)
], NacosConfigFactoryService.prototype, "nacosConfig", void 0);
__decorate([
    decorator_1.Init(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NacosConfigFactoryService.prototype, "init", null);
NacosConfigFactoryService = __decorate([
    decorator_1.Provide(),
    decorator_1.Scope(decorator_1.ScopeEnum.Singleton)
], NacosConfigFactoryService);
exports.NacosConfigFactoryService = NacosConfigFactoryService;
//# sourceMappingURL=nacosConfigFactory.service.js.map