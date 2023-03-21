"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._Link = exports._Anchor = exports._Title = exports._Image = exports._SpanText = exports._PText = exports._Text = exports._Button = void 0;
var button_1 = __importDefault(require("./units/button")); // button 태그
exports._Button = button_1.default;
var text_1 = __importDefault(require("./units/text")); // 텍스트 정보 (p, span)
exports._Text = text_1.default;
var p_1 = __importDefault(require("./units/text/p")); // p 태그
exports._PText = p_1.default;
var span_1 = __importDefault(require("./units/text/span")); // span 태그
exports._SpanText = span_1.default;
var image_1 = __importDefault(require("./units/image")); // img 태그
exports._Image = image_1.default;
var title_1 = __importDefault(require("./units/title")); // title 정보 (h1 ~ h2)
exports._Title = title_1.default;
var anchor_1 = __importDefault(require("./units/link/anchor")); // a 태그
exports._Anchor = anchor_1.default;
var Link_1 = __importDefault(require("./units/link/Link")); // Link 태그
exports._Link = Link_1.default;
