// Copyright © 2017 DWANGO Co., Ltd.

export class MemoryQueue {
    private _handler: (...data: any[]) => void;

    constructor(handler?: (...data: any[]) => void) {
        this._handler = handler;
    }

    setHandler(handler?: (...data: any[]) => void) {
        this._handler = handler;
    }

    send(...data: any[]): void {
        if (this._handler) {
            this._handler.apply(null, data);
        }
    }
}
