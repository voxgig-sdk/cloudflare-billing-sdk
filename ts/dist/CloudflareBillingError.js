"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareBillingError = void 0;
class CloudflareBillingError extends Error {
    isCloudflareBillingError = true;
    sdk = 'CloudflareBilling';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CloudflareBillingError = CloudflareBillingError;
//# sourceMappingURL=CloudflareBillingError.js.map