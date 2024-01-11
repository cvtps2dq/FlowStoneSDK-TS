class FsSDKCreateInstance{
    // TODO determine this for good.
    // I don't know what they mean
    // in original C++ SDK this is just a void pointer
    // I assumed it can be just an array for any data type then...

    private _pInstance:Array<any>;           // WRITE You can assign your own data to this, to identify the module instance
    private _loadDataLen:Number;             // READ In case it's loaded from File/Copy: Nr. of bytes in @pLoadData, otherwise 0

    // again
    // it's just an unsigned char pointer (maybe for hex values???)
    // so I assume we can use a string for this... maybe we can determine this later

    private _pLoadData:String;               // READ Pointer to data previously saved, or NULL if it's a fresh instance
    private _future:String;                  // Don't touch, reserved for future additions

    get pInstance(): Array<any> {
        return this._pInstance;
    }

    set pInstance(value: Array<any>) {
        this._pInstance = value;
    }

    get loadDataLen(): Number {
        return this._loadDataLen;
    }

    set loadDataLen(value: Number) {
        this._loadDataLen = value;
    }

    get pLoadData(): String {
        return this._pLoadData;
    }

    set pLoadData(value: String) {
        this._pLoadData = value;
    }

    get future(): String {
        return this._future;
    }

    set future(value: String) {
        this._future = value;
    }
}
export default FsSDKCreateInstance;