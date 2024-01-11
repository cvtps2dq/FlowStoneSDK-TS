class FsSDKSaveInstanceData{
    // TODO Check this too.

    private _pInstance:Array<any>;       // READ/WRITE The instance data from earlier @fsrCreateInstance
    private _pData:String;               // WRITE Pointer to memory of the size specified with @fsrSaveInstanceSize call
    private _future:String;              // Don't touch, reserved for future additions

    get pInstance(): Array<any> {
        return this._pInstance;
    }

    set pInstance(value: Array<any>) {
        this._pInstance = value;
    }

    get pData(): String {
        return this._pData;
    }

    set pData(value: String) {
        this._pData = value;
    }

    get future(): String {
        return this._future;
    }

    set future(value: String) {
        this._future = value;
    }
}

export default FsSDKSaveInstanceData;
