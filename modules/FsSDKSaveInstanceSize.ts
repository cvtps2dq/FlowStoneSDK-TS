class FsSDKSaveInstanceSize{
    // TODO Check this too.

    private _pInstance:Array<any>;       // READ/WRITE The instance data from earlier @fsrCreateInstance
    private _len:Number;                 // WRITE Length of the data in for later @fsrSaveInstanceData call
    private _future:String;              // Don't touch, reserved for future additions

    get pInstance(): Array<any> {
        return this._pInstance;
    }

    set pInstance(value: Array<any>) {
        this._pInstance = value;
    }

    get len(): Number {
        return this._len;
    }

    set len(value: Number) {
        this._len = value;
    }

    get future(): String {
        return this._future;
    }

    set future(value: String) {
        this._future = value;
    }
}

export default FsSDKSaveInstanceSize;