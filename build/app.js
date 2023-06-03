"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.use('/', index_1.default);
app.use('/users', users_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
