"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NacosConfiguration = void 0;
const DefaultConfig = require("./config/config.default");
const decorator_1 = require("@midwayjs/decorator");
let NacosConfiguration = class NacosConfiguration {
    async onReady() {
        // TODO something
        //进行服务注册
    }
};
NacosConfiguration = __decorate([
    (0, decorator_1.Configuration)({
        namespace: 'nacos',
        importConfigs: [
            {
                default: DefaultConfig,
            },
        ],
    })
], NacosConfiguration);
exports.NacosConfiguration = NacosConfiguration;
//# sourceMappingURL=configuration.js.map