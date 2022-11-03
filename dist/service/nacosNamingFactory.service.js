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
exports.NacosNamingFactoryService = void 0;
const core_1 = require("@midwayjs/core");
const decorator_1 = require("@midwayjs/decorator");
const nacos_1 = require("nacos");
/**
 * nacos 服务注册client
 */
let NacosNamingFactoryService = class NacosNamingFactoryService extends core_1.ServiceFactory {
    getName() {
        return 'nacosNamingFactoryService';
    }
    async init() {
        await this.initClients(this.nacosRegistry);
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
            this.logger.info('NacosNamingClient初始化');
            client = new nacos_1.NacosNamingClient(config);
            await client.ready();
            this.logger.info('NacosNamingClient连接ready');
        }
        catch (e) {
            this.logger.error(`NacosNamingClient连接异常, ${JSON.stringify(config)}`, e);
        }
        return client;
    }
    async destroyClient(client) { }
};
__decorate([
    (0, decorator_1.Logger)('coreLogger'),
    __metadata("design:type", Object)
], NacosNamingFactoryService.prototype, "logger", void 0);
__decorate([
    (0, decorator_1.Config)('nacos.registry'),
    __metadata("design:type", Object)
], NacosNamingFactoryService.prototype, "nacosRegistry", void 0);
__decorate([
    (0, decorator_1.Init)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NacosNamingFactoryService.prototype, "init", null);
NacosNamingFactoryService = __decorate([
    (0, decorator_1.Provide)(),
    (0, decorator_1.Scope)(decorator_1.ScopeEnum.Singleton)
], NacosNamingFactoryService);
exports.NacosNamingFactoryService = NacosNamingFactoryService;
//# sourceMappingURL=nacosNamingFactory.service.js.map